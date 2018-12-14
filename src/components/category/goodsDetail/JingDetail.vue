<template lang="html">
  <div class="detail">
    <v-header class="header">
        <h1 slot="title">商品详情</h1>
    </v-header>
    <div class="banner-img">
        <img :src="data.goods_img"/>
    </div>
    <v-title :jingDetail="jingDetail"/>
    <v-like :goodLists="goodLists"/>
    <v-baseline/>
    <v-footer :coupon="coupon"/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../../api/api'
import Header from '../../../common/Header'
import Title from './jingDetail/Title'
import Like from './jingDetail/Like'
import Footer from './jingDetail/Footer'
import Baseline from '../../../common/Baseline'
export default {
  data () {
    return {
      data: {},
      jingDetail: {},
      coupon: {},
      goodLists:[]
    };
  },
  components:{
    'v-header': Header,
    'v-title':Title,
    'v-like':Like,
    'v-footer':Footer,
    'v-baseline':Baseline
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent: function () {
      api.get("/fox/app/interFaceAppController/getJdGoodsLink",{
        params:{
          gid: this.$route.query.goods_id,
          USER_ID: "EeThqo"
          }
        }).then(
        (response)=>{
          this.data = response.data.content.data
          this.jingDetail = response.data.content.data
          this.coupon = response.data.content.data
          let goodsName = response.data.content.data.goods_name
          api.get("/fox/app/interFaceAppController/getJdGoodsList",{
            params:{
              so: goodsName
              }
            }).then(
            (res)=>{
              this.goodLists = res.data.content.data
            },
            (error)=>{
                Toast("加载失败。。。");
            }
          )
        },
        (error)=>{
            Toast("加载失败。。。");
        }
      );
    }
  },
}
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
  padding-top: 12vw;
  background: #eee;
  .banner-img {
      width: 100%;
      height: 80vw;
      img {
          width: 100%;
          height: 100%;
      }
  }
}
</style>
