<template>
  <div class="dashboard">
    <div class="dashboard-child-1 animate__fadeInUp">
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Amount Processed</span>
          <img src="~/assets/icons/Graph.svg">
        </div>
        <span
          class="amount"
        >N{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.amount_processed)
            : 0
        }}</span>
        <!-- <div class="growth">
          <span>+50%</span>
          <span>this week</span>
        </div> -->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Total Givers</span>
          <img src="~/assets/icons/3user.svg">
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.givers)
            : 0
        }}</span>
        <!-- <div class="growth">
          <span>+5%</span>
          <span>this week</span>
        </div> -->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Awoofers</span>
          <img src="~/assets/icons/Graph.svg">
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.awoofwers)
            : 0
        }}</span>
        <!-- <div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div> -->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Current Giveaways</span>
          <div class="divide-fill">
            <img src="~/assets/icons/divide.svg">
          </div>
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.current_giveaways)
            : 0
        }}</span>
        <!--<div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div>-->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Completed Giveaways</span>
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.completed_giveaways)
            : 0
        }}</span>
        <!--<div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div>-->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Total Winners</span>
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.winners)
            : 0
        }}</span>
        <!--<div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div>-->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Star Giveaway</span>
        </div>
        <span class="amount">{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.star_giveaways)
            : 0
        }}</span>
        <!--<div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div>-->
      </div>
      <div class="dashboard-card">
        <div class="title-ctn">
          <span class="title">Total Bills Payment</span>
        </div>
        <span
          class="amount"
        >N{{
          dashboardParams !== undefined
            ? amountDelimeter(dashboardParams.bills_payment)
            : 0
        }}</span>
        <!--<div class="growth">
          <span>+12%</span>
          <span>this week</span>
        </div>-->
      </div>
    </div>
    <DashboardChart :dashboard-chart="dashboardChart" />
    <DashboardTable :dashboard-table="dashboardTable" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import DashboardChart from '~/components/Dashboardchart'
import DashboardTable from '~/components/DashboardTable'
export default {
  name: 'Dashboard',
  layout: 'dashboardLayout',
  components: {
    DashboardChart,
    DashboardTable
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var dashboardParamsResponse = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/admins/dashboard_params'
      )
      var dashboardChartResponse = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/admins/chart'
      )
      var dashboardTableresponse = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/giveaways'
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
    // console.log(dashboardParamsResponse)
    return {
      dashboardParams: dashboardParamsResponse
        ? dashboardParamsResponse.data
        : {},
      dashboardChart: dashboardChartResponse ? dashboardChartResponse.data : [],
      dashboardTable: dashboardTableresponse ? dashboardTableresponse.data : []
    }
  },
  created () {
    // changes layout title of dashboard header
    this.$store.commit('setLayout', 'DASHBOARD')
  },
  methods: {
    amountDelimeter (amount) {
      if (amount !== undefined) {
        return Math.floor(amount)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
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
.dashboard-child-1 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 19px 28px;
  margin-bottom: 20px;
}
.dashboard-card {
  border: 1px solid #e2e2ea;
  background: #ffffff;
  border-radius: 20px;
  height: 122px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  /*margin: 0px 21px 19px 0px;*/
  padding: 0px 31px 0px 29px;
}
.title-ctn {
  display: flex;
  align-items: center;
}
.title-ctn .title {
  flex: 3;

  font-size: 12px;
  line-height: 19px;

  color: #75759e;
}
.title-ctn .divide-fill {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("~assets/icons/dividefill.svg");
}
.dashboard-card .amount {
  font-weight: 600;
  font-size: 21px;
  line-height: 34px;

  color: #171725;
  margin: 2px 0px 2px 0px;
}
.growth span:nth-child(1) {
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;

  color: #09ab5d;
  margin-right: 6px;
}
.growth span:nth-child(2) {
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;

  color: #001431;
  opacity: 0.5;
}
@media (max-width: 767px) {
  .dashboard {
    padding: 20px 4.5% 0px 4.5%;
  }
  .dashboard-child-1 {
    grid-gap: 10px 28px;
  }
  .title-ctn .title {
    font-size: 10px;
    line-height: 17px;
  }
  .dashboard-card .amount {
    font-size: 19px;
    line-height: 32px;
  }
}
</style>
