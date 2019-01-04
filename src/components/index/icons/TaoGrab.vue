<template>
    <div class="grab">
        <v-header class="header">
            <h1 slot="title">淘抢购</h1>
        </v-header>
        <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <img class="banner" src="../../../assets/img/index/icon/grab/banner-tqg.png"/>
                <div class="middle">
                    <ul class="container">
                        <li class="con">
                            <div class="top">
                                <img src="../../../assets/img/index/icon/grab/icon-zdq.png"/>
                                <span class="point">整点抢</span>
                            </div>
                            <p class="int">限量抢购</p>
                            <ul>
                                <li v-for="item in leftGoodsList">
                                    <router-link :to="`/taoDetail?NUM_IID=${item.goodsId}`">
                                        <img v-lazy="item.goodsImgUrl"/>
                                        <p>劵后价<span>￥{{item.goodsDiscountPrice}}</span></p>
                                        <img class="rob" src="../../../assets/img/index/icon/grab/icon-qiang.png"/>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="con">
                            <div class="top">
                                <img src="../../../assets/img/index/icon/grab/icon-tbk.png"/>
                                <span class="point">淘爆款</span>
                            </div>
                            <p class="int">全网热卖.实时更新</p>
                            <ul>
                                <li v-for="k in rightGoodsList">
                                    <router-link :to="`/taoDetail?NUM_IID=${k.goodsId}`">
                                        <img v-lazy="k.goodsImgUrl"/>
                                        <p>劵后价<span>￥{{k.goodsDiscountPrice}}</span></p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p class="taoSift">淘宝精选</p>
                <ul class="goodsCon">
                    <li v-for="m in bottomGoodsList">
                        <router-link :to="`/taoDetail?NUM_IID=${m.goodsId}`" @click.native="refresh">
                            <img v-lazy="m.goodsImgUrl">
                            <div class="container">
                              <div class="top">
                                <img :src=" m.goodsType == 0 ? require('../../../assets/img/category/tb.png') : require('../../../assets/img/category/tm.png')"/>
                                <p>{{m.goodsName}}</p>
                              </div>
                              <div class="bottom">
                                <span class="sell">已售{{ m.goodsVolume }}件</span>
                                <del class="ac">￥{{ m.goodsPrice }}</del>
                              </div>
                              <div class="middle">
                                <div class="m-coupon" v-show="!m.goodsCouponInfo == 0">
                                    <span class="coupon">劵</span>
                                    <span class="money">￥{{m.goodsCouponInfo}}</span>
                                </div>
                                <span class="list-price">￥{{m.goodsDiscountPrice}}</span>
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
import Header from '../../../common/Header'
export default {
    data () {
        return {
            rightGoodsList: [],
            leftGoodsList: [],
            bottomGoodsList: [],
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            pageNo: 1,
            pageSize: 20
        };
    },
    components:{
        'v-header': Header,
    },
    created() {
        this.getContent();
    },
    mounted() {
        // 父控件要加上高度，否则会出现上拉不动的情况
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
        loadBottom() {
            this.pageNo++;
            this.loadMore();
        },
        getContent: function () {
          api.get("/fox/app/home/tPanicBuyGoods",{
            params:{
              USER_ID: "666666",
              pageNo: this.pageNo,
              pageSize: this.pageSize
            }
          }).then(
            (response)=>{
              this.rightGoodsList = response.data.content.topTpanicBuyGoodsRight
              this.leftGoodsList = response.data.content.topTpanicBuyGoodsLeft
              this.bottomGoodsList = response.data.content.tpanicBottomBuyGoods
            },
            (error)=>{
                Toast("加载失败。。。");
            }
          );
        },
        loadMore: function () {
          api.get("/fox/app/home/tPanicBuyGoods",{
            params:{
              USER_ID: "666666",
              pageNo: this.pageNo,
              pageSize: this.pageSize
            }
          }).then(
            (response)=>{
              this.bottomGoodsList =  this.bottomGoodsList.concat(response.data.content.tpanicBottomBuyGoods);
              if (response.data.content.tpanicBottomBuyGoods == '') {
                this.allLoaded = true; // 若数据已全部获取完毕
               }
               this.$refs.loadmore.onBottomLoaded();
            },
            (error)=>{
                Toast("加载失败。。。");
            }
          );
        },
    },
}
</script>
<style lang="less" scoped>
.grab {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    box-sizing: border-box;
    .main-body {
        overflow: scroll;
        .banner {
            display: block;
            width: 100%;
            height: 34vw;
            margin-top: -1px;
        }
        .middle {
            width: 100%;
            height: 46vw;
            background: #fff;
            .container {
                width: 100%;
                height: 100%;
                display: flex;
                .con {
                    float: left;
                    flex: 1;
                    border-right: 1px solid #eee;
                    .top {
                        padding-left: 2vw;
                        padding-top: 3vw;
                        img {
                            width: 6vw;
                            height: 6vw;
                            margin-bottom: 1vw;
                        }
                        .point {
                            font-size: 5vw;
                            color: #333;
                        }
                    }
                    .int {
                        font-size: 3vw;
                        color: #666;
                        padding-left: 9vw;
                    }
                    ul {
                        width: 100%;
                        height: 20vw;
                        padding-left: 2vw;
                        margin-top: 2vw;
                        li {
                            float: left;
                            width: 50%;
                            height: 20vw;
                            text-align: center;
                            position: relative;
                            img {
                                width: 96%;
                                height: 20vw;
                            }
                            .rob {
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 8vw;
                                height: 7vw;
                            }
                            p{
                                font-size: 3.5vw;
                                color: #333;
                                margin-top: 2vw;
                                span {
                                    color: #ff3333;
                                }
                            }
                        }
                    }
                }
                .con:last-child {
                    border: 0;
                }
            }
        }
        .taoSift {
            font-size: 4vw;
            color: #333;
            line-height: 10vw;
            padding: 0 2vw;
            padding-top: 2vw;
        }
        .goodsCon {
            padding: 0 2vw;
            background-color: #eee;
            li {
              margin-right: 1vw;
              width: 49.4%;
              height: 74vw;
              float: left;
              margin-bottom: 2vw;
              border-radius: 5px;
              background-color: #fff;
              img {
                display: block;
                width: 100%;
                height: 48vw;
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
                  height: 8vw;
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