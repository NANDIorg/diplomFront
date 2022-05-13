<template>
<section class="standart-section">
  <div class="home-content">
    <h1>Открытые споры</h1>
    <div class="competition-content">
      <div v-for="dispute in disputes" :key="dispute.id" class="dispute-item">
        <DisputeItem :dispute=dispute />
         <!-- <router-link :to="{ name: 'DisputeDetail', params: { id: dispute.id } }">
        <DisputeItem :dispute=dispute />
        </router-link>  -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
import DisputeItem from '@/components/disputeItem' 
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    DisputeItem,
  },
  methods: {
    ...mapActions({
      getAllDisputeVuex: 'dispute/getAllDispute',
    }),
  },
  computed: {
    ...mapGetters({
      disputes: 'dispute/items'
    })
  },
  mounted() {
    this.getAllDisputeVuex()
    
  }
}
</script>

<style scoped>
.home-content{
  height: 100vh;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
}

.competition-content{
  display: flex;
  flex-direction: column;
}

.dispute-item{
  margin-bottom: 20px;
}
</style>
