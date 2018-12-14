<template lang="html">
  <div class="car">
    <div class="header-icon">
      <img src="../assets/img/tabbar/user.png"/>
    </div>
    <p class="userName">嘻嘻哈哈</p>
    <div class="detail">
      <p>省一波给您带来不一样的省钱攻略,</p>
      <p>玩转自购省钱、分享赚钱等省钱方式,</p>
      <p>现金红包领不停,快来一起省钱吧</p>
    </div>
    <div class="download" @click="download">下载APP</div>
    <div class="consult">
      <img src="../assets/img/user/ewm.png"/>
      <p>省一波客服</p>
    </div>
    <mt-tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/common/Tabbar.vue'
export default {
  components: {
    'mt-tabbar': Tabbar
  },
  data () {
    return {
    };
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
  }
}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/user/background.png);
  background-size: 100% 100%;
  padding-top: 34vw;
  .header-icon {
      background-color: #333;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 18vw;
      height: 18vw;
      margin: 0 auto;
      line-height: 18vw;
      text-align: center;
      border-radius: 50%;
  }
  .userName {
      color: #333;
      font-size: 4vw;
      width: 100%;
      text-align: center;
      line-height: 6vw;
  }
  .detail {
    width: 66%;
    margin: 0 auto;
    margin-top: 6vw;
    p {
      font-size: 4vw;
      color: #999;
      line-height: 7vw;
    }
  }
  .download {
    width: 62%;
    font-size: 5vw;
    margin: 0 auto;
    height: 12vw;
    background-image: url(../assets/img/user/button.png);
    background-size: 100% 100%;
    text-align: center;
    line-height: 11vw;
    color: #fff;
    margin-top: 10vw;
  }
  .consult {
    margin-top: 8vw;
    img {
      display: block;
      width: 40%;
      height: 40vw;
      margin: 0 auto;
    }
    p {
      font-size: 3vw;
      color: #333;
      text-align: center;
    }
  }
}
</style>
