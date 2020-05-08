import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import modal from '../modal'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('inside modal store logic', () => {
  let store

  beforeEach(() => {
    jest.clearAllMocks()
    store = new Vuex.Store(modal)
  })

  it('state is null at first', () => {
    const emptyState = {
      modalComponent: null,
      modalComponentType: null
    }
    expect(store.state).toStrictEqual(emptyState)
  })

  it('getters return right state at first', () => {
    const emptyState = {
      modalComponent: null,
      modalComponentType: null
    }
    expect(store.getters.modalState).toStrictEqual(emptyState)
  })

  it('state updated after openModal action was invoked', () => {
    const data = {
      modalComponent: 'Contacts'
    }
    store.dispatch('openModal', data)
    expect(store.state.modalComponent).toBe('Contacts')
  })

  it('getters return right state after openModal action was invoked', () => {
    const data = {
      modalComponent: 'Contacts'
    }
    store.dispatch('openModal', data)
    expect(store.getters.modalState.modalComponent).toBe('Contacts')
  })

  it('state updated after closeModal action was invoked', () => {
    store.state.modalComponent = 'Contacts'
    const emptyState = {
      modalComponent: null,
      modalComponentType: null
    }
    store.dispatch('closeModal')
    expect(store.state).toStrictEqual(emptyState)
  })

  it('getters return right state after closeModal action was invoked', () => {
    store.state.modalComponent = 'Contacts'
    const emptyState = {
      modalComponent: null,
      modalComponentType: null
    }
    store.dispatch('closeModal')
    expect(store.getters.modalState).toStrictEqual(emptyState)
  })
})