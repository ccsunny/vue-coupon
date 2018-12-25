<template lang="html">
  <div class="swiper">
    <img :src="pictUrl" v-show="swiper.length == 0">
    <mt-swipe :auto="4000" v-show="swiper.length > 0">
      <mt-swipe-item v-for="k in swiper" :key="k.id">
        <img :src="k"> 
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    swiper: {
      type: Array,
      required: true
    },
    pictUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 98vw;
  }
  .mint-swipe {
    width: 100%;
    height: 98vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
