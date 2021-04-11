<template>
  <div class="dashboard-table animate__fadeInUp">
    <div class="head">
      <span>Recent Giveaways</span>
      <span @click="$router.push('/giveaways/givers')">See All</span>
    </div>
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th class="Name">
              Name
            </th>
            <th class="Type">
              Type
            </th>
            <th>
              Tasks
            </th>
            <th>
              Total Amount
            </th>
            <th>
              Date Posted
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody v-show="dashboardData.length > 0">
          <tr
            v-for="(giveaway, index) in dashboardData.slice(0, 6)"
            :key="index"
          >
            <td data-title="Name" class="Name">
              <div class="Name-div">
                <p>{{ giveaway.user ? giveaway.user.username : 'Admin' }}</p>
                <!-- <Checkicon /> -->
              </div>
            </td>
            <td data-title="Type" class="Type">
              {{ giveaway.type }}
            </td>
            <td data-title="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              ₦{{ amountDelimeter(giveaway.amount) }}
            </td>
            <td data-title="Date Posted">
              {{ format_date(giveaway.createdAt) }}
            </td>
            <td class="View">
              <ArrowCircle
                @click.native="
                  $router.push(`/giveaways/givers/${giveaway._id}`)
                "
              />
            </td>
          </tr>
        </tbody>
      </table>
      <NoData v-show="dashboardData.length == 0" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import NoData from './NoTableData'
export default {
  name: 'DashboardTable',
  components: {
    NoData
  },
  props: {
    dashboardTable: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    dashboardData () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const data = this.dashboardTable.sort((a, b) => {
        const giveawayDateA = new Date(a.createdAt)
        const giveawayDateB = new Date(b.createdAt)
        return giveawayDateB - giveawayDateA
      })
      return data
    }
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
    }
  }
}
</script>

<style scoped>
.dashboard-table {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.dashboard-table .head {
  display: flex;
  margin-bottom: 26px;
  padding-left: 34px;
}
.dashboard-table .head span:nth-child(1) {
  font-size: 16px;
  color: #75759e;
  flex: 3;
}
.dashboard-table .head span:nth-child(2) {
  font-size: 16px;
  font-weight: bold;
  color: #09ab5d;
  cursor: pointer;
}
.table-head {
  width: 100%;
  border-radius: 20px;
  max-height: 700px;
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
td:last-child {
  padding-left: 0px;
  text-align: center;
}
td {
  overflow-x: auto;
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
  width: 30%;
}
.Name-div {
  display: flex;
  align-items: center;
}
p {
  margin-right: 10px;
}
.Type {
  width: 15%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
@media (max-width: 1100px) {
  .dashboard-table .head {
    padding-left: 0px;
  }
  .table-head {
    max-height: 586px;
  }
  thead {
    display: none;
  }
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
  .View {
    width: 100%;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  .dashboard-table .head span:nth-child(1) {
    font-size: 13px;
  }
  .dashboard-table .head span:nth-child(2) {
    font-size: 13px;
  }
}
</style>
