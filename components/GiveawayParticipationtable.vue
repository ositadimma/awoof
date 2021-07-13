<template>
  <div class="Participant-table">
    <button v-show="!validate" class="btn-cmpt" @click="addWinners">
      {{ loading }}
    </button>
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th class="Name">
              Name
            </th>
            <th>
              Email
            </th>
            <th class="Task">
              Task Completion
            </th>
            <th>
              Date Entered
            </th>
            <th class="View" />
          </tr>
        </thead>
        <tbody v-show="giveawayParticipants.length > 0">
          <tr v-for="(participant, index) in giveawayParticipants" :key="index">
            <td data-title="Name" class="Name">
              {{ participant.user.firstName + " " + participant.user.lastName }}
            </td>
            <td data-title="Email">
              {{ participant.user.email }}
            </td>
            <td data-title="Task Completion" class="Task">
              All Completed
            </td>
            <td data-title="Date Entered">
              {{ format_date(participant.createdAt) }}
            </td>
            <td class="View">
              <!-- <ArrowCircle /> -->
              <div
                v-if="checkboxes[index] !== undefined && !validate"
                class="checkbox"
                @click="setWinner(index, participant.user._id, participant._id)"
              >
                <input
                  :id="'check' + participant._id"
                  v-model="checkboxes[index].checked"
                  type="checkbox"
                >
                <label :for="'check' + participant._id" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <NoData v-show="giveawayParticipants.length == 0" />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import NoData from './NoTableData'
export default {
  name: 'GiveawayParticipantiontable',
  components: {
    NoData
  },
  props: {
    giveawayParticipants: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      checkboxes: [],
      customWinners: [],
      loading: 'Add winners'
    }
  },
  computed: {
    validate () {
      if (
        this.giveawayParticipants.length === 0 ||
        this.giveawayParticipants.some(user => user.win)
      ) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.$watch(
      'giveawayParticipants',
      (giveawayParticipants) => {
        for (let i = 0; i < giveawayParticipants.length; i += 1) {
          this.checkboxes.push({
            checked: false
          })
        }
      },
      { immediate: true }
    )
  },
  methods: {
    format_date (value) {
      const today = new Date().getTime()
      const signupDate = new Date(String(value)).getTime()
      if (today === signupDate) {
        return `Today, ${moment(new Date(String(value))).format('hh:mm')}`
      }
      return moment(new Date(String(value))).format('DD MMM YYYY, hh:mm')
    },
    setDataToDefault () {
      this.customWinners = []
      this.checkboxes = []
      for (let i = 0; i < this.giveawayParticipants.length; i += 1) {
        this.checkboxes.push({
          checked: false
        })
      }
    },
    setWinner (index, userUuid, uuid) {
      if (this.checkboxes[index].checked) {
        const newCustomWinners = this.customWinners.filter(
          users => userUuid !== users.user_id
        )
        this.customWinners = newCustomWinners
      } else {
        const validate = this.customWinners.some(
          user => userUuid === user.user_id
        )
        if (!validate) {
          this.customWinners.push({
            user_id: userUuid
          })
        }
      }
    },
    async addWinners () {
      if (this.customWinners.length < 1) {
        this.$toast.global.custom_error('Please select a winner')
      } else {
        this.loading = '- - -'
        this.$axios.setHeader('x-auth-token', Cookies.get('token'))
        try {
          const response = await this.$axios.$post(
            `https://api.philantroapp.com/v1/admins/set_giveaway_winners/${this.$route.params.id}`,
            {
              winners: this.customWinners
            }
          )
          if (response) {
            this.$toast.global.custom_success('Winners successfully added.')
            this.$emit('refresh')
            this.setDataToDefault()
          }
          this.loading = 'Add winners'
        } catch (err) {
          this.loading = 'Add winners'
          if (err.message.includes('Network')) {
            this.$toast.global.custom_error(
              'please check your connection and try again'
            )
          }

          if (err.response !== undefined) {
            if (err.response.status === 400) {
              this.$toast.global.custom_error(
                err.response.data || err.response.data.message
              )
            } else if (err.response.status === 403) {
              this.$toast.global.custom_error(err.response.data)
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.Participant-table {
  width: 100%;
  height: auto;
  margin: 26px 0px 67px 0px;
  display: flex;
  flex-direction: column;
}
.table-head {
  width: 100%;
  border-radius: 20px;
  max-height: 500px;
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
  white-space: nowrap;
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
  width: 20%;
}
.View {
  width: 10%;
}
.arrowcircle {
  cursor: pointer;
}
/* custom checkbox */
input[type="checkbox"] {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
  overflow-x: auto;
}

.checkbox label {
  width: 100%;
  cursor: pointer;
  margin-bottom: 0;
  max-width: 18px;
}

.checkbox {
  position: relative;
  margin-left: auto;
}

.checkbox label:before {
  content: "";
  -webkit-appearance: none;
  background: #ffffff;
  border: 1px solid #8692a6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox input[type="checkbox"]:checked + label:before {
  background: #09ab5d;
  border: none;
}

.checkbox input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 6px;
  width: 6.5px;
  height: 11.21px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  cursor: pointer;
}
.btn-cmpt {
  min-width: 77.344px;
  margin-left: auto;
  min-height: 30px;
  margin-bottom: 0.7rem;
}
@media (max-width: 950px) {
  .Participant-table .head {
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
  .Participant-table .head {
    padding-left: 0px;
  }
  .Participant-table .head span:nth-child(1) {
    font-size: 13px;
  }
  .Participant-table .head span:nth-child(2) {
    font-size: 13px;
  }
}
</style>
