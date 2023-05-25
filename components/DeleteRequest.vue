<template>
  <div class="user-form-container" @click.self="closeModal">
    <div class="user-form-body animate__fadeIn">
      <!-- <div class="header">
          <span>{{ detail=='suspend'? 'Suspend': 'Delete' }} User</span>
          <img src="~/assets/icons/Delete.svg" @click="closeModal">
        </div> -->
      <div>Are you sure yo want to delete this request?</div>
      <div class="btn-c">
        <span class="btn-d delete" @click="deleteRequest">
          delete
        </span>
        <span class="btn-d delete" @click="closeModal">
          cancel
        </span>
        <!-- <button v-if="detail==='suspend'" class="btn-cmpt suspend">
            Yes
          </button>
          <button v-if="detail==='delete'" class="btn-cmpt delete">
            Yes
          </button>
          <button class="btn-cmpt delete" @click="closeModal">
            No
          </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'DeleteRequest',
  props: {
    transactionDetail: {
      type: Object,
      default () {
        return {}
      }
    },
    detail: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    closeModal () {
      this.amount = '0'
      this.$store.commit('setModalOpen', false)
    },
    async suspendUser () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$get(
            `/users/suspend_user/${this.userDetail._id}`
        )
        if (response) {
          this.$toast.global.custom_success('User Suspended')
          this.$nuxt.refresh()
          // this.setDataToDefault()
          this.$store.commit('setModalOpen', false)
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    },
    async deleteRequest () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$get(
            `/admins/delete_transfer_request/${this.transactionDetail._id}`
        )
        if (response) {
          this.$toast.global.custom_success('Request Deleted')
          // this.$router.push('/users')
          this.$nuxt.refresh()
          // this.setDataToDefault()
          this.$store.commit('setModalOpen', false)
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data || err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    }
  }
}
</script>

    <style scoped>
    .user-form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;

      background: rgba(6, 13, 37, 0.6);
    }
    .user-form-body {
      padding: 35px 2.7% 0px 2.7%;
      background: #ffffff;
      /* width: 50.5%;
      height: 82.5%; */
      max-height: 620px;
      overflow-y: auto;
      padding-bottom: 1rem;
    }
    .btn-c{
      margin-top: 60px;
    }
    .btn-d{
      float: right;
      padding: 10px;
      font-weight: 100;
      color: darkslateblue;
      cursor: pointer;
      font-size: 18px;
    }
    .btn-d:hover{
      font-weight: bold;
    }
    span {
      font-weight: 600;
    }
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 17px;

      padding-left: 3.5%;
    }
    .header span {
      font-size: 18px;
      line-height: 29px;

      color: #061e5b;
    }
    .header img {
      margin-left: auto;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .form {
      display: flex;
      flex-direction: column;
      padding: 20px 13% 0px 13%;
    }
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 23px;
      color: #696f79;
      margin-bottom: 11px;
    }
    input[type='number'], input[type='text'] {
      width: 100%;
      height: 64px;
      padding-left: 30px;

      border: 1px solid #8692a6;
      box-sizing: border-box;
      border-radius: 6px;

      margin-bottom: 21px;
      font-size: 12px;
    }
    input[type='number']::placeholder, input[type='text']::placeholder {
      font-weight: 600;
    }
    .btn-cmpt {
      height: 64px;
      border-radius: 6px;
      margin-top: 20px;
      margin-bottom: 27px;
    }
    .cancel {
      font-size: 12px;
      line-height: 19px;
      color: #8692a6;

      align-self: center;
      cursor: pointer;
    }
    @media (max-width: 950px) and (orientation: landscape) {
      .user-form-body {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 1024px) {
      .user-form-body {
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
    </style>
