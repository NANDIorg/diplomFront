<template>
    <div class="standart-section">
        <span v-if="token">{{login}}</span>
        <header class="header">
            <div class="nav">
                <div class="container-menu">
                    <button @click="this.$router.push('/')">Главная</button>
                    <button @click="this.$router.push({ path: `/DisputeCreate` })">Создать спор</button>
                    <button v-if="token" @click="this.$router.push({ path: `/Pushmoney` })">Пополнить счет</button>
                    
                </div>
                <div class="container-reg">
                    <button class="money-btn" v-if="token">Деньги : {{money}}</button>
                    <button v-if="!token" @click="this.$router.push({ path: `/Auth` })">Войти</button>
                    <button v-if="token" @click="logout()">Выйти</button>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    name: 'header',
    methods: {
        logout() {
            this.changeToken("")
        },
        ...mapMutations({
            changeToken: 'user/SET_TOKEN'
        }),
        ...mapActions({
            getServerMoney: 'user/getServerMoney'
        })
        
    },

    computed: {
        ...mapGetters({
            token: 'user/token',
            money: 'user/money',
            login: 'user/login'
        })
    },

    mounted() {
        setInterval(() => {
            if(localStorage.token) {
                this.getServerMoney()
            }        
        }, 60000);
    }
}
</script>

<style scoped>
.header{
    display: flex;
    height: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background: lightblue;
}

button{
    width: 161px;
    font-size: 20px;
    background: lightblue;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
}

.container-menu{
    width: 60%;
    display: flex;
}

.container-reg{
    width: 40%;
    display: flex;
    justify-content: flex-end
}

.nav{
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}

span{
    position: absolute;
}

.money-btn{
    cursor: default;
}
</style>
