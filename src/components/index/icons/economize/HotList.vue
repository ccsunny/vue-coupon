<template>
    <div class="brand">
        <div class="hotList">
            <div class="hotList-top">
                <span class="hot">品牌热卖</span>
                <span class="underway">正在抢购，先下单先得哦</span>
            </div>
            <div class="hotGoods" ref="hotGoods">
                <ul class="goodsCon" ref="goodsCon">
                    <li v-for="item in goodsList" ref="goodList">
                        <img :src="item.icon"/>
                        <p>{{item.title}}</p>
                        <del>￥{{item.firstPrice}}</del>
                        <div class="bottom">
                            <span>￥{{item.nowPrice}}</span>
                            <div class="right">
                                <span class="coupon">劵</span>
                                <span class="money">￥{{item.coupon}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
            goodsList: [
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
                {
                    icon: require('../../../../assets/img/index/1.png'),
                    title: "童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款",
                    firstPrice: "199",
                    nowPrice: "100",
                    coupon: "99"
                },
            ]
        };
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
.brand {
    width: 100%;
    height: 56vw;
    .hotList {
        width: 100%;
        height: 40vw;
        background: #fff;
        margin-top: 2vw;
        .hotList-top {
            width: 100%;
            height: 10vw;
            line-height: 10vw;
            color: #333;
            padding: 0 2vw;
            .hot {
                float: left;
                font-size: 4vw;
            }
            .underway {
                float: right;
                font-size: 3vw;
            }
        }
        .hotGoods {
            width: 100%;
            height: 46vw;
            background: #fff;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            &::-webkit-scrollbar {display:none}
            touch-action: none;
            .goodsCon {
                height: 100%;
                background: #fff;
                padding: 0 2vw;
                padding-top: 4vw;
                li {
                    display: inline-block;
                    width: 34vw;
                    height: 38vw;
                    padding: 0 2vw;
                    border-right: 1px solid #eee;
                    img {
                        width: 100%;
                        height: 22vw;
                    }
                    p {
                        width: 90%;
                        font-size: 4vw;
                        color: #333;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    del {
                        font-size: 3vw;
                        color: #999;
                    }
                    .bottom {
                        span {
                            float: left;
                            font-size: 4vw;
                            color: #ff0000;
                        }
                        .right {
                            float: right;
                            width: 18vw;
                            height: 5vw;
                            border: 1px solid #ff2600;
                            .coupon {
                                width: 30%;
                                text-align: center;
                                height: 100%;
                                line-height: 4vw;
                                color: #fff;
                                background: #ff2600;
                            }
                            .money {
                                width: 70%;
                                text-align: center;
                                line-height: 5vw;
                                font-size: 3vw;
                                color: #ff2600;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>