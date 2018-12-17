<template>
    <div class="todayRecommend">
        <v-header class="header">
            <h1 slot="title">今日推荐</h1>
        </v-header>
        <div class="r-title">
            <img src="../../../assets/img/index/icon/recommend/icon-gw.png"/>
            <span>每日精选超低价</span>
        </div>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li v-for="item in goodsList" ref="goodList">
                    <img :src="item.icon"/>
                    <p>{{ item.title }}</p>
                    <del>￥{{ item.firstPrice }}</del>
                    <span>￥{{ item.nowPrice }}</span>
                </li>
            </ul>
        </div>
        <img class="banner" src="../../../assets/img/index/icon/recommend/banner.png"/>
        <div class="r-title">
            <img src="../../../assets/img/index/icon/recommend/icon-jinrmbl.png"/>
            <span>每小时更新</span>
        </div>
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
import BScroll from "better-scroll"
import Header from '../../../common/Header'
export default {
    data () {
        return {
            goodsList: [
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
                {
                    icon: require('../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100"
                },
            ]
        };
    },
    components:{
        'v-header': Header,
    },
    mounted() {
        this.InitGoodsListScroll();
    },
    methods: {
        InitGoodsListScroll(){
            let width=0
            for (let i = 0; i <this.goodsList.length; i++) {
                 width+=this.$refs.goodList[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
            }
            this.$refs.goodsCon.style.width=width+'vw'
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
    .hotGoods {
        width: 100%;
        height: 52vw;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {display:none}
        touch-action: none;
        .goodsCon {
            height: 100%;
            background: #fff;
            padding: 0 2vw;
            li {
                display: inline-block;
                width: 30vw;
                height: 40vw;
                margin-right: 2vw;
                img {
                    width: 100%;
                    height: 28vw;
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
                    text-align: center;
                    margin-top: 1vw;
                }
                span {
                    display: block;
                    font-size: 4vw;
                    font-weight: 600;
                    color: #ff3333;
                    text-align: center;
                    margin-top: 1vw;
                }
            }
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