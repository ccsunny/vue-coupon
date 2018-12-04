import * as types from '../types'
import Vue from 'vue'
let vm = new Vue({});
const state = {
    dataList:"",
}
const mutations = {
    [types.DATA_LIST](state,v){
        state.dataList = v
    },
}
const getters =  {
    getDataList: state => {
      return state.dataList
    },
}
const actions = {
    set_data_list({commit}) {
        vm.$api({
            method:'post',
            url:"/fox/app/hs/couponproduct/getAppList",
            // params: {
            //     shareClassId:"587ab8f35d3e4ae796158e63bdec3dc4",
            //     pageNo: "1"
            // },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>{
            commit('DATA_LIST',response.data.content || "");
        })
    },
}
export default {
    state,
    actions,
    getters,
    mutations
}