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
      <!-- <button
        v-show="!giveawayDetail.completed && !giveawayDetail.hidden"
        class="suspend-btn btn-cmpt"
        @click="showHideGiveAwayModal"
      >
        Hide Giveaway
      </button>
      <button
        v-show="!giveawayDetail.completed && giveawayDetail.hidden"
        class="edit-btn btn-cmpt"
        @click="showHideGiveAwayModal"
      >
        Show Giveaway
      </button> -->
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
        <GiveawayDetailTable
          :giveaway-detail="giveawayDetail"
          @open-complete-winner-dialog="completeWinnerDialogModal"
          @open-set-winner-dialog="setWinnerDialogModal"
          @open-confirm-payment-dialog="confirmPaymentDialogModal"
        />
      </div>
      <div class="details-child-2">
        <GiveawayFullDetails :user-info="userInfo" />
      </div>
    </div>
    <ParticipationReport
      v-show="giveawayDetail.completed"
      :giveaway-participants="giveawayParticipants"
    />
    <span
      v-show="giveawayDetail.done"
      class="users"
    >Winners ({{ giveawayWinners.length }})</span>
    <GiveawayWinnersTable
      v-show="giveawayDetail.done"
      :giveaway-winners="giveawayWinners"
    />
    <span
      class="users"
    >Users Who Have Entered ({{ giveawayParticipants.length }})</span>
    <GiveawayParticipationTable
      :key="key"
      :giveaway-participants="giveawayParticipants"
      @refresh="refresh"
    />
    <GiveWinnerDialog
      v-show="modalOpen && modal == 'giveWinnerDialog'"
      :detail="detail"
      :message="message"
      :giveaway-detail="giveawayDetail"
    />
    <!-- <HideGiveAwayModal
      v-show="popUpOpen"
      :id="giveawayDetail._id"
      :status="giveawayDetail.hidden"
      @refresh="refresh"
    /> -->
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
import GiveWinnerDialog from '~/components/GiveWinnerDialog'

// import HideGiveAwayModal from '~/components/HideGiveAwayModal'

export default {
  name: 'Giveawaydetail',
  layout: 'dashboardLayout',
  components: {
    GiveawayDetailTable,
    GiveawayWinnersTable,
    GiveawayParticipationTable,
    GiveawayFullDetails,
    ParticipationReport,
    GiveWinnerDialog
    // HideGiveAwayModal
  },
  async asyncData ({ $axios, $toast, params }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var giveawayDetailResponse = await $axios.$get(
        `/giveaways/${params.id}`
      )
      var giveawayWinnersResponse = await $axios.$get(
        `/giveaways/winners/${params.id}`
      )
      var giveawayParticipantsResponse = await $axios.$get(
        `/admins/get_participants/${params.id}`
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error(
          'please check your connection and try again'
        )
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data || err.response.data.message)
        }
      }
    }

    // get social account of participants

    const giveawayParticipantsPromises = giveawayParticipantsResponse.data.map(async (item) => {
      const participant = {
        user: {
          username: item.user.username,
          email: item.user.email,
          giveawaysAmountWon: item.user.giveawaysAmountWon,
          _id: item.user._id,
          facebook: '',
          twitter: '',
          instagram: ''
        },
        createdAt: item.createdAt,
        _id: item._id
      }

      try {
        const socialMediaAccount = await $axios.$get(
        `/admins/get_social_account/${item.user._id}`
        )

        participant.user.facebook = socialMediaAccount.data[0].facebook
        participant.user.twitter = socialMediaAccount.data[0].twitter
        participant.user.instagram = socialMediaAccount.data[0].instagram
      } catch (err) {
        if (err.message.includes('Network')) {
          $toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            $toast.global.custom_error(err.response.data || err.response.data.message)
          }
        }
      }
      return participant
    })

    const giveawayWinnersPromises = giveawayWinnersResponse.data.map(async (item) => {
      const winner = {
        user: {
          username: item.user.username,
          email: item.user.email,
          giveawaysAmountWon: item.user.giveawaysAmountWon,
          _id: item.user._id,
          facebook: '',
          twitter: '',
          instagram: ''
        },
        win: item.win,
        createdAt: item.createdAt,
        _id: item._id
      }

      try {
        const socialMediaAccount = await $axios.$get(
        `/admins/get_social_account/${item.user._id}`
        )

        winner.user.facebook = socialMediaAccount.data[0].facebook
        winner.user.twitter = socialMediaAccount.data[0].twitter
        winner.user.instagram = socialMediaAccount.data[0].instagram
      } catch (err) {
        if (err.message.includes('Network')) {
          $toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            $toast.global.custom_error(err.response.data || err.response.data.message)
          }
        }
      }
      return winner
    })

    const giveawayWinners = await Promise.all(giveawayWinnersPromises)
    const giveawayParticipants = await Promise.all(giveawayParticipantsPromises)
    // console.log(giveawayWinners)

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
        giveawayWinnersResponse.data !== undefined
          ? giveawayWinners // .data
          : [],
      giveawayParticipants:
        giveawayParticipantsResponse.data !== undefined
          ? giveawayParticipants // .data
          : []
    }
  },
  data () {
    return {
      key: 0,
      modal: '',
      message: '',
      detail: ''
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
    // popUpOpen () {
    //   return this.$store.state.popUpOpen
    // }
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
      html2pdf().set(opt).from(this.$refs.details).save()
    },
    setWinnerDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.detail = 'set'
      this.message = 'set winners for this giveaway'
      this.modal = 'giveWinnerDialog'
    },
    confirmPaymentDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.detail = 'confirm'
      this.message = 'confirm that this user has made a payment for this giveaway'
      this.modal = 'giveWinnerDialog'
    },
    completeWinnerDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.detail = 'complete'
      this.message = 'complete the selection of winners for this giveaway'
      this.modal = 'giveWinnerDialog'
    },
    // showHideGiveAwayModal () {
    //   this.$store.commit('setPopUpOpen', true)
    // },
    refresh () {
      this.$nuxt.refresh()
      this.key += 1
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
