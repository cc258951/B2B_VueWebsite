import Vue from 'vue'
import Vuex from 'vuex'
import mappingCodes from '../locals'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    firstSignIn: "yes",
    currentLang: "zh_TW",
    mappingCodes
  },
  getters: {
    firstSignIn: state => state.firstSignIn,
    currentLang: state => state.currentLang,
    mappingCodes: state => state.mappingCodes,
  },
  mutations: {
    changeLang(state, lang) {
      state.currentLang = lang
      localStorage.lang = lang
    }
  },
  actions: {
  }
})
