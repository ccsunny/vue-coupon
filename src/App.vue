<template>
  <div id="app">
    <router-view></router-view>
    <lg-preview></lg-preview>
    <div class="btn" ref="btn" @click="goTop"><img src="./assets/img/common/top.png"/></div>
    <v-loading v-show="fetchLoading"></v-loading>
  </div>
</template>

<script>
import Loading from '@/common/Loading'
export default {
    name: 'app',
    data () {
      return {
            isTop: true,
            timer: null
      };
    },
    mounted () {
        this.needScroll()
    },
    methods: {
        needScroll () {
          let clientHeight = document.documentElement.clientHeight
          let obtn = this.$refs.btn
          window.onscroll = function () {
            let osTop = document.documentElement.scrollTop || document.body.scrollTop
            if (osTop >= clientHeight) {
              obtn.style.display = 'block'
            } else {
              obtn.style.display = 'none'
            }
            if (!this.isTop) {
              clearInterval(this.timer)
            }
            this.isTop = false
          }
        },
        goTop () {
            this.timer = setInterval(() => {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                let ispeed = Math.floor(-osTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                this.isTop = true
                if (osTop === 0) {
                  clearInterval(this.timer)
                }
            }, 30)
        }
    },
    components: {
      'v-loading':Loading,
    },
    computed:{
      fetchLoading(){
        return this.$store.state.common.fetchLoading
      }
    },
}
</script>

<style lang="less">
//初始化
html,
body,
#app{
  width: 100%;
  height: 100%;
  background: #eee;
  font-family: "Microsoft YaHei";
}

body,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
img,
legend,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
    -moz-user-select:none;-webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
}

div,
ul {
    box-sizing: border-box;
}

button,
fieldset,
img,
input {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}


ol,
ul {
    list-style: none;
}

input {
    padding-top: 0;
    padding-bottom: 0;
}

input,
select {
    vertical-align: middle;
}

input,
select,
textarea {
    margin: 0;
    outline: none;
}
textarea {
    resize: none;
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}
//去斜体
i {
  font-style:normal
}
body {
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    color: #666;
    background: #fff;
}

a {
    color: #666;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
}
//点击回到顶部
.btn {
    position: fixed;
    bottom: 40vw;
    right: 4vw;
    width: 12vw;
    height: 12vw;
    border: 1px solid #f0306f;
    border-radius: 50%;
    text-align: center;
    line-height: 11vw;
    z-index: 99999;
    display: none;
    img {
        width: 50%;
        height: 50%;
    }
}
</style>
