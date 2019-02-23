import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 0
  },
  mutations: {
    setProgress(state, payload) {
      state.progress = payload
    }
  },
  actions: {

  }
})
