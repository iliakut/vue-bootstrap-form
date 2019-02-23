import Vue from 'vue'
import Vuex from 'vuex'
import {skillsName} from "./skills.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skill: {
      name: "",
      level: 0
    },
    skillsJSON: skillsName,
    skills: []
  },
  mutations: {
    setProgress(state, payload) {
      state.progress = payload
    }
  },
  actions: {
  }
})
