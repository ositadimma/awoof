<template>
  <div class="user-container">
    <div class="user-card animate__fadeInUp">
      <div class="title-ctn">
        <span class="title">User Count</span>
      </div>
      <div class="user-count">
        <span class="amount">{{ data.length }}</span>
        <button class="btn-cmpt" @click="showModal">
          Add new user
        </button>
      </div>
    </div>
    <div class="search-container animate__fadeInUp">
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
    <UsersTable :key="key" :data="searchData" />
    <NewUserForm v-show="modalOpen" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import UsersTable from '~/components/Userstable'
import NewUserForm from '~/components/Newuserform'

export default {
  name: 'Users',
  layout: 'dashboardLayout',
  components: {
    UsersTable,
    NewUserForm
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var response = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/admins/get_all_users'
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data.message)
        }
      }
    }
    return { data: response ? response.data : [] }
  },
  data () {
    return {
      searchData: [],
      search: '',
      key: 0
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'USERS') // changes layout title of dashboard header
    this.searchData = this.data
  },
  methods: {
    showModal () {
      this.$store.commit('setModalOpen', true)
    },
    filterSearch () {
      const data = this.data.filter((obj) => {
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
  margin-bottom: 1.5rem;
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
  width: 100%;
  max-width: 400px;
  min-height: 80px;
  max-height: 80px;
  border: 1px solid #e2e2ea;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  /* box-shadow: 0 6px 30px -10px #d5dbed; */
  margin: 0 0 1.5rem;
  padding: 0 1rem 0 1rem;
}
input[type='search'] {
  flex: 1;
  height: 70%;
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
}
.search:focus {
  outline: 0;
}
@media (max-width: 768px) {
  .user-container {
    padding: 6.4% 4.5% 0px 4.5%;
  }
}
</style>
