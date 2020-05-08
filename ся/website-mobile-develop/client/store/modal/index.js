import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => {
  return {
    modalComponent: null,
    modalComponentType: null
  }
}
  
export default {
  state,
  getters,
  actions,
  mutations
}