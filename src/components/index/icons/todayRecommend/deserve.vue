<template>
    <div class="deserve">
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon" :style="{width:32*(topGoodsList.length)+4+'vw'}">
                <li v-for="item in topGoodsList" ref="goodList">
                    <router-link :to="item.goodsType == 2 ? `/jingDetail?goods_id=${item.goodsId}` : `/taoDetail?NUM_IID=${item.goodsId}`">
                        <img :src="item.goodsImgUrl"/>
                        <p>{{ item.goodsName }}</p>
                        <del>￥{{ item.goodsPrice }}</del>
                        <span>￥{{ item.goodsDiscountPrice }}</span>
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
        topGoodsList: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.InitGoodsListScroll();
    },
    methods: {
        InitGoodsListScroll(){
            let width= 100
            for (let i = 0; i <this.topGoodsList.length; i++) {
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
.deserve {
    .hotGoods {
        width: 100%;
        height: 52vw;
        background: #fff;
        overflow: hidden;
        .goodsCon {
            height: 100%;
            background: #fff;
            padding: 0 2vw;
            li {
                display: inline-block;
                width: 30vw;
                height: 50vw;
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
}
</style>