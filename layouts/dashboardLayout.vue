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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
