<template lang="html">
  <div class="detail">
    <v-header class="header">
        <h1 slot="title">商品详情</h1>
    </v-header>
    <v-swiper :swiper="swiper"/>
    <v-title :taoDetail="taoDetail" :spellPrice="spellPrice" :imgUrl="imgUrl"/>
    <v-like :goodsList="goodsList"/>
    <v-baseline/>
    <v-footer :coupon="coupon" :taoDetail="taoDetail" :spellPrice="spellPrice" :spellLink="spellLink"/>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../../../api/api'
import Header from '../../../../common/Header'
import Swiper from './spellDetail/Swiper'
import Title from './spellDetail/Title'
import Like from './spellDetail/Like'
import Footer from './spellDetail/Footer'
import Baseline from '../../../../common/Baseline'
export default {
  data () {
    return {
      swiper: [],
      taoDetail: {},
      coupon: {},
      goodsList: [],
      spellPrice: "",
      spellLink: "",
      imgUrl: []
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
    this.getImgUrl();
  },
  methods: {
    getContent: function () {
      api.get("/fox/app/interFaceAppController/getLinkForTKLNew",{
        params:{
          USER_ID: "666666",
          item_id: this.$route.query.NUM_IID
        }
        }).then(
        (response)=>{
          this.swiper = response.data.content.goodsItem.small_images
          this.taoDetail = response.data.content.goodsItem
          this.coupon = response.data.content.link
          this.spellPrice = this.$route.query.spellPrice
          this.spellLink = this.$route.query.spellLink
          let antistop = response.data.content.goodsItem.cat_leaf_name
          api.get("/fox/app/interFaceAppController/tbkGetItems",{
            params:{
              pageNo: 1,
              q: antistop,
              USER_ID: "666666"
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
    getImgUrl: function () {
      api.get("/fox/app/interFaceAppController/goodsImgInfo",{
        params:{
          item_id: this.$route.query.NUM_IID
        },
      }).then(
        (res)=>{
          this.imgUrl = res.data.content.imgurl
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
