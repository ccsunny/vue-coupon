<template lang="html">
  <div class="title">
    <div class="title-content">
      <div class="middle">
        <img src="../../../../assets/img/category/jd.png"/>
        <p>{{jingDetail.goods_name}}</p>
      </div>
      <div class="top">
        <div class="top-coupon">
          <span class="coupon">劵后价￥<span class="money">{{jingDetail.coupon_price}}</span></span>
          <del>￥{{jingDetail.goods_price}}</del>
        </div>
        <div class="coupon-init">劵￥{{jingDetail.discount_price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    jingDetail: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  .title-content {
    padding: 2vw;
    background: #fff;
    padding-bottom: 4vw;
    .top {
      overflow: hidden;
      padding-left: 6%;
      .top-coupon {
          float: left;
          margin-top: 6vw;
        .coupon {
          color: red;
          font-size: 3vw;
          margin-top: 1vw;
          .money {
            color: red;
            margin-left: 1vw;
            font-size: 5vw;
          }
        }
        del {
          margin-left: 3vw;
          color: #ccc;
        }
      }
      .coupon-init {
        float: left;
        margin-top: 3vw;
        width: 24vw;
        text-align: center;
        height: 10vw;
        line-height: 10vw;
        font-size: 4vw;
        background-image: url(../../../../assets/img/category/yhj.png);
        background-size: 100% 100%;
        color: #fff;
        margin-left: 16%;
      }
    }
    .middle {
      overflow: hidden;
      img {
        float: left;
        width: 9%;
        height: 4vw;
        margin-top: 1vw;
      }
      p {
        float: left;
        width: 87%;
        font-size: 4vw;
        margin-left: 4%;
      }
    }
  }
}
</style>
