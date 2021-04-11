<template>
  <div class="transaction-table animate__fadeInUp">
    <div class="table-head">
      <table>
        <thead>
          <tr class="header">
            <th class="Ref">
              Trans Ref.
            </th>
            <th class="Email">
              Email Address
            </th>
            <th>Phone Number</th>
            <!-- <th class="Tasks">
              Tasks
            </th> -->
            <th>Total Amount</th>
            <th>Date Posted</th>
            <!-- <th class="Status">
              <span>Status</span>
              <div>
                <img src="~/assets/icons/down.svg" alt="down">
                <img src="~/assets/icons/up.svg" alt="u[">
              </div>
            </th> -->
            <th class="View" />
          </tr>
        </thead>
        <tbody v-show="data.length > 0">
          <tr v-for="(transfer, index) in paginatedData" :key="index">
            <td data-title="Trans Ref." class="Ref">
              <p>#{{ transfer.order_ref }}</p>
            </td>
            <td data-title="Email Address" class="Email">
              {{ transfer.user }}
            </td>
            <td data-title="Phone Number">
              {{ transfer.phoneNumber }}
            </td>
            <!-- <td data-title="Tasks" class="Tasks">
              Open  transaction_ref: response.data.reference,
            </td> -->
            <td data-title="Total Amount">
              ₦{{ amountDelimeter(transfer.amount) }}
            </td>
            <td data-title="Date Posted">
              {{ format_date(transfer.transaction_date) }}
            </td>
            <!-- <td data-title="Status" class="Status failed">
              Failed
            </td> -->
            <td class="View">
              <ArrowCircle
                @click.native="$router.push(`/transactions/${transfer._id}`)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <NoData v-show="data.length == 0" />
    </div>
    <paginate
      :page-count="amountOfPages"
      :margin-pages="2"
      :container-class="'pagination'"
      :break-view-text="'. . .'"
      :click-handler="Paginate"
    />
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
import moment from 'moment'
import NoData from './NoTableData'
export default {
  name: 'TransactionsTable',
  components: {
    NoData,
    paginate
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      paginatedData: this.initialPaginate(),
      amountOfPages: Math.ceil(this.data.length / 6)
    }
  },
  methods: {
    Paginate (clickedpagenumber) {
      let currentPage = 0
      let pagesToShow = 6
      let pageCount = 1
      if (clickedpagenumber > 1) {
        while (pageCount < clickedpagenumber) {
          currentPage += 6
          pagesToShow += 6
          pageCount += 1
        }
      }
      this.paginatedData = this.data
        .sort((a, b) => {
          const winnerDateA = new Date(a.transaction_date)
          const winnerDateB = new Date(b.transaction_date)
          return winnerDateB - winnerDateA
        })
        .slice(currentPage, pagesToShow)
    },
    initialPaginate () {
      const initialData = this.data.sort((a, b) => {
        const winnerDateA = new Date(a.transaction_date)
        const winnerDateB = new Date(b.transaction_date)
        return winnerDateB - winnerDateA
      })
      return initialData.slice(0, 6)
    },
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
    }
  }
}
</script>

<style scoped>
.transaction-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.table-head {
  width: 100%;
  border-radius: 20px;
  max-height: 520px;
  overflow-y: auto;
}
table {
  table-layout: auto;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  border-spacing: 0px;
}
thead tr {
  background: #f0f2f4;
}
th {
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #75759e;
}
th,
td {
  height: 64px;
  text-align: left;
  padding-left: 6px;
}
th:first-child {
  border-top-left-radius: 20px;
}
th:last-child {
  padding-left: 0px;
  border-top-right-radius: 20px;
}
/* status */
th:nth-last-child(2) div {
  display: flex;
  flex-direction: column;
}
th:nth-last-child(2) {
  display: flex;
  align-items: center;
  min-width: 20%;
}
th:nth-last-child(2) div {
  margin-left: 15px;
}
th:nth-last-child(2) div {
  cursor: pointer;
}
.failed {
  color: #e12a1e;
  width: 20%;
}
.completed {
  color: #09ab5d;
  width: 20%;
}
/**/
td {
  overflow-x: auto;
}
td:last-child {
  padding-left: 0px;
  text-align: center;
}
tbody tr:last-child td {
  height: 74px;
}
tbody tr:last-child td:first-child {
  border-bottom-left-radius: 20px;
}
tbody tr:last-child td:last-child {
  border-bottom-right-radius: 20px;
}
tbody tr:nth-child(even) {
  background: #f9fafb;
}
tbody tr:nth-child(odd) {
  background: #ffffff;
}
.Ref {
  padding-left: 31px;
  width: 15%;
}
.Email {
  width: 20%;
}
.Tasks {
  width: 10%;
}
.Status {
  width: 15%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
@media (max-width: 950px) {
  .table-head {
    max-height: 448px;
  }
  thead {
    display: none;
  }
  /* status */
  td:nth-last-child(2) {
    width: 100%;
  }
  /**/
  tr {
    display: flex;
    flex-direction: column;
  }
  tr:first-child {
    border-radius: 20px 20px 0px 0px;
  }
  td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
  }
  td:last-child {
    justify-content: center;
  }
  td::before {
    content: attr(data-title);
  }
  tbody tr:first-child td:first-child {
    border-radius: 20px 20px 0px 0px;
  }
  tbody tr:last-child td {
    height: 64px;
  }
  tbody tr:last-child td:last-child {
    border-radius: 0px 0px 20px 20px;
  }
  tbody tr:last-child td:first-child {
    border-radius: 0px;
  }
  .Ref,
  .Email,
  .Tasks,
  .View,
  .Status {
    width: 100%;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  th {
    font-size: 12px;
  }
  td {
    font-size: 11px;
  }
}
</style>
