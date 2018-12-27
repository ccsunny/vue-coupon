<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in swiperList" :key="k.id">
        <router-link :to="k.CLICKPAGE == 2 ? '/newPerson' : k.CLICKPAGE == 3 ? '/spellGoods' : k.CLICKPAGE == 4 ? '/pinkage' : k.CLICKPAGE == 5 ? '/taoGrab' : k.CLICKPAGE == 6 ? '/redPacket' : k.CLICKPAGE == 7 ? '/economize' : k.CLICKPAGE == 8 ? '/todayRecommend' : `/searchDetail?q=${k.Q}`">
          <img v-lazy="k.BANNERIMG">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
import { Lazyload } from 'mint-ui';
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../api/api'
export default {
  data() {
    return {
      swiperList: []
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getShopUrl',
    ])
  },
  mounted() {
    this.getSwiperlists();
  },
  methods: {
    getSwiperlists: function () {
      api.post("/fox/app/banner/topBannerList",{emulateJSON: true}).then(
        (response)=>{
          this.swiperList = response.data.content.banners
        },
        (error)=>{
          Toast("加载失败。。。");
        }
      );
    },
  }
}
</script>

<style lang="less" scoped>
.mint-swipe {
  width: 100%;
  height:50vw;
  a,img {
    display: block;
    width: 100%;
    height:100%;
  }
}
</style>
