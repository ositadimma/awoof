<template>
  <div class="participation">
    <div class="head">
      <span>Participation Report</span>
    </div>
    <hr>
    <div class="charts">
      <span class="Gender">Gender</span>
      <PieChart
        v-show="giveawayParticipants.length > 0"
        :giveaway-participants="giveawayParticipants"
      />
      <div v-show="giveawayParticipants.length < 1" class="No-data">
        No data
      </div>
      <hr>
      <span class="Location">Location</span>
      <HorizontalBar
        v-show="giveawayParticipants.length > 0"
        :giveaway-participants="giveawayParticipants"
      />
      <div v-show="giveawayParticipants.length < 1" class="No-data">
        No data
      </div>
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
  },
  props: {
    giveawayParticipants: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
.participation {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  background: #ffffff;
  border: 1px solid #e2e2ea;
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
.participation .head span:first-child {
  align-self: start;
  display: block;
  font-size: 12px;
  line-height: 19px;

  color: #a2abaa;
}
.charts hr {
  margin-bottom: 24px;
}
.charts .Gender,
.charts .Location {
  display: block;
  color: #75759e;
  font-size: 12px;
  margin-bottom: 4px;
}
.No-data {
  color: #09ab5d;
  box-sizing: content-box;
  width: 60px;
  margin: 0 auto;
}
@media (max-width: 1280px) {
  .participation {
    margin: 65px 0px 65px 0px;
    height: auto;
  }
}
</style>
