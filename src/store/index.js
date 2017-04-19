import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import sideBar from './sideBar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotst: "http://localhost:8080/",
    loading2: false,
    pageTitle: ""
  },
  mutations:{
    increment (state, title) {
      // 变更状态
      state.pageTitle = title
    }
  },
  modules: {
    user: user,
    sideBar: sideBar
  },
  strict: process.env.NODE_ENV !== 'production'
})
