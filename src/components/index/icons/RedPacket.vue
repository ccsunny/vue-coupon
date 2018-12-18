<template>
    <div class="packet">
        <v-header class="header">
            <h1 slot="title">领红包</h1>
        </v-header>
        <img class="banner" src="../../../assets/img/index/icon/packet/banner.png"/>
        <img class="button" src="../../../assets/img/index/icon/packet/button.png" data-clipboard-text="630140586" @click="copy"/>
    </div>
</template>
<script>
import { Toast } from "mint-ui"
import Header from '../../../common/Header'
import Clipboard from 'clipboard'
export default {
    data () {
        return {
        };
    },
    components:{
        'v-header': Header,
    },
    methods: {
        copy: function () {
          let clipboard = new Clipboard('.button')
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
.packet {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    box-sizing: border-box;
    .banner {
        width: 100%;
        position: relative;
    }
    .button {
        position: absolute;
        top: 138vw;
        left: 51%;
        transform: translateX(-50%);
        width: 46vw;
        height: 10vw;
    }
}
</style>