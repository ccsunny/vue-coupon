<template>
    <div class="todayRecommend">
        <v-header class="header">
            <h1 slot="title">今日推荐</h1>
        </v-header>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li :class="{active:index == num}" v-for="(item,index) in goodsList" :key="index" @click="tab(index,item)" ref="goodList">{{item}}</li>
            </ul>
        </div>
        <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <div class="r-title">
                    <img src="../../../assets/img/index/icon/recommend/icon-gw.png"/>
                    <span>每日精选超低价</span>
                </div>
                <v-deserve :topGoodsList="topGoodsList" />
                <img class="banner" src="../../../assets/img/index/icon/recommend/banner.png"/>
                <div class="r-title">
                    <img src="../../../assets/img/index/icon/recommend/icon-jinrmbl.png"/>
                    <span>每小时更新</span>
                </div>
                <ul class="goodsCon">
                    <li v-for="k in bottomGoodsList">
                        <router-link :to="k.goodsType == 2 ? `/jingDetail?goods_id=${k.goodsId}` : `/taoDetail?NUM_IID=${k.goodsId}`">
                            <img :src="k.goodsImgUrl">
                            <div class="container">
                              <div class="top">
                                <img :src=" k.goodsType == 0 ? require('../../../assets/img/category/tb.png') : k.goodsType == 1 ? require('../../../assets/img/category/tm.png') : require('../../../assets/img/category/jd.png')"/>
                                <p>{{k.goodsName}}</p>
                              </div>
                              <div class="bottom">
                                <span class="sell">已售{{ k.goodsVolume }}件</span>
                                <del class="ac">￥{{ k.goodsPrice }}</del>
                              </div>
                              <div class="middle">
                                <div class="m-coupon">
                                    <span class="coupon">劵</span>
                                    <span class="money">￥{{k.goodsCouponInfo}}</span>
                                </div>
                                <span class="list-price">￥{{k.goodsDiscountPrice}}</span>
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
import Deserve from './todayRecommend/deserve'
export default {
    data () {
        return {
            goodsList:["居家","女装","男装","母婴","家电","箱包","美妆","洗护","内衣","数码","女鞋","男鞋","食品"],
            num: 0,
            topGoodsList: [],
            bottomGoodsList: [],
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            pageNo: 1,
            q: "居家"
        };
    },
    components:{
        'v-header': Header,
        'v-deserve': Deserve,
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
            this.pageNo++;
            this.loadMore();
        },
        tab(index,item) {
            this.num = index;
            this.q = item;
            api.get("/fox/app/home/todayRecommendGoods",{
              params:{
                USER_ID: "666666",
                pageNo: this.pageNo,
                q: item
              }
            }).then(
              (response)=>{
                this.topGoodsList = response.data.content.todayRefinedTopGoods;
                this.bottomGoodsList = response.data.content.todayRecommendBottomGoods;
              },
              (error)=>{
                  Toast("抱歉，加载失败了。。。");
              }
            );
        },
        loadMore: function () {
            api.get("/fox/app/home/todayRecommendGoods",{
              params:{
                USER_ID: "666666",
                pageNo: this.pageNo,
                q: this.q
              }
            }).then(
              (response)=>{
                this.bottomGoodsList = this.bottomGoodsList.concat(response.data.content.todayRecommendBottomGoods);
                if (response.data.content.todayRecommendBottomGoods == '') {
                    this.allLoaded = true; // 若数据已全部获取完毕
                }
                this.$refs.loadmore.onBottomLoaded();
              },
              (error)=>{
                  Toast("抱歉，加载失败了。。。");
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
.todayRecommend {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
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
        .r-title {
            width: 100%;
            height: 12vw;
            line-height: 12vw;
            padding: 0 4vw;
            img {
                width: 28vw;
                height: 5vw;
                margin-bottom: 1vw;
            }
            span {
                font-size: 3vw;
                color: #666;
            }
        }
        .banner {
            display: block;
            width: 100%;
            height: 34vw;
        }
        .goodsCon {
            padding: 0 2vw;
            background-color: #eee;
            li {
              margin-right: 1vw;
              width: 49.4%;
              height: 72vw;
              float: left;
              margin-bottom: 2vw;
              border-radius: 5px;
              background-color: #fff;
              img {
                display: block;
                width: 100%;
                height: 46vw;
                border-radius: 5px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
              }
              .container {
                padding: 2vw;
                .top {
                  img {
                    float: left;
                    width: 12%;
                    height: 4vw;
                    margin-right: 2%;
                    margin-top: 1vw;
                  }
                  p {
                    font-size: 4vw;
                    color: #333;
                    width: 83%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                  }
                }
                .bottom {
                  margin-top: 2vw;
                  overflow: hidden;
                  .sell {
                    float: left;
                    font-size: 3vw;
                    color: #999;
                    margin-top: 0.5vw;
                  }
                  .ac {
                    float: right;
                    font-size: 3.5vw;
                    color: #999;
                    margin-left: 1vw;
                    margin-top: 0.5vw;
                  }
                }
                .middle {
                  margin-top: 2vw;
                  .m-coupon {
                    float: left;
                    width: 22vw;
                    height: 6vw;
                    line-height: 5vw;
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
                  .list-price {
                    float: right;
                    font-size: 4vw;
                    font-weight: 600;
                    color: red;
                  }
                }
              }
            }
            li:nth-child(2n) {
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