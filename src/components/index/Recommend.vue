<template lang="html">
  <section class="section3">
    <div class="recommend">
      <img src="../../assets/img/index/fx.png" />
    </div>
    <ul class="section3-list" :style="{height:33*(list.length)+'vw'}">
      <li v-for="k in list">
        <router-link :to="k.goodsType == 2 ? `/jingDetail?goods_id=${k.goodsId}` : `/taoDetail?NUM_IID=${k.goodsId}`">
          <img v-lazy="k.goodsImgUrl">
          <div class="container">
            <div class="top">
              <img :src=" k.goodsType == 0 ? require('../../assets/img/category/tb.png') : k.goodsType == 1 ? require('../../assets/img/category/tm.png') : require('../../assets/img/category/jd.png')"/>
              <p>{{k.goodsName}}</p>
            </div>
            <div class="bottom">
              <del class="ac">￥{{ k.goodsPrice }}</del>
              <div class="m-coupon">
                  <span class="coupon">劵</span>
                  <span class="money">￥{{k.goodsCouponInfo}}</span>
              </div>
            </div>
            <div class="middle">
              <span class="list-price">￥{{k.goodsDiscountPrice}}</span>
              <span class="sell">已售{{ k.goodsVolume }}件</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <button class="button" @click="getMore">{{ pageNo > 10 ? "没有更多数据了" : "点击加载更多" }}</button>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
import { Toast } from "mint-ui"
import api from '../../api/api'
export default {
  data() {
    return {
      list:[],
      pageNo: 1
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList: function () {
      api.get("/fox/app/home/findGoods",{
        params:{
          USER_ID: "666666",
          pageNo: this.pageNo
        }
      }).then(
        (response)=>{
          this.list = this.list.concat(response.data.content.findGoods);
        },
        (error)=>{
            Toast("加载失败。。。");
        }
      );
    },
    getMore() {
      this.pageNo++;
      this.getList();
    },
  }
}
</script>

<style lang="less" scoped>
.section3 {
  width: 100%;
  padding-top: 3vw;
  .recommend {
    width: 100%;
    height: 5vw;
    margin-bottom: 3vw;
    img {
      display: block;
      width: 46%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .section3-list {
    padding: 0 2vw;
    li {
      margin-right: 3vw;
      width: 48.4%;
      height: 70vw;
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
            width: 10%;
            height: 3vw;
            margin-right: 3%;
            margin-top: 1vw;
          }
          p {
            font-size: 4vw;
            color: #333;
            width: 85%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .bottom {
              margin-top: 2vw;
              overflow: hidden;
              .ac {
                float: left;
                font-size: 3.5vw;
                color: #999;
                margin-top: 0.5vw;
              }
              .m-coupon {
                float: right;
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
            }
            .middle {
              margin-top: 2vw;
              .list-price {
                float: left;
                font-size: 4vw;
                font-weight: 600;
                color: red;
              }
              .sell {
                float: right;
                font-size: 3vw;
                color: #999;
                margin-top: 0.5vw;
              }
            }
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
  }
}
</style>
