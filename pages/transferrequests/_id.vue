<template>
  <div class="trandetail-container">
    <div class="header">
      <div class="back">
        <img
          src="~/assets/icons/Arrow LeftCircle.svg"
          alt="back"
          @click="previousRoute"
        >
        <span>Back</span>
      </div>
      <!-- <button class="btn-cmpt" @click="downloadReport">
          Download Report
        </button> -->
    </div>

    <div ref="details" class="details">
      <div class="body">
        <div class="flex1">
          <span>Transfer Request Details</span>
          <span>
            <button v-if="transactionDetail.transfer.pending" class="btn-cmpt" @click="confirmPayment(transactionDetail.transfer._id, transactionDetail.transfer.payAt)">
              Confirm Payment
            </button>
            <!-- <button v-if="transactionDetail.transfer.pending" class="btn-cmpt btn-cmpt1" @click="deletePayment(transactionDetail.transfer._id)">
              Delete Request
            </button> -->
          </span>
        </div>
        <hr>
        <table>
          <thead>
            <tr>
              <th class="Ref">
                Name
              </th>
              <!-- <th class="Status">
                  Status
                </th> -->
              <!-- <th class="Tasks">
                  Tasks
                </th> -->
              <th class="Tasks">
                Bank
              </th>
              <th class="Tasks">
                Account Number
              </th>
              <th class="Amount">
                Total Amount
              </th>
              <th>
                Transfer Type
              </th>
              <th>
                Status
              </th>
              <th>
                Transaction Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="Ref" data-title="Trans Ref.">
                {{ transactionDetail.user.firstName + ' ' + transactionDetail.user.lastName }}
              </td>
              <td class="Ref" data-title="Trans Ref.">
                {{ transactionDetail.transfer.bankName }}
              </td>
              <td class="Ref" data-title="Trans Ref.">
                {{ transactionDetail.transfer.accountNumber }}
              </td>
              <!-- <td data-title="Status" class="success Status">
                  Success
                </td> -->
              <!-- <td data-title="Tasks" class="Tasks">
                  2
                </td> -->
              <td data-title="Total Amount" class="Amount">
                ₦{{ amountDelimeter(transactionDetail.transfer.amount) }}
              </td>
              <td data-title="Method of Payment">
                <!-- {{ reqType }} -->
                {{ transactionDetail !== undefined && transactionDetail.transfer.payAt !== undefined
                  ? 'Standard'
                  : 'Instant'
                }}
              </td>
              <td data-title="Method of Payment">
                {{ transactionDetail !== undefined && transactionDetail.transfer.pending
                  ? 'Pending'
                  : 'Successful'
                }}
              </td>
              <td
                v-if="transactionDetail.transfer.transaction_date !== undefined"
                data-title="Transaction Date"
              >
                {{ format_date(transactionDetail.transfer.transaction_date) }}
              </td>
              <td v-else data-title="Transaction Date">
                {{ format_date(transactionDetail.transfer.transactionDate) }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <span>Tasks taken</span>
          <hr>
          <div class="Task-grid-container">
            <div class="Task-grid">
              <div class="th">
                Task One
              </div>
              <div data-title="Task-One" class="td">
                Follw On Instagram
              </div>
            </div>
            <div class="Task-grid">
              <div class="th">
                Task Two
              </div>
              <div data-title="Task-Two" class="td">
                Share on Twitter
              </div>
            </div>
          </div> -->
      </div>
      <div class="extra">
        <div class="head">
          <span>User’s Info</span>
          <span>FULL DETAILS</span>
        </div>
        <hr>
        <div>
          <span>
            Full Name
          </span>
          <span>
            {{
              transactionDetail !== undefined && transactionDetail
                ? transactionDetail.user.firstName + ' ' + transactionDetail.user.lastName
                : 'User does not exist'
            }}
          </span>

          <span>
            Phone Number
          </span>
          <span>
            {{
              transactionDetail.user !== undefined && transactionDetail.user
                ? transactionDetail.user.phoneNumber
                : 'No phone number set'
            }}
          </span>

          <span>
            Email Address
          </span>
          <span>
            {{
              transactionDetail.user !== undefined && transactionDetail.user
                ? transactionDetail.user.email
                : 'No email set'
            }}
          </span>

          <span>
            Registration Date
          </span>
          <span>
            {{
              transactionDetail.user !== undefined && transactionDetail.user
                ? format_date(transactionDetail.user.signupDate)
                : 'No registration date set'
            }}
          </span>
        </div>
      </div>
    </div>
    <!-- <PendingAlert v-show="modalOpen && detail=='confirm'" /> -->
    <DeleteRequest v-show="modalOpen" :transaction-detail="transactionDetail" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import Cookies from 'js-cookie'
import moment from 'moment'
// import PendingAlert from '~/components/PendingAlert'
import DeleteRequest from '~/components/DeleteRequest'

export default {
  name: 'Requesttransferdetail',
  layout: 'dashboardLayout',
  components: { /* PendingAlert, */ DeleteRequest },
  async asyncData ({ $axios, $toast, params }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      // var response1 = await $axios.$get(
      //   `/admins/bank_transfers/${params.id}`
      // )
      // var response2 = await $axios.$get(
      //   `/admins/wallet_top_ups/${params.id}`
      // )
      // var response3 = await $axios.$get(
      //   `/admins/airtime_top_up/${params.id}`
      // )
      var response1 = await $axios.$get(`/admins/get_transfer_request/${params.id}`)
      var transactionDetailResponse
      var reqType = localStorage.getItem('typeoftransferrequestawoof')
      var userDetailResponse
      var methodOfPayment
      if (response1.data) {
        transactionDetailResponse = response1.data
        methodOfPayment = 'Instant'
      }
      localStorage.removeItem('typeoftransferrequestawoof')
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
    // console.log(transactionDetailResponse, userDetailResponse)
    // eslint-disable-next-line
        return {
      transactionDetail: transactionDetailResponse !== undefined
        ? transactionDetailResponse
        : {},
      reqType: reqType !== undefined
        ? reqType
        : '',
      userDetail: userDetailResponse !== undefined ? userDetailResponse.data : {},
      methodOfPayment,
      detail: 'confirm'
    }
  },
  data () {
    return {
      detail: 'confirm'
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'TRANSFER REQUEST DETAILS') // changes layout title of dashboard header
  },
  methods: {
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    format_date (value) {
      const today = new Date().getTime()
      const createdAt = new Date(String(value)).getTime()
      if (today === createdAt) {
        return `Today, ${moment(new Date(String(value))).format('hh:mm')}`
      }
      return moment(new Date(String(value))).format('DD MMM YYYY, hh:mm')
    },
    previousRoute () {
      window.history.back()
    },
    downloadReport () {
      const opt = {
        margin: 10,
        filename: 'Transaction_Details.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: 'css' }
      }
      html2pdf()
        .set(opt)
        .from(this.$refs.details)
        .save()
    },
    async confirmPayment (id, payAt) {
      /// this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      var response2
      if (payAt !== undefined) {
        response2 = await this.$axios.$get(`/admins/confirm_transfer_request_free/${id}`)
      } else {
        response2 = await this.$axios.$get(`/admins/confirm_transfer_request/${id}`)
      }
      if (response2) {
        this.$toast.global.custom_success('Transfer Confirmed')
        this.$nuxt.refresh()
      }
    },
    async deletePayment (id) {
      var response3 = await this.$axios.$get(`/admins/delete_transfer_request/${id}`)
      if (response3) {
        this.detail = 'delete'
      }
      this.$store.commit('setModalOpen', true)
      this.$nuxt.refresh()
    }
  }
}
</script>

  <style scoped>
  .trandetail-container {
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
  .btn-cmpt {
    width: 150px;
    height: 40px;
    margin-left: auto;
    margin-right: 30px;
    background: #083577;
    border-radius: 5px;
    font-size: 15px;
  }
  .btn-cmpt1 {
    background: rgb(163, 13, 13);
  }
  .details {
    width: 100%;
    height: auto;

    display: flex;
    /*padding: 7.5% 3.4% 0px 3.4%;*/
  }
  hr {
    margin-bottom: 19px;
    width: 92.5%;
    align-self: center;
  }
  .body {
    width: 65%;
    height: 370px;
    background: #ffffff;
    border: 1px solid #e2e2ea;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
  }
  .body span {
    align-self: start;
    display: block;
    margin-left: 3.8%;
    margin-top: 27px;
    margin-bottom: 16px;
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
  th,
  td {
    text-align: left;
  }
  th {
    font-weight: normal;
    font-size: 11px;
    line-height: 19px;
    color: #75759e;
  }
  td {
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    color: #171717;
    overflow-x: auto;
  }
  .Amount {
    width: 25%;
  }
  .Tasks {
    width: 18%;
  }
  .Status {
    width: 18%;
  }
  .Task-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
    margin-bottom: 40px;
    padding: 0px 3.4% 0px 3.4%;
  }
  .Task-grid {
    display: flex;
    flex-direction: column;
  }

  .flex1{
    display: flex;
    justify-content: space-between;
  }
  .Task-grid .th {
    font-size: 11px;
    line-height: 19px;
    color: #75759e;
  }
  .Task-grid .td {
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    color: #171717;
    overflow-x: auto;
  }
  .success {
    color: #09ab5d;
  }
  .failed {
    color: #e12a1e;
  }
  .extra {
    display: flex;
    flex-direction: column;
    width: 32.5%;
    height: 370px;

    background: #ffffff;
    border: 1px solid #e2e2ea;
    border-radius: 20px;
    margin-left: 27px;
    padding: 0px 38px 0px 23px;
  }
  .extra .head {
    margin-top: 27px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }
  .extra hr {
    width: 100%;
  }
  .extra .head span:first-child {
    align-self: start;
    display: block;
    font-size: 12px;
    line-height: 19px;

    color: #a2abaa;
  }
  .extra .head span:last-child {
    font-weight: bold;
    font-size: 11px;
    line-height: 18px;

    color: #4cd964;
  }
  .extra div:last-child {
    display: flex;
    flex-direction: column;
  }
  .extra div:last-child span:nth-child(odd) {
    font-size: 11px;
    color: #75759e;
    margin-bottom: 2px;
  }
  .extra div:last-child span:nth-child(even) {
    font-weight: 600;
    font-size: 13px;
    color: #171717;
  }
  .extra div:last-child span:nth-child(2) {
    margin-bottom: 24px;
  }
  .extra div:last-child span:nth-child(2n + 2) {
    margin-bottom: 26px;
  }
  @media (max-width: 950px) {
    .details {
      flex-direction: column-reverse;
    }
    .back span {
      font-size: 12px;
      line-height: 21px;
    }
    .details {
      width: 100%;
    }
    .details .body {
      width: 100%;
      height: auto;
    }
    .body span {
      margin-left: 3.8%;
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
    .Amount,
    .Tasks,
    .Status {
      width: 100%;
    }
    .Task-grid-container {
      display: flex;
      flex-direction: column;
    }
    .Task-grid {
      display: block;
      width: 100%;
    }
    .Task-grid .th {
      display: none;
    }
    .Task-grid .td {
      display: flex;
      justify-content: space-between;
    }
    .Task-grid .td::before {
      content: attr(data-title);
    }
    .extra {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      margin-left: 0px;
      padding-right: 23px;
    }
  }
  @media (max-width: 767px) {
    .trandetail-container {
      padding: 20px 4.5% 0px 4.5%;
    }
  }
  </style>
