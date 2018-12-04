<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import health from '../moreComponents/Health';
  import life from '../moreComponents/Life';
  import Swiper from '../../../../../static/swiper.min.js';
  import '../../../../../static/swiper.min.css';

  export default {
    components: {
      health,
      life
    },
    props:{
      nowIndex:{
        type:Number,
        default:0
      }
    },
    data() {
      return {
        mySwiper:'',
        list: [
          {path: '/health', component: health},
          {path: '/life', component: life}
        ]
      }
    },
    mounted() {
      this.mySwiper = new Swiper('.swiper-container', {
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/health' ? 0 : this.$route.path === '/life' ? 1 : 0
      });
      this.mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
        // 左右滑动时将当前slide的索引发送到nav组件
        this.$emit('slideTab', this.mySwiper.activeIndex);
      });
    },
    watch:{
      nowIndex:{
        handler(cur,old){
          this.mySwiper.slideTo(cur, 0, false);
        }
      }
    },
  }
</script>
<style lang="less" scoped>
</style>