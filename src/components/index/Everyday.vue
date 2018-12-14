<template lang="html">
  <section class="section4">
    <div class="stroll">
      <img src="../../assets/img/index/djdzm.png" />
    </div>
    <div class="top">
      <ul>
        <li class="buy">
          <div class="top-t"><img src="../../assets/img/index/ppsg.png"/></div>
          <p>产品名称</p>
          <img class="old" src="../../assets/img/index/3-1.png"/>
        </li>
        <li class="buy-more">
          <div class="top-t"><img src="../../assets/img/index/phb.png"/></div>
          <p class="buy-w">看看大家都在买什么</p>
          <ul>
            <li>
              <img src="../../assets/img/index/phone.png"/>
              <p class="price">￥2220</p>
              <p><del>￥3000</del></p>
            </li>
            <li>
              <img src="../../assets/img/index/fs.png"/>
              <p class="price">￥45</p>
              <p><del>￥95</del></p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <img src="../../assets/img/index/1.png"/>
          <p class="title">洗面奶套装</p>
          <p class="volume">22233人已买</p>
          <p class="money">￥46</p>
        </li>
        <li>
          <img src="../../assets/img/index/1-1.png"/>
          <p class="title">洗面奶套装</p>
          <p class="volume">22233人已买</p>
          <p class="money">￥46</p>
        </li>
        <li>
          <img src="../../assets/img/index/1-2.png"/>
          <p class="title">洗面奶套装</p>
          <p class="volume">22233人已买</p>
          <p class="money">￥46</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
 data () {
    return {
    };
  },
}
</script>

<style lang="less" scoped>
li {
  background: #fff;
}
.section4 {
  padding: 0 2vw;
  padding-top: 3vw;
  .stroll {
    width: 100%;
    height: 5vw;
    margin-bottom: 3vw;
    img {
      display: block;
      width: 50%;
      height: 100%;
      margin: 0 auto;
    }
  }
  ul {
    li {
      float: left;
      .top-t {
        width: 20vw;
        height: 5vw;
        margin-left: 2vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 3vw;
        color: #999;
        margin-top: 2vw;
        margin-left: 2vw;
      }
    }
  }
  .top {
    ul {
      width: 100%;
      height: 44vw;
      li {
        width: 50%;
        height: 100%;
        .old {
          display: block;
          width: 30vw;
          height: 27vw;
          margin: 0 auto;
          margin-top: 2vw;
        }
        ul {
          width: 100%;
          height: 30vw;
          li {
            width: 50%;
            height: 27vw;
            margin-top: 2vw;
            img {
              width: 100%;
              height: 20vw;
            }
            span {
              font-size: 3.2vw;
              color: #f0306f;
              margin-left: 2vw;
            }
            del {
              font-size: 2.8vw;
              color: #999;
            }
          }
        }
      }
      .buy {
        width: 49%;
        border-right: 1px solid #eee;
      }
      .buy-more {
        p {
          margin: 0;
          text-align: center;
          line-height: 4vw;
        }
        .price {
          font-size: 4vw;
          font-weight: 600;
          color: #f0306f;
          margin-top: 2vw;
        }
        .buy-w {
          text-align: left;
          margin-top: 2vw;
          margin-left: 2vw;
        }
      }
    }
  }
  .bottom {
    border-top: 1px solid #eee;
    ul {
      width: 100%;
      height: 42vw;
      li {
        width: 33%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 24vw;
        }
        p {
          line-height: 5vw;
          margin: 0;
          text-align: center;
        }
        .title {
          font-size: 4vw;
          color: #333; 
          margin-top: 2vw;
        }
        .volume {
          color: #999;
        }
        .money {
          font-size: 4vw;
          color: #f0306f;
          font-weight: 600;
        }
      }
      li:after {
        content: "";
        position: absolute;
        top: 10%;
        right: 0;
        width: 1px;
        height: 80%;
        background: #eee;
      }
      li:nth-child(3):after {
        display: none;
      }
    }
  }
}
</style>
