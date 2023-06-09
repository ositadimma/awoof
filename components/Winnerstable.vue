<template>
  <div class="giveaway-table animate__fadeInUp">
    <div class="table-head">
      <table>
        <thead>
          <tr class="header">
            <th class="Name">
              Name
            </th>
            <th class="Type">
              Type
            </th>
            <th class="Tasks">
              Tasks
            </th>
            <th>Amount Won</th>
            <th>Giveaway Amount</th>
            <th>Date Posted</th>
            <th class="View" />
          </tr>
        </thead>
        <tbody v-show="data.length > 0">
          <tr v-for="(giveaway, index) in paginatedData" :key="index">
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>{{ giveaway.user ? giveaway.user.username : 'Admin' }}</p>
                <!-- <Checkicon /> -->
              </div>
            </td>
            <td data-title="Type">
              {{ giveaway.giveaway_id.type }}
            </td>
            <td data-title="Tasks" class="Tasks">
              Open
            </td>
            <td data-title="Amount Won">
              ₦{{ amountDelimeter(giveaway.giveaway_id.amountPerWinner) }}
            </td>
            <td data-title="Giveaway Amount">
              ₦{{ amountDelimeter(giveaway.giveaway_id.amount) }}
            </td>
            <td data-title="Date Posted">
              {{ format_date(giveaway.giveaway_id.createdAt) }}
            </td>
            <td class="View">
              <ArrowCircle
                @click.native="
                  $router.push(`/giveaways/winners/${giveaway.giveaway_id._id}`)
                "
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
  name: 'WinnersTable',
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
      amountOfPages: Math.ceil(this.data.length / 10)
    }
  },
  methods: {
    Paginate (clickedpagenumber) {
      let currentPage = 0
      let pagesToShow = 10
      let pageCount = 1
      if (clickedpagenumber > 1) {
        while (pageCount < clickedpagenumber) {
          currentPage += 10
          pagesToShow += 10
          pageCount += 1
        }
      }
      this.paginatedData = this.data
        .sort((a, b) => {
          const winnerDateA = new Date(a.giveaway_id.createdAt)
          const winnerDateB = new Date(b.giveaway_id.createdAt)
          return winnerDateB - winnerDateA
        })
        .slice(currentPage, pagesToShow)
    },
    initialPaginate () {
      const initialData = this.data.sort((a, b) => {
        const winnerDateA = new Date(a.giveaway_id.createdAt)
        const winnerDateB = new Date(b.giveaway_id.createdAt)
        return winnerDateB - winnerDateA
      })
      return initialData.slice(0, 10)
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
.giveaway-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.table-head {
  width: 100%;
  border-radius: 20px;
  /* max-height: 500px; */
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
  min-width: 11%;
}
th:nth-last-child(2) div {
  margin-left: 15px;
}
th:nth-last-child(2) div {
  cursor: pointer;
}
.ongoing {
  color: #e1931e;
  width: 11%;
}
.completed {
  color: #09ab5d;
  width: 11%;
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
.Name {
  padding-left: 31px;
  width: 23%;
}
.Name-div {
  display: flex;
  align-items: center;
}
p {
  margin-right: 10px;
}
.Type {
  width: 12%;
}
.Tasks {
  width: 10%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
/* .pagination {
  margin-top: 35px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 165px;
}
.pagination .inactive {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 21px;

  font-weight: 600;
  font-size: 14px;

  color: #000000;
  padding-top: 2px;
  cursor: pointer;
}
.pagination .inactive:hover {
  color: #FFFFFF;
  background: #001431;
  border-radius: 5px;
}
.pagination .active {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 21px;

  font-weight: 600;
  font-size: 14px;

  color: #FFFFFF;
  background: #001431;
  border-radius: 5px;
  padding-top: 2px;
  cursor: auto;
} */
@media (max-width: 1100px) {
  .table-head {
    max-height: 450px;
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
  .Name,
  .Type,
  .Tasks,
  .View {
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
