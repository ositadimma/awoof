<template>
  <div class="chart-ctn animate__fadeInUp">
    <div class="head">
      <span class="title">Amount Processed</span>
      <div class="nav-border">
        <!-- <span class="nav">Weekly</span> -->
        <span
          :class="mode === 'Monthly' ? 'nav active' : 'nav'"
          @click="changeMode('Monthly')"
        >Monthly</span>
        <span
          :class="mode === 'Yearly' ? 'nav active' : 'nav'"
          @click="changeMode('Yearly')"
        >Yearly</span>
      </div>
    </div>
    <LineChart
      v-show="dashboardChart.length > 0"
      :dashboard-chart="dashboardChart"
    />
    <div v-show="dashboardChart.length == 0" class="no-data">
      No data available
    </div>
  </div>
</template>

<script>
import LineChart from './Linechart'
export default {
  name: 'Dashboardchart',
  components: {
    LineChart
  },
  props: {
    dashboardChart: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    mode () {
      return this.$store.state.mode
    }
  },
  methods: {
    changeMode (mode) {
      this.$store.commit('setMode', mode)
    }
  }
}
</script>

<style scoped>
.chart-ctn {
  border: 1px solid #e2e2ea;
  border-radius: 20px;
  width: 100%;
  min-height: 494px;
  margin-bottom: 20px;

  background: #ffffff;
  display: flex;
  flex-direction: column;

  padding: 3.3% 5.61% 4.55% 6.68%;
}
.head {
  width: 100%;
  display: flex;
  margin-bottom: 35.6px;
}
.head .title {
  font-size: 16px;
  line-height: 25px;

  color: #75759e;
  align-self: center;
  justify-self: flex-start;
}
.head .nav-border {
  border: 1px solid #f1f1f5;
  border-radius: 8px;
  display: flex;

  align-self: center;
  margin-left: auto;
}
.nav-border .nav {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 19px;
  color: #696974;

  width: 72px;
  height: 25.98px;
  padding-top: 1px;
  cursor: pointer;
}
.nav-border .nav:hover {
  border-radius: 8px;
  color: #ffffff;
  background: #00c4b7;
}
.nav-border .active {
  border-radius: 8px;
  color: #ffffff;
  background: #00c4b7;
  cursor: auto;
}
.no-data {
  flex: 1;
  width: 100%;
  height: 100%;
  font-size: calc(1rem + 0.3vw);
  color: #00c4b7;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1600px) {
  .no-data {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  .head .title {
    font-size: 12px;
    line-height: 21px;
  }
  .nav-border .nav {
    font-size: 10px;
    line-height: 17px;
    width: 45px;
    height: 15.98px;
  }
}
</style>
