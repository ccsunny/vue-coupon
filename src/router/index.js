import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const Fans = resolve => require(['@/views/Fans.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
//首页的路由
const More = resolve => require(['@/components/index/more/More.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
    },
    {
      path: '/category',
      name: '分类页',
      component: Category,
    },
    {
      path: '/fans',
      name: '粉丝社区',
      component: Fans,
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
    },
    {
      path: '/index/more',
      name: '养生百科',
      component: More,
    },
  ]
})
