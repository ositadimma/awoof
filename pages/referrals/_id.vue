<template>
  <div class="refdetail-container">
    <div class="back">
      <img
        src="~/assets/icons/Arrow LeftCircle.svg"
        alt="back"
        @click="previousRoute"
      >
      <span>Back</span>
    </div>
    <div class="refdetail-card">
      <div class="title-ctn">
        <span class="title">Referral Bonus</span>
        <img src="~/assets/icons/Graph.svg">
      </div>
      <span class="amount">₦{{ amount.amount }}</span>
    </div>

    <div class="details">
      <div class="head">
        <h3>{{ referralDetail.username }}</h3>
        <span>FULL DETAILS</span>
      </div>
      <hr>
      <div class="body">
        <table>
          <thead>
            <tr>
              <th class="phone">
                Phone Number
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="phone" data-title="Phone Number">
                {{ referralDetail.phoneNumber }}
              </td>
              <td data-title="Email">
                {{ referralDetail.email }}
              </td>
            </tr>
          </tbody>
        </table>
        <span>Referral Details</span>
        <hr>
        <table>
          <thead>
            <tr>
              <th class="id">
                Ref ID
              </th>
              <th>
                Usage
              </th>
              <th>
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="id" data-title="Ref ID">
                #{{ referralDetail.userRef }}
              </td>
              <td data-title="Usage">
                {{ referralDetail.refCodeUsage }}
              </td>
              <td data-title="Total Amount">
                ₦{{ amountDelimeter(referralDetail.balance) }}
              </td>
            </tr>
          </tbody>
        </table>
        <span>Code Users</span>
        <hr>
        <table class="code-users">
          <thead>
            <tr>
              <th class="name">
                Name
              </th>
              <th>
                Phone No
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody v-show="referralDetail.usersReffered.length > 0">
            <tr
              v-for="(user, index) in referralDetail.usersReffered"
              :key="index"
            >
              <td class="name" data-title="Name">
                {{ user.firstName + ' ' + user.lastName }}
              </td>
              <td data-title="Phone No">
                {{ user.phoneNumber }}
              </td>
              <td data-title="Email">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
        <NoData v-show="referralDetail.usersReffered.length == 0" />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import NoData from '~/components/NoTableData'

export default {
  name: 'Referraldetail',
  layout: 'dashboardLayout',
  components: {
    NoData
  },
  async asyncData ({ $axios, $toast, params }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var referralDetailResponse = await $axios.$get(
        `https://api.philantroapp.com/v1/admins/get_refferal/${params.id}`
      )
      var referralBonusResponse = await $axios.$get(
        'https://api.philantroapp.com/v1/admins/referral_bonus'
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
      referralDetail:
        referralDetailResponse !== undefined ? referralDetailResponse : {},
      amount: referralBonusResponse ? referralBonusResponse.data : {}
    }
  },
  created () {
    this.$store.commit('setLayout', 'REFERRALS DETAILS') // changes layout title of dashboard header
  },
  methods: {
    previousRoute () {
      window.history.back()
    },
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style scoped>
.refdetail-container {
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
.back {
  margin-bottom: 28px;
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
.refdetail-card {
  border: 1px solid #e2e2ea;
  background: #ffffff;
  border-radius: 20px;
  width: 260px;
  min-height: 95px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  /*margin: 0px 21px 19px 0px;*/
  padding: 10px 31px 0px 29px;
  margin-bottom: 36px;
}
.title-ctn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title-ctn .title {
  font-size: 12px;
  line-height: 19px;

  color: #75759e;
}
.refdetail-card .amount {
  font-weight: 600;
  font-size: 21px;
  line-height: 34px;

  color: #171725;
  padding-top: 2px;
}
.details {
  width: 65.3%;
  height: auto;
  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  padding-top: 5.5%;
  /*padding: 7.5% 3.4% 0px 3.4%;*/
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 13px;
  padding: 0px 3.4% 0px 3.4%;
}
.head h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 35px;

  color: #171725;
}
.head span {
  font-weight: bold;
  font-size: 11px;
  line-height: 18px;

  color: #4cd964;
  align-self: flex-end;
}
hr {
  margin-bottom: 20px;
  width: 92.5%;
  align-self: center;
}
.body {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.body span {
  align-self: start;
  display: block;
  margin-left: 3.8%;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 19px;

  color: #a2abaa;
}
/* table */
table {
  table-layout: auto;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px 3.4% 0px 3.4%;
}
.code-users {
  margin-bottom: 0px;
  padding: 0px;
}
.code-users th {
  padding: 0px 0px 0px 3.4%;
}
.code-users td {
  padding: 10px 0px 10px 3.4%;
}
.code-users tbody tr:nth-child(even) {
  height: 64px;
  background: #f9fafb;
}
.code-users tbody tr:nth-child(1) td {
  vertical-align: bottom !important;
}
.code-users tbody tr:nth-child(odd) td {
  vertical-align: top;
}
.code-users tbody tr {
  height: 64px;
}
th,
td {
  text-align: left;
}
th {
  font-size: 11px;
  line-height: 19px;
  color: #75759e;
}
.phone {
  width: 35%;
}
.name {
  width: 32.5%;
}
td {
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #171717;
  overflow-x: auto;
}
@media (max-width: 950px) {
  .details {
    width: 90%;
  }
}
@media (max-width: 767px) {
  .refdetail-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .back span {
    font-size: 12px;
    line-height: 21px;
  }
  .title-ctn .title {
    font-size: 10px;
    line-height: 17px;
  }
  .refdetail-card .amount {
    font-size: 19px;
    line-height: 32px;
  }
  .details {
    width: 100%;
  }
  table {
    padding: 0px;
  }
  .head {
    padding: 0px;
  }
  hr {
    width: 100%;
  }
  .body span {
    margin-left: 0;
  }
  .code-users {
    height: auto;
  }
  .code-users tbody tr {
    height: initial;
  }
  .code-users tbody tr:nth-child(even) {
    height: initial;
  }
  .code-users td {
    padding-left: 0px;
  }
  thead {
    display: none;
  }
  tr {
    display: flex;
    flex-direction: column;
  }
  td {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
  }
  td::before {
    content: attr(data-title);
  }
  .phone {
    width: initial;
  }
  .name {
    width: initial;
  }
}
</style>
