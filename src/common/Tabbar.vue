<template>
  <div class="tabbar" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" :src="selected == '首页' ? require('@/assets/img/tabbar/index-active.png') : require('@/assets/img/tabbar/index.png')"/>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类页">
        <img slot="icon" :src="selected == '分类页' ? require('@/assets/img/tabbar/category-active.png') : require('@/assets/img/tabbar/category.png')"/>
        分类
      </mt-tab-item>
      <mt-tab-item id="粉丝社区">
        <img slot="icon" :src="selected == '粉丝社区' ? require('@/assets/img/tabbar/fans-active.png') : require('@/assets/img/tabbar/fans.png')"/>
        粉丝社区
      </mt-tab-item>
      <mt-tab-item id="用户页">
        <img slot="icon" :src="selected == '用户页' ? require('@/assets/img/tabbar/user-active.png') : require('@/assets/img/tabbar/user.png')"/>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '首页'
    };
  },
  mounted() {
    //获取当前路由名称，根据该名称给当前footer添加is-selected
    let Rname = this.$route.name;
    switch (Rname) {
      case '首页':
        this.selected = '首页';
        break;
      case '分类页':
        this.selected = '分类页';  
        break;
      case '粉丝社区':
        this.selected = '粉丝社区'; 
        break;
      case '用户页':
        this.selected = '用户页';
        break;
    }
  },
  methods: {
    gotoRouter() {
      this.$router.push({
        name: this.selected
      })
    }
  },
}
</script>
<style lang="less" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  .mint-tabbar {
    height: 14.5vw;
    background-color: #fff;
    .mint-tab-item {
      padding: 1.5vw 0;
    }
    .is-selected {
      background-color: #fff;
      color: #f0306f;
    }
  }
  .page-tabbar-container {
    width: 100%;
    height: 100%;
  }
}
</style>