<template lang="html">
  <footer class="footer">
    <a class="copy" target="_blank" :href="coupon.link">领劵购买</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    coupon: {
      type: Object,
      required: true
    }
  },
  methods: {
    acquire: function() {

    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  .copy {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 14vw;
    line-height: 14vw;
    background: #ff6633;
    line-height: 14vw;
    color: #fff;
    font-size: 4.5vw;
    letter-spacing: 0.3vw;
  }
}
</style>
