<template lang="html">
  <div class="wrap">
    <div class="header">
      <router-link to="/search">
        <div class="mint-searchbar-inner">
          <i class="mintui mintui-search"></i>
          <input type="search" placeholder="粘贴宝贝标题，先领劵再购买" class="mint-searchbar-core">
        </div>
      </router-link>
    </div>
    <v-aside />
    <mt-tabbar/>
  </div>
</template>

<script>
import Aside from '@/components/category/Aside.vue'
import Tabbar from '@/common/Tabbar.vue'
export default {
  components: {
    'v-aside': Aside,
    'mt-tabbar': Tabbar
  },
  data () {
    return {
    }
  },
  created () {
    
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  .header {
    width: 100%;
    height: 12vw;
    padding-top: 2.5vw;
    background-image: url(../assets/img/common/ysbk.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    border-bottom: 1px solid #eee;
    .mint-searchbar-inner {
      float: left;
      padding: 0; 
      padding-left: 2vw;
      width: 80%;
      height: 7vw;
      background: #eee;
      border-radius: 4vw;
      margin-left: 12%;
      box-sizing: border-box;
      .mintui-search {
        margin-right: 1vw;
        font-size: 5vw;
        color: #a4a4a4;
      }
      .mint-searchbar-core {
        margin: 0;
        padding: 0;
        width: 88%;
        height: 7vw;
        background: #eee;
        font-size: 4vw;
        color: #a4a4a4;
        text-align: left;
      }
    }
  }
  .view {
    width: 100%;
    height: 100%;
  }
}
</style>
