<template lang="html">
  <div class="like">
    <h3>
      <img src="../../../../assets/img/category/love.png"/>猜你喜欢
    </h3>
    <ul>
      <li v-for="(t,index) in goodsList">
        <router-link :to="`/taoDetail?NUM_IID=${t.NUM_IID}`" @click.native="refresh">
          <img class="left" :src="t.PICT_URL"/>
          <div class="right">
            <div class="r-top">
              <img :src=" t.USER_TYPE == 1 ? require('../../../../assets/img/category/tm.png') : require('../../../../assets/img/category/tb.png')"/>
              <p>{{t.TITLE}}</p>
            </div>
            <div class="sell">{{t.VOLUME}}件已售</div>
            <div class="r-middle">
              天猫价：<del>￥{{(Number(t.COUPON_INFO) + Number(t.ZK_FINAL_PRICE)).toFixed(2)}}</del>
            </div>
            <div class="r-bottom">
              <div class="current-price">￥{{t.ZK_FINAL_PRICE}}</div>
              <div class="coupon">劵 ￥{{t.COUPON_INFO}}</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    goodsList: {
      type: Array,
      required: true
    }
  },
  methods: {
    refresh:function(){
　　　this.$router.go(0);  
　　}
  }
}
</script>

<style lang="less" scoped>
.like {
  height: auto;
  background: #eee;
  h3 {
    text-align: center;
    font-size: 4.5vw;
    padding-top: 4vw;
    img {
      width: 4vw;
      height: 3vw;
      margin-right: 2vw;
    }
  }
  ul {
    margin-top: 4vw;
    padding: 0 2vw;
    li {
      width: 100%;
      height: 30vw;
      background: #fff;
      margin-bottom: 2vw;
      .left {
        float: left;
        width: 34%;
        height: 100%;
      }
      .right {
        float: left;
        width: 64%;
        margin-left: 2%;
        .r-top {
          width: 100%;
          height: 8vw;
          margin-top: 2vw;
          img {
            float: left;
            width: 8%;
            height: 4vw;
          }
          p{
            float: left;
            font-size: 3vw;
            width: 88%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-left: 4%;
            line-height: 4.5vw;
            color: #333;
          }
        }
        .sell {
          font-size: 2vw;
          padding-left: 8vw;
          color: #999;
        }
        .r-middle {
          font-size: 3vw;
          padding-left: 8vw;
          color: #999;
        }
        .r-bottom {
          margin-top: 2vw;
          padding-left: 12%;
          .current-price {
            float: left;
            font-size: 4vw;
            color: red;
            margin-right: 1vw;
          }
          .coupon {
            float: right;
            width: 38%;
            height: 8vw;
            line-height: 8vw;
            color: #fff;
            font-size: 3vw;
            text-align: center;
            background-image: url(../../../../assets/img/category/yhj.png);
            background-size: 100% 100%;
            margin-right: 8%;
            margin-top: -1vw;
          }
        }
      }
    }
  }
} 
</style>
