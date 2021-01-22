<template>
  <div class="winners-container">
    <WinnersTable />
  </div>
</template>

<script>
import WinnersTable from '~/components/WinnersTable'
export default {
  name: 'Winners',
  layout: 'dashboardLayout',
  components: {
    WinnersTable
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAY (Winners)') // changes title of dashboard header
  }

}
</script>

<style scoped>
.winners-container {
  background: #F7F7F8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  padding: 6.4% 6% 0px 4.45%;
  overflow-y: auto;
}
</style>
