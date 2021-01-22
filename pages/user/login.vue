<template>
  <div class="login-bd">
    <h3 class="header">
      Login to your account!
    </h3>
    <form>
      <label>Email address</label>
      <input v-model="email" type="email" placeholder="Enter email address">
      <label>Password</label>
      <div v-click-outside="removeFocus" class="input">
        <input
          v-model="password"
          :type="type"
          placeholder="Enter password"
          @click="showFocus"
        >
        <span @click="changeInputType">show</span>
      </div>
      <button
        v-show="
          email == '' || !emailValidate.test(email) || password.length < 8
        "
        class="disable-1 btn-cmpt"
      >
        Sign In
      </button>
      <button
        v-show="
          email != '' && emailValidate.test(email) && password.length >= 8
        "
        class="btn-cmpt"
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
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
      type: 'password'
    }
  },
  methods: {
    changeInputType () {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    showFocus () {
      document.querySelector('.input').style.outline = '#000000 auto 2px'
    },
    removeFocus () {
      document.querySelector('.input').style.outline = '0'
    }
  }
}
</script>

<style scoped>
.login-bd {
  width: 44.7%;
  height: 580px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #ffffff;
  border-radius: 20px;
  padding: 0px 3.75%;
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
  padding-right: 24px;
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
  }
}
</style>
