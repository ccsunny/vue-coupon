<template lang="html">
  <section class="section1">
    <div class="life">
      <img src="../../assets/img/index/xp.png" />
    </div>
    <div class="middle">
      <ul>
        <li>
          <div class="middle-t">
            <img src="../../assets/img/index/xsqg.png"/>
          </div>
          <div class="middle-m">每天好货爆炒</div>
          <div class="middle-b">
            <img src="../../assets/img/index/tmbt.png"/>
            <img src="../../assets/img/index/time.png"/>
          </div>
          <img src="../../assets/img/index/jg.png"/>
        </li>
        <li>
          <div class="middle-t">
            <img src="../../assets/img/index/fxhh.png"/>
          </div>
          <div class="middle-m">高品质生活</div>
          <img src="../../assets/img/index/2.png"/>
          <img src="../../assets/img/index/3.png"/>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <ul>
            <li>
              <div class="bottom-t"><img src="../../assets/img/index/pp.png"/></div>
              <div class="bottom-m" style="margin-top: 2vw;">产品名称</div>
              <div class="bottom-b"><img src="../../assets/img/index/shoes.png"/></div>
              <p class="money">￥200</p>
              <p><del>￥400</del></p>
            </li>
            <li>
              <div class="bottom-t"><img src="../../assets/img/index/pl.png"/></div>
              <div class="bottom-m">199减100</div>
              <div class="bottom-b"><img src="../../assets/img/index/ej.png"/></div>
              <p class="money">￥200</p>
              <p><del>￥400</del></p>
            </li>
          </ul>
        </li>
        <li>
          <div class="right-t">
            <img src="../../assets/img/index/tbzx.png"/>
          </div>
          <div class="right-m">优惠券领不停</div>
          <img src="../../assets/img/index/wsj.png"/>
          <img src="../../assets/img/index/zb.png"/>
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
.section1 {
  padding: 0 2vw;
  .life {
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
  .middle {
    margin-top: 0.5vw;
    ul {
      width: 100%;
      height: 42vw;
      li {
        float: left;
        width: 50%;
        height: 100%;
        background: #fff;
        .middle-t {
          width: 20vw;
          height: 5vw;
          margin-left: 2vw;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .middle-m {
          font-size: 3vw;
          color: #999;
          margin-top: 2vw;
          margin-left: 2vw;
        }
        .middle-b {
          padding-left: 1.5vw;
          margin-top: 1vw;
          overflow:hidden;
          img {
            float: left;
            width: 16vw;
            height: 5vw;
            margin-right: 2vw;
          }
        }
      }
      li:first-child {
        width: 49%;
        border-right: 1px solid #eee;
        >img {
          display: block;
          width: 34vw;
          height: 21vw;
          margin: 0 auto;
          margin-top: 2vw;
        }
      }
      li:last-child {
        >img {
          float: left;
          width: 50%;
          margin-top: 4vw;
        }
      }
    }
  }
  .bottom {
    ul {
      width: 100%;
      height: 42vw;
      border-top: 1px solid #eee;
      >li {
        float: left;
        width: 50%;
        height: 100%;
        background: #fff;
      }
      >li:first-child {
        width: 49%;
        border-right: 1px solid #eee;
        ul {
          width: 100%;
          height: 100%;
          border-top: none;
          li {
            width: 50%;
            height: 100%;
            .bottom-t {
              width: 18vw;
              height: 5vw;
              margin-left: 2vw;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .bottom-m {
              font-size: 3vw;
              color: #999;
              margin-left: 2vw;
              margin-top: 1vw;
            }
            .bottom-b {
              width: 100%;
              height: 18vw;
              margin-top: 1vw;
              img {
                width: 100%;
                height: 100%;
              }
            }
            p {
              font-size: 3vw;
              text-align: center;
              line-height: 4vw;
            }
            .money {
              font-size: 4vw;
              font-weight: 600;
              color: #f0306f;
              margin-top: 1vw;
            }
          }
          li:first-child {
            width: 49%;
            border-right: 1px solid #eee;
          }
        }
      }
      >li:last-child {
        padding-top: 1vw;
        box-sizing: border-box;
        .right-t {
          width: 20vw;
          height: 5vw;
          margin-left: 2vw;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right-m {
          font-size: 3vw;
          color: #999;
          margin-top: 2vw;
          margin-left: 2vw;
        }
        img {
          float: left;
          width: 50%;
          height: 22vw;
        }
      }
    }
  }
}
</style>
