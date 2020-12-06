<template>
  <div class="winners-container">
    <!--No design yet-->
  </div>
</template>

<script>
export default {
  name: 'Winners',
  layout: 'dashboardLayout',
  created () {
    this.$store.commit('setLayout', 'WINNERS') // changes title of dashboard header
  }

}
</script>

<style scoped>
.winners-container {
  border: 1px solid blue;
  background: #F7F7F8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  padding: 0px 6% 0px 4.45%;
  overflow-y: auto;
}
</style>
