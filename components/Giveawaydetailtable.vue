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
            {{ tasks.length }}
          </td>
          <td data-title="Total Amount" class="Amount">
            ₦{{ amountDelimeter(giveawayDetail.amount) }}
          </td>
          <td data-title="Possible Winners">
            {{ giveawayDetail.numberOfWinners }} (₦{{
              amountDelimeter(giveawayDetail.amountPerWinner)
            }}
            per winner)
          </td>
        </tr>
      </tbody>
    </table>
    <div class="edit-container">
      <span>Tasks</span>
      <button
        v-show="!giveawayDetail.completed"
        class="edit-btn btn-cmpt"
        @click="edit = !edit"
      >
        Edit
      </button>
    </div>
    <hr>
    <div class="task-grid-container">
      <div v-for="(task, index) in tasks" :key="index" class="task-grid">
        <div class="th">
          Task {{ index + 1 }}
        </div>
        <div :data-title="`Task-${index + 1}`" class="td">
          {{ task.text }}
        </div>
      </div>
      <div v-show="edit" class="blur-container">
        <div class="action" @click="showModal('modalBody')">
          <span>ADD A NEW TASK</span>
          <img src="~/assets/icons/addTask.svg" alt="add">
        </div>
      </div>
    </div>
    <AddTask v-show="modalOpen" :key="0" :tasks="tasks" @refresh="refresh" />
  </div>
</template>

<script>
import AddTask from '../components/Addtask'
export default {
  name: 'Giveawaydetailtable',
  components: {
    AddTask
  },
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
      key: 0,
      edit: false
    }
  },
  computed: {
    tasks () {
      // console.log(this.giveawayDetail)
      const tasks = []
      // console.log(this.giveawayDetail)
      if (this.giveawayDetail.followPageOnFacebook) {
        tasks.push({
          text: 'Follow Page On Facebook'
        })
      }
      if (this.giveawayDetail.likeFacebook) {
        tasks.push({
          text: 'Like and post on Facebook',
          link: this.giveawayDetail.likeFacebookLink
        })
      }
      if (this.giveawayDetail.followInstagram) {
        tasks.push({
          text: 'Follow On Instagram',
          link: this.giveawayDetail.followInstagramLink
        })
      }
      if (this.giveawayDetail.likeInstagram) {
        tasks.push({
          text: 'Like post on Instagram',
          link: this.giveawayDetail.likeInstagramLink
        })
      }
      if (this.giveawayDetail.followTwitter) {
        tasks.push({
          text: 'Follow On Twitter',
          link: this.giveawayDetail.followTwitterLink
        })
      }
      if (this.giveawayDetail.likeTweet) {
        tasks.push({
          text: 'Like and retweet on Twitter',
          link: this.giveawayDetail.likeTweetLink
        })
      }

      return tasks
    },
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  methods: {
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    showModal () {
      this.$store.commit('setModalOpen', true)
      this.edit = false
    },
    refresh () {
      this.$nuxt.refresh()
      this.key += 1
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
  background: #e74d75;
  border-radius: 10px;
  margin: 0px 3.8% 0px auto;
}
.save-btn {
  width: 160px;
  max-width: 160px;
  min-height: 46px;
  background: #09ab5d;
  border-radius: 3px;
  margin: 0px 3.8% 0px auto;
}
input[type='text'] {
  color: #000000;
  font-size: 12px;
  width: 80%;
  max-width: 201px;
  height: 58px;
  border: 1px solid #8692a6;
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
.task-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px 18px;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  padding: 0px 3.4% 0px 3.4%;
}
.task-grid {
  display: flex;
  flex-direction: column;
}
.task-grid .th {
  font-size: 11px;
  line-height: 19px;
  color: #75759e;
}
.task-grid .td {
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
.blur-container {
  position: absolute;
  bottom: -21px;
  right: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1)
  );
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 7%;
}
.action {
  width: 163px;
  position: absolute;
  right: 0;
  display: flex;
  margin-right: 3.4%;
  cursor: pointer;
}
.action span {
  display: block;
  margin: 10px 1.18rem 0px 0px;
  font-weight: bold;
  font-size: 12px;
  color: #083577;
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
  .task-grid-container {
    display: flex;
    flex-direction: column;
  }
  .task-grid {
    display: block;
    width: 100%;
  }
  .task-grid .th {
    display: none;
  }
  .task-grid .td {
    display: flex;
    justify-content: space-between;
  }
  .task-grid .td::before {
    content: attr(data-title);
    color: #000000;
  }
}
</style>
