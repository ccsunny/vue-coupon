<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in swiperList" :key="k.id">
        <img v-lazy="k.pic_url">
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
      api.post(`${this.getShopUrl}/app/mall/mall/index.htm`,{emulateJSON: true}).then(
        (response)=>{
          this.swiperList = response.data.content.topBannerList
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
