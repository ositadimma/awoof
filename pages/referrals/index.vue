<template>
  <div class="referral-container">
    <div class="referral-card animate__fadeInUp">
      <div class="title-ctn">
        <span class="title">Referral Bonus</span>
      </div>
      <div class="edit">
        <span
          class="amount"
        ><img src="~/assets/icons/star.svg" alt="star">
          {{ amount.amount }}</span>
        <div class="edit-image" @click="showModal" />
      </div>
    </div>
    <ReferralTable :data="data" />
    <ReferralForm v-show="modalOpen" :data="amount.amount.toString()" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import ReferralTable from '~/components/Referraltable'
import ReferralForm from '~/components/Referralform'

export default {
  name: 'Referral',
  layout: 'dashboardLayout',
  components: {
    ReferralTable,
    ReferralForm
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var referralResponse = await $axios.$get(
        '/admins/get_all_refferals'
      )
      var referralBonusResponse = await $axios.$get(
        '/admins/referral_bonus'
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data || err.response.data.message)
        }
      }
    }

    return {
      data: referralResponse ? referralResponse.data : [],
      amount: referralBonusResponse ? referralBonusResponse.data : {}
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'REFERRALS') // changes layout title of dashboard header
  },
  methods: {
    showModal () {
      this.$store.commit('setModalOpen', true)
    }
  }
}
</script>

<style scoped>
.referral-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.referral-card {
  border: 1px solid #e2e2ea;
  background: #ffffff;
  border-radius: 20px;
  width: 260px;
  min-height: 95px;
  max-height: 95px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  /*margin: 0px 21px 19px 0px;*/
  padding: 10px 31px 0px 29px;
  margin-bottom: 50px;
}
.title-ctn {
  display: flex;
  align-items: center;
}
.title-ctn .title {
  font-size: 12px;
  line-height: 19px;

  color: #75759e;
}
.edit {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  align-items: center;
}
.edit .amount {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;

  color: #171725;
  padding-top: 3px;
}
.edit .amount img {
  margin-top: 5px;
}
.edit .edit-image {
  width: 20px;
  height: 20px;
  background-image: url('~assets/icons/EditSquare.svg');
  cursor: pointer;
}
@media (max-width: 767px) {
  .referral-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .title-ctn .title {
    font-size: 10px;
    line-height: 17px;
  }
  .edit .amount {
    font-size: 18px;
    line-height: 32px;
  }
}
@media (max-width: 290px) {
  .referral-card {
    width: 100%;
  }
}
</style>
