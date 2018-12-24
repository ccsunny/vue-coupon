<template>
    <div class="lowPrice">
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon" :style="{width:36*(topGoods.length)+4+'vw'}">
                <li v-for="item in topGoods" ref="goodList">
                    <router-link :to="item.goodsType == 2 ? `/jingDetail?goods_id=${item.goodsId}` : `/taoDetail?NUM_IID=${item.goodsId}`">
                        <img :src="item.goodsImgUrl"/>
                        <div class="offer"></div>
                        <div class="rob">已抢{{item.goodsVolume}}件</div>
                        <p>{{ item.goodsName }}</p>
                        <span>￥{{ item.goodsDiscountPrice }}</span>
                        <del>￥{{ item.goodsFinalPrice }}</del>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
        }; 
    },
    props: {
        topGoods: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.InitGoodListScroll();
    },
    methods: {
        InitGoodListScroll(){
            let width=200
            for (let i = 0; i <this.topGoods.length; i++) {
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
    }
}
</script>
<style lang="less" scoped>
.lowPrice {
    .hotGoods {
        width: 100%;
        height: 47vw;
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
                    width: 28%;
                    height: 10vw;
                    background-image: url(../../../../assets/img/index/icon/pinkage/icon-tj.png);
                    background-size: 100% 100%;
                }
                .rob {
                    position: absolute;
                    top: 27.5vw;
                    left: 0;
                    padding: 0 4%;
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
}
</style>