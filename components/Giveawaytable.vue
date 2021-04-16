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
            <th>Total Amount</th>
            <th>Date Posted</th>
            <th class="Status">
              <span>Status</span>
              <div v-if="status == 'Ongoing'">
                <img src="~assets/icons/down.svg" class="scale" alt="down">
                <img
                  src="~/assets/icons/up.svg"
                  class="scale"
                  alt="up"
                  @click="toggleStatus('Completed')"
                >
              </div>
              <div v-else>
                <img
                  src="~/assets/icons/up.svg"
                  alt="up"
                  class="rotate"
                  @click="toggleStatus('Ongoing')"
                >
                <img src="~assets/icons/down.svg" alt="down" class="rotate">
              </div>
            </th>
            <th>
              Hidden
            </th>
            <th>
              Visibility
            </th>
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
              {{ giveaway.type }}
            </td>
            <td data-title="Tasks" class="Tasks">
              Open
            </td>
            <td data-title="Total Amount">
              ₦{{ amountDelimeter(giveaway.amount) }}
            </td>
            <td data-title="Date Posted">
              {{ format_date(giveaway.createdAt) }}
            </td>
            <td
              data-title="Status"
              :class="giveaway.completed ? 'completed' : 'ongoing'"
            >
              {{ giveaway.completed ? 'Completed' : 'Ongoing' }}
            </td>
            <td data-title="Hidden">
              {{ giveaway.hidden }}
            </td>
            <td data-title="Visibility">
              <button
                v-if="!giveaway.hidden"
                class="suspend-btn btn-cmpt"
                @click="showHideGiveAwayModal(giveaway._id, giveaway.hidden)"
              >
                hide
              </button>
              <button
                v-else
                class="edit-btn btn-cmpt"
                @click="showHideGiveAwayModal(giveaway._id, giveaway.hidden)"
              >
                show
              </button>
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
      <NoData v-show="data.length == 0" />
    </div>
    <paginate
      v-model="page"
      :page-count="amountOfPages"
      :margin-pages="2"
      :container-class="'pagination'"
      :break-view-text="'. . .'"
      :click-handler="Paginate"
    />
    <HideGiveAwayModal
      v-show="popUpOpen"
      :id="giveawayId"
      :status="giveawayHidden"
      @refresh="refresh"
    />
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
import moment from 'moment'
import NoData from './NoTableData'
import HideGiveAwayModal from '~/components/HideGiveAwayModal'

export default {
  name: 'GiveawayTable',
  components: {
    NoData,
    paginate,
    HideGiveAwayModal
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
      page: 1,
      paginatedData: this.initialPaginate(),
      // amountOfPages: Math.ceil(this.data.length / 6),
      currentPage: 0,
      pagesToShow: 6,
      status: 'Ongoing',
      giveawayId: '',
      giveawayHidden: false
    }
  },
  computed: {
    popUpOpen () {
      return this.$store.state.popUpOpen
    },
    amountOfPages () {
      return Math.ceil(this.data.length / 6)
    }
  },
  mounted () {
    this.page = Math.ceil(this.data.length / 6)
    this.page = 1
  },
  // watch: {
  //   data (newVal) {
  //     this.Paginate(0)
  //   }
  // },
  methods: {
    Paginate (clickedpagenumber) {
      this.currentPage = 0
      this.pagesToShow = 6
      let pageCount = 1
      if (clickedpagenumber > 1) {
        while (pageCount < clickedpagenumber) {
          this.currentPage += 6
          this.pagesToShow += 6
          pageCount += 1
        }
      }

      this.paginatedData = this.data
        .sort((a, b) => {
          if (this.status === 'Ongoing') {
            if (!a.completed && b.completed) {
              return -1
            }
            if (a.completed && !b.completed) {
              return 1
            }
          } else {
            if (a.completed && !b.completed) {
              return -1
            }
            if (!a.completed && b.completed) {
              return 1
            }
          }
          // const giveawayDateA = new Date(a.createdAt)
          // const giveawayDateB = new Date(b.createdAt)
          // return giveawayDateB - giveawayDateA
        })
        .slice(this.currentPage, this.pagesToShow)
    },
    initialPaginate () {
      const initialData = this.data.sort((a, b) => {
        if (!a.completed && b.completed) {
          return -1
        }
        if (a.completed && !b.completed) {
          return 1
        }
        // const giveawayDateA = new Date(a.createdAt)
        // const giveawayDateB = new Date(b.createdAt)
        // return giveawayDateB - giveawayDateA
      })
      return initialData.slice(0, 6)
    },
    toggleStatus (status) {
      this.status = status
      this.paginatedData = this.data
        .sort((a, b) => {
          if (this.status === 'Ongoing') {
            if (!a.completed && b.completed) {
              return -1
            }
            if (a.completed && !b.completed) {
              return 1
            }
          } else {
            if (a.completed && !b.completed) {
              return -1
            }
            if (!a.completed && b.completed) {
              return 1
            }
          }
          // const giveawayDateA = new Date(a.createdAt)
          // const giveawayDateB = new Date(b.createdAt)
          // return giveawayDateB - giveawayDateA
        })
        .slice(this.currentPage, this.pagesToShow)
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
    },
    showHideGiveAwayModal (id, hidden) {
      this.giveawayId = id
      this.giveawayHidden = hidden
      this.$store.commit('setPopUpOpen', true)
    },
    refresh () {
      this.$emit('refresh')
      // this.key += 1
      // this.initialPaginate()
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
th.Status div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 18px;
  max-height: 18px;
}
th.Status {
  display: flex;
  align-items: center;
  /* min-width: 11%; */
}
th.Status div {
  margin-left: 15px;
}
th.Status div {
  cursor: pointer;
}
/* th.Status {
  display: flex;
} */
.ongoing {
  color: #e1931e;
  /* width: 11%; */
}
.completed {
  color: #09ab5d;
  /* width: 11%; */
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
/* .Type {
  width: 12%;
}
.Tasks {
  width: 10%;
}
.View {
  width: 10%;
} */
.arrowcircle {
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg) scale(1.9);
}
.scale {
  transform: scale(1.9);
}
button {
  transition: all 0.5s;
}
button.btn-cmpt {
  width: 100%;
  max-width: 120px;
  min-height: 30px;
  font-size: 0.7rem;
}
button.suspend-btn {
  background: #e74d75;
}
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
