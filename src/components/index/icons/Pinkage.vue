<template>
    <div class="pinkage">
        <v-header class="header">
            <h1 slot="title">9.9包邮</h1>
        </v-header>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li :class="{active:index == num}" v-for="(item,index) in goodsList" :key="index" @click="tab(index,item)" ref="goodList">{{item}}</li>
            </ul>
        </div>
        <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <img class="banner" src="../../../assets/img/index/icon/pinkage/banner.png"/>
                <div class="r-title">
                    <span class="today">今日推荐</span>
                    <span class="low">9.9精选超低价</span>
                </div>
                <v-lowPrice :topGoods="topGoods" />
                <div class="r-title">
                    <span class="today">超值爆款</span>
                    <span class="low">每日早上10点更新</span>
                </div>
                <ul class="goodsLists">
                    <li v-for="k in bottomGoods">
                        <router-link :to="k.goodsType == 2 ? `/jingDetail?goods_id=${k.goodsId}` : `/taoDetail?NUM_IID=${k.goodsId}`">
                            <img :src="k.goodsImgUrl"/>
                            <div class="right">
                                <p>{{k.goodsName}}</p>
                                <div class="r-middle">
                                    <del>￥{{k.goodsDiscountPrice}}</del>
                                    <div class="promptly">立即抢购</div>
                                </div>
                                <div class="r-bottom">
                                    <span class="nowPrice">￥{{k.goodsFinalPrice}}</span>
                                    <span class="num">{{k.goodsVolume}}已售</span>
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
import { Lazyload } from 'mint-ui'
import { Toast } from "mint-ui"
import api from '../../../api/api'
import BScroll from "better-scroll"
import Header from '../../../common/Header'
import LowPrice from './pinkage/LowPrice'
export default {
    data () {
        return {
            goodsList:["居家","女装","男装","母婴","数码","食品","美妆"],
            num: 0,
            topGoods: [],
            bottomGoods:[],
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            page: 1,
            q: "居家"
        };
    },
    components:{
        'v-header': Header,
        'v-lowPrice': LowPrice,
    },
    created() {
        this.tab(0,this.q);
    },
    mounted() {
        this.InitGoodsListScroll();
        // 父控件要加上高度，否则会出现上拉不动的情况
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
        loadBottom() {
            this.page++;
            this.loadMore();
        },
        tab(index,item) {
            this.num = index;
            this.q = item;
            api.get("/fox/app/tb/freeShipping",{
                params:{
                  USER_ID: "EeThqo",
                  page: this.page,
                  q: item
                }
              }).then(
                (response)=>{
                    this.topGoods = response.data.content.topGoodsList;
                    this.bottomGoods = response.data.content.goodsList;
                },
                (error)=>{
                    Toast("加载失败。。。");
                }
            );
        },
        loadMore: function () {
            api.get("/fox/app/tb/freeShipping",{
              params:{
                USER_ID: "EeThqo",
                page: this.page,
                q:this.q
              }
            }).then(
              (response)=>{
                this.bottomGoods =  this.bottomGoods.concat(response.data.content.goodsList);
                if (this.page > 10) {
                    this.allLoaded = true; // 若数据已全部获取完毕
                }
                this.$refs.loadmore.onBottomLoaded();
              },
              (error)=>{
                  Toast("加载失败。。。");
              }
            );
        },
        InitGoodsListScroll(){
            let width=16
            for (let i = 0; i <this.goodsList.length; i++) {
                 width+=this.$refs.goodList[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
            }
            this.$refs.goodsCon.style.width=width+'px'
            this.$nextTick(()=>{
                if (!this.scroll) {
                    this.scroll=new BScroll(this.$refs.hotGoods, {
                        startX:0,
                        click:true,
                        scrollX:true,
                        scrollY:false,
                        eventPassthrough:'vertical'
                    });
                }else{
                    this.scroll.refresh()
                }
            });
        },
    }
}
</script>
<style lang="less" scoped>
.pinkage {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    background: #fff;
    .hotGoods {
        width: 100%;
        height: 10vw;
        background: #fff;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {display:none}
        touch-action: none;
        .goodsCon {
            height: 100%;
            padding: 0 2vw;
            li {
                display: inline-block;
                width: 20vw;
                text-align: center;
                font-size: 4vw;
                color: #333;
                line-height: 10vw;
            }
            .active {
                color: #ff3333;
                // border-bottom: 1px solid #ff3333;
            }
        }
    }
    .main-body {
        overflow: scroll;
        .banner {
            display: block;
            width: 100%;
            height: 34vw;
        }
        .r-title {
            width: 100%;
            height: 12vw;
            line-height: 12vw;
            padding: 0 4vw;
            background: #fff;
            .today {
                font-size: 4.5vw;
                color: #333;
            }
            .low {
                font-size: 3vw;
                color: #999;
            }
        }
        .goodsLists {
            width: 100%;
            height: auto;
            li {
                width: 100%;
                height: 34vw;
                background: #fff;
                padding-left: 2vw;
                border-top: 1px solid #eee;
                box-sizing: border-box;
                img {
                    float: left;
                    width: 34%;
                    height: 30vw;
                    margin-top: 2vw;
                }
                .right {
                    float: left;
                    width: 66%;
                    height: 100%;
                    padding-top: 2vw;
                    padding-left: 2vw;
                    p{
                        font-size: 4vw;
                        color: #333;
                        width: 100%;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .r-middle {
                        overflow: hidden;
                        margin-top: 4vw;
                        padding: 0 2vw;
                        del {
                            float: left;
                            color: #666;
                            font-size: 4vw;
                            margin-top: 1vw;
                        }
                        .promptly {
                            float: right;
                            width: 36%;
                            text-align: center;
                            height: 7vw;
                            line-height: 7vw;
                            font-size: 4vw;
                            color: #fff;
                            background: #ff0000;
                            border-radius: 6px;
                        }
                    }
                    .r-bottom {
                        margin-top: 4vw;
                        padding: 0 2vw;
                        .nowPrice {
                            float: left;
                            font-size: 5vw;
                            color: #ff0000;
                        }
                        .num {
                            float: right;
                            color: #666;
                            font-size: 4vw;
                            margin-top: 1vw;
                        }
                    }
                }
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