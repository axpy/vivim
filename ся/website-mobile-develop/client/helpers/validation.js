const regExpRules = {
  email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  name: /^[\sa-zA-Zа-яА-ЯёЁ]+$/
}

export const validateField = (name, value) => {
  return name === 'message' ? true : regExpRules[name].test(value)
}