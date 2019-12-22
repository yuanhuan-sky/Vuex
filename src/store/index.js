import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: function (state) {
      return state.count+1
    }
  },
  mutations: {
    add (state) {
      state.count = state.count+1
    },
    reduce (state,n) {
      state.count = state.count-n
    }
  },
  actions: {
    addFun (context) {
      context.commit("add")
    },
    reduceFun (context,n) {
      context.commit("reduce",n)
    }
  },
  modules: {
  }
})
