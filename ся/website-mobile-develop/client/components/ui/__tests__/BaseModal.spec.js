import { mount, createLocalVue } from '@vue/test-utils'
import BaseModal from '../BaseModal'
import IconClose from '~/components/icons/IconClose'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('base-modal', () => {

  let actions = {
    'modal/openModal': jest.fn(),
    'modal/closeModal': jest.fn()
  }
  let store = new Vuex.Store({
    actions
  })

  const wrapperFactory = () => {
    return mount(BaseModal, {
      propsData: {
        isOpen: true,
        showIconClose: true
      },
      localVue,
      store
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('opens the modal', () => {
    const wrapper = mount(BaseModal, {
      propsData: {
        isOpen: true
      }
    })
    expect(wrapper.contains('.base-modal')).toBeTruthy()
  })

  it('closes the modal', async () => {
    const wrapper = mount(BaseModal, {
      propsData: {
        isOpen: true
      }
    })
    wrapper.setProps({
      isOpen: false
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.base-modal').exists()).toBeFalsy()
  })

  it('invoke closeModal on click on IconClose', async () => {
    const wrapper = wrapperFactory()
    wrapper.find(IconClose).trigger('click')
    expect(actions['modal/closeModal']).toHaveBeenCalled()
  })

  it('invoke closeModal on click on space around modal content', async () => {
    const wrapper = wrapperFactory()
    wrapper.find('.base-modal').trigger('click')
    expect(actions['modal/closeModal']).toHaveBeenCalled()
  })
})
