import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import modal from './modal'

Vue.use(Vuex)

export const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      ui,
      modal
    }
  })
}