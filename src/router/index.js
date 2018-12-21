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
const Search = resolve => require(['@/components/search/Search.vue'], resolve)
const SearchDetail = resolve => require(['@/components/search/searchDetail/SearchDetail.vue'], resolve)
const TaoDetail = resolve => require(['@/components/category/goodsDetail/TaoDetail.vue'], resolve)
const JingDetail = resolve => require(['@/components/category/goodsDetail/JingDetail.vue'], resolve)
const Economize = resolve => require(['@/components/index/icons/Economize.vue'], resolve)
const NewPerson = resolve => require(['../components/index/icons/NewPerson.vue'], resolve)
const Pinkage = resolve => require(['../components/index/icons/Pinkage.vue'], resolve)
const SpellGoods = resolve => require(['../components/index/icons/SpellGoods.vue'], resolve)
const TodayRecommend = resolve => require(['../components/index/icons/TodayRecommend.vue'], resolve)
const TaoGrab = resolve => require(['../components/index/icons/TaoGrab.vue'], resolve)
const RedPacket = resolve => require(['../components/index/icons/RedPacket.vue'], resolve)
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
    {
      path: '/search',
      name: '搜索',
      component: Search,
    },
    {
      path: '/searchDetail',
      name: '搜索详情',
      component: SearchDetail,
    },
    {
      path: '/taoDetail',
      name: '淘宝详情',
      component: TaoDetail,
    },
    {
      path: '/jingDetail',
      name: '京东详情',
      component: JingDetail,
    },
    {
      path: '/economize',
      name: '省大牌',
      component: Economize,
    },
    {
      path: '/newPerson',
      name: '新人专区',
      component: NewPerson,
    },
    {
      path: '/pinkage',
      name: '9.9包邮',
      component: Pinkage,
    },
    {
      path: '/spellGoods',
      name: '拼拼好货',
      component: SpellGoods,
    },
    {
      path: '/todayRecommend',
      name: '今日推荐',
      component: TodayRecommend,
    },
    {
      path: '/taoGrab',
      name: '淘抢购',
      component: TaoGrab,
    },
    {
      path: '/redPacket',
      name: '领红包',
      component: RedPacket,
    },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
