<template lang="html">
 <div class="aside">
  <div class="wrapper">
      <ul class="content">
          <li 
          v-for="(item,index) in classList" 
          :class="{active:index == num}"
           @click="tab(index)">{{item}}</li>
      </ul>
    </div>
    <div class="tabCon">
      <ul v-for='(itemCon,index) in goodsList' v-show=" index == num">
        <li v-for='k in itemCon'>
          <router-link :to="`/searchDetail?q=${k.className}`">
            <img :src="k.icon"/><span>{{k.className}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui'
import { Toast } from "mint-ui"
import axios from 'axios'
  export default {
    data () {
      return {
        classList: ["百货","家电","家居","男鞋","女鞋","配饰","数码","箱包","美妆","母婴","男装","内衣","女装","汽车","食品","运动"],
        goodsList:[
          [
            {
              className:"办公用品",
              icon: require('../../assets/img/category/list/hundred/1.jpg')
            },
            {
              className:"办公桌椅",
              icon: require('../../assets/img/category/list/hundred/2.png')
            },
            {
              className:"家庭清洁",
              icon: require('../../assets/img/category/list/hundred/4.png')
            },
            {
              className:"居家用品",
              icon: require('../../assets/img/category/list/hundred/5.jpg')
            },
            {
              className:"乐器",
              icon: require('../../assets/img/category/list/hundred/6.jpg')
            },
            {
              className:"绿植园艺",
              icon: require('../../assets/img/category/list/hundred/7.png')
            },
            {
              className:"毛巾、浴巾",
              icon: require('../../assets/img/category/list/hundred/8.jpg')
            },
            {
              className:"棋牌",
              icon: require('../../assets/img/category/list/hundred/9.jpg')
            },
            {
              className:"驱蚊灭虫",
              icon: require('../../assets/img/category/list/hundred/10.jpg')
            },
            {
              className:"日用百货",
              icon: require('../../assets/img/category/list/hundred/11.png')
            },
            {
              className:"收纳整理",
              icon: require('../../assets/img/category/list/hundred/12.png')
            },
            {
              className:"图书阅读",
              icon: require('../../assets/img/category/list/hundred/13.png')
            },
            {
              className:"洗护清洁",
              icon: require('../../assets/img/category/list/hundred/14.png')
            },
            {
              className:"学生文具",
              icon: require('../../assets/img/category/list/hundred/15.jpg')
            },
            {
              className:"音像",
              icon: require('../../assets/img/category/list/hundred/16.jpg')
            },
            {
              className:"纸巾、湿巾",
              icon: require('../../assets/img/category/list/hundred/17.png')
            },
            {
              className:"成人用品",
              icon: require('../../assets/img/category/list/hundred/3.png')
            },
          ],
          [
            {
              className:"冰箱空调",
              icon: require('../../assets/img/category/list/electric/1.png') 
            },
            {
              className:"厨房电器",
              icon: require('../../assets/img/category/list/electric/2.png') 
            },
            {
              className:"电火锅炖锅",
              icon: require('../../assets/img/category/list/electric/3.png') 
            },
            {
              className:"电视厨卫",
              icon: require('../../assets/img/category/list/electric/4.png') 
            },
            {
              className:"饭煲电磁炉",
              icon: require('../../assets/img/category/list/electric/5.png') 
            },
            {
              className:"个护健康",
              icon: require('../../assets/img/category/list/electric/6.png') 
            },
            {
              className:"取暖电器",
              icon: require('../../assets/img/category/list/electric/7.png') 
            },
            {
              className:"生活电器",
              icon: require('../../assets/img/category/list/electric/8.png') 
            },
            {
              className:"洗衣机",
              icon: require('../../assets/img/category/list/electric/9.png') 
            },
            {
              className:"耳机_耳麦",
              icon: require('../../assets/img/category/list/electric/10.png') 
            },
            {
              className:"音响_音箱",
              icon: require('../../assets/img/category/list/electric/11.png') 
            }
          ],
          [
            {
              className:"保温杯",
              icon: require('../../assets/img/category/list/home/1.png') 
            },
            {
              className:"餐具",
              icon: require('../../assets/img/category/list/home/2.jpg') 
            },
            {
              className:"茶具",
              icon: require('../../assets/img/category/list/home/3.jpg') 
            },
            {
              className:"厨房工具",
              icon: require('../../assets/img/category/list/home/4.jpg') 
            },
            {
              className:"厨房用品",
              icon: require('../../assets/img/category/list/home/5.jpg') 
            },
            {
              className:"床上用品",
              icon: require('../../assets/img/category/list/home/6.png') 
            },
            {
              className:"儿童家具",
              icon: require('../../assets/img/category/list/home/7.png') 
            },
            {
              className:"柜子架子",
              icon: require('../../assets/img/category/list/home/8.png') 
            },
            {
              className:"户外家具",
              icon: require('../../assets/img/category/list/home/9.png') 
            },
            {
              className:"家具",
              icon: require('../../assets/img/category/list/home/10.png') 
            },
            {
              className:"家装",
              icon: require('../../assets/img/category/list/home/11.png') 
            },
            {
              className:"酒具",
              icon: require('../../assets/img/category/list/home/12.jpg') 
            },
            {
              className:"开关插座",
              icon: require('../../assets/img/category/list/home/13.jpg') 
            },
            {
              className:"沙发电视柜",
              icon: require('../../assets/img/category/list/home/14.png') 
            },
            {
              className:"五金工具",
              icon: require('../../assets/img/category/list/home/15.png') 
            },
            {
              className:"学习桌",
              icon: require('../../assets/img/category/list/home/16.png') 
            },
            {
              className:"一次性用品",
              icon: require('../../assets/img/category/list/home/17.jpg') 
            },
            {
              className:"椅子凳子",
              icon: require('../../assets/img/category/list/home/18.png') 
            },
            {
              className:"艺术品",
              icon: require('../../assets/img/category/list/home/19.jpg') 
            },
            {
              className:"装修建材",
              icon: require('../../assets/img/category/list/home/20.png') 
            },
          ],
          [
            {
              className:"低帮鞋男",
              icon: require('../../assets/img/category/list/menShoes/1.jpg') 
            },
            {
              className:"高帮鞋男",
              icon: require('../../assets/img/category/list/menShoes/2.jpg') 
            },
            {
              className:"皮鞋男",
              icon: require('../../assets/img/category/list/menShoes/3.jpg') 
            },
            {
              className:"休闲鞋男",
              icon: require('../../assets/img/category/list/menShoes/4.jpg') 
            },
            {
              className:"靴子男",
              icon: require('../../assets/img/category/list/menShoes/5.jpg') 
            },
          ],
          [
            {
              className:"低帮鞋女",
              icon: require('../../assets/img/category/list/girlShoes/1.png') 
            },
            {
              className:"雪地靴女",
              icon: require('../../assets/img/category/list/girlShoes/2.png') 
            },
            {
              className:"帆布鞋女",
              icon: require('../../assets/img/category/list/girlShoes/3.png') 
            },
            {
              className:"高帮鞋女",
              icon: require('../../assets/img/category/list/girlShoes/4.png') 
            },
            {
              className:"高跟鞋",
              icon: require('../../assets/img/category/list/girlShoes/5.png') 
            },
            {
              className:"皮鞋女",
              icon: require('../../assets/img/category/list/girlShoes/6.png') 
            },
            {
              className:"靴子女",
              icon: require('../../assets/img/category/list/girlShoes/7.png') 
            },
          ],
          [
            {
              className:"服装配饰",
              icon: require('../../assets/img/category/list/accessory/1.jpg') 
            },
            {
              className:"贵重饰品",
              icon: require('../../assets/img/category/list/accessory/2.jpg') 
            },
            {
              className:"时尚饰品",
              icon: require('../../assets/img/category/list/accessory/3.jpg') 
            },
            {
              className:"手表",
              icon: require('../../assets/img/category/list/accessory/4.png') 
            },
            {
              className:"烟具",
              icon: require('../../assets/img/category/list/accessory/5.jpg') 
            },
            {
              className:"眼镜",
              icon: require('../../assets/img/category/list/accessory/6.jpg') 
            },
          ],
          [
            {
              className:"MP3",
              icon: require('../../assets/img/category/list/numCode/1.jpg') 
            },
            {
              className:"U盘",
              icon: require('../../assets/img/category/list/numCode/2.jpg') 
            },
            {
              className:"笔记本",
              icon: require('../../assets/img/category/list/numCode/3.jpg') 
            },
            {
              className:"充电宝",
              icon: require('../../assets/img/category/list/numCode/4.png') 
            },
            {
              className:"充电线_器",
              icon: require('../../assets/img/category/list/numCode/5.png') 
            },
            {
              className:"电池",
              icon: require('../../assets/img/category/list/numCode/6.jpg') 
            },
            {
              className:"耳机_耳麦",
              icon: require('../../assets/img/category/list/numCode/7.png') 
            },
            {
              className:"镜头",
              icon: require('../../assets/img/category/list/numCode/8.jpg') 
            },
            {
              className:"路由器",
              icon: require('../../assets/img/category/list/numCode/9.jpg') 
            },
            {
              className:"闪存卡",
              icon: require('../../assets/img/category/list/numCode/10.jpg') 
            },
            {
              className:"摄像机",
              icon: require('../../assets/img/category/list/numCode/11.jpg') 
            },
            {
              className:"手环_手表",
              icon: require('../../assets/img/category/list/numCode/12.png') 
            },
            {
              className:"手机",
              icon: require('../../assets/img/category/list/numCode/13.png') 
            },
            {
              className:"手机配件",
              icon: require('../../assets/img/category/list/numCode/14.jpg') 
            },
            {
              className:"台式电脑",
              icon: require('../../assets/img/category/list/numCode/15.jpg') 
            },
            {
              className:"相机",
              icon: require('../../assets/img/category/list/numCode/16.png') 
            },
            {
              className:"游戏机",
              icon: require('../../assets/img/category/list/numCode/17.jpg') 
            },
            {
              className:"智能生活",
              icon: require('../../assets/img/category/list/numCode/18.png') 
            },
          ],
          [
            {
              className:"旅行箱包",
              icon: require('../../assets/img/category/list/bag/1.jpg') 
            },
            {
              className:"男包",
              icon: require('../../assets/img/category/list/bag/2.jpg') 
            },
            {
              className:"女包",
              icon: require('../../assets/img/category/list/bag/3.png') 
            },
            {
              className:"钱包",
              icon: require('../../assets/img/category/list/bag/4.jpg') 
            },
            {
              className:"双肩包",
              icon: require('../../assets/img/category/list/bag/5.png') 
            },
            {
              className:"箱、包配件",
              icon: require('../../assets/img/category/list/bag/6.jpg') 
            },
          ],
          [
            {
              className:"彩妆香氛",
              icon: require('../../assets/img/category/list/makeup/1.png') 
            },
            {
              className:"护手霜",
              icon: require('../../assets/img/category/list/makeup/2.png') 
            },
            {
              className:"口红唇膏",
              icon: require('../../assets/img/category/list/makeup/3.png') 
            },
            {
              className:"美发护发",
              icon: require('../../assets/img/category/list/makeup/4.png') 
            },
            {
              className:"美妆工具",
              icon: require('../../assets/img/category/list/makeup/5.png') 
            },
            {
              className:"面部护理",
              icon: require('../../assets/img/category/list/makeup/6.png') 
            },
            {
              className:"面膜",
              icon: require('../../assets/img/category/list/makeup/7.png') 
            },
            {
              className:"身体护理",
              icon: require('../../assets/img/category/list/makeup/8.png') 
            },
            {
              className:"爽肤水乳",
              icon: require('../../assets/img/category/list/makeup/9.png') 
            }
          ],
          [
            {
              className:"喂养用品",
              icon: require('../../assets/img/category/list/infant/1.png')
            },
            {
              className:"童床_童车",
              icon: require('../../assets/img/category/list/infant/2.png')
            },
            {
              className:"童鞋",
              icon: require('../../assets/img/category/list/infant/3.png')
            },
            {
              className:"奶粉",
              icon: require('../../assets/img/category/list/infant/4.jpg')
            },
            {
              className:"尿不湿",
              icon: require('../../assets/img/category/list/infant/5.png')
            },
            {
              className:"玩具",
              icon: require('../../assets/img/category/list/infant/6.png')
            },
            {
              className:"学习文具",
              icon: require('../../assets/img/category/list/infant/7.png')
            },
            {
              className:"婴童服饰",
              icon: require('../../assets/img/category/list/infant/8.png')
            },
            {
              className:"婴童湿巾",
              icon: require('../../assets/img/category/list/infant/9.jpg')
            },
            {
              className:"婴童洗护",
              icon: require('../../assets/img/category/list/infant/10.png')
            },
            {
              className:"孕产用品",
              icon: require('../../assets/img/category/list/infant/11.png')
            }
          ],
          [
            {
              className:"衬衫男",
              icon: require('../../assets/img/category/list/menClothes/1.png')
            },
            {
              className:"夹克男",
              icon: require('../../assets/img/category/list/menClothes/2.png')
            },
            {
              className:"毛衫男",
              icon: require('../../assets/img/category/list/menClothes/3.png')
            },
            {
              className:"棉服男",
              icon: require('../../assets/img/category/list/menClothes/4.png')
            },
            {
              className:"牛仔裤男",
              icon: require('../../assets/img/category/list/menClothes/5.png')
            },
            {
              className:"套装男",
              icon: require('../../assets/img/category/list/menClothes/6.png')
            },
            {
              className:"卫衣男",
              icon: require('../../assets/img/category/list/menClothes/7.png')
            },
            {
              className:"休闲裤男",
              icon: require('../../assets/img/category/list/menClothes/8.png')
            },
            {
              className:"羽绒服男",
              icon: require('../../assets/img/category/list/menClothes/9.png')
            },
            {
              className:"T恤男",
              icon: require('../../assets/img/category/list/menClothes/10.jpg')
            },
            {
              className:"爸爸装",
              icon: require('../../assets/img/category/list/menClothes/11.jpg')
            },
            {
              className:"短裤男",
              icon: require('../../assets/img/category/list/menClothes/12.jpg')
            },
            {
              className:"毛呢大衣男",
              icon: require('../../assets/img/category/list/menClothes/13.jpg')
            },
            {
              className:"针织衫男",
              icon: require('../../assets/img/category/list/menClothes/14.jpg')
            }
          ],
          [
            {
              className:"保暖内衣",
              icon: require('../../assets/img/category/list/underwear/1.png')
            },
            {
              className:"吊带背心",
              icon: require('../../assets/img/category/list/underwear/2.png')
            },
            {
              className:"男士内衣",
              icon: require('../../assets/img/category/list/underwear/3.png')
            },
            {
              className:"内裤",
              icon: require('../../assets/img/category/list/underwear/4.png')
            },
            {
              className:"女士内衣",
              icon: require('../../assets/img/category/list/underwear/5.png')
            },
            {
              className:"睡衣",
              icon: require('../../assets/img/category/list/underwear/6.png')
            },
            {
              className:"塑身美体",
              icon: require('../../assets/img/category/list/underwear/7.png')
            },
            {
              className:"袜子",
              icon: require('../../assets/img/category/list/underwear/8.png')
            },
            {
              className:"文胸",
              icon: require('../../assets/img/category/list/underwear/9.png')
            }
          ],
          [
            {
              className:"打底衫女",
              icon: require('../../assets/img/category/list/girlClothes/1.png')
            },
            {
              className:"大码女装",
              icon: require('../../assets/img/category/list/girlClothes/2.png')
            },
            {
              className:"风衣女",
              icon: require('../../assets/img/category/list/girlClothes/3.jpg')
            },
            {
              className:"厚外套女",
              icon: require('../../assets/img/category/list/girlClothes/4.png')
            },
            {
              className:"毛呢大衣女",
              icon: require('../../assets/img/category/list/girlClothes/5.png')
            },
            {
              className:"棉衣女",
              icon: require('../../assets/img/category/list/girlClothes/6.png')
            },
            {
              className:"牛仔裤女",
              icon: require('../../assets/img/category/list/girlClothes/7.png')
            },
            {
              className:"女休闲裤",
              icon: require('../../assets/img/category/list/girlClothes/8.png')
            },
            {
              className:"女装",
              icon: require('../../assets/img/category/list/girlClothes/9.png')
            },
            {
              className:"半身裙",
              icon: require('../../assets/img/category/list/girlClothes/10.jpg')
            },
            {
              className:"套装女",
              icon: require('../../assets/img/category/list/girlClothes/11.png')
            },
            {
              className:"针织毛衣女",
              icon: require('../../assets/img/category/list/girlClothes/12.png')
            },
            {
              className:"T恤女",
              icon: require('../../assets/img/category/list/girlClothes/13.jpg')
            },
            {
              className:"打底裤女",
              icon: require('../../assets/img/category/list/girlClothes/14.jpg')
            },
            {
              className:"礼服女",
              icon: require('../../assets/img/category/list/girlClothes/15.jpg')
            },
            {
              className:"连衣裙女",
              icon: require('../../assets/img/category/list/girlClothes/16.png')
            },
            {
              className:"妈妈装",
              icon: require('../../assets/img/category/list/girlClothes/17.jpg')
            },
            {
              className:"毛衣女",
              icon: require('../../assets/img/category/list/girlClothes/18.jpg')
            },
            {
              className:"上衣女",
              icon: require('../../assets/img/category/list/girlClothes/19.jpg')
            },
            {
              className:"卫衣女",
              icon: require('../../assets/img/category/list/girlClothes/20.jpg')
            },
            {
              className:"西装裤女",
              icon: require('../../assets/img/category/list/girlClothes/21.jpg')
            },
            {
              className:"羽绒服女",
              icon: require('../../assets/img/category/list/girlClothes/22.jpg')
            },
          ],
          [
            {
              className:"车用电子",
              icon: require('../../assets/img/category/list/car/1.png')
            },
            {
              className:"脚垫尾箱垫",
              icon: require('../../assets/img/category/list/car/2.png')
            },
            {
              className:"美容养护",
              icon: require('../../assets/img/category/list/car/3.png')
            },
            {
              className:"摩托车配件",
              icon: require('../../assets/img/category/list/car/4.png')
            },
            {
              className:"汽车零配件",
              icon: require('../../assets/img/category/list/car/5.png')
            },
            {
              className:"汽车内饰品",
              icon: require('../../assets/img/category/list/car/6.png')
            },
            {
              className:"清洗工具",
              icon: require('../../assets/img/category/list/car/7.png')
            },
            {
              className:"外饰防护",
              icon: require('../../assets/img/category/list/car/8.png')
            },
            {
              className:"坐垫座套",
              icon: require('../../assets/img/category/list/car/9.png')
            }
          ],
          [
            {
              className:"饼干糕点",
              icon: require('../../assets/img/category/list/food/1.png')
            },
            {
              className:"谷物冲饮",
              icon: require('../../assets/img/category/list/food/2.png')
            },
            {
              className:"坚果蜜饯",
              icon: require('../../assets/img/category/list/food/3.png')
            },
            {
              className:"速食",
              icon: require('../../assets/img/category/list/food/4.png')
            },
            {
              className:"海鲜水产",
              icon: require('../../assets/img/category/list/food/5.png')
            },
            {
              className:"乳制品",
              icon: require('../../assets/img/category/list/food/6.png')
            },
            {
              className:"休闲零食",
              icon: require('../../assets/img/category/list/food/7.png')
            },
            {
              className:"保健品",
              icon: require('../../assets/img/category/list/food/8.png')
            },
            {
              className:"名酒",
              icon: require('../../assets/img/category/list/food/9.png')
            },
            {
              className:"肉食",
              icon: require('../../assets/img/category/list/food/10.png')
            },
            {
              className:"水果蔬菜",
              icon: require('../../assets/img/category/list/food/11.png')
            },
          ],
          [
            {
              className:"游泳",
              icon: require('../../assets/img/category/list/sports/1.jpg')
            },
            {
              className:"泳衣",
              icon: require('../../assets/img/category/list/sports/2.jpg')
            },
            {
              className:"户外装备",
              icon: require('../../assets/img/category/list/sports/3.png')
            },
            {
              className:"户外套装",
              icon: require('../../assets/img/category/list/sports/4.png')
            },
            {
              className:"骑行装备",
              icon: require('../../assets/img/category/list/sports/5.png')
            },
            {
              className:"瑜伽",
              icon: require('../../assets/img/category/list/sports/6.jpg')
            },
            {
              className:"运动配件",
              icon: require('../../assets/img/category/list/sports/7.png')
            },
            {
              className:"运动鞋服",
              icon: require('../../assets/img/category/list/sports/8.png')
            },
            {
              className:"运动用具",
              icon: require('../../assets/img/category/list/sports/9.png')
            }
          ]
        ],
        num: 0
      }
    },
    methods:{
      tab(index) {
        this.num = index;
      },
    }
  }
</script>

<style lang="less" scoped>
.aside{
  width: 100%;
  height: 100%;
  background: #fff;
  .wrapper {
    width: 25%;
    position: absolute;
    top: 12vw;
    left: 0;
    bottom: 14.5vw;
    overflow: hidden;
    border-right:1px solid #eee;
    background: #fafafa;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    .content {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        text-align: center;
        height: 13.5vw;
        line-height: 13.5vw;
        font-size: 4vw;
        color: #333;
      }
      .active {
        color: #f51b68;
        position: relative;
        &::before {
          content: "";
          width: 1vw;
          height: 6vw;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: #f51b68;
        }
      }
    }
  }
  .tabCon {
    height: 100%;
    margin-left: 25%;
    padding: 0 5vw;
    padding-top: 14vw;
    padding-bottom: 16vw;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    box-sizing: border-box;
    ul {
      li {
        float: left;
        width: 31%;
        text-align: center;
        margin-right: 3%;
        margin-bottom: 4vw;
        img {
          display: block;
          width:  20vw;
          height: 20vw;
          margin-bottom: 2vw;
        }
        span {
          font-size: 3vw;
          color: #767676;
        }
      }
      li:nth-child(3n){
        margin-right: 0;
      }
    }
  }
}
</style>
