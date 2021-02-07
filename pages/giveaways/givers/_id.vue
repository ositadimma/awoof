<template>
  <div class="giveawaydetail-container">
    <div class="header">
      <div class="back">
        <img
          src="~/assets/icons/Arrow LeftCircle.svg"
          alt="back"
          @click="$router.push('/giveaways/givers')"
        >
        <span>Back</span>
      </div>
      <button v-show="giveawayDetail.completed" class="btn-cmpt">
        Download Report
      </button>
      <!-- When onGoing use this instead -->
      <button v-show="!giveawayDetail.completed" class="edit-btn btn-cmpt">
        Edit Giveaway
      </button>
      <button v-show="!giveawayDetail.completed" class="suspend-btn btn-cmpt">
        Suspend Giveaway
      </button>
    </div>

    <div class="details">
      <div class="details-child-1">
        <GiveawayDetailTable :giveaway-detail="giveawayDetail" />
        <span v-show="giveawayDetail.completed" class="users">Winners ({{ giveawayWinners.length }})</span>
        <GiveawayWinnersTable
          v-show="giveawayDetail.completed"
          :giveaway-winners="giveawayWinners"
        />
        <span
          class="users"
        >Users Who Have Entered ({{ giveawayParticipants.length }})</span>
        <GiveawayParticipationTable
          :giveaway-participants="giveawayParticipants"
        />
      </div>
      <div class="details-child-2">
        <GiveawayFullDetails :user-info="userInfo" />
        <ParticipationReport
          v-show="giveawayDetail.completed"
          :giveaway-participants="giveawayParticipants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import GiveawayDetailTable from '~/components/Giveawaydetailtable'
import GiveawayWinnersTable from '~/components/GiveawayWinnerstable'
import GiveawayParticipationTable from '~/components/GiveawayParticipationtable'
import GiveawayFullDetails from '~/components/GiveawayFulldetails'
import ParticipationReport from '~/components/Participationreport'

export default {
  name: 'Giveawaydetail',
  layout: 'dashboardLayout',
  components: {
    GiveawayDetailTable,
    GiveawayWinnersTable,
    GiveawayParticipationTable,
    GiveawayFullDetails,
    ParticipationReport
  },
  async asyncData ({ $axios, $toast, params }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var giveawayDetailResponse = await $axios.$get(
        `https://awoof-api.herokuapp.com/v1/giveaways/${params.id}`
      )
      var giveawayWinnersResponse = await $axios.$get(
        `https://awoof-api.herokuapp.com/v1/giveaways/winners/${params.id}`
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error(
          'please check your connection and try again'
        )
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data.message)
        }
      }
    }
    return {
      giveawayDetail: giveawayDetailResponse.data,
      userInfo: giveawayDetailResponse.data.user,
      giveawayWinners: giveawayWinnersResponse.data,
      giveawayParticipants: giveawayWinnersResponse.data
    }
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS DETAILS') // changes layout title of dashboard header
  }
}
</script>

<style scoped>
.giveawaydetail-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
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
  margin-left: 14px;
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
  .giveawaydetail-container {
    padding: 20px 4.5% 0px 4.5%;
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
