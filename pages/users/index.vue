<template>
  <div class="user-container">
    <UsersTable :data="data" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import UsersTable from '~/components/Userstable'

export default {
  name: 'Users',
  layout: 'dashboardLayout',
  components: {
    UsersTable
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
  created () {
    this.$store.commit('setLayout', 'USERS') // changes layout title of dashboard header
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

  padding: 6.4% 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 768px) {
  .user-container {
    padding: 6.4% 4.5% 0px 4.5%;
  }
}
</style>
