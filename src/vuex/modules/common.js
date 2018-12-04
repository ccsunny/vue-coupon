import * as types from '../types'
import Vue from 'vue'
let vm = new Vue({});
const state = {
    shopUrl:'',
    fetchLoading:false, 
}
const mutations = {
    [types.SHOP_URL](state,v){
        state.shopUrl = v
    },
    [types.SET_LOADING] (state,res) {
        state.fetchLoading = res
    },
}
const getters =  {
    getShopUrl: state => {
      return state.shopUrl
    },
}
const actions = {
    set_shop_url({commit},v) {
        commit(types.SHOP_URL,v);
    },
}
export default {
    state,
    actions,
    getters,
    mutations
}