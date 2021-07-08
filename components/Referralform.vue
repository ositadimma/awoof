<template>
  <div class="ref-form-container" @click.self="closeModal">
    <div class="ref-form-body animate__fadeIn">
      <div class="header">
        <span>Set Referral Bonus</span>
        <img src="~/assets/icons/Delete.svg" @click="closeModal">
      </div>
      <hr>
      <div class="form">
        <label>Amount of stars</label>
        <input v-model="amount" type="number" placeholder="Please Enter">

        <!-- <label>Referral ID</label>
        <input type="text" placeholder="Please Enter"> -->
        <button
          v-show="amount.length == 0 && !loading"
          class="disable-1 btn-cmpt"
        >
          Continue
        </button>
        <button
          v-show="amount.length > 0 && !loading"
          class="btn-cmpt"
          @click="createReferralBonus"
        >
          Continue
        </button>
        <button v-show="loading" class="btn-cmpt" disabled>
          <div class="loader1" />
        </button>
        <span class="cancel" @click="closeModal">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'ReferralForm',
  props: {
    data: {
      type: String,
      default () {
        return '500'
      }
    }
  },
  data () {
    return {
      amount: this.data,
      loading: false
    }
  },
  methods: {
    async createReferralBonus () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$post(
          'https://api.philantroapp.com/v1/admins/set_referral_bonus',
          {
            amount: parseInt(this.amount)
          }
        )
        if (response) {
          this.$toast.global.custom_success('Referral bonus created')
          this.$nuxt.refresh()
          this.closeModal()
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
    closeModal () {
      this.amount = this.data
      this.$store.commit('setModalOpen', false)
    }
  }
}
</script>

<style scoped>
.ref-form-container {
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
.ref-form-body {
  padding: 2.9% 2.7% 0px 2.7%;
  background: #ffffff;
  width: 50.5%;
  height: 82.5%;
  max-height: 564px;
  overflow-y: auto;
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
input[type='number'] {
  width: 100%;
  height: 64px;
  padding-left: 30px;

  border: 1px solid #8692a6;
  box-sizing: border-box;
  border-radius: 6px;

  margin-bottom: 21px;
  font-size: 12px;
}
input[type='number']::placeholder {
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
  .ref-form-body {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1024px) {
  .ref-form-body {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
}
</style>
