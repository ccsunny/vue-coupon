<template>
    <div class="new">
        <v-header class="header">
            <h1 slot="title">购物领红包</h1>
        </v-header>
        <img class="banner" src="../../../assets/img/index/icon/xrzq.png"/>
        <ul class="goodsCon">
            <li>
                <img src="../../../assets/img/index/1.png">
                <div class="container">
                  <div class="top">
                    <img src="../../../assets/img/category/tm.png"/>
                    <p>童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款</p>
                  </div>
                  <div class="middle">
                    <span class="coupon">劵</span>
                    <span class="money">￥20</span>
                  </div>
                  <div class="bottom">
                    <span class="list-price">￥79</span>
                    <del class="ac">￥99</del>
                    <span class="sell">19999件已售</span>
                  </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/img/index/1.png">
                <div class="container">
                  <div class="top">
                    <img src="../../../assets/img/category/tm.png"/>
                    <p>童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款</p>
                  </div>
                  <div class="middle">
                    <span class="coupon">劵</span>
                    <span class="money">￥20</span>
                  </div>
                  <div class="bottom">
                    <span class="list-price">￥79</span>
                    <del class="ac">￥99</del>
                    <span class="sell">19999件已售</span>
                  </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Header from '../../../common/Header'
export default {
    data () {
        return {
        };
    },
    components:{
        'v-header': Header,
    },
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