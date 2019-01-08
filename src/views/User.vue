<template lang="html">
  <div class="car">
    <img class="banner" src="../assets/img/user/background.png"/>
    <div class="container">
      <div class="header-icon">
        <img v-show=" userImg == ''" src="../assets/img/share/logo.png"/>
        <img v-show=" !userImg == ''" :src="userImg"/>
      </div>
      <p class="userName" @click="login" v-show=" userName == ''">点击登录</p>
      <p class="userName" v-show=" !userName == ''">{{userName}}</p>
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
    </div>
    <mt-tabbar/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import Tabbar from '@/common/Tabbar.vue'
import { mapGetters } from 'vuex'
import api from '../api/api'
export default {
  components: {
    'mt-tabbar': Tabbar
  },
  data () {
    return {
      userName:"",
      userImg: ""
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getShopUrl',
    ])
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
    login: function() {
      // window.location.href=`${this.getShopUrl}/app/weixin/web/application/shareAppv1.htm`
      api.get(`${this.getShopUrl}/app/weixin/web/application/shareAppv1.htm`).then(
        (response)=>{
          this.userName = response.data.userName
          this.userImg = response.data.userImg
        },
        (error)=>{
            Toast("抱歉，加载失败了。。。");
        }
      );
      // this.userName =  decodeURI(this.$route.query.username)
      // this.userImg = decodeURI(this.$route.query.userimg)
      // alert(this.userName)
      // alert(this.userImg)
    },
  }
}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .banner {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .container {
    position: absolute;
    top: 20%;
    left: 0;
    bottom: 10%;
    width: 100%;
    .header-icon {
        img{
          display: block;
          width: 14vw;
          height: 14vw;
          margin: 0 auto;
          border-radius: 50%;
        }
    }
    .userName {
        color: #333;
        font-size: 4vw;
        width: 100%;
        text-align: center;
        height: 4%;
        margin-top: 1%;
    }
    .detail {
      width: 66%;
      margin: 0 auto;
      margin-top: 4%;
      height: 18%;
      p {
        font-size: 4vw;
        color: #999;
        height: 33.3%;
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
      color: #fff;
      margin-top: 4%;
      line-height: 11vw;
      box-sizing: border-box;
    }
    .consult {
      margin-top: 8%;
      width: 100%;
      height: 36%;
      img {
        display: block;
        width: 40%;
        height: 38vw;
        margin: 0 auto;
      }
      p {
        height: 12%;
        font-size: 3vw;
        color: #333;
        text-align: center;
        margin-top: 1%;
      }
    }
  }
}
</style>
