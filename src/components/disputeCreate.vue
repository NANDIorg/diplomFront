<template>
    <div class="standart-section">
        <div class="dispute-wrap">
            <div class="dispute-grid-wrap">
                <div class="dispute-content">
                    <div class="content-team-one">
                        <span>Название первой команды</span>
                        <input v-model="teamOne" type="text">
                    </div>
                    <div class="content-team-two">
                        <span>Название второй команды</span>
                        <input v-model="teamTwo" type="text">
                    </div>
                </div>
                <span>Название спора</span>
                <input class="dispute-name" v-model="nameDispute" type="text">
                <span>Описание</span>
                <textarea v-model="description" cols="30" rows="10"></textarea>
                <button @click="createDispute()">Создать спор</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    data() {
        return {
            teamOne: "",
            teamTwo: "",
            description: "",
            nameDispute: ""
        }
    },
    methods: {
        createDispute() {
            this.createDisputeVuex({
                team_one: this.teamOne, 
                team_two: this.teamTwo, 
                description: this.description, 
                name:  this.nameDispute, 
                token: this.tokenVuex,
                })
        },
        ...mapActions({
            createDisputeVuex: 'user/createDispute'
        })
    },
    computed: {
        ...mapGetters({
            tokenVuex: 'user/token'
        })
    }
}
</script>

<style scoped>
.dispute-wrap{
    height: 100vh;
    background: white;
    border-radius: 5px;
    display: grid;
}

.dispute-content{
    display: flex;
    margin: 20px auto;
    margin-top: 40px;
    height: 50px;
}

.content-team-one{
    display: grid;
}

.content-team-two{
    display: grid;
    margin-left: 30px;
}

input{
    margin-top: 5px;
}


button{
    margin-top: 190px;
}
.dispute-grid-wrap{
    display: grid;
    align-content: stretch;
    align-items: start;
    justify-items: center;
    height: 200px;
}

.dispute-name{
    margin-bottom: 30px;
}

textarea{
    width: 425px;
}
</style>
