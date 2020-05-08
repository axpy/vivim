const actions = {
  openModal: ({ commit }, settings) => {
    commit('OPEN_MODAL', settings)
  },
  closeModal: ({ commit }) => {
    commit('CLOSE_MODAL')
  }
}

export default actions