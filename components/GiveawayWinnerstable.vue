<template>
  <div class="Winners-table">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th class="Name">
              Username
            </th>
            <th>
              Email
            </th>
            <th>
              Twitter
            </th>
            <th>
              Facebook
            </th>
            <th>
              Instagram
            </th>
            <th class="Task">
              Won Before
            </th>
            <th>
              Date Entered
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody v-show="giveawayWinners.length > 0">
          <tr
            v-for="(winner, index) in giveawayWinners.filter(
              winner => winner.win
            )"
            :key="index"
          >
            <td data-title="Name" class="Name">
              {{ winner.user.username }}
            </td>
            <td data-title="Email">
              {{ winner.user.email }}
            </td>
            <td>
              {{ winner.user.twitter !== '' ? winner.user.twitter : 'nil' }}
            </td>
            <td>
              {{ winner.user.facebook !== '' ? winner.user.facebook : 'nil' }}
            </td>
            <td>
              {{ winner.user.instagram !== '' ? winner.user.instagram : 'nil' }}
            </td>
            <td v-if="winner.user.giveawaysAmountWon > 0" data-title="Task Completion" class="Task">
              Yes
            </td>
            <td v-else data-title="Task Completion" class="Task">
              No
            </td>
            <td data-title="Date Entered">
              {{ format_date(winner.createdAt) }}
            </td>
            <td class="View">
              <!-- <ArrowCircle /> -->
            </td>
          </tr>
        </tbody>
      </table>
      <NoData v-show="giveawayWinners.length == 0" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import NoData from './NoTableData'
export default {
  name: 'GiveawayWinnerstable',
  components: {
    NoData
  },
  props: {
    giveawayWinners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    format_date (value) {
      const today = new Date().getTime()
      const signupDate = new Date(String(value)).getTime()
      if (today === signupDate) {
        return `Today, ${moment(new Date(String(value))).format('hh:mm')}`
      }
      return moment(new Date(String(value))).format('DD MMM YYYY, hh:mm')
    }
  }
}
</script>

<style scoped>
.Winners-table {
  width: 100%;
  height: auto;
  margin: 26px 0px 67px 0px;
}
.table-head {
  width: 100%;
  border-radius: 20px;
  /* max-height: 500px;
  overflow-y: auto; */
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
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
@media (max-width: 950px) {
  .Winners-table .head {
    padding-left: 0px;
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
  .View {
    width: 100%;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  .Winners-table .head {
    padding-left: 0px;
  }
  .Winners-table .head span:nth-child(1) {
    font-size: 13px;
  }
  .Winners-table .head span:nth-child(2) {
    font-size: 13px;
  }
}
</style>
