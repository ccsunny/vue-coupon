<template>
    <div class="economize">
        <div class="header">
            <i class="mint-toast-icon mintui mintui-back" @click="$router.go(-1)"></i>
            <router-link to="/search">
              <div class="mint-searchbar-inner">
                <i class="mintui mintui-search"></i>
                <input type="search" placeholder="粘贴或输入要查询的商品名称搜索" class="mint-searchbar-core">
              </div>
            </router-link>
        </div>
        <h1><img src="../../../assets/img/index/icon/sdp/icon-cjdp.png"/></h1>
        <div class="hotGoods" ref="hotGoods">
            <ul class="goodsCon" ref="goodsCon">
                <li :class="{active:index == num}" v-for="(item,index) in goodsList" :key="index" ref="goodList" @click="tab(index)">{{item.goodsName}}</li>
            </ul>
        </div>
        <ul class="goodsIcon" v-for="(k,index) in swiper" :key="index" v-show=" index == num">
            <li v-for="m in k.swiperCon">
                <router-link :to="`/searchDetail?q=${m.className}`">
                    <img :src="m.icon"/>
                    <p>{{m.className}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
            goodsList:[
                {
                    id: 0,
                    goodsName: "精选"
                },
                {
                    id: 1,
                    goodsName: "居家"
                },
                {
                    id: 2,
                    goodsName: "男装"
                },
                {
                    id: 3,
                    goodsName: "女装"
                },
                {
                    id: 4,
                    goodsName: "美妆"
                },
                {
                    id: 5,
                    goodsName: "母婴"
                },
                {
                    id: 6,
                    goodsName: "数码"
                },
                {
                    id: 7,
                    goodsName: "食品"
                },
            ],
            swiper:[
                {
                    id: 0,
                    swiperCon: [
                        {
                            className:"adidas",
                            icon: require('../../../assets/img/index/icon/sdp/sift/1.png')
                        },
                        {
                            className:"iphone",
                            icon: require('../../../assets/img/index/icon/sdp/sift/2.png')
                        },
                        {
                            className:"lee",
                            icon: require('../../../assets/img/index/icon/sdp/sift/3.png')
                        },
                        {
                            className:"New Balance",
                            icon: require('../../../assets/img/index/icon/sdp/sift/4.png')
                        },
                        {
                            className:"UGG",
                            icon: require('../../../assets/img/index/icon/sdp/sift/5.png')
                        },
                        {
                            className:"百草味",
                            icon: require('../../../assets/img/index/icon/sdp/sift/6.png')
                        },
                        {
                            className:"迪士尼",
                            icon: require('../../../assets/img/index/icon/sdp/sift/7.png')
                        },
                        {
                            className:"海尔",
                            icon: require('../../../assets/img/index/icon/sdp/sift/8.png')
                        },
                        {
                            className:"韩都衣舍",
                            icon: require('../../../assets/img/index/icon/sdp/sift/9.png')
                        },
                        {
                            className:"好孩子",
                            icon: require('../../../assets/img/index/icon/sdp/sift/10.png')
                        },
                        {
                            className:"后",
                            icon: require('../../../assets/img/index/icon/sdp/sift/11.png')
                        },
                        {
                            className:"罗莱",
                            icon: require('../../../assets/img/index/icon/sdp/sift/12.png')
                        },
                        {
                            className:"马克华菲",
                            icon: require('../../../assets/img/index/icon/sdp/sift/13.png')
                        },
                        {
                            className:"美宝莲",
                            icon: require('../../../assets/img/index/icon/sdp/sift/14.png')
                        },
                        {
                            className:"美的",
                            icon: require('../../../assets/img/index/icon/sdp/sift/15.png')
                        },
                        {
                            className:"珀莱雅",
                            icon: require('../../../assets/img/index/icon/sdp/sift/16.png')
                        },
                        {
                            className:"强生",
                            icon: require('../../../assets/img/index/icon/sdp/sift/17.png')
                        },
                        {
                            className:"青蛙王子",
                            icon: require('../../../assets/img/index/icon/sdp/sift/18.png')
                        },
                        {
                            className:"三只松鼠",
                            icon: require('../../../assets/img/index/icon/sdp/sift/19.png')
                        },
                        {
                            className:"膳魔师",
                            icon: require('../../../assets/img/index/icon/sdp/sift/20.png')
                        },
                        {
                            className:"苏泊尔",
                            icon: require('../../../assets/img/index/icon/sdp/sift/21.png')
                        },
                        {
                            className:"小熊电器",
                            icon: require('../../../assets/img/index/icon/sdp/sift/22.png')
                        },
                        {
                            className:"悦木之源",
                            icon: require('../../../assets/img/index/icon/sdp/sift/23.png')
                        },
                        {
                            className:"卓诗尼",
                            icon: require('../../../assets/img/index/icon/sdp/sift/24.png')
                        },
                    ]
                },
                {
                    id: 1,
                    swiperCon: [
                        {
                            className:"Dettol滴露",
                            icon: require('../../../assets/img/index/icon/sdp/home/1.jpg')
                        },
                        {
                            className:"tenma家居",
                            icon: require('../../../assets/img/index/icon/sdp/home/2.jpg')
                        },
                        {
                            className:"tiger虎牌",
                            icon: require('../../../assets/img/index/icon/sdp/home/3.jpg')
                        },
                        {
                            className:"uchino内野",
                            icon: require('../../../assets/img/index/icon/sdp/home/4.jpg')
                        },
                        {
                            className:"zojirushi象印",
                            icon: require('../../../assets/img/index/icon/sdp/home/5.jpg')
                        },
                        {
                            className:"爱仕达厨具",
                            icon: require('../../../assets/img/index/icon/sdp/home/6.jpg')
                        },
                        {
                            className:"北极绒",
                            icon: require('../../../assets/img/index/icon/sdp/home/7.gif')
                        },
                        {
                            className:"博洋家纺",
                            icon: require('../../../assets/img/index/icon/sdp/home/8.jpg')
                        },
                        {
                            className:"富安娜",
                            icon: require('../../../assets/img/index/icon/sdp/home/9.jpg')
                        },
                        {
                            className:"格力",
                            icon: require('../../../assets/img/index/icon/sdp/home/10.jpg')
                        },
                        {
                            className:"洁丽雅",
                            icon: require('../../../assets/img/index/icon/sdp/home/11.jpg')
                        },
                        {
                            className:"蓝月亮",
                            icon: require('../../../assets/img/index/icon/sdp/home/12.jpg')
                        },
                        {
                            className:"乐扣乐扣",
                            icon: require('../../../assets/img/index/icon/sdp/home/13.jpg')
                        },
                        {
                            className:"罗莱",
                            icon: require('../../../assets/img/index/icon/sdp/home/14.jpg')
                        },
                        {
                            className:"膳魔师",
                            icon: require('../../../assets/img/index/icon/sdp/home/15.jpg')
                        },
                        {
                            className:"双立人",
                            icon: require('../../../assets/img/index/icon/sdp/home/16.jpg')
                        },
                        {
                            className:"苏泊尔",
                            icon: require('../../../assets/img/index/icon/sdp/home/17.jpg')
                        },
                        {
                            className:"威露士",
                            icon: require('../../../assets/img/index/icon/sdp/home/18.jpg')
                        },
                        {
                            className:"新宝",
                            icon: require('../../../assets/img/index/icon/sdp/home/19.jpg')
                        },
                        {
                            className:"庄臣",
                            icon: require('../../../assets/img/index/icon/sdp/home/20.jpg')
                        },
                    ]
                },
                {
                    id: 2,
                    swiperCon: [
                        {
                            className:"adidas",
                            icon: require('../../../assets/img/index/icon/sdp/men/1.jpg')
                        },
                        {
                            className:"fox金狐狸",
                            icon: require('../../../assets/img/index/icon/sdp/men/2.jpg')
                        },
                        {
                            className:"hazzys",
                            icon: require('../../../assets/img/index/icon/sdp/men/3.jpg')
                        },
                        {
                            className:"hipanda",
                            icon: require('../../../assets/img/index/icon/sdp/men/4.jpg')
                        },
                        {
                            className:"lee",
                            icon: require('../../../assets/img/index/icon/sdp/men/5.jpg')
                        },
                        {
                            className:"New Balance",
                            icon: require('../../../assets/img/index/icon/sdp/men/6.jpg')
                        },
                        {
                            className:"爱登堡",
                            icon: require('../../../assets/img/index/icon/sdp/men/7.jpg')
                        },
                        {
                            className:"奥康鞋业",
                            icon: require('../../../assets/img/index/icon/sdp/men/8.jpg')
                        },
                        {
                            className:"承发男鞋",
                            icon: require('../../../assets/img/index/icon/sdp/men/9.jpg')
                        },
                        {
                            className:"花花公子服饰",
                            icon: require('../../../assets/img/index/icon/sdp/men/10.jpg')
                        },
                        {
                            className:"劲霸",
                            icon: require('../../../assets/img/index/icon/sdp/men/11.jpg')
                        },
                        {
                            className:"李宁",
                            icon: require('../../../assets/img/index/icon/sdp/men/12.jpg')
                        },
                        {
                            className:"马克华菲",
                            icon: require('../../../assets/img/index/icon/sdp/men/13.jpg')
                        },
                        {
                            className:"胖胖哥大码男装",
                            icon: require('../../../assets/img/index/icon/sdp/men/14.jpg')
                        },
                        {
                            className:"杉杉",
                            icon: require('../../../assets/img/index/icon/sdp/men/15.jpg')
                        },
                        {
                            className:"雅戈尔",
                            icon: require('../../../assets/img/index/icon/sdp/men/16.jpg')
                        },
                        {
                            className:"衣品天成",
                            icon: require('../../../assets/img/index/icon/sdp/men/17.jpg')
                        },
                        {
                            className:"子俊男装",
                            icon: require('../../../assets/img/index/icon/sdp/men/18.jpg')
                        },
                    ]
                },
                {
                    id: 3,
                    swiperCon: [
                        {
                            className:"a02",
                            icon: require('../../../assets/img/index/icon/sdp/girl/1.jpg')
                        },
                        {
                            className:"artka",
                            icon: require('../../../assets/img/index/icon/sdp/girl/2.jpg')
                        },
                        {
                            className:"DOMS鞋社",
                            icon: require('../../../assets/img/index/icon/sdp/girl/3.png')
                        },
                        {
                            className:"gainreel歌瑞尔",
                            icon: require('../../../assets/img/index/icon/sdp/girl/4.jpg')
                        },
                        {
                            className:"JNBY",
                            icon: require('../../../assets/img/index/icon/sdp/girl/5.jpg')
                        },
                        {
                            className:"olrain",
                            icon: require('../../../assets/img/index/icon/sdp/girl/6.jpg')
                        },
                        {
                            className:"osa",
                            icon: require('../../../assets/img/index/icon/sdp/girl/7.jpg')
                        },
                        {
                            className:"qda",
                            icon: require('../../../assets/img/index/icon/sdp/girl/8.jpg')
                        },
                        {
                            className:"UGG",
                            icon: require('../../../assets/img/index/icon/sdp/girl/9.jpg')
                        },
                        {
                            className:"达芙妮",
                            icon: require('../../../assets/img/index/icon/sdp/girl/10.jpg')
                        },
                        {
                            className:"韩都衣舍",
                            icon: require('../../../assets/img/index/icon/sdp/girl/11.png')
                        },
                        {
                            className:"红蜻蜓",
                            icon: require('../../../assets/img/index/icon/sdp/girl/12.jpg')
                        },
                        {
                            className:"例外部落",
                            icon: require('../../../assets/img/index/icon/sdp/girl/13.png')
                        },
                        {
                            className:"骆驼服饰",
                            icon: require('../../../assets/img/index/icon/sdp/girl/14.png')
                        },
                        {
                            className:"骆驼女鞋",
                            icon: require('../../../assets/img/index/icon/sdp/girl/15.png')
                        },
                        {
                            className:"纤麦服饰",
                            icon: require('../../../assets/img/index/icon/sdp/girl/16.jpg')
                        },
                        {
                            className:"茵曼",
                            icon: require('../../../assets/img/index/icon/sdp/girl/17.jpg')
                        },
                        {
                            className:"卓诗尼",
                            icon: require('../../../assets/img/index/icon/sdp/girl/18.jpg')
                        },
                    ]
                },
                {
                    id: 4,
                    swiperCon: [
                        {
                            className:"beely",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/1.png')
                        },
                        {
                            className:"Guerlain娇兰",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/2.jpg')
                        },
                        {
                            className:"后",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/3.jpg')
                        },
                        {
                            className:"KIEHL'S科颜氏",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/4.jpg')
                        },
                        {
                            className:"L’OCCITANE欧舒丹",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/5.jpg')
                        },
                        {
                            className:"Lancome兰蔻",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/6.jpg')
                        },
                        {
                            className:"SHISEIDO资生堂",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/7.jpg')
                        },
                        {
                            className:"Za姬芮",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/8.jpg')
                        },
                        {
                            className:"阿芙",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/9.jpg')
                        },
                        {
                            className:"百雀羚",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/10.jpg')
                        },
                        {
                            className:"柏卡姿",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/11.jpg')
                        },
                        {
                            className:"宝拉珍选",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/12.png')
                        },
                        {
                            className:"瓷肌",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/13.gif')
                        },
                        {
                            className:"法国娇韵诗",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/14.jpg')
                        },
                        {
                            className:"兰芝",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/15.jpg')
                        },
                        {
                            className:"美宝莲",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/16.jpg')
                        },
                        {
                            className:"魅丝蔻",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/17.png')
                        },
                        {
                            className:"雪肌精",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/18.jpg')
                        },
                        {
                            className:"雅漾",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/19.jpg')
                        },
                        {
                            className:"悦木之源",
                            icon: require('../../../assets/img/index/icon/sdp/beauty/20.jpg')
                        },
                    ]
                },
                {
                    id: 5,
                    swiperCon: [
                        {
                            className:"Aveeno",
                            icon: require('../../../assets/img/index/icon/sdp/mom/1.jpg')
                        },
                        {
                            className:"babycare",
                            icon: require('../../../assets/img/index/icon/sdp/mom/2.jpg')
                        },
                        {
                            className:"combi康贝",
                            icon: require('../../../assets/img/index/icon/sdp/mom/3.jpg')
                        },
                        {
                            className:"Huggies好奇",
                            icon: require('../../../assets/img/index/icon/sdp/mom/4.jpg')
                        },
                        {
                            className:"迪士尼",
                            icon: require('../../../assets/img/index/icon/sdp/mom/5.jpg')
                        },
                        {
                            className:"nuk",
                            icon: require('../../../assets/img/index/icon/sdp/mom/6.jpg')
                        },
                        {
                            className:"贝亲",
                            icon: require('../../../assets/img/index/icon/sdp/mom/7.jpg')
                        },
                        {
                            className:"大王",
                            icon: require('../../../assets/img/index/icon/sdp/mom/8.jpg')
                        },
                        {
                            className:"笛莎",
                            icon: require('../../../assets/img/index/icon/sdp/mom/9.png')
                        },
                        {
                            className:"费雪",
                            icon: require('../../../assets/img/index/icon/sdp/mom/10.jpg')
                        },
                        {
                            className:"歌歌宝贝",
                            icon: require('../../../assets/img/index/icon/sdp/mom/11.jpg')
                        },
                        {
                            className:"好孩子",
                            icon: require('../../../assets/img/index/icon/sdp/mom/12.jpg')
                        },
                        {
                            className:"可么多么",
                            icon: require('../../../assets/img/index/icon/sdp/mom/13.jpg')
                        },
                        {
                            className:"可优比",
                            icon: require('../../../assets/img/index/icon/sdp/mom/14.jpg')
                        },
                        {
                            className:"乐高",
                            icon: require('../../../assets/img/index/icon/sdp/mom/15.jpg')
                        },
                        {
                            className:"米诺奇",
                            icon: require('../../../assets/img/index/icon/sdp/mom/16.png')
                        },
                        {
                            className:"强生",
                            icon: require('../../../assets/img/index/icon/sdp/mom/17.jpg')
                        },
                        {
                            className:"青蛙王子",
                            icon: require('../../../assets/img/index/icon/sdp/mom/18.jpg')
                        },
                        {
                            className:"跳跳虎",
                            icon: require('../../../assets/img/index/icon/sdp/mom/19.png')
                        },
                    ]
                },
                {
                    id: 6,
                    swiperCon: [
                        {
                            className:"iphone",
                            icon: require('../../../assets/img/index/icon/sdp/code/1.jpg')
                        },
                        {
                            className:"小米",
                            icon: require('../../../assets/img/index/icon/sdp/code/2.jpg')
                        },
                        {
                            className:"美的",
                            icon: require('../../../assets/img/index/icon/sdp/code/3.jpg')
                        },
                        {
                            className:"oppo",
                            icon: require('../../../assets/img/index/icon/sdp/code/4.jpg')
                        },
                        {
                            className:"三星",
                            icon: require('../../../assets/img/index/icon/sdp/code/5.jpg')
                        },
                        {
                            className:"vivo",
                            icon: require('../../../assets/img/index/icon/sdp/code/6.jpg')
                        },
                        {
                            className:"罗马仕",
                            icon: require('../../../assets/img/index/icon/sdp/code/7.jpg')
                        },
                        {
                            className:"TCL",
                            icon: require('../../../assets/img/index/icon/sdp/code/8.jpg')
                        },
                        {
                            className:"飞利浦",
                            icon: require('../../../assets/img/index/icon/sdp/code/9.jpg')
                        },
                        {
                            className:"海尔",
                            icon: require('../../../assets/img/index/icon/sdp/code/10.jpg')
                        },
                        {
                            className:"惠普",
                            icon: require('../../../assets/img/index/icon/sdp/code/11.jpg')
                        },
                        {
                            className:"佳能",
                            icon: require('../../../assets/img/index/icon/sdp/code/12.jpg')
                        },
                        {
                            className:"罗马仕良米",
                            icon: require('../../../assets/img/index/icon/sdp/code/13.jpg')
                        },
                        {
                            className:"美图",
                            icon: require('../../../assets/img/index/icon/sdp/code/14.jpg')
                        },
                        {
                            className:"松下",
                            icon: require('../../../assets/img/index/icon/sdp/code/15.jpg')
                        },
                        {
                            className:"唐麦",
                            icon: require('../../../assets/img/index/icon/sdp/code/16.png')
                        },
                        {
                            className:"中山品能",
                            icon: require('../../../assets/img/index/icon/sdp/code/17.jpg')
                        },
                    ]
                },
                {
                    id: 7,
                    swiperCon: [
                        {
                            className:"logo-qjdyf",
                            icon: require('../../../assets/img/index/icon/sdp/food/1.jpg')
                        },
                        {
                            className:"百草味",
                            icon: require('../../../assets/img/index/icon/sdp/food/2.jpg')
                        },
                        {
                            className:"海天",
                            icon: require('../../../assets/img/index/icon/sdp/food/3.jpg')
                        },
                        {
                            className:"金龙鱼",
                            icon: require('../../../assets/img/index/icon/sdp/food/4.jpg')
                        },
                        {
                            className:"来伊份",
                            icon: require('../../../assets/img/index/icon/sdp/food/5.jpg')
                        },
                        {
                            className:"李锦记",
                            icon: require('../../../assets/img/index/icon/sdp/food/6.jpg')
                        },
                        {
                            className:"粒上皇",
                            icon: require('../../../assets/img/index/icon/sdp/food/7.jpg')
                        },
                        {
                            className:"米奇丁当",
                            icon: require('../../../assets/img/index/icon/sdp/food/8.jpg')
                        },
                        {
                            className:"三只松鼠",
                            icon: require('../../../assets/img/index/icon/sdp/food/9.jpg')
                        },
                        {
                            className:"汤臣倍健",
                            icon: require('../../../assets/img/index/icon/sdp/food/10.jpg')
                        },
                        {
                            className:"徐福记",
                            icon: require('../../../assets/img/index/icon/sdp/food/11.jpg')
                        },
                        {
                            className:"周黑鸭",
                            icon: require('../../../assets/img/index/icon/sdp/food/12.jpg')
                        },
                    ]
                },
            ],
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
            let width=20
            for (let i = 0; i <this.goodsList.length; i++) {
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
        tab(index) {
            this.num = index;
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
                font-size: 3vw;
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
        height: 8vw;
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
                width: 19vw;
                text-align: center;
                font-size: 4vw;
                color: #333;
                line-height: 7.9vw;
            }
            .active {
                color: #ff3333;
                border-bottom: 1px solid #ff3333;
            }
        }
    }
    .goodsIcon {
        width: 100%;
        height: 100%;
        background: #fff;
        li {
            float: left;
            width: 25%;
            height: 16%;
            text-align: center;
            border: 1px solid #eee;
            border-left: 0;
            padding-top: 4%;
            box-sizing: border-box;
            img {
                width: 66%;
                height: 66%;
                border: 1px solid #eee;
            }
            p{
                height: 20%;
                font-size: 3vw;
                color: #666;
            }
        }
        li:nth-child(4n) {
            border-right: 0;
        }
        li:nth-child(n+5) {
            border-top: 0;
        }
    }
}
</style>