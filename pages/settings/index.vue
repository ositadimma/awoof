<template>
  <div class="setting-container">
    <div class="setting-container-child animate__fadeInUp">
      <div class="setting-nav">
        <div class="setting-nav-child-1">
          <span
            :class="{ active: securityOpen }"
            @click="security"
          >Security</span>
          <span :class="{ active: teamOpen }" @click="team">Team</span>
        </div>
        <button
          v-show="teamOpen"
          class="btn-cmpt new-member-btn"
          @click="showModal"
        >
          Add New Member +
        </button>
      </div>
      <SecurityForm v-show="securityOpen" />
      <TeamTable
        v-show="teamOpen"
        :key="key"
        :data="admins"
        @refresh="refresh"
      />
      <NewMember v-show="modalOpen" />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import SecurityForm from '~/components/Securityform'
import TeamTable from '~/components/Teamtable'
import NewMember from '~/components/Newmemberform'

export default {
  name: 'Setting',
  layout: 'dashboardLayout',
  components: {
    SecurityForm,
    TeamTable,
    NewMember
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var adminsResponse = await $axios.$get(
        'https://api.philantroapp.com/v1/admins/get_all_admins'
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data || err.response.data.message)
        }
      }
    }
    // console.log(adminsResponse)
    return {
      admins: adminsResponse ? adminsResponse.data : []
    }
  },
  data () {
    return {
      key: 0,
      securityOpen: true,
      teamOpen: false
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'SETTINGS') // changes layout title of dashboard header
  },
  methods: {
    security () {
      this.securityOpen = true
      this.teamOpen = false
    },
    team () {
      this.securityOpen = false
      this.teamOpen = true
    },
    showModal () {
      this.$store.commit('setModalOpen', true)
    },
    refresh () {
      this.$nuxt.refresh()
      this.key += 1
    }
  }
}
</script>

<style scoped>
.setting-container {
  background: #f7f7f8;
  flex: 1;

  width: 100%;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.setting-container-child {
  width: 913px;
  height: auto;
  background: #ffffff;
}
.setting-nav {
  display: flex;
  padding-right: 39px;
}
.setting-nav .btn-cmpt {
  width: 188px;
}
.setting-nav-child-1 {
  display: flex;
  flex: 1;
}
.setting-nav-child-1 span {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 165px;
  height: 69px;
  cursor: pointer;
}
.setting-nav-child-1 .active {
  border-bottom: 4px solid;
  color: #09ab5d;
  cursor: auto;
}
@media (max-width: 1250px) {
  .setting-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .setting-container-child {
    width: 100%;
  }
  .setting-nav {
    padding-right: 0px;
  }
}
@media (max-width: 767px) {
  /* .setting-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .setting-container-child {
    width: 100%;
  } */
  .setting-nav {
    flex-direction: column;
    padding-right: 0px;
  }
  .setting-nav .btn-cmpt {
    min-height: 46px;
    align-self: center;
  }
  .setting-nav-child-1 {
    margin-bottom: 10px;
  }
  .setting-nav-child-1 span {
    width: 50%;
  }
}
</style>
