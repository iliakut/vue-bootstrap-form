import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      skills: [],
      about: {
        text: "",
        len: 0
      }
    },
    pending: 0
  },
  mutations: {
    updateStateAbout(state, payload) {
      state.userData.about.text = payload.text;
      state.userData.about.len = payload.len;
    },
    updateSkills(state, payload) {
      state.userData.skills = payload;
    },
    changePending(state, payload) {
      state.pending = payload;
    }
  },
  actions: {
    sendToServer({state, commit }) {
      commit("changePending", 2);
      axios.post('http://localhost:3004/users', state.userData)
        .then(resp => {
        console.log(resp.data);
        commit("changePending", 1);
      }).catch(error => {
        console.log(error);
        commit("changePending", 3);
      });
    }

  }
})
