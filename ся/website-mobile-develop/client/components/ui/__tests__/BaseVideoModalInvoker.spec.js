import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BaseVideoModalInvoker from '~/components/ui/BaseVideoModalInvoker'
import modal from '~/store/modal'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('BaseVideoModalInvoker.vue', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const wrapperFactory = (store, props) => {
    return mount(BaseVideoModalInvoker, {
      propsData: {
        ...props
      },
      localVue,
      store
    })
  }

  it('invoke openModal on click on button on BaseVideoModalInvoker', () => {
    let actions = {
      'modal/openModal': jest.fn(),
    }
    let store = new Vuex.Store({
      actions
    })
    const wrapper = wrapperFactory(store)
    wrapper.find('.base-video-modal-invoker').trigger('click')
    expect(actions['modal/openModal']).toHaveBeenCalled()
  })

  it('invoke real openModal action on click on button on BaseVideoModalInvoker', async () => {
    let store = new Vuex.Store(modal)
    const props = {
      path: '/images/mrz/mrz-phone',
      extension: 'jpg',
      resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024], [1000, 600], [800, 500], [700, 400], [600, 300]],
      defaultSrc: '/images/mrz/mrz-phone.jpg',
      defaultAlt: 'MRZ',
      pictureType: 'rounded'
    }
    const wrapper = wrapperFactory(store, props)
    const data = {
      modalComponent: 'VideoWrapper'
    }
    const openModal = () => {store.dispatch('openModal', data)}
    wrapper.setMethods({
      openModal
    })
    wrapper.find('.base-video-modal-invoker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.state.modalComponent).toBe('VideoWrapper')
  })

  it('BasePicture exists', () => {
    const wrapper = mount(BaseVideoModalInvoker, {
      propsData: {
        config: {
          path: '/images/mrz/mrz-phone',
          extension: 'jpg',
          resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024], [1000, 600], [800, 500], [700, 400], [600, 300]],
          defaultSrc: '/images/mrz/mrz-phone.jpg',
          defaultAlt: 'MRZ',
          pictureType: 'rounded'
        }
      }
    })
    expect(wrapper.find('.img--rounded').exists()).toBeTruthy()
  })
})