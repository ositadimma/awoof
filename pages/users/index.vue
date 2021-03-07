<template>
  <div class="user-container">
    <div class="referral-card animate__fadeInUp">
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
    <UsersTable :data="data" />
    <NewUserForm v-show="modalOpen" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
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
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'USERS') // changes layout title of dashboard header
  },
  methods: {
    showModal () {
      this.$store.commit('setModalOpen', true)
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
.referral-card {
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
  margin-bottom: 50px;
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
@media (max-width: 768px) {
  .user-container {
    padding: 6.4% 4.5% 0px 4.5%;
  }
}
</style>
