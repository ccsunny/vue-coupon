<template>
    <div class="economize">
        <div class="header">
            <i class="mint-toast-icon mintui mintui-back" @click="$router.go(-1)"></i>
            <router-link to="/search">
              <div class="mint-searchbar-inner">
                <i class="mintui mintui-search"></i>
                <input type="search" placeholder="超级大牌" class="mint-searchbar-core">
              </div>
            </router-link>
        </div>
        <h1><img src="../../../assets/img/index/icon/sdp/icon-cjdp.png"/></h1>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li :class="{active:index == num}" v-for="(item,index) in goodsList" ref="goodList">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
            goodsList:["居家","美食","运动户外","鞋包配饰","化妆品","母婴","内衣","女装","男装","数码家电","文体车品"],
            num: 0
        };
    },
    components: {
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
.economize {
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 12vw;
    box-sizing: border-box;
    .header {
        width: 100%;
        height: 12vw;
        padding-top: 2.5vw;
        background-image: url(../../../assets/img/common/ysbk.png);
        background-size: 100% 100%;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        border-bottom: 1px solid #eee;
        .mintui-back {
            float: left;
            margin-top: 1vw;
            margin-left: 4vw;
            margin-right: 4vw;
        }  
        .mint-searchbar-inner {
            float: left;
            padding: 0; 
            padding-left: 2vw;
            width: 80%;
            height: 7vw;
            background: #eee;
            border-radius: 4vw;
            box-sizing: border-box;
            .mintui-search {
                margin-right: 1vw;
                font-size: 5vw;
                color: #a4a4a4;
            }
            .mint-searchbar-core {
                margin: 0;
                padding: 0;
                width: 88%;
                height: 7vw;
                background: #eee;
                font-size: 4vw;
                color: #a4a4a4;
                text-align: left;
            }
        }
    }
    h1 {
        text-align: center;
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        img {
            width: 38%;
            height: 6vw;
        }
    }
    .hotGoods {
        width: 100%;
        height: 10vw;
        background: #fff;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {display:none}
        touch-action: none;
        .goodsCon {
            height: 100%;
            padding: 0 2vw;
            li {
                display: inline-block;
                padding: 0 4vw;
                font-size: 4vw;
                color: #333;
                line-height: 10vw;
            }
            .active {
                color: #ff3333;
            }
        }
    }
}
</style>