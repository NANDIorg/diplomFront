<template>
    <div class="standart-section">
        <div class="push-money-wrap">
            <div class="push-money-content">
                <button @click="pushMoney()" >Добавить деньги</button>
                <input v-model="moneyPushValue" type="text">
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    data() {
        return {
            moneyPushValue: 0,
        }
    },
    methods: {
        async pushMoney() {
            await this.pushMoneyVuex({money: this.moneyPushValue, token: this.token})
            this.getServerMoney()
        },
        ...mapActions({
            pushMoneyVuex: 'user/pushMoney',
            getServerMoney: 'user/getServerMoney'
        })
    },

    computed: {
        ...mapGetters({
            token: 'user/token'
        })
    }
}
</script>

<style scoped>
.push-money-wrap{
    height: 100vh;
    background: white;
    border-radius: 5px;
}

.push-money-content{
    padding-top: 80px;
}

input{
    margin-left: 5px;
}

button{
    height: 25px;
}
</style>
