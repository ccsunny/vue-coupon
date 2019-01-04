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
      api.get("/fox/app/jdzsController/getJdGoodsDetail",{
        params:{
          gid: this.$route.query.goods_id,
          USER_ID: "666666"
          }
        }).then(
        (response)=>{
          this.data = response.data.content.data
          this.jingDetail = response.data.content.data
          let cid3 = response.data.content.data.cid3
          let discount_link = response.data.content.data.discount_link
          api.get("/fox/app/interFaceAppController/getJdGoodsList",{
            params:{
              cid3: cid3
              }
            }).then(
            (res)=>{
              this.goodLists = res.data.content.data
              api.get("/fox/app/jdzsController/jdTwoInOneLink",{
                params:{
                  coupon_url: discount_link,
                  gid: this.$route.query.goods_id,
                  USER_ID: "666666",
                }
              }).then(
                (response)=>{
                  this.coupon = response.data.content
                },
                (error)=>{
                    Toast("加载失败。。。");
                }
              );
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
      height: 98vw;
      img {
          width: 100%;
          height: 100%;
      }
  }
}
</style>
