//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 头部分类
import login from './modules/login'
import share from './modules/share'
import common from './modules/common'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    share,
    common,
  }
})
