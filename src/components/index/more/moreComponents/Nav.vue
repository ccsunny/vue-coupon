<template>
  <div class="nav">
    <ul class="nav-list">
      <li class="item"
         v-for="(item,index) in navList" :class="{'active': nowIndex===index}" 
         @click="tabClick(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Router from 'vue-router'
  export default {
    data() {
      return {
        navList: ["享健康","惠生活"],
      }
    },
    props:{
      nowIndex:{
        type:Number,
        default:0
      }
    },
    mounted() {
      this.$nextTick(() => {
        // 初始化，保证刷新页面后内容区和导航键一致
        this.initPage();
      });
      // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      // this.$root.eventHub.$on('slideTab', this.slideTab);
    },
    methods: {
        initPage() {
          // this.nowIndex = this.$route.path === '/share' ? 0 : this.$route.path === '/hot' ? 1 : this.$route.path === '/fodder' ? 2 : 0;
        },
        tabClick(index) {
          // 点击导航按钮时向swiper组件发射index
          this.$emit('slideTab', index);
        },
        slideTab(index) {
          this.nowIndex = index;
          let router = new VueRouter();
          let href = index === 0 ? '/health' : index === 1 ? '/life' : '/health';
          // 利用路由的push方法更新路径地址
          router.push(href);
        },
    }
  }
</script>

<style lang="less" scoped>
.nav{
    margin-bottom: 4vw;
    .nav-list{
      width: 100%;
      background: #fff;
      overflow: hidden;
      border-bottom: 1px solid #eee;
      .item{
        width: 50%;
        display: inline-block;
        text-align: center;
        height: 12vw;
        line-height: 12vw;
        position: relative;
        }
        .active{
          color: #f0306f;
        }
        .active:after {
            content: '';
            width: 22vw;
            height: 0.5vw;
            background: #f0306f;
            position: absolute;
            bottom: 0;
            left: 14vw;
        }
    }
}
</style>