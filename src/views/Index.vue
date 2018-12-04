<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <div class="header">
      <router-link to="/taoSearch">
        <div class="mint-searchbar-inner">
            <i class="mintui mintui-search"></i>
            <input type="search" placeholder="输入您需要的商品名称" class="mint-searchbar-core" autofocus="autofocus">
        </div>
      </router-link>
      <img class="download" src="../assets/img/index/download.png" @click="download" />
    </div>
    <v-swiper /> 
    <v-review/>
    <mt-tabbar/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import Swiper from '@/components/index/Swiper.vue'
import Review from '@/components/index/Review.vue'
import Tabbar from '@/common/Tabbar.vue'
export default {
  data() {
    return {
      datas: {
        
      },
    }
  },
  components: {
    'v-swiper': Swiper,
    'v-review': Review,
    'mt-tabbar': Tabbar
  },
  methods: {
    download: function() {
      var ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
          window.location.href="https://itunes.apple.com/cn/app/id1362459402";
      } else {
          window.location.href="http://sj.qq.com/myapp/detail.htm?apkName=com.qianlihu.hs";
      }
    }
  },
}
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #eee;
    padding-top: 12vw;
    .header {
      width: 100%;
      height: 12vw;
      padding-top: 2.5vw;
      background-color: #fff;
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
      .mint-searchbar-inner {
        float: left;
        padding: 0;
        padding-left: 12px;
        width: 70%;
        height: 7vw;
        background: #eee;
        border-radius: 1vw;
        margin-left: 5%;
        box-sizing: border-box;
        .mintui-search {
          margin-top: 1vw;
          font-size: 4vw;
        }
        .mint-searchbar-core {
          margin: 0;
          padding: 0;
          width: 88%;
          text-align: left;
          height: 100%;
          margin-left: 4%;
          background: #eee;
          font-size: 3vw;
        }
      }
      .download {
        float: right;
        width: 5%;
        height: 7vw;
        margin-right: 3%;
      }
    }
  
  .hot-sell {
      width: 100%;
      line-height: 8vw;
      font-size: 15px;
      background: #fff;
      margin-top: 3vw;
      padding-left: 6vw;
      box-sizing: border-box;
    }
}
</style>
