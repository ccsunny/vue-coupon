<template lang="html">
  <div class="like">
    <h3>
      <img src="../../../../assets/img/category/love.png"/>猜你喜欢
    </h3>
    <ul>
      <li v-for="(t,index) in goodLists">
        <router-link :to="`/jingDetail?goods_id=${t.goods_id}`" @click.native="refresh">
          <img class="left" v-lazy="t.goods_img"/>
          <div class="right">
            <div class="r-top">
              <img src="../../../../assets/img/category/jd.png"/>
              <p>{{t.goods_name}}</p>
            </div>
            <div class="r-middle">
              京东价：<del>￥{{t.goods_price}}</del>
            </div>
            <div class="r-bottom">
              <div class="current-price">￥{{t.coupon_price}}</div>
              <div class="coupon">劵 ￥{{t.discount_price}}</div>
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
    goodLists: {
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
    li {
      width: 94%;
      height: 34vw;
      margin: 0 auto;
      background: #fff;
      .left {
        float: left;
        width: 34%;
        height: 100%;
      }
      .right {
        float: left;
        width: 65%;
        margin-left: 1%;
        .r-top {
          width: 100%;
          height: 10vw;
          margin-top: 2vw;
          img {
            float: left;
            width: 10%;
            height: 4vw;
            margin-top: 0.5vw;
          }
          p{
            float: left;
            font-size: 3vw;
            width: 86%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-left: 4%;
            line-height: 4.5vw;
            color: #333;
          }
        }
        .r-middle {
          font-size: 3vw;
          padding-left: 8vw;
          color: #999;
        }
        .r-bottom {
          margin-top: 5vw;
          padding-left: 12%;
          .current-price {
            float: left;
            font-size: 4vw;
            color: red;
            margin-right: 1vw;
          }
          .coupon {
            float: left;
            width: 38%;
            height: 8vw;
            line-height: 8vw;
            color: #fff;
            font-size: 3vw;
            text-align: center;
            background-image: url(../../../../assets/img/category/yhj.png);
            background-size: 100% 100%;
            margin-left: 10%;
            margin-top: -1vw;
          }
        }
      }
    }
  }
} 
</style>
