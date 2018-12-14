<template lang="html">
  <section class="section3">
    <div class="recommend">
      <img src="../../assets/img/index/fx.png" />
    </div>
    <ul class="section3-list">
      <li v-for="k in list" :key='k.id'>
          <img v-lazy="k.goods_main_photo">
          <div class="container">
            <div class="top">
              <img src="../../assets/img/category/tm.png"/>
              <p>{{k.goods_name}}</p>
            </div>
            <div class="middle">
              <span class="coupon">劵</span>
              <span class="money">￥{{(Number(k.goods_price) - Number(k.goods_current_price)).toFixed(2)}}</span>
            </div>
            <div class="bottom">
              <span class="list-price">￥{{k.goods_current_price}}</span>
              <del class="ac">￥{{k.goods_price}}</del>
              <span class="sell">{{k.goods_salenum}}件已售</span>
            </div>
          </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../api/api'
export default {
  data() {
    return {
      list:[],
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getShopUrl',
    ])
  },
  mounted() {
   this.getList();
  },
  methods: {
    getList: function () {
      api.post(`${this.getShopUrl}/app/mall/mall/getGoodsListNumber2.htm`,{emulateJSON: true}).then(
        (response)=>{
          this.list = response.data.content.goodsList
        },
        (error)=>{
            Toast("加载失败。。。");
        }
      );
    }
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
      width: 50%;
      height: 100%;
      margin: 0 auto;
    }
  }
  .section3-list {
    padding: 0 2vw;
    background-color: #eee;
    li {
      margin-right: 3vw;
      width: 48.4%;
      height: 64vw;
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
            width: 10%;
            height: 4vw;
            margin-right: 3%;
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
        .middle {
          width: 22vw;
          height: 6vw;
          line-height: 6vw;
          font-size: 3vw;
          border: 1px solid red;
          margin-top: 2vw;
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
        .bottom {
          margin-top: 2vw;
          .list-price {
            float: left;
            font-size: 4vw;
            font-weight: 600;
            color: red;
          }
          .ac {
            float: left;
            font-size: 3.5vw;
            color: #999;
            margin-left: 1vw;
            margin-top: 0.5vw;
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
}
</style>
