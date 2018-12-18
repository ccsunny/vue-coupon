<template>
    <div class="new">
        <v-header class="header">
            <h1 slot="title">购物领红包</h1>
        </v-header>
        <img class="banner" src="../../../assets/img/index/icon/xrzq.png"/>
        <ul class="goodsCon">
            <li v-for="item in goodLists">
              <router-link :to="`/taoDetail?NUM_IID=${item.goodsId}`">
                <img v-lazy="item.goodsImgUrl">
                <div class="container">
                  <div class="top">
                    <img :src=" item.goodsType == 0 ? require('../../../assets/img/category/tb.png') : require('../../../assets/img/category/tm.png')" />
                    <p>{{item.goodsName}}</p>
                  </div>
                  <div class="bottom">
                    <span class="sell">已售{{ item.goodsVolume }}件</span>
                    <del class="ac">￥{{ item.goodsPrice }}</del>
                  </div>
                  <div class="middle">
                    <div class="m-coupon">
                        <span class="coupon">劵</span>
                        <span class="money">￥{{item.goodsCouponInfo}}</span>
                    </div>
                    <span class="list-price">￥{{item.goodsFinalPrice}}</span>
                  </div>
                </div>
              </router-link>
            </li>
        </ul>
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
            goodLists: []
        };
    },
    components:{
        'v-header': Header,
    },
    mounted() {
      this.getContent();
    },
    methods: {
        getContent: function () {
            api.get("/fox/app/tb/tbkGetItems",{
              params:{
                USER_ID: "123455",
                page_no: "1",
                q:"1"
              }
            }).then(
              (response)=>{
                this.goodLists = response.data.content.goodsList
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
.new {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    box-sizing: border-box;
    .banner {
        display: block;
        width: 100%;
        height: 34vw;
    }
    .goodsCon {
        padding: 0 2vw;
        padding-top: 4vw;
        background-color: #eee;
        li {
          margin-right: 1vw;
          width: 49.4%;
          height: 66vw;
          float: left;
          margin-bottom: 2vw;
          border-radius: 5px;
          background-color: #fff;
          img {
            display: block;
            width: 100%;
            height: 40vw;
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
                margin-right: 3%;
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
}
</style>