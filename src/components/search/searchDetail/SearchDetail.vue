<template>
    <div class="taoSearch">
        <v-header class="header">
            <h1 slot="title">{{this.$route.query.q}}</h1>
        </v-header>
        <ul>
            <li v-for="item in goodsLists">
                <router-link :to="item.goodsType == 2 ? `/jingDetail?goods_id=${item.goodsId}` : `/taoDetail?NUM_IID=${item.goodsId}`">
                    <img class="main-img" v-lazy="item.goodsImgUrl"/>
                    <div class="container">
                        <div class="con-top">
                            <img :src=" item.goodsType == 0 ? require('../../../assets/img/category/tb.png') : item.goodsType == 1 ? require('../../../assets/img/category/tm.png') : require('../../../assets/img/category/jd.png')"/>
                            <p>{{item.goodsName}}</p>
                        </div>
                        <div class="con-middle">
                            <span>已售{{item.goodsVolume}}件</span>
                            <del>￥{{item.goodsType == 2 ? item.goodsPrice : item.goodsFinalPrice}}</del>
                        </div>
                        <div class="con-bottom">
                            <div class="bottom-left">
                                <span class="coupon">劵</span>
                                <span class="money">￥{{item.goodsCouponInfo}}</span>
                            </div>
                            <p class="bottom-right">￥{{item.goodsDiscountPrice}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import Header from '../../../common/Header'
import { Toast } from "mint-ui"
import { Lazyload } from 'mint-ui'
import api from '../../../api/api'
export default {
    data () {
        return {
            goodsLists: []
        };
    },
    components:{
        'v-header': Header,
    },
    mounted() {
        this.getLists();
    },
    methods: {
        getLists: function () {
            api.get("/fox/app/search/fullweb/goodsList",{
              params:{
                USER_ID: 'EeThqo',
                q: this.$route.query.q,
                page_no: 1
              }
              }).then(
              (response)=>{
                this.goodsLists = response.data.content.goodsList
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
.taoSearch {
    width: 100%;
    height: auto;
    padding-top: 12vw;
    background: #eee;
    ul {
        li {
            float: left;
            width: 49%;
            height: 70vw;
            background: #fff;
            margin-right: 2%;
            margin-bottom: 2vw;
            .main-img {
                width: 100%;
                height: 44vw;
            }
            .container {
                padding: 2vw;
                .con-top {
                    width: 100%;
                    overflow: hidden;
                    img {
                        float: left;
                        width: 14%;
                        height: 3.5vw;
                        margin-top: 1vw;
                    }
                    p {
                        float: left;
                        width: 82%;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        margin-left: 4%;
                        font-size: 3vw;
                        color: #333;
                    }
                }
                .con-middle {
                    margin-top: 2vw;
                    font-size: 3vw;
                    del {
                        float: right;
                        color: #999;
                        margin-right: 2vw;
                    }
                }
                .con-bottom {
                    margin-top: 2vw;
                    .bottom-left{
                        float: left;
                        width: 22vw;
                        height: 6vw;
                        line-height: 6vw;
                        font-size: 3vw;
                        border: 1px solid red;
                        .coupon {
                            display: inline-block;
                            width: 26%;
                            text-align: center;
                            height: 100%;
                            background: red;
                            color: #fff;
                        }
                        .money {
                            display: inline-block;
                            width: 60%;
                            height: 100%;
                            text-align: center;
                            color: red;
                        }
                    }
                    .bottom-right{
                        float: right;
                        font-size: 4vw;
                        color: red;
                        margin-right: 2vw;
                    }
                }
            }
        }
        li:nth-child(even) {
            margin-right: 0;
        }
    }
}
</style>