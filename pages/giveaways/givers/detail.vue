<template>
  <div class="trandetail-container">
    <div class="header">
      <div class="back">
        <img
          src="~/assets/icons/Arrow LeftCircle.svg"
          alt="back"
          @click="$router.push('/giveaways/givers')"
        >
        <span>Back</span>
      </div>
      <button class="btn-cmpt">
        Download Report
      </button>
      <!-- When onGoing use this instead
      <button class="edit-btn btn-cmpt">
        Edit Giveaway
      </button>
      <button class="suspend-btn btn-cmpt">
        Suspend Giveaway
      </button>
      -->
    </div>

    <div class="details">
      <div class="details-child-1">
        <GiveawayDetailTable />
        <span class="users">Winners (5)</span>
        <WinnersTable />
        <span class="users">Users Who Have Entered (335)</span>
        <WinnersTable />
      </div>
      <div class="details-child-2">
        <FullDetails />
        <ParticipationReport />
      </div>
    </div>
  </div>
</template>

<script>
import GiveawayDetailTable from '~/components/Giveawaydetailtable'
import WinnersTable from '~/components/Winnerstable'
import FullDetails from '~/components/Fulldetails'
import ParticipationReport from '~/components/Participationreport'
// when data is available name this file _id to get based on ID then change routes
export default {
  name: 'Giveawaydetail',
  layout: 'dashboardLayout',
  components: {
    GiveawayDetailTable,
    WinnersTable,
    FullDetails,
    ParticipationReport
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS DETAILS') // changes layout title of dashboard header
  }
}
</script>

<style scoped>
.trandetail-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  padding: 30px 49px 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.header {
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 34px;
}
.back {
  flex: 3;
  display: flex;
  align-items: center;
}
.back img {
  cursor: pointer;
}
.back span {
  font-size: 14px;
  line-height: 23px;
  color: #75759e;
  margin-left: 11px;
}
.btn-cmpt {
  width: 175px;
  height: 50px;
  background: #083577;
  border-radius: 20px;
}
.edit-btn {
  width: 158px;
}
.suspend-btn {
  width: 188px;
  background: #e74d75;
}
.details {
  width: 100%;
  height: auto;

  display: flex;
  /*padding: 7.5% 3.4% 0px 3.4%;*/
}
.details .details-child-1 {
  width: 65%;
  height: auto;
}
.details .details-child-2 {
  width: 32.5%;
  height: auto;
  margin-left: 27px;
}
.users {
  font-size: 16px;
  line-height: 26px;
  color: #75759e;
}
@media (max-width: 1280px) {
  .details {
    flex-direction: column-reverse;
  }
  .details .details-child-1,
  .details .details-child-2 {
    width: 100%;
    margin-left: 0px;
  }
}
@media (max-width: 950px) {
  .trandetail-container {
    padding: 20px 0px 0px 0px;
  }
  .back span {
    font-size: 12px;
    line-height: 21px;
  }
}
@media (max-width: 767px) {
  .users {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
