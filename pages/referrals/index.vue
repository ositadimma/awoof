<template>
  <div class="referral-container">
    <div class="referral-card">
      <div class="title-ctn">
        <span class="title">Referral Bonus</span>
      </div>
      <div class="edit" @click="showEdit">
        <span class="amount">N500</span>
        <div class="edit-image" />
      </div>
    </div>
    <ReferralTable />
    <div id="edit-form" class="edit-form">
      <ReferralForm @CloseEdit="closeEdit" />
    </div>
  </div>
</template>

<script>
import ReferralTable from '~/components/Referraltable'
import ReferralForm from '~/components/Referralform'
export default {
  name: 'Referral',
  layout: 'dashboardLayout',
  components: {
    ReferralTable,
    ReferralForm
  },
  created () {
    this.$store.commit('setLayout', 'REFERRALS') // changes layout title of dashboard header
  },
  methods: {
    showEdit () {
      document.getElementById('edit-form').style.display = 'flex'
      document.getElementById('edit-form').style.alignItems = 'center'
      document.getElementById('edit-form').style.justifyContent = 'center'
    },
    closeEdit () {
      document.getElementById('edit-form').style.display = 'none'
    }
  }
}
</script>

<style scoped>
.referral-container {
  background: #F7F7F8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.referral-card {
  border: 1px solid #E2E2EA;
  background: #FFFFFF;
  border-radius: 20px;
  width: 260px;
  min-height: 95px;

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

  color: #75759E;
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
.edit .edit-image {
  width: 20px;
  height: 20px;
  background-image: url('~assets/icons/EditSquare.svg');
  cursor: pointer;
}
.edit-form {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(6, 13, 37, 0.6);
}
@media (max-width: 767px) {
  .referral-container {
    padding: 20px 0px;
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
</style>
