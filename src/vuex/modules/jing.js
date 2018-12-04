import * as types from '../types'
import Vue from 'vue'
let vm = new Vue({});
const state = {
    goodsType:"",
}
const mutations = {
    [types.GOODS_TYPE](state,v){
        state.goodsType = v
    },
}
const getters =  {
    getGoodsType: state => {
      return state.goodsType
    },
}
const actions = {
    set_goods_type({commit}) {
        vm.$api({
            method:'post',
            url:"/fox/app/interFaceAppController/getTypeList",
            // params: {
            //     shareClassId:"587ab8f35d3e4ae796158e63bdec3dc4",
            //     pageNo: "1"
            // },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>{
            commit('GOODS_TYPE',response.data.content || "");
        })
    },
}
export default {
    state,
    actions,
    getters,
    mutations
}