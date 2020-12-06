<template>
  <div class="giver-container">
    <GiveawayTable />
  </div>
</template>

<script>
import GiveawayTable from '~/components/Giveawaytable'
export default {
  name: 'Giver',
  layout: 'dashboardLayout',
  components: {
    GiveawayTable
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS') // changes layout title of dashboard header
  }

}
</script>

<style scoped>
.giver-container {
  background: #F7F7F8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  padding: 6.4% 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 767px) {
  .giver-container {
    padding: 6.4% 0px;
  }
}
</style>
