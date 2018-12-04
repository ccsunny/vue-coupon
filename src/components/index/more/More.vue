<template>
  <div class="more">
    <v-header class="header">
        <h1 slot="title">养生百科</h1>
    </v-header>
    <v-nav v-on:slideTab="slideTab" :nowIndex="nowIndex"></v-nav>
    <v-swiper v-on:slideTab="slideTab" :nowIndex="nowIndex"></v-swiper>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import Header from '@/common/Header.vue'
import Nav from '@/components/index/more/moreComponents/Nav'
import Swiper from '@/components/index/more/moreComponents/Swiper'
export default {
  data() {
    return {
      nowIndex:0,
    }
  },
  components: {
    'v-header': Header,
    'v-nav': Nav,
    'v-swiper': Swiper
  },
  methods: {
    slideTab(index) {
        this.nowIndex = index;
    },
 }
}

</script>
<style lang="less" scoped>
.more {
  background: #eee;
  height: auto;
  padding-top: 12vw;
  box-sizing: border-box;
}
.mint-navbar .mint-tab-item.is-selected {
  color: #f0306f;
  border-bottom: none;
  margin-bottom: 0;
}
.mint-navbar .mint-tab-item {
  position: relative;
  padding: 4vw 0;
}
.mint-navbar .mint-tab-item.is-selected::after {
  content: '';
  width: 20vw;
  height: 0.5vw;
  background: #f0306f;
  position: absolute;
  top: 11vw;
  left: 15vw;
}
.mint-cell {
  background:#eee;
}
</style>