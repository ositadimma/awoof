<template>
  <div class="table-head">
    <table>
      <thead>
        <tr>
          <th class="Name">
            Name
          </th>
          <th>
            Email Address
          </th>
          <th>
            Phone Number
          </th>
          <th>
            Role
          </th>
          <th>
            Status
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody v-show="data.length > 0">
        <tr v-for="(admin, index) in paginatedData" :key="index">
          <td data-title="Name" class="Name">
            {{ admin.firstName + " " + admin.lastName }}
          </td>
          <td data-title="Email Address">
            {{ admin.email }}
          </td>
          <td data-title="Phone Number">
            {{ admin.phoneNumber }}
          </td>
          <td data-title="Role" class="Role">
            {{ admin.role == "super_admin" ? "Super Admin" : "Admin" }}
          </td>
          <td data-title="Status">
            {{ admin.isActive ? "Active" : "InActive" }}
          </td>
          <td data-title="Actions" class="Actions">
            <button
              :class="admin.isActive ? 'inactive btn-cmpt' : ' active btn-cmpt'"
              @click="showModal(admin._id, admin.isActive, admin.role)"
            >
              {{ admin.isActive ? "Make InActive" : "Make Active" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <NoData v-show="data.length == 0" />
    <paginate
      :page-count="amountOfPages"
      :margin-pages="2"
      :container-class="'pagination'"
      :break-view-text="'. . .'"
      :click-handler="Paginate"
    />
    <StatusModal
      v-show="popUpOpen"
      :id="id"
      :role="role"
      :status="status"
      @refresh="refresh"
    />
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
import NoData from './NoTableData'
import StatusModal from './StatusModal'

export default {
  name: 'Teamtable',
  components: {
    NoData,
    StatusModal,
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
      paginatedData: [],
      amountOfPages: Math.ceil(this.data.length / 10),
      id: '',
      role: '',
      status: false
    }
  },
  computed: {
    popUpOpen () {
      return this.$store.state.popUpOpen
    }
  },
  mounted () {
    this.$watch(
      'data',
      (data) => {
        this.paginatedData = [...data]
          .sort((a, b) => {
            const winnerDateA = new Date(a.createdAt)
            const winnerDateB = new Date(b.createdAt)
            return winnerDateB - winnerDateA
          })
          .slice(0, 3)
      },
      { immediate: true }
    )
  },
  methods: {
    Paginate (clickedpagenumber) {
      let currentPage = 0
      let pagesToShow = 3
      let pageCount = 1
      if (clickedpagenumber > 1) {
        while (pageCount < clickedpagenumber) {
          currentPage += 3
          pagesToShow += 3
          pageCount += 1
        }
      }
      this.paginatedData = this.data
        .sort((a, b) => {
          const winnerDateA = new Date(a.createdAt)
          const winnerDateB = new Date(b.createdAt)
          return winnerDateB - winnerDateA
        })
        .slice(currentPage, pagesToShow)
    },
    showModal (id, status, role) {
      this.id = id
      this.role = role
      this.status = status
      this.$store.commit('setPopUpOpen', true)
    },
    refresh () {
      this.$emit('refresh')
    }
  }
}
</script>

<style scoped>
.table-head {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 470px;
  /* max-height: 500px;
  overflow-y: auto; */
}
table {
  table-layout: auto;
  width: 100%;
  border-spacing: 0px;
}
thead tr {
  background: #f0f2f4;
}
th {
  font-weight: normal;
  height: 63px;
  font-size: 14px;
  line-height: 24px;
  color: #75759e;

  text-align: left;
  padding-left: 6px;
}
td {
  height: 85px;
  text-align: left;
  padding-left: 6px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  overflow-x: auto;
}
tbody tr:last-child td {
  border-bottom: none;
}
.Name {
  padding-left: 49px;
}
.Role div {
  display: flex;
  cursor: pointer;
}
.Role div p {
  margin-right: 9px;
}
.Actions img {
  cursor: pointer;
}
.Actions img:first-child {
  margin-right: 32px;
}
.btn-cmpt:focus {
  outline: 0;
}
.active {
  background: #09ab5d;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  min-height: 26px;
  max-height: 50px;
  font-size: 14px;
  background-position: center;
  transition: background 0.8s;
}
.inactive {
  background: #ff0000;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  min-height: 26px;
  max-height: 50px;
  font-size: 14px;
  background-position: center;
  transition: background 0.8s;
}
@media (max-width: 950px) {
  .table-head {
    max-height: 330px;
    padding-bottom: 0px;
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
  td::before {
    content: attr(data-title);
  }
  .Name {
    width: 100%;
    padding: 0px;
  }
  .Actions img:first-child {
    margin-right: 5px;
    margin-left: auto;
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
