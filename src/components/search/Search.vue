<template lang="html">
  <div class="search">
    <v-header class="header">
      <h1 slot="title">搜索</h1>
    </v-header>
    <div class="search-button">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input type="search" placeholder="粘贴或输入要查询的商品名称搜索" v-model="keyword" class="mint-searchbar-core" autofocus="autofocus">
      </div>
      <button @click="taoSearch"><router-link :to="keyword ==''? '':`/searchDetail?q=${keyword}`">搜索</router-link></button>
    </div>
    <div class="hot">
      <h3>
      <img src="../../assets/img/search/hot.png" />热门搜索
      </h3>
      <ul>
        <li v-for="key in hotLists">
          <router-link :to="`/searchDetail?q=${key}`">{{key}}</router-link>
        </li>
      </ul>
    </div>
    <div class="history">
      <h3>
        <img src="../../assets/img/search/history.png" />
        <span class="search-history">搜索历史</span>
        <span class="empty" @click="taoClear">清空</span>
      </h3>
      <ul>
        <li v-for="item in HistoryLists">
          <router-link :to="`/searchDetail?q=${item}`">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import Header from '../../common/Header'
export default {
  data () {
      return {
          keyword:"",
          HistoryLists: [],
          hotLists: ["口红","睡衣","面膜","洗发水","包包","卫衣女","抽纸","耳机","良品铺子"]
      };
  },
  components: {
    'v-header': Header
  },
  methods: {
    taoSearch() {
      let k = this.keyword
      if(k === "") {
        const htmls = `
           <div class="box">
             <div class="isunbind">请输入您要搜索的商品名称</div>
          </div>
        `;
        MessageBox.alert('', {
          message: htmls,
          title: '',
          showConfirmButton:true,
          confirmButtonClass:'confirmButton',
          confirmButtonText:'确定',
        }).then(action => {
          if (action == 'confirm') {
            console.log('操作成功');
          }
        });
      } else if (localStorage.getItem('HistoryLists')) {          
        this.HistoryLists = JSON.parse(localStorage.getItem('HistoryLists'));            
        this.HistoryLists=Object.assign([],JSON.parse(localStorage.getItem('HistoryLists')),[])  
        this.HistoryLists.unshift(this.keyword);            
        localStorage.setItem('HistoryLists', JSON.stringify(this.HistoryLists));
        this.keyword= ''       
      } else {            
        this.HistoryLists=Object.assign([],JSON.parse(localStorage.getItem('HistoryLists')),[this.keyword])
        localStorage.setItem('HistoryLists', JSON.stringify([this.keyword]));        
      }                                  
    },
    taoClear(){
      this.HistoryLists=[]
      localStorage.removeItem('HistoryLists');
    }
  },
  created () {
    this.HistoryLists = JSON.parse(localStorage.getItem('HistoryLists'))
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 12vw;
  box-sizing: border-box;
  .search-button {
    width: 100%;
    height: 12vw;
    background: #eee;
    .mint-searchbar-inner {
    float: left;
    padding: 0;
    padding-left: 3vw;
    width: 70%;
    height: 7vw;
    margin-top: 2.5vw;
    background: #fff;
    border-radius: 2vw;
    margin-left: 5%;
    box-sizing: border-box;
    .mintui-search {
      margin-top: 1vw;
      font-size: 4vw;
    }
    .mint-searchbar-core {
      margin: 0;
      padding: 0;
      font-size: 3vw;
      width: 90%;
      text-align: left;
      height: 100%;
      background: #fff;
      border-radius: 2vw;
      margin-left: 4%;
      box-sizing: border-box;
    }
    }
    button {
      width: 9vw;
      margin-top: 3vw;
      margin-left: 4vw;
      text-align: center;
      height: 6vw;
      line-height: 6vw;
      background: #ccc;
      color: #fff;
      border-radius: 2vw;
    }
  }
  .hot {
    width: 100%;
    height: 42vw;
    padding: 4vw 5vw;
    h3 {
      color: #ccc;
      font-size: 3vw;
      margin-bottom: 2vw;
      img {
        width: 4vw;
        height: 4vw;
        margin-right: 1vw;
      }
    }
    ul {
      width: 90%;
      height: 30vw;
      border-bottom: 1px solid #eee;
      li {
        float: left;
        width: 22%;
        text-align: center;
        height: 7vw;
        line-height: 6vw;
        background: #eee;
        margin-right: 2vw;
        margin-bottom: 2vw;
        border-radius: 2vw;
        a {
          color: #f0306f;
          font-size: 3vw;
        }
      }
    }
  }
  .history {
    padding: 3vw 5vw;
    h3 {
      font-size: 3vw;
      color: #ccc;
      overflow: hidden;
      img {
        float: left;
        width: 4vw;
        height: 4vw;
        margin-right: 1vw;
      }
      .search-history {
        float: left;
        margin-top: 0.5vw;
      }
      .empty {
        float:right;
        margin-right: 1vw;
      }
    }
    ul {
      margin-top: 3vw;
      li {
        float: left;
        padding:1vw 3vw;
        background: #eee;
        color: #333;
        border-radius: 2vw;
        margin-right: 4vw;
        font-size: 3vw;
      }
    }
  }
}
</style>
