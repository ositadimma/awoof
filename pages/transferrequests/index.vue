<template>
  <div class="transaction-container">
    <div class="nav">
      <!-- <span class="nav-active">ALL</span> -->
      <span>TRANSFER REQUESTS</span>
      <!-- <span
        :class="{ 'nav-active': walletActive }"
        @click="selectedWallet"
      >WALLET</span>
      <span>TRANSFER</span> -->
      <!-- <span
        :class="{ 'nav-active': airtimeActive }"
        @click="selectedAirtime"
      >AIRTIME TOPUP</span>
      <span
        :class="{ 'nav-active': surpriseActive }"
        @click="selectedSurprise"
      >SURPRISE</span> -->
      <!-- <span>DATA PURCHASE</span> -->
    </div>
    <TransferRequestsTable :data="transferRequests" />

    <!-- <BankTransferTable v-show="bankTransferActive" :data="bankTransfer" />
    <WalletTable v-show="walletActive" :data="wallet" />
    <AirtimeTable v-show="airtimeActive" :data="airtime" />
    <SurpriseTable v-show="surpriseActive" :data="surprise" /> -->
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import TransferRequestsTable from '~/components/TransferRequestsTable'

export default {
  name: 'Transferrequests',
  layout: 'dashboardLayout',
  components: {
    TransferRequestsTable
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var transferRequestsResponse = await $axios.$get(
        '/admins/transfer_requests'
      )
      // var walletResponse = await $axios.$get(
      //   '/admins/wallet_top_ups'
      // )
      // var airtimeResponse = await $axios.$get(
      //   '/admins/airtime_top_up'
      // )
      // var surpriseResponse = await $axios.$get(
      //   '/admins/get_suprise'
      // )
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
    // console.log(bankTransferResponse, walletResponse, airtimeResponse)
    return {
      transferRequests: transferRequestsResponse ? transferRequestsResponse.data : []
    }
  },
  data () {
    return {
      bankTransferActive: true,
      walletActive: false,
      airtimeActive: false,
      surpriseActive: false
    }
  },
  created () {
    this.$store.commit('setLayout', 'TRANSFER REQUESTS') // changes layout title of dashboard header
  },
  methods: {
    selectedBankTransfer () {
      this.bankTransferActive = true
      this.walletActive = false
      this.airtimeActive = false
      this.surpriseActive = false
    },
    selectedWallet () {
      this.bankTransferActive = false
      this.walletActive = true
      this.airtimeActive = false
      this.surpriseActive = false
    },
    selectedAirtime () {
      this.bankTransferActive = false
      this.walletActive = false
      this.airtimeActive = true
      this.surpriseActive = false
    },
    selectedSurprise () {
      this.bankTransferActive = false
      this.walletActive = false
      this.airtimeActive = false
      this.surpriseActive = true
    }
  }
}
</script>

  <style scoped>
  .transaction-container {
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
  .nav span:nth-child(n + 2) {
    margin-right: 28px;
  }
  .nav span:hover {
    cursor: pointer;
  }
  .nav span::before {
    content: ' ';
    position: absolute;
    bottom: 0;
    width: 0;
    border-bottom: 3px solid;
    color: #09ab5d;
    height: 0;
  }
  .nav span:hover::before {
    width: 100%;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
  }
  .nav .nav-active {
    border-bottom: 3px solid #09ab5d;
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
      padding: 20px 4.5% 0px 4.5%;
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
    .nav span:nth-child(n + 2) {
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
    .nav span:nth-child(n + 2) {
      margin-right: 0px;
    }
  }
  </style>
