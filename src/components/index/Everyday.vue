<template lang="html">
  <section class="section4">
    <div class="stroll">
      <img src="../../assets/img/index/djdzm.png" />
    </div>
    <div class="top">
      <ul>
        <li v-for="k in everydayList.everybodyTopGoodsList">
          <router-link :to="k.goodsType == 2 ? `/jingDetail?goods_id=${k.goodsId}` : `/taoDetail?NUM_IID=${k.goodsId}`">
            <img v-lazy="k.goodsImgUrl"/>
            <p>{{k.goodsName}}</p>
            <span>￥{{k.goodsDiscountPrice}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="hotGoods" ref="hotGoods">
      <ul class="goodsCon" ref="goodsCon">
        <li v-for="item in everydayList.everybodyContentGoodsList" ref="goodList">
          <router-link :to="item.goodsType == 2 ? `/jingDetail?goods_id=${item.goodsId}` : `/taoDetail?NUM_IID=${item.goodsId}`">
            <img v-lazy="item.goodsImgUrl"/>
            <p class="title">{{item.goodsName}}</p>
            <p class="volume">{{item.goodsVolume}}人已买</p>
            <p class="money">￥{{item.goodsDiscountPrice}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui'
import BScroll from "better-scroll"
export default {
  data () {
    return {
    };
  },
  props: {
    everydayList: {
      type: Object,
      required: true
    }
  },
  mounted() {
    let that = this;
    setTimeout(function(){
        that.InitGoodsListScroll();
    }, 1000);
  },
  methods: {
    InitGoodsListScroll(){
      let width=0
      for (let i = 0; i <this.everydayList.everybodyContentGoodsList.length; i++) {
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
li {
  background: #fff;
}
.section4 {
  padding-top: 3vw;
  .stroll {
    width: 100%;
    height: 6vw;
    margin-bottom: 3vw;
    img {
      display: block;
      width: 52%;
      height: 100%;
      margin: 0 auto;
    }
  }
  ul {
    li {
      float: left;
      .top-t {
        width: 20vw;
        height: 5vw;
        margin-left: 2vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 3vw;
        color: #999;
        margin-top: 2vw;
        margin-left: 2vw;
      }
    }
  }
  .top {
    ul {
      width: 100%;
      height: 44vw;
      text-align: center;
      background: #fff;
      li {
        float: left;
        width: 50%;
        height: 100%;
        padding-top: 6vw;
        box-sizing: border-box;
        position: relative;
        img {
          width: 52%;
          height: 22vw;
        }
        p{
          width: 64%;
          margin: 0 auto;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size: 4vw;
          color: #333;
          margin-top: 2vw;
        }
        span {
          font-size: 4vw;
          color: #f0306f;
          font-weight: 600;
        }
      }
      li:after {
        content: "";
        position: absolute;
        top: 10%;
        right: 0;
        width: 1px;
        height: 80%;
        background: #eee;
      }
    }
  }
  .hotGoods {
    border-top: 1px solid #eee;
    width: 100%;
    height: 44vw;
    background: #fff;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    touch-action: none;
    .goodsCon{
      height: 100%;
      background: #fff;
      li {
        width: 33.5vw;
        height: 100%;
        padding: 2vw;
        box-sizing: border-box;
        position: relative;
        img {
          width: 100%;
          height: 24vw;
        }
        p {
          line-height: 5vw;
          margin: 0;
          text-align: center;
        }
        .title {
          width: 100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size: 4vw;
          color: #333; 
          margin-top: 2vw;
        }
        .volume {
          color: #999;
        }
        .money {
          font-size: 4vw;
          color: #f0306f;
          font-weight: 600;
        }
      }
      li:after {
        content: "";
        position: absolute;
        top: 10%;
        right: 0;
        width: 1px;
        height: 80%;
        background: #eee;
      }
      li:last-child:after {
        width: 0;
      }
    }
  }
}
</style>
