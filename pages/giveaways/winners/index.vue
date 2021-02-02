<template>
  <div class="winners-container">
    <Winnerstable :data="data" :loading="loading" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import Winnerstable from '~/components/Winnerstable'
export default {
  name: 'Winners',
  layout: 'dashboardLayout',
  components: {
    Winnerstable
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var response = await $axios.$get('https://awoof-api.herokuapp.com/v1/giveaways/winners')
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error(
          'please check your connection and try again'
        )
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data.message)
        }
      }
    }
    return { data: response.data, loading: false }
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAY (Winners)') // changes title of dashboard header
  }
}
</script>

<style scoped>
.winners-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  padding: 6.4% 6% 0px 4.45%;
  overflow-y: auto;
}
</style>
