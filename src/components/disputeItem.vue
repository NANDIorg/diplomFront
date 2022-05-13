<template>
        <div class="dispute-content">
            <!-- вот сюда роутер линк -->
            <router-link class="router_a" :to="{ name: 'DisputeDetail', params: { id: dispute.id } }">
                <div class="dispute-content-show">
                    <div class="team-dif">
                        <span>{{dispute.team_one}}</span>
                        <span>{{dispute.team_one_bet}}</span>
                    </div>
                    <div class="name-content">
                        <span class="name-content-name">{{dispute.name}}</span>
                    </div>
                    <div class="team-dif">
                        <span>{{dispute.team_two}}</span>
                        <span>{{dispute.team_two_bet}}</span>
                    </div>
                </div>
            </router-link>
        </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'disputeItem',
    props: {
        dispute: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
        }
    },
    methods:{
        ...mapActions({
            
        }),
        kekw() {
            alert("sdadsada")
            console.log(this.dispute)
        }
    },
}
</script>

<style scoped>
.dispute-wrap{
    margin: auto;
}

.dispute-content{
    border-radius: 5px;
    width: 500px;
    margin: auto;
}

.dispute-content-show{
    width: 500px;
    height: 200px;
    border:1px solid black;
    border-radius: 5px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: 0 0 1px rgba(0,0,0,0.5);
    transition: all 0.3s;
    cursor: pointer;
}

.dispute-content-show:hover{
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.team-dif{
    height: 150px;
    display: grid;
    align-items: center;
}

.name-content-name{
    margin: 0 auto;
}

.name-content{
    max-width: 300px;
    overflow-wrap: break-word;
}

</style>