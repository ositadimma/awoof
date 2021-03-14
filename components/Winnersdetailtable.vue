<template>
  <div class="body">
    <span>Giveaway Details</span>
    <hr>
    <table>
      <thead>
        <tr>
          <th class="Status">
            Type
          </th>
          <th class="Tasks">
            Giver
          </th>
          <th class="Amount">
            Total Amount
          </th>
          <th class="Date">
            Date Posted
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Type" class="Status">
            {{ giveawayDetail.type }} Givaway
          </td>
          <td data-title="Giver" class="Tasks">
            <div class="Name-div">
              <p>
                {{
                  giveawayDetail.user ? giveawayDetail.user.username : 'Admin'
                }}
              </p>
              <!-- <Checkicon /> -->
            </div>
          </td>
          <td data-title="Total Amount" class="Amount">
            N{{ amountDelimeter(giveawayDetail.amount) }}
          </td>
          <td data-title="Date Posted" class="Date">
            {{ format_date(giveawayDetail.createdAt) }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th class="Status">
            Possible Winners
          </th>
          <th class="Tasks">
            Task Completion
          </th>
          <th class="Amount">
            Amount Won
          </th>
          <th class="Date">
            Date Entered
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Possible Winners" class="Status">
            {{ giveawayDetail.numberOfWinners }} (N{{
              amountDelimeter(giveawayDetail.amountPerWinner)
            }}
            per winner)
          </td>
          <td data-title="Task Completion" class="Tasks">
            All Completed
          </td>
          <td data-title="Amount Won" class="Amount">
            N{{ amountDelimeter(giveawayDetail.amountPerWinner) }}
          </td>
          <td data-title="Date Entered" class="Date">
            {{
              giveawayDetail.user !== undefined
                ? format_date(giveawayDetail.user.signupDate)
                : 'nil'
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <span>Tasks</span>
    <hr>
    <div class="Task-grid-container">
      <div v-for="(task, index) in tasks" :key="index" class="Task-grid">
        <div class="th">
          Task {{ index + 1 }}
        </div>
        <div :data-title="`Task-${index + 1}`" class="td">
          {{ task.text }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Winnersdetailtable',
  props: {
    giveawayDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    // tasks () {
    //   const tasks = []
    //   if (this.giveawayDetail.followPageOnFacebook) {
    //     tasks.push({
    //       text: 'Follow Page On Facebook'
    //     })
    //   }
    //   if (this.giveawayDetail.likeFacebook) {
    //     tasks.push({
    //       text: 'Like post on Facebook'
    //     })
    //   }
    //   if (this.giveawayDetail.followInstagram) {
    //     tasks.push({
    //       text: 'Follow On Instagram'
    //     })
    //   }
    //   if (this.giveawayDetail.likeInstagram) {
    //     tasks.push({
    //       text: 'Like post on Instagram'
    //     })
    //   }
    //   if (this.giveawayDetail.followTwitter) {
    //     tasks.push({
    //       text: 'Follow On Twitter'
    //     })
    //   }
    //   if (this.giveawayDetail.likeTweet) {
    //     tasks.push({
    //       text: 'Like and retweet on Twitter'
    //     })
    //   }
    //   return tasks
    // }
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
.body {
  width: 100%;
  height: 433px;
  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  overflow-y: auto;
}
hr {
  margin-bottom: 19px;
  width: 92.5%;
  align-self: center;
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
  text-transform: capitalize;
  overflow-x: auto;
}
.Amount,
.Tasks,
.Status,
.Date {
  width: 25%;
}
.Task-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0px 18px;
  width: 100%;
  padding: 0px 3.4% 0px 3.4%;
}
.Task-grid {
  display: flex;
  flex-direction: column;
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

  white-space: nowrap;
  color: #171717;
  overflow-x: auto;
}
.Name-div {
  display: flex;
  align-items: center;
}
.Name-div p {
  margin-right: 10px;
}
@media (max-width: 950px) {
  .body {
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
    max-width: 100%;
  }
  td::before {
    content: attr(data-title);
  }
  .Amount,
  .Tasks,
  .Status,
  .Date {
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
    max-width: 100%;
  }
  .Task-grid .td::before {
    content: attr(data-title);
  }
}
</style>
