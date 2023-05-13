<template>
  <div :class="screenWidth > 800 ? 'login-bd easeIn' : 'login-bd'">
    <h3 class="header">
      Login to your account!
    </h3>
    <form @submit.prevent="login">
      <label>Email address</label>
      <input v-model="email" type="email" placeholder="Enter email address">
      <label>Password</label>
      <div v-click-outside="removeFocus" class="input">
        <input
          v-model="password"
          :type="type"
          placeholder="Enter password"
          @click="showFocus"
          @keyup.enter="login"
        >
        <span class="visibility-container" @click="changeInputType">show</span>
      </div>
      <!-- <button
        v-show="
          (!loading && email == '') ||
            !emailValidate.test(email) ||
            password.length < 7
        "
        class="disable-1 btn-cmpt"
      >
        Sign In
      </button> -->
      <!-- v-show="
          !loading &&
            email != '' &&
            emailValidate.test(email) &&
            password.length >= 7
        " -->
      <button v-show="!loading" class="btn-cmpt">
        Sign In
      </button>
      <button v-show="loading" class="btn-cmpt" disabled>
        <div class="loader1" />
      </button>
    </form>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import Cookies from 'js-cookie'
// import axios from '../../.nuxt/axios'
export default {
  name: 'Login',
  layout: 'loginLayout',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      email: '',
      // eslint-disable-next-line
      emailValidate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: '',
      type: 'password',
      screenWidth: '',
      loading: false
    }
  },
  beforeMount () {
    // eslint-disable-next-line
    window.addEventListener('resize', this.handleResize)
    this.screenWidth = window.innerWidth
  },
  beforeDestroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (e) {
      this.screenWidth = e.target.innerWidth
    },
    changeInputType () {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    showFocus () {
      document.querySelector('.input').style.outline = '#000000 auto 2px'
    },
    removeFocus () {
      document.querySelector('.input').style.outline = '0'
    },
    async login () {
      this.loading = true
      try {
        this.$axios.setHeader('Origin','https://effortless-manatee-0697fc.netlify.app')
        process.env.API_URL = 'https://pacific-plateau-95951.herokuapp.com/v1'
        const response = await this.$axios.$post(
          '/auth/admin',
          {
            email: this.email.toLowerCase(),
            password: this.password
          }
        )

        Cookies.set('firstname', response.data.firstName, { expires: 8 })
        Cookies.set('token', response.data.idToken, { expires: 8 })
        Cookies.set('userid', response.data._id, { expires: 8 })
        this.loading = false
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }
        if (err.response !== undefined && err.response.status === 400) {
          this.$toast.global.custom_error(err.response.data.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.login-bd {
  width: 44.7%;
  /* height: 580px; */

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #ffffff;
  border-radius: 20px;
  padding: 0px 3.75% 3.813rem;
  margin-bottom: 1rem;
  /* overflow-y: auto; */
}

.header {
  font-weight: 900;
  font-size: 1.25rem;
  margin: 3.813rem 0px 2rem;
}

form {
  width: 100%;
  border-top: 1px solid #e4e4e4;
  padding: 2.75rem 6% 0px;
}

label {
  font-weight: 900;
  font-size: 15px;
  color: #696f79;

  margin-bottom: 15px;
  display: block;
}

input[type='email'] {
  width: 100%;
  height: 64px;
  border: 1px solid #8692a6;

  border-radius: 6px;
  font-size: 12px;
  color: black;

  margin-bottom: 1.5rem;
  padding-left: 1.875rem;
}

.input {
  width: 100%;
  height: 64px;
  border: 1px solid #8692a6;

  border-radius: 6px;

  color: black;
  margin-bottom: 3.063rem;

  display: flex;
  position: relative;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 6px;

  font-size: 12px;
  padding-left: 1.875rem;
}

.input span {
  font-size: 0.688rem;
  align-self: center;
  cursor: pointer;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: 0;
}

input[type='text']::placeholder,
input[type='email']::placeholder,
input[type='password']::placeholder {
  font-size: 0.688rem;
  color: #8692a6;
}

.visibility-container {
  width: 10%;
  height: 100%;
  position: absolute;
  right: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn-cmpt {
  width: 100%;
  height: 64px;
  border-radius: 6px;

  font-weight: 500;
  font-size: 15px;
}

@media (max-width: 1200px) {
  .login-bd {
    width: 60%;
  }
}

@media (max-width: 800px) {
  .login-bd {
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-bottom: 0;
  }
}
</style>
