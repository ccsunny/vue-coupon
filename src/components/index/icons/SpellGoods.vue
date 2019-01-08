<template>
    <div class="spellGoods">
        <v-header class="header">
            <h1 slot="title">拼拼好货</h1>
        </v-header>
        <img class="banner" src="../../../assets/img/index/icon/spellGoods/banner.png"/>
        <div class="r-title">
            <img src="../../../assets/img/index/icon/spellGoods/hot.png"/>
            <span>今日必拼</span>
        </div>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon" :style="{width:40*(goodsList.length)+'vw'}">
                <li v-for="item in goodsList" ref="goodList">
                    <router-link :to="`/spellDetail?NUM_IID=${item.goodsId}&spellPrice=${item.goodsFinalPrice}&spellLink=${item.generalizeLongLink}`">
                        <img v-lazy="item.goodsImgUrl"/>
                        <p>{{ item.goodsName }}</p>
                        <del>￥{{ item.goodsPrice }}</del>
                        <span>拼团价￥{{ item.goodsFinalPrice }}</span>
                        <img class="spell-con" src="../../../assets/img/index/icon/spellGoods/spell.png"/>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="r-title">
            <img src="../../../assets/img/index/icon/spellGoods/like.png"/>
            <span class="spell">拼拼推荐</span>
        </div>
        <ul class="goodsContent">
            <li v-for="k in bottomGoodsList">
                <router-link :to="`/spellDetail?NUM_IID=${k.goodsId}&spellPrice=${k.goodsFinalPrice}&spellLink=${k.generalizeLongLink}`">
                    <img v-lazy="k.goodsImgUrl">
                    <div class="container">
                      <div class="top">
                        <img :src=" k.goodsType == 0 ? require('../../../assets/img/category/tb.png') : k.goodsType == 1 ? require('../../../assets/img/category/tm.png') : require('../../../assets/img/category/jd.png')"/>
                        <p>{{k.goodsName}}</p>
                      </div>
                      <div class="middle">原价￥{{k.goodsPrice}}</div>
                      <div class="bottom">
                        <span>2人拼团价</span><span class="price">￥{{k.goodsFinalPrice}}</span>
                      </div>
                      <p class="spell">去拼团</p>
                      <!--
                      <div class="evaluate">
                        <span class="num">{{k.comments}}条评价</span>
                        <span>好评{{k.goodCommentsShare}}%</span>
                      </div>
                      -->
                    </div>
                </router-link>
            </li>
        </ul>
        <button class="button" @click="getMore">{{ pageNo > 10 ? "没有更多数据了" : "点击加载更多" }}</button>        
    </div>
</template>
<script>
import { Lazyload } from 'mint-ui'
import { Toast } from "mint-ui"
import api from '../../../api/api'
import BScroll from "better-scroll"
import Header from '../../../common/Header'
export default {
    data () {
        return {
            goodsList: [],
            bottomGoodsList: [],
            pageNo: 1,
            substitutePageSize: 0
        };
    },
    components:{
        'v-header': Header,
    },
    created() {
        this.getContent();
    },
    mounted() {
        let that = this;
        setTimeout(function(){
            that.InitGoodsListScroll();
        }, 1000);
    },
    methods: {
        getContent: function () {
            api.get("/fox/app/home/groupBuyingGoods",{
              params:{
                USER_ID: "666666",
                substitutePageSize: this.substitutePageSize
              }
            }).then(
              (response)=>{
                this.goodsList = response.data.content.groupBuyingTopGoods
                this.bottomGoodsList = this.bottomGoodsList.concat(response.data.content.groupBuyingBottomGoods)
                this.substitutePageSize = response.data.content.substitutePageSize
              },
              (error)=>{
                  Toast("抱歉，加载失败了。。。");
              }
            );
        },
        InitGoodsListScroll(){
            let width=165
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
        getMore() {
            this.pageNo++;
            this.getContent();
        },
    }
}
</script>
<style lang="less" scoped>
.spellGoods {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    .r-title {
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        padding: 0 4vw;
        img {
            width: 5vw;
            height: 5vw;
            margin-bottom: 1vw;
        }
        span {
            font-size: 4vw;
            color: #ff3333;
        }
        .spell {
            color: #333;
        }
    }
    .hotGoods {
        width: 100%;
        height: 56vw;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {display:none}
        touch-action: none;
        .goodsCon {
            height: 100%;
            padding: 0 2vw;
            li {
                display: inline-block;
                width: 36vw;
                height: 56vw;
                background: #fff;
                margin-right: 2vw;
                img {
                    width: 100%;
                    height: 34vw;
                }
                p {
                    font-size: 4vw;
                    color: #333;
                    width: 90%;
                    margin: 0 auto;
                    margin-top: 2vw;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                del {
                    display: block;
                    font-size: 3vw;
                    color: #999;
                    margin-top: 1vw;
                    margin-left: 2vw;
                }
                span {
                    float: left;
                    font-size: 3.5vw;
                    font-weight: 600;
                    color: #ff3333;
                    margin-top: 1vw;
                    margin-left: 2vw;
                }
                .spell-con {
                    float: right;
                    width: 6vw;
                    height: 6vw;
                    margin-right: 2vw;
                }
            }
        }
    }
    .banner {
        display: block;
        width: 100%;
        height: 34vw;
    }
    .goodsContent {
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
            height: 44vw;
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
            .middle {
              font-size: 3vw;
              color: #999;
              margin-top: 2vw;
            }
            .bottom {
                overflow: hidden;
                margin-top: 1vw;
                span {
                    float: left;
                    font-size: 4vw;
                    color: #ff3333;
                }
                .price {
                    font-weight: 600;
                }
                
            }
            .spell {
                float: right;
                width: 28%;
                text-align: center;
                height: 6vw;
                line-height: 6vw;
                font-size: 3vw;
                color: #fff;
                background: #ff0000;
                margin-top: 2vw;
            }
            // .evaluate {
            //     margin-top: 2vw;
            //     span {
            //         float: left;
            //         font-size: 3vw;
            //         color: #999;
            //     }
            //     .num {
            //         margin-right: 2vw;
            //     }
            // }
          }
        }
        li:nth-child(2n) {
          margin-right: 0;
        }
    }
    .button {
        width: 60%;
        text-align: center;
        margin-left: 20%;
        height: 10vw;
        font-size: 4vw;
        line-height: 10vw;
        background: #f0303f;
        color: #fff;
        margin-bottom: 2vw;
    }
}
</style>