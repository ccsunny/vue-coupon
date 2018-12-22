<template lang="html">
  <footer class="footer">
    <div class="copy">
        <div class="single" :data-clipboard-text="coupon.taobaoModel" @click="copy">
            <span>￥{{taoDetail.zk_final_price}}</span>
            <p>单独购买</p>
        </div>
        <div class="goSpell" :data-clipboard-text="spellLink" @click="copyLink">
            <span>￥{{spellPrice}}</span>
            <p>去拼团</p>
        </div>
    </div>
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
    },
    taoDetail: {
      type: Object,
      required: true
    },
    spellPrice: {
      type: String,
      required: true
    },
    spellLink: {
      type: String,
      required: true
    },
  },
  methods: {
    copy: function () {
      let clipboard = new Clipboard('.single')
      clipboard.on('success', e => {
        Toast("复制成功,请去淘宝打开");
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        Toast("复制失败");
        // 释放内存
        clipboard.destroy()
      })
    },
    copyLink: function () {
      let clipboard = new Clipboard('.goSpell')
      clipboard.on('success', e => {
        Toast("复制成功,请去浏览器打开");
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
    height: 14vw;
    display: flex;
    color: #fff;
    font-size: 4vw;
    div {
        flex: 1;
        text-align: center;
        padding-top: 1vw;
    }
    .single {
        background: #ff6666;
    }
    .goSpell {
        background: #ff3333;
    }
  }
}
</style>
