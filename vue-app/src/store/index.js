import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alertMessage: '',
    snackbar: ''
  },
  mutations: {
    setAlertMessage(state, alertMessage) {
      state.alertMessage = alertMessage
    },

    setSnackBar(state, snackbar) {
      state.snackbar = snackbar
    }
  },
  actions: {
    setAlertMessage({ commit }, alertMessage) {
      commit('setAlertMessage', alertMessage)
    },

    setSnackBar({ commit }, snackbar) {
      commit('setSnackBar', snackbar)
    }
  },
  modules: {},
})
