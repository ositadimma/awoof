<template>
  <div class="giver-container">
    <GiveawayTable :key="key" :data="data" @refresh="refresh" />
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
  async asyncData ({ $axios, $toast, store }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var response = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/giveaways'
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
      key: 0
    }
  },
  created () {
    this.$store.commit('setLayout', 'GIVEAWAYS') // changes layout title of dashboard header
  },
  methods: {
    refresh () {
      this.$nuxt.refresh()
      this.key += 1
      // this.$store.commit('setRefresh', true)
    }
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
@media (max-width: 768px) {
  .giver-container {
    padding: 6.4% 4.5% 0px 4.5%;
  }
}
</style>
