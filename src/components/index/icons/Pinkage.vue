<template>
    <div class="pinkage">
        <v-header class="header">
            <h1 slot="title">9.9包邮</h1>
        </v-header>
        <img class="banner" src="../../../assets/img/index/icon/pinkage/banner.png"/>
        <div class="r-title">
            <span class="today">今日推荐</span>
            <span class="low">9.9精选超低价</span>
        </div>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li v-for="item in goodsList" ref="goodList">
                    <img :src="item.icon"/>
                    <div class="offer">特价</div>
                    <div class="rob">已抢56件</div>
                    <p>{{ item.title }}</p>
                    <span>￥{{ item.nowPrice }}</span>
                    <del>￥{{ item.firstPrice }}</del>
                </li>
            </ul>
        </div>
        <div class="r-title">
            <span class="today">超值爆款</span>
            <span class="low">每日早上10点更新</span>
        </div>
        <ul class="goodsLists">
            <li>
                <img src="../../../assets/img/index/1.png"/>
                <div class="right">
                    <p>童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款</p>
                    <div class="r-middle">
                        <del>￥99</del>
                        <div class="promptly">立即抢购</div>
                    </div>
                    <div class="r-bottom">
                        <span class="nowPrice">￥66</span>
                        <span class="num">9999已售</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/img/index/1.png"/>
                <div class="right">
                    <p>童鞋男童皮鞋2018豆豆鞋单鞋潮款韩版休闲宝定皮鞋春秋季英伦新款</p>
                    <div class="r-middle">
                        <del>￥99</del>
                        <div class="promptly">立即抢购</div>
                    </div>
                    <div class="r-bottom">
                        <span class="nowPrice">￥66</span>
                        <span class="num">9999已售</span>
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
.pinkage {
    width: 100%;
    height: 100%;
    padding-top: 12vw;
    .banner {
        display: block;
        width: 100%;
        height: 34vw;
    }
    .r-title {
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        padding: 0 4vw;
        background: #fff;
        .today {
            font-size: 4.5vw;
            color: #333;
        }
        .low {
            font-size: 3vw;
            color: #999;
        }
    }
    .hotGoods {
        width: 100%;
        height: 48vw;
        background: #fff;
        margin-bottom: 2vw;
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
                width: 34vw;
                height: 46vw;
                margin-right: 2vw;
                text-align: center;
                position: relative;
                img {
                    width: 100%;
                    height: 32vw;
                    border: 1px solid #eee;
                }
                .offer {
                    position: absolute;
                    top: 0;
                    left: 3vw;
                    width: 34%;
                    height: 12vw;
                    line-height: 11vw;
                    background-image: url(../../../assets/img/index/icon/pinkage/icon-tj.png);
                    background-size: 100% 100%;
                    color: #fff;
                    font-size: 4vw;
                }
                .rob {
                    position: absolute;
                    top: 27.5vw;
                    left: 0;
                    width: 48%;
                    text-align: center;
                    height: 5vw;
                    line-height: 5vw;
                    background: #ff3333;
                    color: #fff;
                    font-size: 3vw;
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
                span {
                    font-size: 4vw;
                    font-weight: 600;
                    color: #ff3333;
                }
                del {
                    font-size: 3vw;
                    color: #999;
                }
            }
        }
    }
    .goodsLists {
        width: 100%;
        height: auto;
        li {
            width: 100%;
            height: 30vw;
            background: #fff;
            padding-left: 2vw;
            border-top: 1px solid #eee;
            box-sizing: border-box;
            img {
                float: left;
                width: 40%;
                height: 24vw;
                margin-top: 2vw;
            }
            .right {
                float: left;
                width: 60%;
                height: 100%;
                padding-top: 2vw;
                padding-left: 2vw;
                p{
                    font-size: 4vw;
                    color: #333;
                    width: 100%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .r-middle {
                    overflow: hidden;
                    margin-top: 2vw;
                    padding: 0 2vw;
                    del {
                        float: left;
                        color: #666;
                        font-size: 4vw;
                        margin-top: 1vw;
                    }
                    .promptly {
                        float: right;
                        width: 36%;
                        text-align: center;
                        height: 7vw;
                        line-height: 7vw;
                        font-size: 4vw;
                        color: #fff;
                        background: #ff0000;
                        border-radius: 6px;
                    }
                }
                .r-bottom {
                    margin-top: 2vw;
                    padding: 0 2vw;
                    .nowPrice {
                        float: left;
                        font-size: 5vw;
                        color: #ff0000;
                    }
                    .num {
                        float: right;
                        color: #666;
                        font-size: 4vw;
                    }
                }
            }
        }
    }
}
</style>