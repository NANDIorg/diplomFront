import axios from 'axios'
import store from '@/store/index';
 
export const namespaced = true;
 
export const state = {
    item: null,
    items: [],
}
 
export const getters = {
    item(state) {
        return state.item
    },
    items(state) {
        return state.items
    },
}
 
export const mutations = {
    SET_ITEMS(state, items) {
        state.items = items;
    },
    SET_ITEM(state, item) {
        state.item = item
    },
}
 
export const actions = {
    async getAllDispute({commit}){
        await axios.get('http://server.selestia.store/api/dispute/getAllDispute')
        .then(res => {
            commit('SET_ITEMS', res.data)          
        })
        .catch(err => {
            return err.response
        })
    },
    async getDispute({commit}, info){
        console.log(info)
        await axios.get(`http://server.selestia.store/api/dispute/getMainInfo?idDispute=${info.id}&token=${info.token}`)
        .then(res => {
            console.log(res)
            commit('SET_ITEM', res.data)          
        })
        .catch(err => {
            return err.response
        })
    }, //pushBet
    async pushBet({commit}, betInfo){
        await axios.post('http://server.selestia.store/api/postBET', betInfo)
        .then(res => {
            console.log(res)
            store.dispatch('user/getServerMoney')
            store.dispatch('dispute/getDispute', {token: betInfo.token, id: betInfo.idDispute})
            //store.dispatch('dispute/getServerMoney') selectWinner
        })
        .catch(err => {
            return err.response
        })
    },
    async selectWinner({commit}, winner){
        await axios.post('http://server.selestia.store/api/dispute/closeDispute', winner)
        .then(res => {
            console.log(res)
            store.dispatch('user/getServerMoney')
            store.dispatch('dispute/getAllDispute')
            //store.dispatch('dispute/getServerMoney') selectWinner
        })
        .catch(err => {
            return err.response
        })
    },
}