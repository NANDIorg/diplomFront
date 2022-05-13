<template>
    <div class="standart-section auth-wrap">
        <div class="auth-content">
            <h1>Авторизация</h1>
            <div class="auth-form">
                <input v-model="login" class="auth-form-elements" type="text" placeholder="Логин">
                <input v-model="password" class="auth-form-elements" type="password" placeholder="Пароль">
                <button @click="authUser()" class="auth-form-elements">Войти</button>
                <span @click="this.$router.push('Reg')" class="to-reg">Зарегистрироваться</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            login:"",
            password:"",
        }
    },
    methods:{
        async authUser(){
            await this.authUserVuex({login: this.login, password: this.password})
            if(this.token) {
                this.$router.push('/')
            }
            
        },
        ...mapActions({
            authUserVuex: 'user/authUser'
        })
    },
    computed: {
        ...mapGetters({
            token: 'user/token',
        })
    },
}
</script>

<style scoped>
.auth-wrap{
    margin: auto;
}

.auth-content{
    background: white;
    height: 100vh;
    border-radius: 5px;
}

.auth-form{
    width: 320px;
    display: grid;
    margin: auto;
    padding: 5px;
}

.auth-form-elements{
    margin-top: 20px;
}

.to-reg{
    margin-top: 5px;
    font-size: 13px;
    cursor: pointer;
}

h1{
    margin: 0;
    padding: 20px 0px;
}

input{
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    outline: none;
}
</style>
