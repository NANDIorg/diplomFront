import axios from 'axios'

export const namespaced = true;

export const state = {
    token: localStorage.token,
    money: localStorage.money,
    login: localStorage.login,
    domen : 'localhost:13373',
}

export const getters = {
    login(state) {
        return state.login
    },
    token(state) {
        return state.token
    },
    money(state) {
        return state.money
    }
}

export const mutations = {
    SET_TOKEN(state, item) {
        state.token = item
        localStorage.token = item
    },
    SET_LOGIN(state, item) {
        state.login = item
        localStorage.login = item
    },
    SET_MONEY(state, item) {
        state.money = item
        localStorage.money = item
    },
}

export const actions = {
    async registerUser({commit}, newUser){
        await axios.post('http://'+store.domen+'/api/user/reg', newUser)
        .then(res => {
            commit('SET_TOKEN', res.data.token)
            commit('SET_MONEY', res.data.money)
            commit('SET_LOGIN', newUser.login)
            console.log(res)
            console.log(state.login)

        })
        .catch(err => {
            return err.response
        })
    },
    async authUser({commit}, newUser){
        await axios.post('http://'+store.domen+'/api/user/auth', newUser)
        .then(res => {
            commit('SET_TOKEN', res.data.token)
            commit('SET_MONEY', res.data.money)
            commit('SET_LOGIN', newUser.login)
            console.log(res)
        })
        .catch(err => {
            return err.response
        })
    },
    async getServerMoney({commit}){
        await axios.get('http://'+store.domen+'/api/user/getMoney', {headers: {'token': localStorage.token}})
        .then(res => {
            commit('SET_MONEY', res.data.money)
            console.log(res)
        })
        .catch(err => {
            return err.response
        })
    },
    async pushMoney({commit}, moneyAndToken){
        console.log(moneyAndToken)
        await axios.post('http://'+store.domen+'/api/user/pushMoney', moneyAndToken)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            return err.response
        })
    },
    async createDispute({commit}, teams){
        console.log(teams)
        await axios.post('http://'+store.domen+'/api/disput/createDisput', teams)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            return err.response
        })
    }

}
