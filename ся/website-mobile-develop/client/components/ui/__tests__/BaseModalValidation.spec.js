import { mount } from '@vue/test-utils'
import BaseForm from '../BaseForm'

describe('form validation', () => {
  let wrapper
  let formFieldTrigger = async (formField, fieldName, fieldText) => {
    formField.trigger('focus')
    wrapper.vm[fieldName] = fieldText
    await wrapper.vm.$nextTick()
    formField.trigger('blur')
    await wrapper.vm.$nextTick()
  }
  beforeEach(() => {
    wrapper = mount(BaseForm, {
      propsData: {
        config: {
          title: 'zxc',
          buttonName: 'zxcdfdvc'
        }
      },
      data() {
        return {
          fullName: '',
          email: '',
          message: '', 
        }
      },
      computed: {
        fieldList() {
          return [
            {
              class: 'base-form__field',
              type: 'text',
              title: '',
              id: `fullName`,
              name: 'fullName',
              value: this.fullName,
              fieldName: 'input'
            },
            {
              class: 'base-form__field',
              type: 'email',
              title: '',
              id: `email`,
              name: 'email',
              value: this.email,
              fieldName: 'input'
            },
            {
              class: 'base-form__field base-form__field--long',
              type: 'text',
              title: '',
              id: `message`,
              name: 'message',
              value: this.message,
              fieldName: 'textarea'
            },
          ]
        }
      },
      mocks: {
        $t: i => {
          const i18nMesage = {
            validation_errors: {
              email: "Incorrect email",
              fullName: "You can use only letters",
              required: "Please, fill out this field",
            }
          }
          const [identificator, sub_identificator] = i.split('.')
          return i18nMesage[identificator][sub_identificator]
        },
        $route: {path: '/'}
      }
    })
  })

  it('invalid name field - empty', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    formField.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('p').text()).toBe('Please, fill out this field')
  })

  it('invalid name field - with numbers after letters', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    await formFieldTrigger(formField, 'fullName', 'sdf1234')
    expect(wrapper.find('p').text()).toBe('You can use only letters')
  })

  it('invalid name field - with numbers before letters', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    await formFieldTrigger(formField, 'fullName', '123123sdf')
    expect(wrapper.find('p').text()).toBe('You can use only letters')
  })

  it('invalid name field - with special signs after letters', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    await formFieldTrigger(formField, 'fullName', 'sdf!@!$%')
    expect(wrapper.find('p').text()).toBe('You can use only letters')
  })

  it('invalid name field - with special signs before letters', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    await formFieldTrigger(formField, 'fullName', '!#$#sdf')
    expect(wrapper.find('p').text()).toBe('You can use only letters')
  })

  it('invalid email field - empty', async () => {
    const formField = wrapper.findAll('.field__item').at(1)
    formField.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('p').text()).toBe('Please, fill out this field')
  })
  
  it('invalid email field - wrong english text', async () => {
    const formField = wrapper.findAll('.field__item').at(1)
    await formFieldTrigger(formField, 'email', 'zhen@sdd')
    expect(wrapper.find('p').text()).toBe('Incorrect email')
  })

  it('invalid email field - wrong russian text', async () => {
    const formField = wrapper.findAll('.field__item').at(1)
    await formFieldTrigger(formField, 'email', 'вфыаыва@sdd')
    expect(wrapper.find('p').text()).toBe('Incorrect email')
  })

  it('invalid message field - empty', async () => {
    const formField = wrapper.findAll('.field__item').at(2)
    formField.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('p').text()).toBe('Please, fill out this field')
  })

  it('valid name field', async () => {
    const formField = wrapper.findAll('.field__item').at(0)
    await formFieldTrigger(formField, 'fullName', 'asdf')
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('english valid email field', async () => {
    const formField = wrapper.findAll('.field__item').at(1)
    await formFieldTrigger(formField, 'email', 'zhe1234n@sdf.sd')
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('russian valid email field', async () => {
    const formField = wrapper.findAll('.field__item').at(1)
    await formFieldTrigger(formField, 'email', 'фываа123@sdf.sd')
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('valid message field', async () => {
    const formField = wrapper.findAll('.field__item').at(2)
    await formFieldTrigger(formField, 'message', 'asdf')
    expect(wrapper.find('p').exists()).toBe(false)
  })
})