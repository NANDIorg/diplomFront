<template>
    <div class="standart-section">
        <div class="dispute-detail-wrap">
            <div class="dispute-grid-wrap">
                <h1 class="detail-title">{{dispute.title}}</h1>
                <div class="dispute-content">
                    <div class="content-team-one">
                        <span class="koph">{{dispute.team_one_bet_kof}}</span>
                        <span>{{dispute.team_one}}</span>
                    </div>
                    <span class="vs">против</span>
                    <div class="content-team-two">
                        <span class="koph">{{dispute.team_two_bet_kof}}</span>
                        <span>{{dispute.team_two}}</span>
                    </div>
                </div>
                <div class="dispute-content sex">
                    <div class="content-team-one">
                        <span>{{dispute.team_one_bet}}руб</span>
                    </div>
                    <div class="content-team-two">
                        <span>{{dispute.team_two_bet}}руб</span>
                    </div>
                </div>
                <div v-if="dispute.isBet">
                    ваша ставка:
                    <select v-model="side">
                        <option value="1">{{dispute.team_one}}</option>
                        <option value="2">{{dispute.team_two}}</option>
                    </select>
                    <input v-model="bet" type="text">
                </div>
                <button v-if="dispute.isBet" @click="makeBet()">Сделать ставку</button>
                <span class="detail-description">Описание: {{dispute.description}}</span>
                <div v-if="dispute.isCreated">
                    Определите победителя:
                    <select v-model="winner">
                        <option value="1">{{dispute.team_one}}</option>
                        <option value="2">{{dispute.team_two}}</option>
                    </select>
                    <button @click="setWinner()">Закончить спор</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '@/store'

export default {
    data() {
        return{
            bet: 0,
            side: 1,
            winner: 1,
        }
    },
    methods: {
        ...mapActions({
            getDispute: 'dispute/getDispute',
            pushBet: 'dispute/pushBet',
            selectWinner: 'dispute/selectWinner'
        }),
        makeBet() {
            this.pushBet({token: this.token, bet: this.bet, idDispute: this.dispute.id, side: this.side})
        },
        setWinner() {
            this.selectWinner({idDispute: this.dispute.id, winnerSide: this.winner})
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters({
            dispute: 'dispute/item',
            token: 'user/token'
        })
    },
    beforeRouteEnter (to, from, next) {
    store.dispatch('dispute/getDispute', {id: to.params.id, token: localStorage.token}).then(() => next())
    },
    // mounted() {
    //     console.log(this.id)
    //     store.dispatch('dispute/getDispute', {id: this.$route.params.id, token: this.token})
    // },
}
</script>

<style scoped>
.dispute-detail-wrap{
    height: 100vh;
    border: 1px solid black;
    border-radius: 5px;
    background: white;
}

.dispute-content{
    display: flex;
    margin: 20px auto;
    margin-top: 40px;
    height: 50px;
    width: 100%;
    justify-content: space-between;

}

.dispute-content.sex{
    width: 75%;
}

.content-team-one{
    display: grid;
    width: 225px;
    font-size: 21px;
    justify-items: center;
    align-items: center;
}

.content-team-two{
    display: grid;
    width: 225px;
    font-size: 21px;
    justify-items: center;
    align-items: center;
}

.koph{
    font-size: 16px;
    color: indianred;
}

h1{
    color: dodgerblue;
}

select{
    margin-right: 5px;
}

input{
    margin-top: 5px;
}

button{
    margin-top: 63px;
    width: 75%;
    height: 30px;
}
.dispute-grid-wrap{
    display: grid;
    align-content: stretch;
    align-items: start;
    justify-items: center;
    height: 200px;
    margin: 20px auto;
    width: 800px;
}

.dispute-name{
    margin-bottom: 30px;
}

.vs{
    display: flex;
    justify-items: center;
    align-items: center;
}

.detail-title{
    font-weight: bold;
}

.detail-description{
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
