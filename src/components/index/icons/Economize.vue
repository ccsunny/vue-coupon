<template>
    <div class="economize">
        <div class="header">
            <i class="mint-toast-icon mintui mintui-back" @click="$router.go(-1)"></i>
            <h1>省大牌</h1>
        </div>
        <div class="header-top">
            <img src="../../../assets/img/index/icon/sdp/content.png"/>
        </div>
        <div class="container">
            <div class="wrapper" ref="wrapper">
                <ul class="content" ref="content">
                    <li v-for="item in imgList" ref="tabList"><img :src="item.icon"/></li>
                </ul>
            </div>
            <img class="banner" src="../../../assets/img/index/icon/sdp/banner1.png"/>
        </div>
        <v-hotList />
        <div class="recommend">
            <div class="top">
                <img src="../../../assets/img/index/icon/sdp/icon-huo.png"/>
                <span>人气推荐</span>
            </div>
            <img class="r-banner" src="../../../assets/img/index/icon/sdp/banner2.png"/>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
import HotList from "./economize/HotList"
export default {
    data () {
        return {
            imgList: [
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')},
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')},
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')},
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')},
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')},
                {icon: require('../../../assets/img/index/icon/sdp/oppo.jpg')}
            ],
        };
    },
    components: {
        'v-hotList': HotList,
    },
    mounted() {
        this.InitTabListScroll();
    },
    methods: {
        InitTabListScroll(){
            let width=0
            for (let i = 0; i <this.imgList.length; i++) {
                 width+=this.$refs.tabList[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
            }
            this.$refs.content.style.width=width+'vw'
            this.$nextTick(()=>{
                if (!this.scroll) {
                    this.scroll=new BScroll(this.$refs.wrapper, {
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
    background: #eee;
    padding-top: 12vw;
    box-sizing: border-box;    
    .header {
        width: 100%;
        height: 12vw;
        background-image: url(../../../assets/img/index/icon/sdp/ebackground.png);
        background-size: 100% 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        .mintui-back {
            position: absolute;
            top: 4vw;
            left: 6vw;
            font-size: 5vw;
            color: #fff;
        }
        h1 {
            font-size: 5vw;
            color: #fff;
            text-align: center;
            line-height: 12vw;            
        }
    }
    .header-top {
        width: 100%;
        text-align: center;
        height: 12vw;
        background-image: url(../../../assets/img/index/icon/sdp/background.jpg);
        background-size: 100% 100%;
        position: relative;
        img {
            width: 80%;
            height: 5vw;
            margin-top: 2vw;            
        }
    }
    .container {
        width: 100%;
        height: 50vw;
        padding-top: 18vw;
        background: #fff;    
        .wrapper {
            width: 100%;
            height: 20vw;
            position: absolute;
            top: 21vw;
            left: 0;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            &::-webkit-scrollbar {display:none}
            touch-action: none;
            .content {
                height: 100%;
                padding: 0 2vw;
                li {
                    display: inline-block;
                    width: 28vw;
                    height: 18vw;
                    padding: 0 2vw;
                    img {
                        width: 100%;
                        height: 100%;
                        box-shadow: 0 0 1px #eee;
                    }
                }
            }
        }
        .banner {
            display: block;
            width: 92%;
            height: 30vw;
            margin: 0 auto;
        }
    }
    .recommend {
        width: 100%;
        height: 46vw;
        background: #fff;
        margin-top: 2vw;
        .top {
            line-height: 10vw;
            padding-left: 2vw;
            img {
                width: 6vw;
                height: 6vw;
            }
            span {
                font-size: 4vw;
                color: #333;
            }
        }
        .r-banner {
            display: block;
            width: 94%;
            margin: 0 auto;
            height: 34vw;
        }
    }
}
</style>