<template>
  <div class="participation">
    <div class="head">
      <span>Participation Report</span>
    </div>
    <hr>
    <div class="charts">
      <span class="Gender">Gender</span>
      <PieChart />
      <hr>
      <span class="Location">Location</span>
      <HorizontalBar />
    </div>
  </div>
</template>

<script>
import PieChart from './Piechart'
import HorizontalBar from './Horizontalbar'
export default {
  name: 'Participationreport',
  components: {
    PieChart,
    HorizontalBar
  }
}
</script>

<style>
.participation {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  background: #FFFFFF;
  border: 1px solid #E2E2EA;
  border-radius: 20px;
  padding: 0px 38px 30px 23px;
  margin-top: 113px;
}
.participation .head {
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
}
.participation hr {
  width: 100%;
  margin: 16px 0px 17px 0px;
}
.participation .head span:first-child{
  align-self: start;
  display: block;
  font-size: 12px;
  line-height: 19px;

  color: #A2ABAA;
}
.charts hr {
  margin-bottom: 24px;
}
.charts .Gender, .charts .Location {
  display: block;
  color: #75759E;
  font-size: 12px;
  margin-bottom: 4px;
}
@media (max-width: 1280px) {
  .participation {
   margin: 65px 0px 65px 0px;
   height: auto;
  }
}
</style>
