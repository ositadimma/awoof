<template>
  <div
    id="new-member-form-container"
    class="new-member-form-container"
    @click.self="closeModal"
  >
    <div class="new-member-form animate__fadeIn">
      <div class="header">
        <span>Add New Member</span>
        <img src="~/assets/icons/Delete.svg" @click="closeModal">
      </div>
      <hr>
      <div class="form">
        <label>Select Role</label>
        <div
          :class="selectRoleOpen ? 'active-select select' : 'select'"
          tabindex="0"
          @click="selectRoleOpen = !selectRoleOpen"
        >
          <div class="default-option">
            {{ role }}
          </div>
          <div v-show="selectRoleOpen" id="inner-select" class="inner-select">
            <div class="option" @click="selectRole('Super admin')">
              Super Admin
            </div>
            <div class="option" @click="selectRole('Admin')">
              Admin
            </div>
          </div>
        </div>

        <label>First Name</label>
        <input v-model="firstname" type="text" placeholder="Please Enter">
        <label>Last Name</label>
        <input v-model="lastname" type="text" placeholder="Please Enter">
        <label>Email Address</label>
        <input v-model="email" type="text" placeholder="Please Enter">
        <label>Phone Number</label>
        <input v-model="phonenumber" type="text" placeholder="Please Enter">
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
export default {
  name: 'Newmemberform',
  data () {
    return {
      role: 'Please select a role',
      selectRoleOpen: false,
      firstname: '',
      lastname: '',
      email: '',
      // eslint-disable-next-line
      emailValidate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phonenumber: '',
      loading: false
    }
  },
  computed: {
    validate () {
      if (
        this.role === 'Please select a role' ||
        this.firstname === '' ||
        this.lastname === '' ||
        !this.emailValidate.test(this.email) ||
        this.phonenumber === ''
      ) {
        return false
      }
      return true
    }
  },
  methods: {
    selectRole (role) {
      this.role = role
    },
    setDataToDefault () {
      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.phonenumber = ''
      this.role = 'Please select a role'
    },
    bodyData () {
      const data = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        phoneNumber: this.phonenumber,
        role: this.role === 'Super admin' ? 'super_admin' : 'admin'
      }
      return data
    },
    async createAdmin () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$post(
          'https://awoof-api.herokuapp.com/v1/admins/create_admin',
          this.bodyData()
        )
        if (response) {
          this.$toast.global.custom_success('Admin created')
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
.new-member-form-container {
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
.new-member-form {
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
  height: 64px;
  border: 1px solid #8692a6;
  border-radius: 6px;

  margin-bottom: 21px;
  padding-right: 29.5px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}
.select::after {
  content: url("~assets/icons/teamcarrot.svg");
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
  content: "*";
  color: red;
}
input[type="text"] {
  width: 100%;
  height: 64px;
  padding-left: 30px;

  border: 1px solid #8692a6;
  box-sizing: border-box;
  border-radius: 6px;

  margin-bottom: 21px;
  font-size: 12px;
  color: #8692a6;
}
input[type="text"]::placeholder {
  font-weight: 600;
  color: #8692a6;
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
  .new-member-form {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1024px) {
  .new-member-form {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
}
</style>
