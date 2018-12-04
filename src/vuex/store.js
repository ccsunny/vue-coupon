//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 头部分类
import login from './modules/login'
import share from './modules/share'
import common from './modules/common'
import tao from './modules/tao'
import jing from './modules/jing'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    share,
    common,
    tao,
    jing
  }
})
