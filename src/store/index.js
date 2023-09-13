import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    usetoken: null,
    applicationForm:false,
    jobtitle:null,
    selectedCadidate:{}
  },
  getters: {
    getToken: state => {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearToken(state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token)
    },
    removeToken({ commit }) {
      commit('clearToken')
    }
  },
  modules: {
  }
})
