<template>
    <div class="fans-content">
        <div class="header">
            <h1>粉丝社区</h1>
        </div>
        <v-share></v-share>
        <mt-tabbar/>
    </div>
</template>
<script>
import share from '../components/fans/share.vue'
import Tabbar from '@/common/Tabbar.vue'
export default {
 data () {
  return {
  };
 },
 components: {
    'v-share': share,
    'mt-tabbar': Tabbar
 },
}
</script>
<style lang="less" scoped>
.fans-content {
    width: 100%;
    height: 100%;
    background: #eee;
    padding-top: 12vw;
    .header {
        width: 100%;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 12vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-image: url(../assets/img/common/ysbk.png);
        background-size: 100% 100%;
        box-sizing: border-box;
        z-index: 999;
        h1 {
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 5vw;
            font-weight: 600;
        }
    }
}
</style>