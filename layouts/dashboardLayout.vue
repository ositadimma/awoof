<template>
  <div class="dashboard-ctn">
    <DashboardSideBar />
    <div class="dashboard-ctn-child">
      <DashboardHeader :layout="layout" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import DashboardHeader from '~/components/DashboardHeader'
import DashboardSideBar from '~/components/DashboardSideBar'
export default {
  name: 'DashboardLayout',
  components: {
    DashboardHeader,
    DashboardSideBar
  },
  computed: {
    layout () {
      return this.$store.state.layout
    }
  }
}
</script>

<style scoped>
.dashboard-ctn {
  width: 100vw;
  height: 100vh;

  display: flex;
  overflow: hidden;
}
.dashboard-ctn-child {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: flex-start;
  overflow: hidden;
}
</style>
