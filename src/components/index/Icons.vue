<template>
    <div class="icons">
        <ul>
            <li>
                <img src="../../assets/img/index/icon/icon-me.png"/>
                <p>签到领钱</p>
            </li>
            <li>
                <router-link to="/newPerson">
                    <img src="../../assets/img/index/icon/icon-xin.png"/>
                    <p>新人专区</p>
                </router-link>
            </li>
            <li>
                <router-link to="/spellGoods">
                    <img src="../../assets/img/index/icon/icon-pp.png"/>
                    <p>拼拼好货</p>
                </router-link>
            </li>
            <li>
                <router-link to="/pinkage">
                    <img src="../../assets/img/index/icon/icon-baoyou.png"/>
                    <p>9.9包邮</p>
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/taoGrab">
                    <img src="../../assets/img/index/icon/icon-tao.png"/>
                    <p>淘抢购</p>
                </router-link>
            </li>
            <li>
                <router-link to="/redPacket">
                    <img src="../../assets/img/index/icon/icon-lhb.png"/>
                    <p>领红包</p>
                </router-link>
            </li>
            <li>
                <router-link to="/economize">
                    <img src="../../assets/img/index/icon/icon-sheng.png"/>
                    <p>省大牌</p>
                </router-link>
            </li>
            <li>
                <router-link to="/todayRecommend">
                    <img src="../../assets/img/index/icon/icon-jinr.png"/>
                    <p>今日推荐</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
 data () {
 return {
 };
 }
}
</script>
<style lang="less" scoped>
.icons {
    width: 100%;
    height: 42vw;
    background-image: url(../../assets/img/index/icon/background.png);
    background-size: 100% 100%;
    padding: 0 4vw;
    padding-top: 8vw;
    position: absolute;
    top: 42vw;
    left: 0;
    box-sizing: border-box;
    ul {
        width: 100%;
        height: 17vw;
        li {
            float: left;
            width: 18%;
            margin-right: 9%;
            height: 100%;
            text-align: center;
            img {
                width: 66%;
                height: 10vw;
            }
            p {
                font-size: 3vw;
                color: #999;
            }
        }
        li:nth-child(4n) {
            margin-right: 0;
        }
    }
}
</style>