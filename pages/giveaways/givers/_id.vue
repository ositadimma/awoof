<template>
  <div class="giveawaydetail-container">
    <div class="header">
      <div class="back">
        <img
          src="~/assets/icons/Arrow LeftCircle.svg"
          alt="back"
          @click="previousRoute"
        >
        <span>Back</span>
      </div>
      <button
        v-show="giveawayDetail.completed"
        class="btn-cmpt"
        @click="downloadReport"
      >
        Download Report
      </button>
      <!-- When onGoing use this instead -->
      <!-- <button v-show="!giveawayDetail.completed" class="edit-btn btn-cmpt">
        Edit Giveaway
      </button> -->
      <!-- <button v-show="!giveawayDetail.completed" class="suspend-btn btn-cmpt">
        Suspend Giveaway
      </button> -->
    </div>

    <div ref="details" class="details">
      <div class="details-child-1">
        <GiveawayDetailTable :giveaway-detail="giveawayDetail" />
        <span
          v-show="giveawayDetail.completed"
          class="users"
        >Winners ({{ giveawayWinners.length }})</span>
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
import html2pdf from 'html2pdf.js'
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
        $toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data.message)
        }
      }
    }
    // eslint-disable-next-line
    return {
      giveawayDetail:
        giveawayDetailResponse !== undefined ? giveawayDetailResponse.data : {},
      userInfo:
        giveawayDetailResponse.data.user !== undefined &&
        giveawayDetailResponse.data.user
          ? giveawayDetailResponse.data.user
          : undefined,
      giveawayWinners:
        giveawayWinnersResponse !== undefined
          ? giveawayWinnersResponse.data
          : [],
      giveawayParticipants:
        giveawayWinnersResponse !== undefined
          ? giveawayWinnersResponse.data
          : []
    }
  },
  computed: {
    tasks () {
      const tasks = []
      if (this.giveawayDetail.followPageOnFacebook) {
        tasks.push({
          text: 'Follow Page On Facebook'
        })
      }
      if (this.giveawayDetail.likeFacebook) {
        tasks.push({
          text: 'Like post on Facebook',
          link: this.giveawayDetail.likeFacebookLink
        })
      }
      if (this.giveawayDetail.followInstagram) {
        tasks.push({
          text: 'Follow On Instagram',
          link: this.giveawayDetail.followInstagramLink
        })
      }
      if (this.giveawayDetail.likeInstagram) {
        tasks.push({
          text: 'Like post on Instagram',
          link: this.giveawayDetail.likeInstagramLink
        })
      }
      if (this.giveawayDetail.followTwitter) {
        tasks.push({
          text: 'Follow On Twitter',
          link: this.giveawayDetail.followTwitterLink
        })
      }
      if (this.giveawayDetail.likeTweet) {
        tasks.push({
          text: 'Like and retweet on Twitter',
          link: this.giveawayDetail.likeTweetLink
        })
      }

      return tasks
    }
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS DETAILS') // changes layout title of dashboard header
  },
  methods: {
    previousRoute () {
      window.history.back()
    },
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    downloadReport () {
      const opt = {
        margin: 10,
        filename: 'Giveaway_Details.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: 'css' },
        ignoreElements: (node) => {
          return node.nodeName === 'CANVAS'
        }
      }
      html2pdf()
        .set(opt)
        .from(this.$refs.details)
        .save()
    }
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
  padding-top: 3px;
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
  .back span {
    font-size: 12px;
    line-height: 21px;
  }
}
@media (max-width: 767px) {
  .giveawaydetail-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .users {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
