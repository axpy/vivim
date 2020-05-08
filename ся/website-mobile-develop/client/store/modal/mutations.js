const mutations = {
  OPEN_MODAL(state, payload) {
    typeof payload === 'string' ? 
      state.modalComponent = payload
    : 
      state.modalComponent = payload.modalComponent
      state.modalComponentType = payload.modalComponentType
  },
  CLOSE_MODAL(state) {
    state.modalComponent = null
    state.modalComponentType = null
  }
}
export default mutations 