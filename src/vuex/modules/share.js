import * as types from '../types'
import Vue from 'vue'
let vm = new Vue({});
const state = {
    sharegoodslist:"",
}
const mutations = {
    [types.SHARE_GOODS_LIST](state,v){
        state.sharegoodslist = v
    },
}
const getters =  {
    getShareGoodList: state => {
      return state.sharegoodslist
    },
}
const actions = {
    set_share_goods_list({commit}) {
        vm.$api({
            method:'post',
            url:"/fox/app/sharePyqController/sharePyqGoodsByPage",
            params: {
                shareClassId:"587ab8f35d3e4ae796158e63bdec3dc4",
                pageNo: "1",
                USER_ID:"666666"
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>{
            commit('SHARE_GOODS_LIST',response.data.content || "");
        })
    },
}
export default {
    state,
    actions,
    getters,
    mutations
}