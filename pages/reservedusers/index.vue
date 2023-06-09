<template>
  <div class="user-container">
    <div class="box-container animate__fadeInUp">
      <div class="user-card">
        <div class="title-ctn">
          <span class="title">Reserved User Count</span>
        </div>
        <div class="user-count">
          <span class="amount">{{ searchData.length }}</span>
        </div>
      </div>
      <div class="search-container">
        <input
          v-model="search"
          type="search"
          placeholder="Search users..."
          @keyup.enter="filterSearch"
        >
        <button class="search" @click="filterSearch">
          Search
        </button>
      </div>
    </div>
    <ReservedUsersTable :key="key" :data="searchData" />
    <ReserveUser v-show="currentPath == 'reservedusers' && modalHeaderOpen" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import ReservedUsersTable from '~/components/ReservedUserstable'
import ReserveUser from '~/components/Reserveuser'

export default {
  name: 'ReservedUsers',
  layout: 'dashboardLayout',
  components: {
    ReservedUsersTable,
    ReserveUser
  },
  async fetch () {
    this.$axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var response = await this.$axios.$get(
        '/admins/get_reserved_usernames'
      )
      this.key += 1
    } catch (err) {
      if (err.message.includes('Network')) {
        this.$toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          this.$toast.global.custom_error(err.response.data || err.response.data.message)
        }
      }
    }
    this.searchData = response.data ? response.data : []
    this.tableData = response.data ? [...response.data] : []
    return {
      data: response ? response.data : []
    }
  },
  data () {
    return {
      searchData: [],
      search: '',
      currentPath: '',
      key: 0,
      tableData: []
    }
  },
  computed: {
    modalHeaderOpen () {
      return this.$store.state.modalHeaderOpen
    }
  },
  watch: {
    $route (newRoute) {
      this.currentPath = newRoute.name
    }
  },
  created () {
    this.$store.commit('setLayout', 'RESERVED USERS') // changes layout title of dashboard header
    this.currentPath = this.$route.name
    this.$nuxt.$on('reload-data', () => {
      this.$fetch()
    })
  },
  methods: {
    showModal () {
      this.$store.commit('setModalOpen', true)
    },
    filterSearch () {
      const data = this.tableData.filter((obj) => {
        var stopSearch = false

        Object.values(obj).forEach((val) => {
          const filter1 = String(val)
            .toLowerCase()
            .includes(this.search.toLowerCase())
          const filter2 = String(this.format_date(val))
            .toLowerCase()
            .includes(this.search.toLowerCase())
          if (filter1 || filter2) {
            stopSearch = true
          }
        })

        if (stopSearch) {
          return obj
        }
      })
      this.key += 1
      this.searchData = data
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
.user-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.box-container {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1.5rem;
}
.user-card {
  border: 1px solid #e2e2ea;
  background: #ffffff;
  border-radius: 20px;
  width: 260px;
  min-height: 95px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  /*margin: 0px 21px 19px 0px;*/
  padding: 10px 31px 0px 29px;
}
.title-ctn {
  display: flex;
  align-items: center;
}
.title-ctn .title {
  font-size: 12px;
  line-height: 19px;

  color: #75759e;
}
.user-count {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  align-items: center;
}
.user-count .amount {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;

  color: #171725;
  padding-top: 3px;
}
.user-count .btn-cmpt {
  padding-top: 2.5px;
}
.search-container {
  margin-left: auto;
  width: 100%;
  max-width: 400px;
  min-height: 60px;
  max-height: 60px;
  border: 1px solid #e2e2ea;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  /* box-shadow: 0 6px 30px -10px #d5dbed; */
  padding: 0 1rem 0 1rem;
}
input[type='search'] {
  width: 75%;
  min-height: 70%;
  max-height: 70%;
  padding-left: 1rem;
  font-size: 1.3rem;
  border: none;
}
input[type='search']::placeholder,
input[type='search']::-moz-placeholder,
input[type='search']::-webkit-input-placeholder {
  font-size: 1rem;
}
input[type='search']::-webkit-search-cancel-button {
  /* content: '----'; */
  position: relative;
  right: 10px;

  /* -webkit-appearance: none; */
  cursor: pointer;
  /* background: #09ab5d; */
}
input[type='search']:focus {
  outline: 0;
}
.search {
  border: none;
  background: transparent;
  color: #09ab5d;
  height: 70%;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: auto;
}
.search:focus {
  outline: 0;
}
@media (max-width: 1054px) {
  .box-container {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .user-card {
    margin-bottom: 1rem;
  }
  .search-container {
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .user-container {
    padding: 6.4% 4.5% 0px 4.5%;
  }
}
</style>
