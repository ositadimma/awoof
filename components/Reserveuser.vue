<template>
  <div
    id="new-user-form-container"
    class="new-user-form-container"
    @click.self="closeHeaderModal"
  >
    <div class="new-user-form animate__fadeIn">
      <div class="header">
        <span>Reserve a user</span>
        <img src="~/assets/icons/Delete.svg" @click="closeHeaderModal">
      </div>
      <hr>
      <div class="form">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Please Enter">
        <!-- <label>Email Address</label>
        <input v-model="email" type="email" placeholder="Please Enter">
        <label>Phone Number</label>
        <input v-model="phonenumber" type="text" placeholder="Please Enter"> -->
        <button v-show="!validate && !loading" class="disable-1 btn-cmpt">
          Reserve User
        </button>
        <button
          v-show="validate && !loading"
          class="btn-cmpt"
          @click="reserveUser"
        >
          Reserve User
        </button>
        <button v-show="loading" class="btn-cmpt" disabled>
          <div class="loader1" />
        </button>
        <span class="cancel" @click="closeHeaderModal">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import vClickOutside from 'v-click-outside'

export default {
  name: 'ReserveUser',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      username: '',
      // email: '',
      // // eslint-disable-next-line
      // emailValidate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // phonenumber: '',
      loading: false
    }
  },
  computed: {
    validate () {
      if (
        this.username === '' // ||
        // !this.emailValidate.test(this.email) ||
        // this.phonenumber === ''
      ) {
        return false
      }
      return true
    }
  },
  methods: {
    setDataToDefault () {
      this.email = ''
      // this.phonenumber = ''
      // this.username = ''
    },
    bodyData () {
      const data = {
        // email: this.email,
        // phoneNumber: this.phonenumber,
        username: this.username
      }
      return data
    },
    async reserveUser () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$post(
          '/admins/reserve_username',
          this.bodyData()
        )
        if (response) {
          this.$toast.global.custom_success('User reserved.')
          this.setDataToDefault()
          this.$nuxt.$emit('reload-data')
          this.$store.commit('setModalHeaderOpen', false)
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
    closeHeaderModal () {
      this.$store.commit('setModalHeaderOpen', false)
    }
  }
}
</script>

<style scoped>
.new-user-form-container {
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

.new-user-form {
  padding: 2.9% 2.7% 1rem 2.7%;
  background: #ffffff;
  width: 50.5%;
  height: 95%;
  max-height: 660px;
  overflow-y: auto;
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

.select {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  border: 1px solid #8692a6;
  border-radius: 6px;

  margin-bottom: 21px;
  padding-right: 29.5px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

.select::after {
  content: url('~assets/icons/teamcarrot.svg');
}

.active-select::after {
  transform: rotate(180deg);
}

.default-option {
  width: 99%;
  height: 100%;

  display: flex;
  align-items: center;
  padding-left: 30px;
  font-weight: 600;
  font-size: 12px;
  color: #8692a6;
}

.inner-select {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 300px;

  position: absolute;
  top: 100%;
  z-index: 1;

  overflow-y: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.option {
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid;
  font-weight: 600;
  font-size: 12px;
  color: #8692a6;
  background: #ffffff;
}

.option:last-child {
  border: none;
}

.option:hover {
  color: #ffffff;
  background: #09ab5d;
}

label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #696f79;
  margin-bottom: 11px;
}
label:after {
  content: '*';
  color: red;
}

input[type='text'],
input[type='date'],
input[type='email'] {
  width: 100%;
  min-height: 64px;
  padding-left: 30px;

  border: 1px solid #8692a6;
  border-radius: 6px;

  margin-bottom: 21px;
  font-size: 12px;
  color: #8692a6;
  background: transparent;
  padding-right: 5%;
}

input[type='text']::placeholder,
input[type='password']::placeholder,
input[type='date']::placeholder,
input[type='email']::placeholder {
  font-weight: 600;
  color: #8692a6;
}

.custom-file {
  width: 100%;
  min-height: 64px;
  border: 1px solid #8692a6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  color: #8692a6;
  margin-bottom: 21px;
  position: relative;
  z-index: 0;
  padding-left: calc(1.2rem + 0.4vw);
}

.f-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  width: 40.625%;
  min-height: 55px;
  font-size: calc(0.5625rem + 0.3vw);
  color: #fff;
  background: #09ab5d;
  border-radius: 3px;
  margin: -1px -1px 0px auto;
  transform: scaleY(1.1);
  cursor: pointer;
}

.f-btn:after {
  display: none;
}

.file {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.input {
  width: 100%;
  border: 1px solid #8692a6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 21px;
}

.input input[type='password'],
.input input[type='text'] {
  width: 100%;
  border: none !important;
  min-height: 64px;
  padding-left: 30px;
  border-radius: 6px;
  font-size: 12px;
  color: #8692a6;
  margin-bottom: 0px !important;
}

.input input[type='password']:focus,
.input input[type='text']:focus {
  outline: none;
}

.visibility-container {
  width: 12%;
  height: 100%;
  position: absolute;
  right: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 4px;
  cursor: pointer;
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
  .new-user-form {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1024px) {
  .new-user-form {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
}
</style>
