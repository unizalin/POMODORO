import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectPayment: {
      id: '',
      item: '',
      img: ''
    },
    webAtm: {
      id: '004',
      name: '臺灣銀行'
    }
  },
  mutations: {
    SELECTPAYMENT (state, payload) {
      state.selectPayment = payload
    }
  },
  actions: {
    select (context, payload) {
      context.commit('SELECTPAYMENT', payload)
    }
  },
  modules: {
  },
  getters: {
    selectPayment (state) {
      return state.selectPayment
    },
    webAtm (state) {
      return state.webAtm
    }
  }
})
