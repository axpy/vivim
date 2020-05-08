import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'
import modal from '~/store/modal'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ContactsFormModalInvoker.vue', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const wrapperFactory = (store) => {
    return mount(ContactsFormModalInvoker, {
      propsData: {
        buttonText: 'Click on me'
      },
      localVue,
      store
    })
  }

  it('invoke openModal on click on button on ContactsFormModalInvoker', () => {
    let actions = {
      'modal/openModal': jest.fn()
    }
    let store = new Vuex.Store({
      actions
    })
    const wrapper = wrapperFactory(store)
    wrapper.find('button').trigger('click')
    expect(actions['modal/openModal']).toHaveBeenCalled()
  })

  it('invoke real openModal action on click on button on ContactsFormModalInvoker', async () => {
    let store = new Vuex.Store(modal)
    const wrapper = wrapperFactory(store)
    const data = {
      modalComponent: 'Contacts'
    }
    const openModal = () => {store.dispatch('openModal', data)}
    wrapper.setMethods({
      openModal
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.state.modalComponent).toBe('Contacts')
  })
})