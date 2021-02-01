<template>
  <div class="giver-container">
    <GiveawayTable :loading="loading" :data="data" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import GiveawayTable from '~/components/Giveawaytable'
export default {
  name: 'Giver',
  layout: 'dashboardLayout',
  components: {
    GiveawayTable
  },
  async asyncData ({ $axios, $toast }) {
    let data = []
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      const response = await $axios.$get('/giveaways')
      data = response.data
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
    return { data, loading: false }
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS') // changes layout title of dashboard header
  }
}
</script>

<style scoped>
.giver-container {
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
@media (max-width: 767px) {
  .giver-container {
    padding: 6.4% 0px;
  }
}
</style>
