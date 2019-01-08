<template>
  <div class="health">
    <ul>
      <li v-for="k in lists" :key="k.id" @click="linkUrl(k)">
        <p class="time">{{k.addTime}}</p>
        <div class="content">
          <div class="title">{{k.title}}</div>
          <img :src="k.icon" class="pic" />
          <div class="read">
            <span>阅读原文</span>
            <img src="../../../../assets/img/index/jt.png"/>
          </div>
        </div>
      </li>
    </ul>
    <v-baseline />
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import { mapGetters } from 'vuex'
import api from '../../../../api/api'
import Baseline from '@/common/Baseline.vue'
export default {
  data () {
    return {
      lists: [],
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getShopUrl',
    ])
  },
  mounted() {
    this.getLists();
  },
  components: {
    'v-baseline': Baseline
  },
  methods: {
    getLists: function () {
      api.post(`${this.getShopUrl}/app/mall/article/lifeArticleList.htm`,{currentPage: 1},{emulateJSON: true}).then(
        (response)=>{
          this.lists = response.data.content.articleList
        },
        (error)=>{
            Toast("抱歉，加载失败了。。。");
        }
      );
    },
    linkUrl(k) {
      window.location.href = `${this.getShopUrl}/${k.url}`
    }
  }
}
</script>
<style lang="less" scoped>
.health {
  width: 100%;
  height: auto;
  ul {
    width: 100%;
    height: auto;
    li {
      padding: 0 2vw;
      .time {
        font-size: 4.5vw;
        text-align: center;
        line-height: 10vw;
      }
      .content {
        background: #fff;
        padding:4vw;
        .title {
          font-size: 4.5vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .pic {
          display: block;
          width: 100%;
          margin: 0 auto;
          height: 50vw;
          margin-top: 2vw;
        }
        .read {
          overflow: hidden;
          margin-top: 2vw;
          span {
            font-size: 4.5vw;
            float: left;
          }
          img {
            float: right;
            width: 4vw;
            height: 4vw;
            margin-top: 1vw;
          }
        }
      }
    }
  }
}
</style>