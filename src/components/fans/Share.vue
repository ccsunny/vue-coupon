<template>
    <div class="share">
        <ul class="share-list">
            <li class="list" v-for="(item,index) in getShareGoodList.shareGoodsList" :key="index">
                <div class="top">
                    <img class="logo" :src="item.USERIMGURL" @error="imgError(item)" :onerror="defaultImg"/>
                    <div class="middle">
                        <p>{{item.USER_NAME}}</p>
                        <p>{{item.ADDTIME}}</p>
                    </div>
                    <img class="fx" src="../../assets/img/share/share.png">
                </div>
                <p class="title">{{item.TITLE}}</p>
                <p class="int">{{item.CONTENT}}</p>
                <div class="bottom">
                    <ul>
                        <li v-for="(goods,g) in item.tbkgoodsList" :key="g">
                            <img class="coupon" v-lazy="goods.imgUrl || goods.PICT_URL" v-preview="goods.imgUrl || goods.PICT_URL" preview-title-enable="true" preview-nav-enable="true"/>
                            <span v-if="!goods.imgUrl">￥{{goods.ZK_FINAL_PRICE}}</span>                    
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <v-baseline />
    </div>
</template>
<script>
import { Lazyload } from 'mint-ui';
import { mapGetters } from 'vuex'
import Baseline from '@/common/Baseline.vue'
export default {
    data () {
        return {
            defaultImg: 'this.src="' + require('../../assets/img/share/logo1.png') + '"',
        };
    },
    
    beforeCreate(){
        this.$store.dispatch('set_share_goods_list');
    },
    computed: {
        ...mapGetters([
            'getShareGoodList',
        ])
    },
    components: {
        'v-baseline': Baseline
    },
    methods: {
        imgError(item) {
            item.img = require('../../assets/img/share/logo1.png');
        }
    }
}
</script>
<style lang="less" scoped>
.share {
    width: 100%;
    height: 100%;
    background: #eee;
    .share-list {
        width: 100%;
        height:  auto;
        padding-bottom: 17vw;
        display: flex;
        flex-direction:column;
        .list {
            flex: 1;
            padding: 0 2vw;
            padding-top: 4vw;
            padding-bottom: 2vw;
            background: #fff;
            margin-bottom: 2vw;
            overflow: hidden;
        }
        .top{
            height: 12vw;
        .logo {
            float: left;
            width: 12vw;
            height: 12vw;
            border-radius: 5px;
        }
        .middle {
            float: left;
            margin-left: 2vw;
            font-size: 14px;
            color: #333;
            p {
                line-height: 6vw;
            }
        }
        .fx {
            float: right;
            width: 7vw;
            height: 7vw;
            margin-top: 1vw;
        }
        }
        .title {
            font-size: 3.5vw;
            line-height: 10vw;

        }
        .int {
            font-size: 3.5vw;
            color: #555;
        }
        .bottom {
            margin-top: 2vw;
            ul{
                li {
                    width: 32.6%;
                    height: 30vw;
                    background-color: #ccc;
                    float: left;
                    position: relative;
                    margin-right: 1vw;
                    margin-bottom: 1vw;
                    .coupon {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    span {
                        display: block;
                        width: 48%;
                        height: 5vw;
                        background-image: url(../../assets/img/share/img-bq.png);
                        background-size: 100% 100%;
                        color: #fff;
                        font-size: 12px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                }
                li:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>