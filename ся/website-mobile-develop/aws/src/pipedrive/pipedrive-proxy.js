const countriesMap = require('iso2-to-shortnames.json')

const AWS = require("aws-sdk")
const axios = require('axios')
const FormData = require('form-data')
const prodOrigin = ['https://d2vdk86tgf2n7i.cloudfront.net', 'https://mobile.cloudfront.net']
const prodHostname = 'regula-poc.pipedrive.com/v1'
const testHostname = 'regsula-mobile-sandbox.pipedrive.com/v1'
const prodDealKeys = {
  userId: 7022950,
  stageId: 26
}
const testDealKeys = {
  userId: 11412582,
  stageId: 1
}
const tokens = {}

const parameterStore = new AWS.SSM();

async function getParameter(parameterName) {
  if (!tokens[parameterName]) {
    tokens[parameterName] = await getParameterFromStore(parameterName)
  }
  return tokens[parameterName]
}

async function getParameterFromStore(parameterName) {
  const response = await parameterStore.getParameter({Name: `/pipedrive/api/${parameterName}`}).promise()
  return response.Parameter.Value
}

exports.handler = async (event) => {
  try {
    const country = getCountry(event.headers['CloudFront-Viewer-Country'])
    const isTest = !prodOrigin.includes(event.headers.origin)
    await makeDeal({...JSON.parse(event.body), country, isTest})
    return {
      statusCode: 200,
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: error
    }
  }
}

async function makeDeal({name, email, message, isTest, country}) {
  const route = await prepareRoute(isTest)
  const personId = await getPersonId(route, name, email)
  const dealId = await createDeal(route, personId, name, isTest)
  await createNote(route, dealId, name, email, message, country)
}

async function getPersonId(route, name, email) {
  const existingPersonId = await findPerson(route, email);
  return existingPersonId ? existingPersonId : await createPerson(route, name, email)
}

async function createPerson(route, name, email) { 
  const {formData, formHeaders} = generateFormData({name, email})
  const url = route`persons`
  const {data} = await post(url, formData, formHeaders)
  return data.data.id
}

async function findPerson(route, email) { 
  const params = {
    term: email,
    fields: 'email',
    exact_match: true
  }
  const url = route`persons/search`
  const response = await get(url, params)
  return !!response.data.data.items.length && response.data.data.items[0].item.id
}

function createNote(route, dealId, name, email, message, country) {
  const content = generateContent(name, email, message, country)
  const {formData, formHeaders} = generateFormData({deal_id: dealId, content})
  const url = route`notes`
  return post(url, formData, formHeaders)
}

async function createDeal(route, personId, name, isTest) {
  const dealKeys = Object.assign({}, isTest ? testDealKeys : prodDealKeys)
  const dealData = {
    title: name,
    person_id: personId,
    currency: 'USD',
    value: 2000,
    user_id: dealKeys.userId,
    stage_id: dealKeys.stageId,
  }
  const {formData, formHeaders} = generateFormData(dealData)
  const url = route`deals`
  const {data} = await post(url, formData, formHeaders)
  return data.data.id
}

function getCountry(iso2CountryCode) {
  const country = countriesMap[iso2CountryCode]
  return country ? country : ''
}

async function prepareRoute(isTest) {
  const hostname = isTest ? testHostname : prodHostname
  const token = await getParameter(isTest ? 'test-token' : 'token')
  return (path) => `https://${hostname}/${path}?api_token=${token}`
}

function post(url, data, headers) {
  return axios({
    method: 'post',
    url,
    data,
    headers,
  })
}

function get(url, params) {
  return axios({
    method: 'get',
    url,
    params
  })
}

function generateFormData(data) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => formData.append(key, value))
  const formHeaders = formData.getHeaders()

  return {formData, formHeaders}
}

function generateContent(name, email, message, country) {  
  return `
    What is your name? - ${name}<br />\n
    What is your email address? - ${email}<br />\n
    Where are you from? - ${country}\n<br />\n
    Please specify your scenarios, applications, and technical requirements: ${message}
  `
}