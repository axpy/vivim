import { mount } from '@vue/test-utils'
import BaseForm from '../BaseForm'
import {validateField} from '~/helpers/validation'

describe('send method invokation', () => {
  let wrapper
  const send = jest.fn((fullName, email, message) => !!fullName && !!email && !!message )
  beforeEach(() => {
    wrapper = mount(BaseForm, {
      propsData: {
        config: {
          title: 'hello',
          buttonName: 'send'
        }
      },
      data() {
        return {
          fullName: '',
          email: '',
          message: ''
        }
      },
      mocks: {
        $t: i => i,
        $route: {path: '/'}
      },
      methods: {
        send
      }
    })
  })

  it('send method was invoked when data is empty & button triggered', () => {
    wrapper.find('button').trigger('click')
    expect(send).toHaveBeenCalled()
  })

  it('send method was invoked when data is fulfulled & button triggered', async () => {
    wrapper.setData({
      fullName: 'sdfsd',
      email: 'zhen@sdf.sd',
      message: 'sdsdf'
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(send).toHaveBeenCalled()
  })

  it('send method was invoked when data is empty & form triggered', () => {
    wrapper.find('form').trigger('submit')
    expect(send).toHaveBeenCalled()
  })

  it('send method was invoked when data is fulfulled & form triggered', async () => {
    wrapper.setData({
      fullName: 'sdfsd',
      email: 'zhen@sdf.sd',
      message: 'sdsdf'
    })
    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(send).toHaveBeenCalled()
  })
})


describe('form validation inside send method', () => {

  const send = jest.fn(
    ({fullName, email, message}) => !!validateField('fullName', fullName) && !!validateField('email', email) && !!validateField('message', message)
  )

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('send method correctly reacts to invalid data', async () => {
    const data = {
      fullName: '',
      email: '',
      message: ''
    }
    send(data)
    expect(send).toHaveReturnedWith(false)
  })

  it('send method correctly reacts to invalid data', async () => {
    const data = {
      fullName: '',
      email: '',
      message: 'fghfgh'
    }
    send(data)
    expect(send).toHaveReturnedWith(false)
  })

  it('send method correctly reacts to invalid data', async () => {
    const data = {
      fullName: 'fgxhfh',
      email: '',
      message: 'fghfgh'
    }
    send(data)
    expect(send).toHaveReturnedWith(false)
  })

  it('send method correctly reacts to invalid data', async () => {
    const data = {
      fullName: 'fgxhfh',
      email: 'zhensdf.sd',
      message: 'fghfgh'
    }
    send(data)
    expect(send).toHaveReturnedWith(false)
  })

  it('send method correctly reacts to valid data', async () => {
    const data = {
      fullName: 'sdfsd',
      email: 'zhen@sdf.sd',
      message: 'sdsdf'
    }
    send(data)
    expect(send).toHaveReturnedWith(true)
  })
})