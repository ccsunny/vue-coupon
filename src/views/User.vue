<template lang="html">
  <div class="car">
    <div class="header-icon">
      <img src="../assets/img/tabbar/user.png"/>
    </div>
    <p class="userName">嘻嘻哈哈</p>
    <div class="download" @click="download">下载省一波APP让您更省钱</div>
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
    padding-top: 44vw;
    .header-icon {
        background-color: #f0306f;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 14vw;
        height: 14vw;
        margin: 0 auto;
        line-height: 13vw;
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
    .download {
      width: 80%;
      font-size: 5vw;
      margin: 0 auto;
      height: 10vw;
      background: #f0306f;
      text-align: center;
      line-height: 10vw;
      color: #fff;
      margin-top: 10vw;
      border-radius: 15px;
    }
  }

</style>
