<template>
  <div class="userdetail-container">
    <div class="header">
      <div class="back">
        <img
          src="~/assets/icons/Arrow LeftCircle.svg"
          alt="back"
          @click="previousRoute"
        >
        <span>Back</span>
      </div>
      <span v-if="userDetail.isSuspended" class="red">(User Suspended)</span>
      <button class="btn-cmpt primary" @click="showStarModal">
        Add Star
      </button>
      <button class="btn-cmpt secondary" @click="showSurpriseModal">
        Set Surprise
      </button>
      <!-- When onGoing use this instead -->
      <!-- <button v-show="!giveawayDetail.completed" class="edit-btn btn-cmpt">
        Edit Giveaway
      </button> -->
      <!-- <button v-show="!giveawayDetail.completed" class="suspend-btn btn-cmpt">
        Suspend Giveaway
      </button> -->
    </div>

    <div ref="details" class="details">
      <div class="details-child-1">
        <UserDetailTable
          :user-detail="userDetail"
          :social-media-account-detail="socialMediaAccountDetail"
          @open-deduct-balance="showDeductBalanceModal"
          @open-edit-user="showEditUserFormModal"
          @open-suspend-user-dialog="showSuspendUserDialogModal"
          @open-reinstate-user-dialog="showReinstateUserDialogModal"
          @open-delete-user-dialog="showDeleteUserDialogModal"
        />
      </div>
    </div>
    <UserDialog v-show="modalOpen && modal == 'userDialog'" :detail="detail" :user-detail="userDetail" />
    <UserForm v-show="modalOpen && modal == 'surprise'" />
    <UserStar v-show="modalOpen && modal == 'star'" />
    <DeductBalanceForm v-show="modalOpen && modal == 'deductbalance'" />
    <EditUserForm v-show="modalOpen && modal == 'edituserform'" :user-detail="userDetail" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import UserDetailTable from '~/components/UserDetailtable'
import UserDialog from '~/components/UserDialog'
import UserForm from '~/components/Userform'
import UserStar from '~/components/Userstar'

export default {
  name: 'Giveawaydetail',
  layout: 'dashboardLayout',
  components: {
    UserDetailTable,
    UserForm,
    UserStar,
    UserDialog
  },
  async asyncData ({ $axios, $toast, params }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var userDetailResponse = await $axios.$get(
        `/users/${params.id}`
      )
      var socialMediaAccountResponse = await $axios.$get(
        `/admins/get_social_account/${params.id}`
      )
      var totalSupriseResponse = await $axios.$get(
        `/admins/get_surprise_amount/${params.id}`
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

    // console.log(totalSuprise)
    // eslint-disable-next-line
    return {
      userDetail:
        userDetailResponse !== undefined ? userDetailResponse.data : {},
      socialMediaAccountDetail: socialMediaAccountResponse.data !== undefined ? socialMediaAccountResponse.data[0] : {},
      totalSuprise: totalSupriseResponse !== undefined ? totalSupriseResponse.data : [],
      detail: 'suspend'
    }
  },
  data () {
    return {
      modal: 'star',
      detail: 'suspend'
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modalOpen
    }
  },
  created () {
    this.$store.commit('setLayout', 'USER DETAILS') // changes layout title of dashboard header
  },
  methods: {
    previousRoute () {
      window.history.back()
    },
    showStarModal () {
      this.$store.commit('setModalOpen', true)
      this.modal = 'star'
    },
    showSurpriseModal () {
      this.$store.commit('setModalOpen', true)
      this.modal = 'surprise'
    },
    showDeductBalanceModal () {
      this.$store.commit('setModalOpen', true)
      this.modal = 'deductbalance'
    },
    showEditUserFormModal () {
      this.$store.commit('setModalOpen', true)
      this.modal = 'edituserform'
    },
    showSuspendUserDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.detail = 'suspend'
      this.modal = 'userDialog'
    },
    showReinstateUserDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.detail = 'reinstate'
      this.modal = 'userDialog'
    },
    showDeleteUserDialogModal () {
      this.$store.commit('setModalOpen', true)
      this.modal = 'userDialog'
      this.detail = 'delete'
    }
  }
}
</script>

<style scoped>
.userdetail-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 30px 49px 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.header {
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 34px;
}
.back {
  flex: 3;
  display: flex;
  align-items: center;
}
.back img {
  cursor: pointer;
}
.back span {
  font-size: 14px;
  line-height: 23px;
  color: #75759e;
  margin-left: 11px;
  padding-top: 3px;
}
.red{
  color: #fd0404 !important;
  font-size: 18px !important;
  margin-right: 15px;
  width: 150px;
}
.btn-cmpt {
  width: 175px;
  height: 50px;
  background: #083577;
  border-radius: 20px;
}
.edit-btn {
  width: 158px;
}
.suspend-btn {
  width: 188px;
  background: #e74d75;
  margin-left: 14px;
}
.details {
  width: 100%;
  height: auto;

  display: flex;
  /*padding: 7.5% 3.4% 0px 3.4%;*/
}
.details .details-child-1 {
  width: 65%;
  height: auto;
}
.details .details-child-2 {
  width: 32.5%;
  height: auto;
  margin-left: 27px;
}
.users {
  font-size: 16px;
  line-height: 26px;
  color: #75759e;
}
.primary {
  margin-right: 1rem;
}
.secondary {
  background-color: #09ab5d;
}
@media (max-width: 1280px) {
  .details {
    flex-direction: column-reverse;
  }
  .details .details-child-1,
  .details .details-child-2 {
    width: 100%;
    margin-left: 0px;
  }
}
@media (max-width: 950px) {
  .back span {
    font-size: 12px;
    line-height: 21px;
  }
}
@media (max-width: 767px) {
  .userdetail-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .users {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
