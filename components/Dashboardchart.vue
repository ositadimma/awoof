<template>
  <div class="chart-ctn">
    <div class="head">
      <span class="title">Amount Processed</span>
      <div class="nav-border">
        <span class="nav">Weekly</span>
        <span class="nav active">Monthly</span>
        <span class="nav">Yearly</span>
      </div>
    </div>
    <LineChart />
  </div>
</template>

<script>
import LineChart from './Linechart'
export default {
  name: 'Dashboardchart',
  components: {
    LineChart
  }
}
</script>

<style scoped>
.chart-ctn {
  border: 1px solid #E2E2EA;
  border-radius: 20px;
  width: 100%;
  min-height: 494px;
  margin-bottom: 20px;

  background: #FFFFFF;
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

  color: #75759E;
  align-self: center;
  justify-self: flex-start;
}
.head .nav-border {
  border: 1px solid #F1F1F5;
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
  color: #FFFFFF;
  background: #00C4B7;
}
.nav-border .active {
  border-radius: 8px;
  color: #FFFFFF;
  background: #00C4B7;
  cursor: auto;
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
