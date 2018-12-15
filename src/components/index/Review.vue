<template>
    <div class="review-container">
        <div class="container">
            <div class="marquee">
              <div class="marquee_title">
                  <img src="../../assets/img/index/headline.png" />
              </div>
              <div class="review">热评</div>
              <div class="marquee_box">
                  <ul class="marquee_list" :class="{anim:animate==true}">
                  <!-- 当显示最后一条的时候（num=0转换布尔类型为false）去掉过渡效果-->
                      <li v-for="(item,id) in marqueeList" :key="id" >
                          <span>{{item.title}}</span>
                      </li>
                  </ul>
              </div>
              <div class="more">
                <span>|</span>
                <router-link to="/index/more">更多</router-link>
              </div>
            </div>
            <div class="banner"><img src="../../assets/img/index/banner.png"/></div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../api/api'
export default {
    data () {
        return {
            animate: false,
            loading: true,
            num:0,
            marqueeList: []
        };
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'getShopUrl',
      ])
    },
    mounted() {
        this.getMarqueelists();
    },
    created: function () {
　　  setInterval(this.showMarquee, 2000);
    },
    methods: {
        getMarqueelists: function () {
          api.post(`${this.getShopUrl}/app/mall/article/lifeArticleList.htm`,{currentPage: 1},{emulateJSON: true}).then(
            (response)=>{
              this.marqueeList = response.data.content.articleList
            },
            (error)=>{
                Toast("加载失败。。。");
            }
          );
        },
        showMarquee() {
            this.animate = true;
　　        setTimeout(() => {
                this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;// 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
　　　　    }, 1000);
　　    } 
    },
}
</script>
<style lang="less" scoped>
.review-container {
  margin-top: 35vw;
 .container {
    background: #eee;
    .marquee{
      width: 100%;
      height: 8vw;
      align-items: center;
      color: #3A3A3A;
      background-color: #fff;
      margin-top: 2vw;
      padding: 0 2vw;
      display: flex;
      box-sizing: border-box;
      .marquee_title{
        width: 21%;
        height: 8vw;/*关键样式*/
        align-items: center;
        img {
          display: block;
          width: 80%;
          height: 6vw;
          margin: 0 auto;
          margin-top: 1vw;
        }
      }
      .review {
        width: 8vw;
        height: 4vw;
        font-size: 3vw;
        font-weight: bold;
        text-align: center;
        line-height: 4.5vw;
        color: #f03333;
        // border: 1px solid #f03333;
        border-radius: 1vw;
      }
      .marquee_box{
        display: block;
        position: relative;
        width: 60%;
        height: 8vw;/*关键样式*/
        overflow: hidden;
        transition: all .5s;
        .marquee_top{
          transition: top 0.5s ;
        }/*关键样式*/
        .marquee_list{
            display: block;
            width: 100%;
            position: absolute;
            top:0;
            left: 0;
            li{
              width: 100%;
              height: 8vw;/*关键样式*/
              line-height: 8vw;/*关键样式*/
              font-size: 3.5vw;
              padding-left: 2%;
              background-color: #fff;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              box-sizing: border-box;
              span{
                padding:0 2px;
              }
            }
        }
        .anim {
          transition: all 1s;
          margin-top: -8vw;
        }
      }
      .more {
        float: right;
        font-size: 3vw;
        span {
          color: #999;
          margin-right: 1vw;
        }
        a {
          color: #333;
        }
      }
    }
    .banner {
      border-top: 1px solid #eee;
      margin-bottom: 1.5vw;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
 }
}
</style>