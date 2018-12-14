<template lang="html">
  <footer class="footer">
    <div class="copy" :data-clipboard-text="coupon.taobaoModel" @click="copy">一键复制淘口令</div>
  </footer>
</template>

<script>
import { Toast } from "mint-ui"
import Clipboard from 'clipboard'
export default {
  data() {
    return {
    }
  },
  props: {
    coupon: {
      type: Object,
      required: true
    }
  },
  methods: {
    copy: function () {
      let clipboard = new Clipboard('.copy')
      clipboard.on('success', e => {
        Toast("复制成功");
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        Toast("复制失败");
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  .copy {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 14vw;
    line-height: 14vw;
    background: #ff6633;
    line-height: 14vw;
    color: #fff;
    font-size: 4.5vw;
    letter-spacing: 0.3vw;
  }
}
</style>
