// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'   //vuex
import api from './api/api.js'  //http请求
Vue.config.productionTip = false
Vue.prototype.$api = api;
//引入UI框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint);

Vue.config.productionTip = false

//引入自己的css文件覆盖mint-ui的css样式
import './assets/css/mintReset.css'


//图片的预览功能
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
