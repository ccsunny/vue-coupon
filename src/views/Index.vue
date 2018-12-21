<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <div class="header">
      <img class="logo" src="../assets/img/index/logo.png"/>
      <router-link to="/search">
        <div class="mint-searchbar-inner">
            <i class="mintui mintui-search"></i>
            <input type="search" placeholder="粘贴或输入要查询的商品名称搜索" class="mint-searchbar-core">
        </div>
      </router-link>
      <img class="download" src="../assets/img/index/download.png" @click="download" />
    </div>
    <v-swiper />
    <v-icons /> 
    <v-review/>
    <v-banner :bannerList="bannerList"/>
    <v-everyday :everydayList="everydayList"/>
    <v-recommend/>
    <mt-tabbar/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import api from '../api/api'
import Swiper from '@/components/index/Swiper.vue'
import Icons from '@/components/index/Icons.vue'
import Review from '@/components/index/Review.vue'
import Banner from '@/components/index/Banner'
import Everyday from '@/components/index/Everyday'
import Recommend from '@/components/index/Recommend'
import Tabbar from '@/common/Tabbar.vue'
export default {
  data() {
    return {
        bannerList: {},
        everydayList: {}
    }
  },
  components: {
    'v-swiper': Swiper,
    'v-icons': Icons,
    'v-review': Review,
    'v-banner': Banner,
    'v-everyday': Everyday,
    'v-recommend': Recommend,
    'mt-tabbar': Tabbar
  },
  mounted() {
    this.getContent();
  },
  methods: {
    download: function() {
      var ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
          window.location.href="https://itunes.apple.com/cn/app/id1362459402";
      } else {
          window.location.href="http://sj.qq.com/myapp/detail.htm?apkName=com.qianlihu.hs";
      }
    },
    getContent: function () {
      api.get("/fox/app/acti/towTwelveAndEverybodyBuyItems",{
        params:{
          USER_ID: "EeThqo"
        }
      }).then(
        (response)=>{
          this.bannerList = response.data.content
          this.everydayList = response.data.content
        },
        (error)=>{
            Toast("加载失败。。。");
        }
      );
    },
  },
}
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 16vw;
    background-color: #eee;
    position: relative;
    .header {
      width: 100%;
      height: 12vw;
      padding-top: 6vw;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99999;
      .logo {
        float: left;
        width: 9%;
        height: 9vw;
        margin-right: 4%;
        margin-left: 3%;
      }
      .mint-searchbar-inner {
        float: left;
        padding: 0;
        padding-left: 3vw;
        width: 70%;
        height: 8vw;
        background: #fff;
        border-radius: 4vw;
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
          background: #fff;
          border-radius: 4vw;
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
