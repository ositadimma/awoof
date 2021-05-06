<template>
  <div class="form">
    <h3>Change Your Password</h3>
    <label>Current Password</label>
    <div ref="input1" class="input">
      <input
        v-model="password"
        :type="showPassword1 ? 'text' : 'password'"
        placeholder="Please Enter"
        @blur="removeFocus"
        @click="showFocus"
      >
      <div
        id="mask1"
        class="visibility-container"
        @click="showPassword1 = !showPassword1"
      >
        <img src="~assets/icons/Mask.svg" alt="mask">
      </div>
    </div>
    <label>New Password</label>
    <div ref="input2" class="input">
      <input
        v-model="newPassword"
        :type="showPassword2 ? 'text' : 'password'"
        placeholder="Please Enter"
        @blur="removeFocus"
        @click="showFocus"
      >
      <div
        id="mask2"
        class="visibility-container"
        @click="showPassword2 = !showPassword2"
      >
        <img src="~assets/icons/Mask.svg" alt="mask">
      </div>
    </div>
    <label>Confirm New Password</label>
    <div ref="input3" class="input">
      <input
        v-model="confirmPassword"
        :type="showPassword3 ? 'text' : 'password'"
        placeholder="Please Enter"
        @blur="removeFocus"
        @click="showFocus"
      >
      <div
        id="mask3"
        class="visibility-container"
        @click="showPassword3 = !showPassword3"
      >
        <img src="~assets/icons/Mask.svg" alt="mask">
      </div>
    </div>
    <button v-show="!validate && !loading" class="disable-1 btn-cmpt">
      Save Changes
    </button>
    <button
      v-show="validate && !loading"
      class="btn-cmpt"
      @click="changePassword"
    >
      Save Changes
    </button>
    <button v-show="loading" class="btn-cmpt" disabled>
      <div class="loader1" />
    </button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Securityform',
  data () {
    return {
      showPassword1: false,
      showPassword2: false,
      showPassword3: false,
      password: '',
      newPassword: '',
      confirmPassword: '',
      loading: false
    }
  },
  computed: {
    validate () {
      if (this.password !== '' &&
          this.newPassword !== '' &&
          this.confirmPassword !== '' &&
       (this.newPassword === this.confirmPassword)) {
        return true
      }
      return false
    }
  },
  methods: {
    setDataToDefault () {
      this.password = ''
      this.newPassword = ''
      this.confirmPassword = ''
    },
    async changePassword () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$put(
          'https://api.philantroapp.com/v1/admins/password',
          {
            password: this.password,
            newPassword: this.newPassword
          }
        )
        if (response) {
          this.$toast.global.custom_success('Admin password updated')
          this.setDataToDefault()
        }
      } catch (err) {
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }

        if (err.response !== undefined) {
          if (err.response.status === 400) {
            this.$toast.global.custom_error(err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    },
    showFocus (e) {
      if (e.target.parentNode === this.$refs.input1) {
        this.$refs.input1.style.outline = '#000000 auto 2px'
      } else if (e.target.parentNode === this.$refs.input2) {
        this.$refs.input2.style.outline = '#000000 auto 2px'
      } else {
        this.$refs.input3.style.outline = '#000000 auto 2px'
      }
    },
    removeFocus () {
      document.getElementsByTagName('*').forEach((element) => {
        element.style.outline = '0'
      })
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 40px 20.1% 0px 20%;
}
h3 {
  align-self: center;
  text-align: center;
  margin-bottom: 39px;

  font-size: 18px;
  line-height: 29px;
  text-decoration-line: underline;
}
label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #696f79;
  margin-bottom: 11px;
}
.input {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;

  margin-bottom: 21px;
  border-radius: 6px;
  border: 1px solid #8692a6;
  position: relative;
  overflow: hidden;
}
input[type='password'],
input[type='text'] {
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  box-sizing: border-box;

  font-size: 12px;
}
input[type='password']::placeholder,
input[type='text']::placeholder {
  font-weight: 600;
}
input[type='password']:focus,
input[type='text']:focus {
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
@media (max-width: 767px) {
  .form {
    padding: 40px 13% 0px 13%;
  }
}
@media (max-width: 500px) {
  .visibility-container {
    width: 20%;
  }
}
</style>
