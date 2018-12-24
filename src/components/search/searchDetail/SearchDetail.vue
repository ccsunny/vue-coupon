<template>
    <div class="taoSearch">
        <v-header class="header">
            <h1 slot="title">{{this.$route.query.q}}</h1>
        </v-header>
        <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <ul>
                    <li v-for="item in goodsLists">
                        <router-link :to="item.goodsType == 2 ? `/jingDetail?goods_id=${item.goodsId}` : `/taoDetail?NUM_IID=${item.goodsId}`">
                            <img class="main-img" :src="item.goodsImgUrl"/>
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
                <div class="end" v-if="allLoaded">已经到底了，没有更多数据了</div>
            </mt-loadmore>
        </div>
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
            goodsLists: [],
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            page_no: 1
        };
    },
    components:{
        'v-header': Header,
    },
    created() {
        this.getLists();
    },
    mounted() {
      // 父控件要加上高度，否则会出现上拉不动的情况
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
        loadTop() {
            this.page_no++;
            this.getLists();
        },
        loadBottom() {
            this.page_no++;
            this.loadMore();
        },
        getLists: function () {
            api.get("/fox/app/search/fullweb/goodsList",{
              params:{
                USER_ID: 'EeThqo',
                q: this.$route.query.q,
                page_no: this.page_no
              }
              }).then(
              (response)=>{
                this.allLoaded = false; // 可以进行上拉
                this.goodsLists = response.data.content.goodsList
                this.$refs.loadmore.onTopLoaded();
              },
              (error)=>{
                  Toast("加载失败。。。");
              }
            );
        },
        loadMore: function () {
            api.get("/fox/app/search/fullweb/goodsList",{
              params:{
                USER_ID: 'EeThqo',
                q: this.$route.query.q,
                page_no: this.page_no
              }
              }).then(
              (response)=>{
                this.goodsLists = this.goodsLists.concat(response.data.content.goodsList);
                if (response.data.content.goodsList == '') {
                    this.allLoaded = true; // 若数据已全部获取完毕
                }
                this.$refs.loadmore.onBottomLoaded();
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
    .main-body {
        overflow: scroll;
        ul {
            width: 100%;
            height: 100%;
            li {
                float: left;
                width: 49%;
                height: 74vw;
                background: #fff;
                margin-right: 2%;
                margin-bottom: 2vw;
                .main-img {
                    width: 100%;
                    height: 50vw;
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
                            margin-top: 0.5vw;
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
        .end {
            text-align: center;
            font-size: 3vw;
            color: #333;
        }
    }
}
</style>