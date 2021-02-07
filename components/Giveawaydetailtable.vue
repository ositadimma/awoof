<template>
  <div class="body">
    <span>Giveaway Details</span>
    <hr>
    <table>
      <thead>
        <tr>
          <th class="Status">
            Status
          </th>
          <th class="Tasks">
            Tasks
          </th>
          <th>Total Amount</th>
          <th>Possible Winners</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            data-title="Status"
            :class="
              giveawayDetail.completed ? 'completed Status' : 'ongoing Status'
            "
          >
            {{ giveawayDetail.completed ? 'Completed' : 'On-going' }}
          </td>
          <td data-title="Tasks" class="Tasks">
            {{ computedTasks.length }}
          </td>
          <td data-title="Total Amount" class="Amount">
            N{{ amountDelimeter(giveawayDetail.amount) }}
          </td>
          <td data-title="Possible Winners">
            {{ giveawayDetail.numberOfWinners }} (N{{
              amountDelimeter(giveawayDetail.amountPerWinner)
            }}
            per winner)
          </td>
        </tr>
      </tbody>
    </table>
    <div class="edit-container">
      <span>Tasks</span>
      <button v-show="computedTasks.length > 0 && !giveawayDetail.completed" class="edit-btn btn-cmpt" @click="edit = !edit">
        Edit
      </button>
    </div>
    <hr>
    <div class="Task-grid-container">
      <div v-for="(task, index) in tasks" :key="index" class="Task-grid">
        <div class="th">
          Task {{ index + 1 }}
        </div>
        <div v-if="!edit" :data-title="`Task-${index + 1}`" class="td">
          {{ task.text }}
        </div>
        <input v-if="edit" v-model="computedTasks[index].text" type="text">
      </div>
      <!-- <div class="Task-grid">
        <div class="th">
          Task Two
        </div>
        <div v-if="!edit" data-title="Task-Two" class="td">
          Share on Twitter
        </div>
        <input v-if="edit" type="text">
      </div>
      <div class="Task-grid">
        <div class="th">
          Task Three
        </div>
        <div v-if="!edit" data-title="Task-Three" class="td">
          Retweet on Twitter
        </div>
        <input v-if="edit" type="text">
      </div> -->
    </div>
    <button v-show="edit" class="save-btn btn-cmpt">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'Giveawaydetailtable',
  props: {
    giveawayDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      edit: false,
      computedTasks: []
    }
  },
  computed: {
    tasks () {
      const tasks = []
      if (this.giveawayDetail.followInstagram) {
        tasks.push({
          text: 'Follow On Instagram'
        })
        // eslint-disable-next-line
        this.computedTasks.push({
          text: 'Follow On Instagram'
        })
      }
      if (this.giveawayDetail.followTwitter) {
        tasks.push({
          text: 'Follow On Twitter'
        })
        // eslint-disable-next-line
        this.computedTasks.push({
          text: 'Follow On Twitter'
        })
      }
      if (this.giveawayDetail.likeFacebook) {
        tasks.push({
          text: 'Liked a post on Facebook'
        })
        // eslint-disable-next-line
        this.computedTasks.push({
          text: 'Liked a post on Facebook'
        })
      }
      if (this.giveawayDetail.likeInstagram) {
        tasks.push({
          text: 'Liked a post on Instagram'
        })
        // eslint-disable-next-line
        this.computedTasks.push({
          text: 'Liked a post on Instagram'
        })
      }
      if (this.giveawayDetail.likeTweet) {
        tasks.push({
          text: 'Liked a post on Twitter'
        })
        // eslint-disable-next-line
        this.computedTasks.push({
          text: 'Liked a post on Twitter'
        })
      }

      return tasks
    }
  },
  methods: {
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  /* height: 370px; */
  /* max-height: 1000px; */
  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  padding-bottom: 25px;
}
hr {
  margin-bottom: 19px;
  width: 92.5%;
  align-self: center;
}
.body span {
  align-self: start;
  display: block;
  /* margin-left: 3.8%;
  margin-top: 27px;
  margin-bottom: 16px; */
  margin: 27px 0px 16px 3.8%;
  font-size: 12px;
  line-height: 19px;

  color: #a2abaa;
}
.edit-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 27px 0px 16px 0px;
}
.edit-container span {
  margin: 0px 0px 0px 3.8%;
  align-self: center;
}
.edit-btn {
  width: 89px;
  max-width: 89px;
  max-height: 27px;
  background: #E74D75;
  border-radius: 10px;
  margin: 0px 3.8% 0px auto;
}
.save-btn {
  width: 160px;
  max-width: 160px;
  min-height: 46px;
  background: #09AB5D;
  border-radius: 3px;
  margin: 0px 3.8% 0px auto;
}
input[type='text'] {
  color: #000000;
  font-size: 12px;
  width: 80%;
  max-width: 201px;
  height: 58px;
  border: 1px solid #8692A6;
  border-radius: 4px;
  padding-left: 14px;
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
  width: 17%;
}
.Status {
  width: 18%;
}
.Task-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0px 18px;
  width: 100%;
  margin-bottom: 40px;
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
  color: #171717;
  overflow-x: auto;
}
.ongoing {
  color: #e1931e;
}
.completed {
  color: #09ab5d;
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
}
</style>
