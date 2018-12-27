<template lang="html">
  <div class="title">
    <div class="title-content">
      <div class="middle">
        <img :src=" taoDetail.user_type == 1 ? require('../../../../../assets/img/category/tm.png') : require('../../../../../assets/img/category/tb.png')"/>
        <p>{{taoDetail.title}}</p>
      </div>
      <div class="top">
        <div class="top-coupon">
          <span class="coupon">拼团价￥<span class="money">{{spellPrice}}</span></span>
          <del>￥{{taoDetail.reserve_price}}</del>
        </div>
      </div>
    </div>
    <div class="fold">
      <div class="lookDetail" @click="showCon">
        <p>查看宝贝详情</p>
        <img :src="show == true ? require('../../../../../assets/img/category/up.png') : require('../../../../../assets/img/category/down.png')"/>
      </div>
      <ul class="imgDetail" v-if="show">
        <li v-for="item in imgUrl" v-show="!imgUrl == ''">
          <img :src="item"/>
        </li>
        <li class="placeImg" v-for="item in taoDetail.goodsInFoImg" v-show="imgUrl == ''">
          <img :src="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  props: {
    taoDetail: {
      type: Object,
      required: true
    },
    spellPrice: {
      type: String,
      required: true
    },
    imgUrl: {
      type: Array,
      required: true
    }
  },
  methods: {
    showCon: function() {
      this.show = !this.show
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
      padding-left: 8vw;
      .top-coupon {
          float: left;
          margin-top: 4vw;
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
        background-image: url(../../../../../assets/img/category/yhj.png);
        background-size: 100% 100%;
        color: #fff;
        margin-left: 16vw;
      }
    }
    .middle {
      overflow: hidden;
      img {
        float: left;
        width: 6%;
        height: 4vw;
        margin-top: 1vw;
      }
      p {
        float: left;
        width: 90%;
        font-size: 4vw;
        margin-left: 2%;
      }
    }
  }
  .fold {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 2vw;
    .lookDetail {
      height: 10vw;
      padding: 0 2vw;
      p {
        float: left;
        font-size: 4vw;
        color: #333;
        line-height: 10vw;
      }
      img {
        float: right;
        width: 4vw;
        height: 2vw;
        margin-top: 4vw;
        margin-right: 2vw;
      }
    }
    .imgDetail {
      width: 100%;
      height: auto;
      li {
        // width: 100%;
        // height: 102vw;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .placeImg {
        width: 100%;
        height: 102vw;
      }
    }
  }
}
</style>
