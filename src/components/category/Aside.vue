<template lang="html">
 <div class="aside">
  <div class="wrapper">
      <ul class="content">
          <li 
          v-for="(item,index) in tabs.classList" 
          :class="{active:index == num}"
           @click="tab(index)">{{item}}</li>
      </ul>
    </div>
    <div class="tabCon">
      <ul v-for='(itemCon,index) in tabs.goodsList' v-show=" index == num">
        <li v-for='k in itemCon'>
          <img :src="k.icon"/><span>{{k.className}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui'
import { Toast } from "mint-ui"
import axios from 'axios'
  export default {
    data () {
      return {
        tabs: [],
        num: 1
      }
    },
    mounted() {
      this.getLists()
    },
    methods:{
      getLists: function () {
        axios.get("static/category.json").then(
          (response)=>{
            console.log(response.data.content)
            this.tabs = response.data.content
          },
          (error)=>{
              Toast("加载失败。。。");
          }
        );
      },
      tab(index) {
        this.num = index;
      },
    }
  }
</script>

<style lang="less" scoped>
.aside{
  width: 100%;
  height: 100%;
  .wrapper {
    width: 25%;
    position: absolute;
    top: 12vw;
    left: 0;
    bottom: 14.5vw;
    overflow: hidden;
    border-right:1px solid #eee;
    background: #fafafa;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    .content {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        text-align: center;
        height: 13.5vw;
        line-height: 13.5vw;
        font-size: 4vw;
        color: #333;
      }
      .active {
        color: #f51b68;
        position: relative;
        &::before {
          content: "";
          width: 1vw;
          height: 6vw;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: #f51b68;
        }
      }
    }
  }
  .tabCon {
    height: 100%;
    margin-left: 25%;
    padding: 0 5vw;
    padding-top: 14vw;
    box-sizing: border-box;
    ul {
      li {
        float: left;
        width: 31%;
        text-align: center;
        margin-right: 3%;
        margin-bottom: 4vw;
        img {
          display: block;
          width:  20vw;
          height: 20vw;
          margin-bottom: 2vw;
        }
        span {
          font-size: 4vw;
          color: #767676;
        }
      }
      li:nth-child(3n){
        margin-right: 0;
      }
    }
  }
}
</style>
