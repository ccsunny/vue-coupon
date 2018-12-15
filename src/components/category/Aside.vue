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
          <img :src="k.icon"/><span>{{k.className}}</span>
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
        classList: ["百货","电脑","电器","家纺","家具","家装","健康","美妆","母婴","男装","内衣","女装","汽车","食品","手机","水果","鞋包","运动"],
        goodsList:[
          [
            {
              className:"珠宝饰品",
              icon: require('../../assets/img/category/list/hundred/1.png')
            },
            {
              className:"纸品湿巾",
              icon: require('../../assets/img/category/list/hundred/2.png')
            },
            {
              className:"洗护清洁",
              icon: require('../../assets/img/category/list/hundred/3.png')
            },
            {
              className:"图书乐器",
              icon: require('../../assets/img/category/list/hundred/4.png')
            },
            {
              className:"水杯餐具",
              icon: require('../../assets/img/category/list/hundred/5.png')
            },
            {
              className:"收纳整理",
              icon: require('../../assets/img/category/list/hundred/6.png')
            },
            {
              className:"日用百货",
              icon: require('../../assets/img/category/list/hundred/7.png')
            },
            {
              className:"绿植园艺",
              icon: require('../../assets/img/category/list/hundred/8.png')
            },
            {
              className:"家庭清洁",
              icon: require('../../assets/img/category/list/hundred/9.png')
            },
            {
              className:"厨房用品",
              icon: require('../../assets/img/category/list/hundred/10.png')
            },
            {
              className:"宠物用品",
              icon: require('../../assets/img/category/list/hundred/11.png')
            },
            {
              className:"成人用品",
              icon: require('../../assets/img/category/list/hundred/12.png')
            }
          ],
          [
            {
              className:"办公设备",
              icon: require('../../assets/img/category/list/computer/1.png')
            },
            {
              className:"笔类",
              icon: require('../../assets/img/category/list/computer/2.png')
            },
            {
              className:"电脑整机",
              icon: require('../../assets/img/category/list/computer/3.png')
            },
            {
              className:"平板电脑",
              icon: require('../../assets/img/category/list/computer/4.png')
            },
            {
              className:"外设配件",
              icon: require('../../assets/img/category/list/computer/5.png')
            },
            {
              className:"网络设备",
              icon: require('../../assets/img/category/list/computer/6.png')
            },
            {
              className:"学生文具",
              icon: require('../../assets/img/category/list/computer/7.png')
            },
            {
              className:"学习机",
              icon: require('../../assets/img/category/list/computer/8.png')
            },
            {
              className:"游戏设备",
              icon: require('../../assets/img/category/list/computer/9.png')
            }
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
            }
          ],
          [
            {
              className:"被子被芯",
              icon: require('../../assets/img/category/list/textiles/1.png') 
            },
            {
              className:"床单被套",
              icon: require('../../assets/img/category/list/textiles/2.png') 
            },
            {
              className:"地毯窗帘",
              icon: require('../../assets/img/category/list/textiles/3.png') 
            },
            {
              className:"冬上新",
              icon: require('../../assets/img/category/list/textiles/4.png') 
            },
            {
              className:"家居饰品",
              icon: require('../../assets/img/category/list/textiles/5.png') 
            },
            {
              className:"毛巾沙发垫",
              icon: require('../../assets/img/category/list/textiles/6.png') 
            },
            {
              className:"毛毯床垫",
              icon: require('../../assets/img/category/list/textiles/7.png') 
            },
            {
              className:"四件套",
              icon: require('../../assets/img/category/list/textiles/8.png') 
            },
            {
              className:"枕芯枕套",
              icon: require('../../assets/img/category/list/textiles/9.png') 
            }
          ],
          [
            {
              className:"办公家具",
              icon: require('../../assets/img/category/list/furniture/1.png')   
            },
            {
              className:"餐桌电脑桌",
              icon: require('../../assets/img/category/list/furniture/2.png')   
            },
            {
              className:"床和床垫",
              icon: require('../../assets/img/category/list/furniture/3.png')   
            },
            {
              className:"儿童家具",
              icon: require('../../assets/img/category/list/furniture/4.png')   
            },
            {
              className:"柜子架子",
              icon: require('../../assets/img/category/list/furniture/5.png')   
            },
            {
              className:"户外家具",
              icon: require('../../assets/img/category/list/furniture/6.png')   
            },
            {
              className:"沙发电视柜",
              icon: require('../../assets/img/category/list/furniture/7.png')   
            },
            {
              className:"学习桌",
              icon: require('../../assets/img/category/list/furniture/8.png')   
            },
            {
              className:"椅子凳子",
              icon: require('../../assets/img/category/list/furniture/9.png')   
            }
          ],
          [
            {
              className:"厨房",
              icon: require('../../assets/img/category/list/decoration/1.png') 
            },
            {
              className:"灯饰照明",
              icon: require('../../assets/img/category/list/decoration/2.png') 
            },
            {
              className:"电工电料",
              icon: require('../../assets/img/category/list/decoration/3.png') 
            },
            {
              className:"基础建筑",
              icon: require('../../assets/img/category/list/decoration/4.png') 
            },
            {
              className:"监控安装",
              icon: require('../../assets/img/category/list/decoration/5.png') 
            },
            {
              className:"墙地面",
              icon: require('../../assets/img/category/list/decoration/6.png') 
            },
            {
              className:"全屋定制",
              icon: require('../../assets/img/category/list/decoration/7.png') 
            },
            {
              className:"卫浴用品",
              icon: require('../../assets/img/category/list/decoration/8.png') 
            },
            {
              className:"五金工具",
              icon: require('../../assets/img/category/list/decoration/9.png') 
            }
          ],
          [
            {
              className:"家庭常备",
              icon: require('../../assets/img/category/list/health/1.png') 
            },
            {
              className:"时令应季",
              icon: require('../../assets/img/category/list/health/2.png') 
            },
            {
              className:"医药器械",
              icon: require('../../assets/img/category/list/health/3.png') 
            },
            {
              className:"隐形眼睛",
              icon: require('../../assets/img/category/list/health/4.png') 
            },
            {
              className:"中西药品",
              icon: require('../../assets/img/category/list/health/5.png') 
            }
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
              className:"冬上新",
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
              className:"童装",
              icon: require('../../assets/img/category/list/infant/4.png')
            },
            {
              className:"玩具乐器",
              icon: require('../../assets/img/category/list/infant/5.png')
            },
            {
              className:"学习文具",
              icon: require('../../assets/img/category/list/infant/6.png')
            },
            {
              className:"用品湿巾",
              icon: require('../../assets/img/category/list/infant/7.png')
            },
            {
              className:"孕妈专区",
              icon: require('../../assets/img/category/list/infant/8.png')
            },
            {
              className:"纸尿裤",
              icon: require('../../assets/img/category/list/infant/9.png')
            }
          ],
          [
            {
              className:"衬衫",
              icon: require('../../assets/img/category/list/men/1.png')
            },
            {
              className:"夹克",
              icon: require('../../assets/img/category/list/men/2.png')
            },
            {
              className:"毛衫",
              icon: require('../../assets/img/category/list/men/3.png')
            },
            {
              className:"棉服",
              icon: require('../../assets/img/category/list/men/4.png')
            },
            {
              className:"牛仔裤",
              icon: require('../../assets/img/category/list/men/5.png')
            },
            {
              className:"套装",
              icon: require('../../assets/img/category/list/men/6.png')
            },
            {
              className:"卫衣",
              icon: require('../../assets/img/category/list/men/7.png')
            },
            {
              className:"休闲裤",
              icon: require('../../assets/img/category/list/men/8.png')
            },
            {
              className:"羽绒服",
              icon: require('../../assets/img/category/list/men/9.png')
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
              className:"打底衫",
              icon: require('../../assets/img/category/list/girl/1.png')
            },
            {
              className:"大码女装",
              icon: require('../../assets/img/category/list/girl/2.png')
            },
            {
              className:"冬上衣",
              icon: require('../../assets/img/category/list/girl/3.png')
            },
            {
              className:"厚外套",
              icon: require('../../assets/img/category/list/girl/4.png')
            },
            {
              className:"毛呢大衣",
              icon: require('../../assets/img/category/list/girl/5.png')
            },
            {
              className:"棉衣",
              icon: require('../../assets/img/category/list/girl/6.png')
            },
            {
              className:"牛仔裤",
              icon: require('../../assets/img/category/list/girl/7.png')
            },
            {
              className:"女裤",
              icon: require('../../assets/img/category/list/girl/8.png')
            },
            {
              className:"女装",
              icon: require('../../assets/img/category/list/girl/9.png')
            },
            {
              className:"裙装",
              icon: require('../../assets/img/category/list/girl/10.png')
            },
            {
              className:"套装",
              icon: require('../../assets/img/category/list/girl/11.png')
            },
            {
              className:"针织毛衣",
              icon: require('../../assets/img/category/list/girl/12.png')
            }
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
              className:"茶叶冲饮",
              icon: require('../../assets/img/category/list/food/2.png')
            },
            {
              className:"坚果蜜饯",
              icon: require('../../assets/img/category/list/food/3.png')
            },
            {
              className:"粮油速食",
              icon: require('../../assets/img/category/list/food/4.png')
            },
            {
              className:"农货节",
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
              className:"营养保健",
              icon: require('../../assets/img/category/list/food/8.png')
            },
            {
              className:"中外名酒",
              icon: require('../../assets/img/category/list/food/9.png')
            }
          ],
          [
            {
              className:"充电宝",
              icon: require('../../assets/img/category/list/phone/1.png')
            },
            {
              className:"充电线_器",
              icon: require('../../assets/img/category/list/phone/2.png')
            },
            {
              className:"耳机_耳麦",
              icon: require('../../assets/img/category/list/phone/3.png')
            },
            {
              className:"壳膜_支架",
              icon: require('../../assets/img/category/list/phone/4.png')
            },
            {
              className:"手环_手表",
              icon: require('../../assets/img/category/list/phone/5.png')
            },
            {
              className:"手机",
              icon: require('../../assets/img/category/list/phone/6.png')
            },
            {
              className:"相机",
              icon: require('../../assets/img/category/list/phone/7.png')
            },
            {
              className:"音响_音箱",
              icon: require('../../assets/img/category/list/phone/8.png')
            },
            {
              className:"智能生活",
              icon: require('../../assets/img/category/list/phone/9.png')
            }
          ],
          [
            {
              className:"大闸蟹",
              icon: require('../../assets/img/category/list/fruits/1.png')
            },
            {
              className:"蛋_蛋制品",
              icon: require('../../assets/img/category/list/fruits/2.png')
            },
            {
              className:"瓜果桃梨",
              icon: require('../../assets/img/category/list/fruits/3.png')
            },
            {
              className:"海鲜水产",
              icon: require('../../assets/img/category/list/fruits/4.png')
            },
            {
              className:"进口优选",
              icon: require('../../assets/img/category/list/fruits/5.png')
            },
            {
              className:"品质肉禽",
              icon: require('../../assets/img/category/list/fruits/6.png')
            },
            {
              className:"蔬菜_制品",
              icon: require('../../assets/img/category/list/fruits/7.png')
            },
            {
              className:"熟食凉菜",
              icon: require('../../assets/img/category/list/fruits/8.png')
            },
            {
              className:"新鲜水果",
              icon: require('../../assets/img/category/list/fruits/9.png')
            }
          ],
          [
            {
              className:"低帮鞋",
              icon: require('../../assets/img/category/list/shoes/1.png')
            },
            {
              className:"冬上新",
              icon: require('../../assets/img/category/list/shoes/2.png')
            },
            {
              className:"帆布鞋",
              icon: require('../../assets/img/category/list/shoes/3.png')
            },
            {
              className:"服饰配件",
              icon: require('../../assets/img/category/list/shoes/4.png')
            },
            {
              className:"高帮鞋",
              icon: require('../../assets/img/category/list/shoes/5.png')
            },
            {
              className:"男鞋",
              icon: require('../../assets/img/category/list/shoes/6.png')
            },
            {
              className:"女鞋",
              icon: require('../../assets/img/category/list/shoes/7.png')
            },
            {
              className:"皮鞋",
              icon: require('../../assets/img/category/list/shoes/8.png')
            },
            {
              className:"双肩包",
              icon: require('../../assets/img/category/list/shoes/9.png')
            },
            {
              className:"腕表眼镜",
              icon: require('../../assets/img/category/list/shoes/10.png')
            },
            {
              className:"箱包皮具",
              icon: require('../../assets/img/category/list/shoes/11.png')
            },
            {
              className:"靴子",
              icon: require('../../assets/img/category/list/shoes/12.png')
            }
          ],
          [
            {
              className:"垂钓装备",
              icon: require('../../assets/img/category/list/sports/1.png')
            },
            {
              className:"户外鞋服",
              icon: require('../../assets/img/category/list/sports/2.png')
            },
            {
              className:"户外装备",
              icon: require('../../assets/img/category/list/sports/3.png')
            },
            {
              className:"健身器材",
              icon: require('../../assets/img/category/list/sports/4.png')
            },
            {
              className:"骑行装备",
              icon: require('../../assets/img/category/list/sports/5.png')
            },
            {
              className:"秋冬保暖",
              icon: require('../../assets/img/category/list/sports/6.png')
            },
            {
              className:"体育用品",
              icon: require('../../assets/img/category/list/sports/7.png')
            },
            {
              className:"运动服装",
              icon: require('../../assets/img/category/list/sports/8.png')
            },
            {
              className:"运动鞋",
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
