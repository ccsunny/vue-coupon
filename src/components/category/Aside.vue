<template lang="html">
 <div class="aside">
  <div class="wrapper">
      <ul class="content">
          <li 
          v-for="(item,index) in tabs" 
          :class="{active:index == num}"
           @click="tab(index)">{{item}}</li>
      </ul>
    </div>
    <div class="tabCon">
      <ul>
        <li v-for='(itemCon,index) in tabContents' v-show=" index == num">
          <img v-lazy="itemCon.imgPath"/><span>{{itemCon.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui'
  export default {
    data () {
      return {
        tabs: ["女装","男装","箱包","配饰","母婴","玩具","护肤","家居","家具","数码","电器","女装","裤子"],
        tabContents: [
            {title:"毛衣",imgPath:"http://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/08/03/3/15332974683146_200x375_80.jpg"},
            {title:"休闲裤",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/09/04/59/15360642973446_200x375_80.png"},
            {title:"斜挎包",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/category/2017/12/12/109/1fe4251d-0d8c-4c8d-849f-da4f0709f9b0_200x375_80.jpg"},
            {title:"钻戒",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/02/126/15305462548582_200x375_80.jpg"},
            {title:"尿不湿",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/category/2017/09/12/30/b89c347e-6217-4c3d-892e-34942c32c1aa_200x375_80.jpg"},
            {title:"芭比娃娃",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/05/08/58/15257822135949_200x375_80.png"},
            {title:"洗发水",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/08/05/177/15334084167794_200x375_80.png"},
            {title:"四件套",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/02/01/124/15174699598308_200x375_80.png"},
            {title:"沙发",imgPath:"//h2.appsimg.com/a.appsimg.com/upcb/2018/07/20/165/ias3-33-107037019149926438-1532058888_200x375_80.jpg!75.webp"},
            {title:"平板电脑",imgPath:"//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/01/31/6/15173937483296_200x375_80.jpg"},
            {title:"电饭煲",imgPath:"//h2.appsimg.com/a.appsimg.com/upcb/2018/07/20/152/ias3-33-313639597262479472-1532019119_200x375_80.jpg!75.webp"},
          ],
        num: 1
      }
    },
    methods:{
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
        width: 20vw;
        // margin: 0 auto;
        text-align: center;
        img {
          display: block;
          width:  20vw;
          height: 20vw;
        }
        span {
          font-size: 4vw;
          color: #767676;
        }
      }
    }
  }
}
</style>
