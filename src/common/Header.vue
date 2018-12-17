<template>
  <header>
    <router-link to="/" slot="left">
      <i class="mint-toast-icon mintui mintui-back" @click="$router.go(-1)"></i>
    </router-link>
    <slot name="title"></slot>
  </header>
  
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;
  background-image: url(../assets/img/common/ysbk.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  a {
    .mint-button--default {
      color: #fff;
      .mint-button-icon {
        .mintui {
          font-size: 5vw;
        }
      }
    }
    .mint-button--normal {
      padding: 0;
      background: #f0306f;
    }
  }
  h1 {
    font-size: 5vw;
    color: #fff;
    width: 100%;
    text-align: center;
  }
}


</style>



