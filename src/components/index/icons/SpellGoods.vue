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
            <ul class="goodsCon" ref="goodsCon">
                <li v-for="item in goodsList" ref="goodList">
                    <img :src="item.icon"/>
                    <p>{{ item.title }}</p>
                    <del>￥{{ item.firstPrice }}</del>
                    <span>拼团价￥{{ item.nowPrice }}</span>
                    <img class="spell-con" src="../../../assets/img/index/icon/spellGoods/spell.png"/>
                </li>
            </ul>
        </div>
        <div class="r-title">
            <img src="../../../assets/img/index/icon/spellGoods/like.png"/>
            <span class="spell">拼拼推荐</span>
        </div>
        <ul class="goodsContent">
            <li>
                <img src="../../../assets/img/index/1.png">
                <div class="container">
                  <div class="top">
                    <img src="../../../assets/img/category/tm.png"/>
                    <p>童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款</p>
                  </div>
                  <div class="middle">京东价￥999</div>
                  <div class="bottom">
                    <span>2人拼团价</span><span class="price">￥666</span>
                    <p>去拼团</p>
                  </div>
                  <div class="evaluate">
                    <span class="num">99999条评价</span>
                    <span>好评90%</span>
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
                  <div class="middle">京东价￥999</div>
                  <div class="bottom">
                    <span>2人拼团价</span><span class="price">￥666</span>
                    <p>去拼团</p>
                  </div>
                  <div class="evaluate">
                    <span class="num">99999条评价</span>
                    <span>好评90%</span>
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
        height: 52vw;
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
                height: 50vw;
                background: #fff;
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
                    margin-top: 1vw;
                    margin-left: 2vw;
                }
                span {
                    float: left;
                    font-size: 4vw;
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
          height: 70vw;
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
              font-size: 3vw;
              color: #999;
              margin-top: 2vw;
            }
            .bottom {
                overflow: hidden;
                margin-top: 2vw;
                span {
                    float: left;
                    font-size: 4vw;
                    color: #ff3333;
                }
                .price {
                    font-weight: 600;
                }
                p {
                    float: right;
                    width: 28%;
                    text-align: center;
                    height: 6vw;
                    line-height: 6vw;
                    font-size: 3vw;
                    color: #fff;
                    background: #ff0000;
                }
            }
            .evaluate {
                margin-top: 2vw;
                span {
                    float: left;
                    font-size: 3vw;
                    color: #999;
                }
                .num {
                    margin-right: 2vw;
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