<template>
  <div class="user-form-container" @click.self="closeModal">
    <div class="user-form-body animate__fadeIn">
      <!-- <div class="header">
          <span>{{ detail=='suspend'? 'Suspend': 'Delete' }} User</span>
          <img src="~/assets/icons/Delete.svg" @click="closeModal">
        </div> -->
      <div>You are about to {{ message }}</div>
      <div class="btn-c">
        <span v-if="detail==='set'" class="btn-d delete" @click="setGiveawayWinners">
          set winners
        </span>
        <span v-if="detail==='confirm'" class="btn-d delete" @click="confirmPay">
          confirm payment
        </span>
        <span v-if="detail==='conplete'" class="btn-d delete" @click="completeGiveawayWinners">
          complete selection
        </span>
        <span class="btn-d delete" @click="closeModal">
          cancel
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'GiveWinnerDialog',
  props: {
    detail: {
      type: String,
      default () {
        return ''
      }
    },
    message: {
      type: String,
      default () {
        return ''
      }
    },
    giveawayDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    closeModal () {
      this.amount = '0'
      this.$store.commit('setModalOpen', false)
    },
    async confirmPay () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        console.log(this.giveawayDetail._id)
        const response = await this.$axios.$get(
            `/giveaways/confirm_manual_pay/${this.giveawayDetail._id}`
        )
        if (response) {
          this.$toast.global.custom_success('giveaway payment confirmed')
          this.$nuxt.refresh()
          // this.setDataToDefault()
          this.$store.commit('setModalOpen', false)
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    },
    async completeGiveawayWinners () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$get(
            `/giveaways/complete_giveaway_winners/${this.giveawayDetail._id}`
        )
        if (response) {
          this.$toast.global.custom_success('Giveaway winners selected')
          this.$nuxt.refresh()
          // this.setDataToDefault()
          this.$store.commit('setModalOpen', false)
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    },
    async setGiveawayWinners () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$get(
            `/giveaways/preset_giveaway_winners/${this.giveawayDetail._id}`
        )
        if (response) {
          this.$toast.global.custom_success('Giveaway winners selected')
          this.$nuxt.refresh()
          // this.setDataToDefault()
          this.$store.commit('setModalOpen', false)
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    }
  }
}
</script>

    <style scoped>
    .user-form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;

      background: rgba(6, 13, 37, 0.6);
    }
    .user-form-body {
      padding: 35px 2.7% 0px 2.7%;
      background: #ffffff;
      /* width: 50.5%;
      height: 82.5%; */
      max-height: 620px;
      overflow-y: auto;
      padding-bottom: 1rem;
    }
    .btn-c{
      margin-top: 60px;
    }
    .btn-d{
      float: right;
      padding: 10px;
      font-weight: 100;
      color: darkslateblue;
      cursor: pointer;
      font-size: 18px;
    }
    .btn-d:hover{
      font-weight: bold;
    }
    span {
      font-weight: 600;
    }
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 17px;

      padding-left: 3.5%;
    }
    .header span {
      font-size: 18px;
      line-height: 29px;

      color: #061e5b;
    }
    .header img {
      margin-left: auto;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .form {
      display: flex;
      flex-direction: column;
      padding: 20px 13% 0px 13%;
    }
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 23px;
      color: #696f79;
      margin-bottom: 11px;
    }
    input[type='number'], input[type='text'] {
      width: 100%;
      height: 64px;
      padding-left: 30px;

      border: 1px solid #8692a6;
      box-sizing: border-box;
      border-radius: 6px;

      margin-bottom: 21px;
      font-size: 12px;
    }
    input[type='number']::placeholder, input[type='text']::placeholder {
      font-weight: 600;
    }
    .btn-cmpt {
      height: 64px;
      border-radius: 6px;
      margin-top: 20px;
      margin-bottom: 27px;
    }
    .cancel {
      font-size: 12px;
      line-height: 19px;
      color: #8692a6;

      align-self: center;
      cursor: pointer;
    }
    @media (max-width: 950px) and (orientation: landscape) {
      .user-form-body {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 1024px) {
      .user-form-body {
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
    </style>
