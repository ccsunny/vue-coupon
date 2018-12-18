<template lang="html">
  <div class="detail">
    <v-header class="header">
        <h1 slot="title">商品详情</h1>
    </v-header>
    <v-swiper :swiper="swiper"/>
    <v-title :taoDetail="taoDetail"/>
    <v-like :goodsList="goodsList"/>
    <v-baseline/>
    <v-footer :coupon="coupon"/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../../api/api.js'
import Header from '../../../common/Header'
import Swiper from './taoDetail/Swiper'
import Title from './taoDetail/Title'
import Like from './taoDetail/Like'
import Footer from './taoDetail/Footer'
import Baseline from '../../../common/Baseline'
export default {
  data () {
    return {
      swiper: [],
      taoDetail: {},
      coupon: {},
      goodsList: []
    };
  },
  components:{
    'v-header': Header,
    'v-swiper':Swiper,
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
      api.get("/fox/app/interFaceAppController/getLinkForTKLNew",{
        params:{
          USER_ID: "EeThqo",
          item_id: this.$route.query.NUM_IID
        }
        }).then(
        (response)=>{
          this.swiper = response.data.content.goodsItem.small_images
          this.taoDetail = response.data.content.goodsItem
          this.coupon = response.data.content.link
          let antistop = response.data.content.goodsItem.cat_leaf_name
          api.get("/fox/app/interFaceAppController/tbkGetItems",{
            params:{
              pageNo: 1,
              q: antistop,
              USER_ID: "123455"
              }
            }).then(
            (res)=>{
              this.goodsList = res.data.content.goodsList
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
    },
  },
}
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
  padding-top: 12vw;
  background: #eee;
}
</style>
