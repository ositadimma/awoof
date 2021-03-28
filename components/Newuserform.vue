<template>
  <div
    id="new-user-form-container"
    class="new-user-form-container"
    @click.self="closeModal"
  >
    <div class="new-user-form animate__fadeIn">
      <div class="header">
        <span>Add New User</span>
        <img src="~/assets/icons/Delete.svg" @click="closeModal">
      </div>
      <hr>
      <div class="form">
        <label>First Name</label>
        <input v-model="firstname" type="text" placeholder="Please Enter">
        <label>Last Name</label>
        <input v-model="lastname" type="text" placeholder="Please Enter">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Please Enter">
        <label>Password</label>

        <div v-click-outside="removeFocus" class="input">
          <input
            v-model="password"
            :type="type"
            placeholder="Enter password"
            @click="showFocus"
            @keyup.enter="login"
          >
          <div class="visibility-container" @click="changeInputType">
            <img src="~assets/icons/Mask.svg" alt="mask">
          </div>
        </div>

        <div class="custom-file">
          {{ image !== '' ? image.name : 'Upload Image' }}
          <label class="f-btn" for="file"> Select Image </label>
          <input
            id="file"
            type="file"
            class="file"
            @click="setImageTarget"
            @change="getImage"
          >
        </div>

        <label>Select Gender</label>
        <div
          v-click-outside="() => (selectGenderOpen = false)"
          :class="selectGenderOpen ? 'active-select select' : 'select'"
          tabindex="0"
          @click="selectGenderOpen = !selectGenderOpen"
        >
          <div class="default-option">
            {{ gender }}
          </div>
          <div v-show="selectGenderOpen" id="inner-select" class="inner-select">
            <div class="option" @click="selectGender('Male')">
              Male
            </div>
            <div class="option" @click="selectGender('Female')">
              Female
            </div>
          </div>
        </div>

        <label>Email Address</label>
        <input v-model="email" type="email" placeholder="Please Enter">
        <label>Date Of Birth</label>
        <input v-model="dateOfBirth" type="date" placeholder="Please Enter">
        <label class="locationlabel">Location</label>
        <input v-model="location" type="text" placeholder="Please Enter">
        <label>Phone Number</label>
        <input v-model="phonenumber" type="text" placeholder="Please Enter">
        <label class="locationlabel">Referral Code</label>
        <input v-model="referralCode" type="text" placeholder="Please Enter">
        <button v-show="!validate && !loading" class="disable-1 btn-cmpt">
          Create Account
        </button>
        <button
          v-show="validate && !loading"
          class="btn-cmpt"
          @click="createAdmin"
        >
          Create Account
        </button>
        <button v-show="loading" class="btn-cmpt" disabled>
          <div class="loader1" />
        </button>
        <span class="cancel" @click="closeModal">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Newmemberform',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      gender: 'Please select gender',
      selectGenderOpen: false,
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      type: 'password',
      email: '',
      // eslint-disable-next-line
      emailValidate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      dateOfBirth: '',
      image: '',
      phonenumber: '',
      location: '',
      referralCode: '',
      loading: false
    }
  },
  computed: {
    validate () {
      if (
        this.gender === 'Please select gender' ||
        this.firstname === '' ||
        this.lastname === '' ||
        this.username === '' ||
        this.password === '' ||
        this.password.length < 8 ||
        !this.emailValidate.test(this.email) ||
        this.dateOfBirth === '' ||
        this.image === '' ||
        this.referralCode === '' ||
        this.phonenumber === '' ||
        this.location === ''
      ) {
        return false
      }
      return true
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
    },
    setImageTarget (e) {
      // set value of file to null every time the user clicks to allow selecting the same file again
      e.target.value = ''
    },
    getImage (e) {
      const file = e.target.files[0]
      const filename = e.target.files[0].name
      const ext = filename.split('.')
      if (
        ext[ext.length - 1] === 'png' ||
        ext[ext.length - 1] === 'jpeg' ||
        ext[ext.length - 1] === 'jpg' ||
        ext[ext.length - 1] === 'gif'
      ) {
        this.image = file
      } else {
        this.$toast.global.custom_error('Can only upload images')
      }
    },
    selectGender (gender) {
      this.gender = gender
    },
    setDataToDefault () {
      this.firstname = ''
      this.lastname = ''
      this.username = ''
      this.email = ''
      this.phonenumber = ''
      this.gender = 'Please select gender'
      this.password = ''
      this.image = ''
      this.referralCode = ''
      this.dateOfBirth = ''
      this.location = ''
    },
    bodyData () {
      const data = new FormData()
      data.append('firstName', this.firstname)
      data.append('lastName', this.lastname)
      data.append('username', this.username)
      data.append('password', this.password)
      data.append('email', this.email)
      data.append('phoneNumber', this.phonenumber)
      data.append('gender', this.gender)
      data.append('image', this.image)
      data.append('dateOfBirth', this.dateOfBirth)
      data.append('referralCode', this.referralCode)
      data.append('location', this.location)
      return data
    },
    async createAdmin () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      this.$axios.setHeader('Content-Type', 'multipart/form-data')
      try {
        const response = await this.$axios.$post(
          'https://awoof-api.herokuapp.com/v1/users',
          this.bodyData()
        )
        if (response) {
          this.$toast.global.custom_success('User created')
          this.$nuxt.refresh()
          this.setDataToDefault()
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
            this.$toast.global.custom_error(err.response.data.message)
          } else if (err.response.status === 403) {
            this.$toast.global.custom_error(err.response.data)
          }
        }
      }
      this.loading = false
    },
    closeModal () {
      this.$store.commit('setModalOpen', false)
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
