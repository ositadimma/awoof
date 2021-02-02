<template>
  <div class="transaction-container">
    <div class="nav">
      <span class="nav-active">ALL</span>
      <span>BANK TRANSFER</span>
      <span>WALLET</span>
      <span>TRANSFER</span>
      <span>AIRTIME TOPUP</span>
      <span>DATA PURCHASE</span>
    </div>
    <TransactionsTable />
  </div>
</template>

<script>
import TransactionsTable from '~/components/Transactionstable'
export default {
  name: 'Referral',
  layout: 'dashboardLayout',
  components: {
    TransactionsTable
  },
  created () {
    this.$store.commit('setLayout', 'TRANSACTIONS') // changes layout title of dashboard header
  }
}
</script>

<style scoped>
.transaction-container {
  background: #F7F7F8;
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
.nav {
  display: flex;
  margin-bottom: 44px;
}
.nav span {
  display: block;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  position: relative;
}
.nav span:nth-child(1) {
  margin-right: 25px;
}
.nav span:nth-child(2) {
  margin-right: 29px;
}
.nav span:nth-child(n+2) {
  margin-right: 28px;
}
.nav span:hover {
  cursor: pointer;
}
.nav span::before {
  content: " ";
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 3px solid;
  color:#09AB5D;
  height: 0;
}
.nav span:hover::before {
  width: 100%;
  transition: all 0.2s ease-in-out;
  transition-duration: 0.3s;
}
.nav .nav-active {
  border-bottom: 3px solid #09AB5D;
}
.nav .nav-active:hover {
  cursor: auto;
}
.nav .nav-active:hover::before {
  color: transparent;
  width: 0;
  border-bottom: none;
  transition: none;
}
@media (max-width: 1024px) {
  .nav span:hover::before {
    color: transparent;
    width: 0;
    border-bottom: none;
    transition: none;
  }
}
@media (max-width: 767px) {
  .transaction-container {
    padding: 20px 0px;
  }
  .nav {
    width: 100%;
    justify-content: space-between;
  }
  .nav span {
    font-size: 9px;
    line-height: 16px;
  }
  .nav span:nth-child(1) {
    margin-right: 0px;
  }
  .nav span:nth-child(2) {
    margin-right: 0px;
  }
  .nav span:nth-child(n+2) {
    margin-right: 0px;
  }
}
@media (max-width: 937px) and (orientation: landscape) {
  .nav {
    width: 100%;
    justify-content: space-between;
  }
  .nav span {
    font-size: 12px;
    line-height: 19px;
  }
  .nav span:nth-child(1) {
    margin-right: 0px;
  }
  .nav span:nth-child(2) {
    margin-right: 0px;
  }
  .nav span:nth-child(n+2) {
    margin-right: 0px;
  }
}
</style>
