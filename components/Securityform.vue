<template>
  <div class="form">
    <h3>Change Your Password</h3>
    <label>Current Password</label>
    <div class="input">
      <input :type="password1" placeholder="Please Enter">
      <img id="mask1" class="mask" src="~assets/icons/Mask.svg" alt="mask" @click="showPassword">
    </div>
    <label>New Password</label>
    <div class="input">
      <input :type="password2" placeholder="Please Enter">
      <img id="mask2" class="mask" src="~assets/icons/Mask.svg" alt="mask" @click="showPassword">
    </div>
    <label>Confirm New Password</label>
    <div class="input">
      <input :type="password3" placeholder="Please Enter">
      <img id="mask3" class="mask" src="~assets/icons/Mask.svg" alt="mask" @click="showPassword">
    </div>
    <Button text="Save Changes" />
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'Securityform',
  components: {
    Button
  },
  data () {
    return {
      password1: 'password',
      password2: 'password',
      password3: 'password'
    }
  },
  methods: {
    showPassword (e) {
      const mask = document.getElementsByClassName('mask')
      if (e.target.id === mask[0].id) {
        if (this.password1 === 'password') {
          this.password1 = 'text'
        } else {
          this.password1 = 'password'
        }
      } else if (e.target.id === mask[1].id) {
        if (this.password2 === 'password') {
          this.password2 = 'text'
        } else {
          this.password2 = 'password'
        }
      } else if (e.target.id === mask[2].id) {
        if (this.password3 === 'password') {
          this.password3 = 'text'
        } else {
          this.password3 = 'password'
        }
      } else {
        // console.log('no match')
      }
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
  margin-bottom: 39px;

  font-size: 18px;
  line-height: 29px;
  text-decoration-line: underline;
}
label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #696F79;
  margin-bottom: 11px;
}
.input {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;

  margin-bottom: 21px;
  border-radius: 6px;
  border: 1px solid #8692A6;
  padding-right: 4.295%;
  overflow: hidden;
}
input[type=password], input[type=text] {
  border: none;
  width: 95%;
  height: 100%;
  padding-left: 30px;
  box-sizing: border-box;

  font-size: 12px;
}
input[type=password]::placeholder, input[type=text]::placeholder {
  font-weight: 600;
}
input[type=password]:focus , input[type=text]:focus {
  outline: none;
}
.mask {
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
</style>
