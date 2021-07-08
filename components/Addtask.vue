<template>
  <div class="bg-container" @click.self="closeModal">
    <div class="container animate__fadeIn">
      <header>
        Add new tasks
        <img src="~/assets/icons/Delete.svg" @click="closeModal">
      </header>
      <div class="conditions-container">
        <!-- !followPageOnFacebookCheck ||  -->
        <div v-show="!likeFacebookCheck" class="social">
          <img src="~/assets/images/facebook.png" alt="select">
          Facebook
          <img
            alt="drop"
            :class="!dropdown1 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            @click="dropdown1 = !dropdown1"
          >
        </div>
        <div v-show="dropdown1" class="condition-container">
          <!-- <div v-show="!followPageOnFacebookCheck" class="condition-child">
            Follow Page On Facebook
            <div class="checkbox">
              <input
                id="check1"
                v-model="followPageOnFacebook"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check1" />
            </div>
          </div>
          <div
            v-show="followPageOnFacebook && !followPageOnFacebookCheck"
            class="condition-child"
          >
            Facebook Username
            <input type="text" placeholder="Username">
          </div> -->
          <div v-show="!likeFacebookCheck" class="condition-child">
            Like post/page on Facebook
            <div class="checkbox">
              <input
                id="check2"
                v-model="likeFacebook"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check2" />
            </div>
          </div>
          <div
            v-show="likeFacebook && !likeFacebookCheck"
            class="condition-child"
          >
            Link to Post On Facebook
            <input v-model="likeFacebookLink" type="text" placeholder="Link">
          </div>
        </div>
        <div
          v-show="!followInstagramCheck || !likeInstagramCheck"
          class="social"
        >
          <img src="~/assets/images/instagram.png" alt="select">
          Instagram
          <img
            :class="!dropdown2 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            alt="drop"
            @click="dropdown2 = !dropdown2"
          >
        </div>
        <div v-show="dropdown2" class="condition-container">
          <div v-show="!followInstagramCheck" class="condition-child">
            Follow On Instagram
            <div class="checkbox">
              <input
                id="check3"
                v-model="followInstagram"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check3" />
            </div>
          </div>
          <div
            v-show="followInstagram && !followInstagramCheck"
            class="condition-child"
          >
            Instagram Username
            <input
              v-model="followInstagramLink"
              type="text"
              placeholder="Username"
            >
          </div>
          <div v-show="!likeInstagramCheck" class="condition-child">
            Like post/page on Instagram
            <div class="checkbox">
              <input
                id="check4"
                v-model="likeInstagram"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check4" />
            </div>
          </div>
          <div
            v-show="likeInstagram && !likeInstagramCheck"
            class="condition-child"
          >
            Link to Post On Instagram
            <input v-model="likeInstagramLink" type="text" placeholder="Link">
          </div>
        </div>
        <div v-show="!followTwitterCheck || !likeTwitterCheck" class="social">
          <img src="~/assets/images/twitter.png" alt="select">
          Twitter
          <img
            :class="!dropdown3 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            alt="drop"
            @click="dropdown3 = !dropdown3"
          >
        </div>
        <div v-show="dropdown3" class="condition-container">
          <div v-show="!followTwitterCheck" class="condition-child">
            Follow On Twitter
            <div class="checkbox">
              <input
                id="check5"
                v-model="followTwitter"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check5" />
            </div>
          </div>
          <div
            v-show="followTwitter && !followTwitterCheck"
            class="condition-child"
          >
            Twitter Username
            <input
              v-model="followTwitterLink"
              type="text"
              placeholder="Username"
            >
          </div>
          <div v-show="!likeTwitterCheck" class="condition-child">
            Like/Tweet on Twitter
            <div class="checkbox">
              <input
                id="check6"
                v-model="likeTwitter"
                type="checkbox"
                @click="unCheck"
              >
              <label for="check6" />
            </div>
          </div>
          <div
            v-show="likeTwitter && !likeTwitterCheck"
            class="condition-child"
          >
            Link to Post On Twitter
            <input v-model="likeTwitterLink" type="text" placeholder="Link">
          </div>
        </div>
      </div>
      <span v-show="validateChecks" class="no-tasks">No tasks left</span>
      <button
        v-show="!formField && !loading && !validateChecks"
        class="disable-1 btn-cmpt"
      >
        Proceed
      </button>
      <button
        v-show="formField && !loading && !validateChecks"
        class="btn-cmpt"
        @click="addTask"
      >
        Proceed
      </button>
      <button v-show="loading" class="btn-cmpt" disabled>
        <div class="loader1" />
      </button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'NewGiveaway',
  layout: 'dashboardLayout',
  props: {
    tasks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
      image: '',
      followPageOnFacebook: false,
      followFacebookLink: '',
      likeFacebook: false,
      likeFacebookLink: '',
      followInstagram: false,
      followInstagramLink: '',
      likeInstagram: false,
      likeInstagramLink: '',
      followTwitter: false,
      followTwitterLink: '',
      likeTwitter: false,
      likeTwitterLink: '',
      loading: false,
      // checks
      followPageOnFacebookCheck: false,
      likeFacebookCheck: false,
      followInstagramCheck: false,
      likeInstagramCheck: false,
      followTwitterCheck: false,
      likeTwitterCheck: false
    }
  },
  computed: {
    formField () {
      if (
        this.likeFacebookLink === '' &&
        this.likeInstagramLink === '' &&
        this.followInstagramLink === '' &&
        this.likeTwitterLink === '' &&
        this.followTwitterLink === ''
      ) {
        return false
      }
      return true
    },
    validateChecks () {
      if (
        // this.followPageOnFacebookCheck &&
        this.likeFacebookCheck &&
        this.followInstagramCheck &&
        this.likeInstagramCheck &&
        this.followTwitterCheck &&
        this.likeTwitterCheck
      ) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.$watch(
      'tasks',
      (tasks) => {
        // console.log(tasks)
        this.previousTasksExist([...tasks])
      },
      { immediate: true }
    )
  },
  methods: {
    closeModal () {
      this.setDataToDefault()
      this.$store.commit('setModalOpen', false)
    },
    setDataToDefault () {
      this.dropdown1 = false
      this.dropdown2 = false
      this.dropdown3 = false
      this.likeFacebookLink = ''
      this.followPageOnFacebook = false
      this.likeFacebook = false
      this.likeInstagramLink = ''
      this.followInstagram = false
      this.followInstagramLink = ''
      this.likeInstagram = false
      this.likeTwitterLink = ''
      this.followTwitter = false
      this.followTwitterLink = ''
      this.likeTwitter = false
    },
    bodyData () {
      const data = {
        likeFacebookLink: this.likeFacebookLink,
        followPageOnFacebook: false,
        likeFacebook: this.likeFacebook,
        likeInstagramLink: this.likeInstagramLink,
        followInstagram: this.followInstagram,
        followInstagramLink: this.followInstagramLink,
        likeInstagram: this.likeInstagram,
        likeTweetLink: this.likeTwitterLink,
        followTwitter: this.followTwitter,
        followTwitterLink: this.followTwitterLink,
        likeTweet: this.likeTwitter
      }
      // console.log(data)
      return data
    },
    async addTask () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      try {
        const response = await this.$axios.$put(
          `https://api.philantroapp.com/v1/giveaways/${this.$route.params.id}`,
          this.bodyData()
        )
        if (response) {
          this.$toast.global.custom_success('Giveaway updated')
          this.$emit('refresh')
          this.closeModal()
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
          }
        }
      }
      this.loading = false
    },
    unCheck () {
      if (!this.followPageOnFacebook) {
        this.followPageOnFacebookLink = ''
      }
      if (!this.likeFacebook) {
        this.likeFacebookLink = ''
      }
      if (!this.followInstagram) {
        this.followInstagramLink = ''
      }
      if (!this.likeInstagram) {
        this.likeInstagramLink = ''
      }
      if (!this.followTwitter) {
        this.followTwitterLink = ''
      }
      if (!this.likeTwitter) {
        this.likeTwitterLink = ''
      }
    },
    previousTasksExist (tasks) {
      // console.log(tasks)
      this.followPageOnFacebookCheck = tasks.some(
        element => element.text === 'Follow Page On Facebook'
      )
      this.likeFacebookCheck = tasks.some(
        element => element.text === 'Like and post on Facebook'
      )
      this.followInstagramCheck = tasks.some(
        element => element.text === 'Follow On Instagram'
      )
      this.likeInstagramCheck = tasks.some(
        element => element.text === 'Like post on Instagram'
      )
      this.followTwitterCheck = tasks.some(
        element => element.text === 'Follow On Twitter'
      )
      this.likeTwitterCheck = tasks.some(
        element => element.text === 'Like and retweet on Twitter'
      )

      if (this.followPageOnFacebookCheck) {
        this.followPageOnFacebook = true
        // const index = tasks.findIndex(
        //   element => element.text === 'Follow Page On Facebook'
        // )
        // this.followPageOnFacebookLink = tasks[index].link
      }
      if (this.likeFacebookCheck) {
        this.likeFacebook = true
        const index = tasks.findIndex(
          element => element.text === 'Like and post on Facebook'
        )
        this.likeFacebookLink = tasks[index].link
      }
      if (this.followInstagramCheck) {
        this.followInstagram = true
        const index = tasks.findIndex(
          element => element.text === 'Follow On Instagram'
        )
        this.followInstagramLink = tasks[index].link
      }
      if (this.likeInstagramCheck) {
        this.likeInstagram = true
        const index = tasks.findIndex(
          element => element.text === 'Like post on Instagram'
        )
        this.likeInstagramLink = tasks[index].link
      }
      if (this.followTwitterCheck) {
        this.followTwitter = true
        const index = tasks.findIndex(
          element => element.text === 'Follow On Twitter'
        )
        this.followTwitterLink = tasks[index].link
      }
      if (this.likeTwitterCheck) {
        this.likeTwitter = true
        const index = tasks.findIndex(
          element => element.text === 'Like and retweet on Twitter'
        )
        this.likeTwitterLink = tasks[index].link
      }
    }
  }
}
</script>

<style scoped>
.bg-container {
  background: rgba(0, 20, 49, 0.8);
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.container {
  width: 50%;
  max-width: 713px;
  min-height: 450px;
  max-height: 707px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #fff;
  overflow-y: auto;
  padding: 4.12rem 8.9% 3rem 8.9%;
}

header {
  width: 100%;
  font-weight: 600;
  font-size: calc(0.85rem + 0.3vw);
  text-align: center;
  justify-content: center;
  margin-bottom: 5rem;
}

header img {
  float: right;
}

span {
  display: block;
  font-weight: 600;
  font-size: calc(0.625rem + 0.2vw);
}

label {
  display: block;
  margin-bottom: 11px;
  font-weight: 600;
  font-size: calc(0.6875rem + 0.2vw);
  color: #696f79;
  align-self: flex-start;
}

img {
  max-width: 100%;
  cursor: pointer;
}

.conditions-container {
  width: 100%;
  padding-top: 1.3rem;
}

.conditions-container span:nth-child(2) {
  margin-bottom: 1.8rem;
}

.conditions-container .social {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: calc(0.625rem + 0.2vw);
  border: 3px solid rgba(134, 146, 166, 0.4);
  border-radius: 3px;
  padding: 0px 1.25rem 0px 1.125rem;
}

.conditions-container .social:nth-last-child(n + 2) {
  margin-bottom: 1.5rem;
}

.conditions-container .social img {
  margin: -4px 0.6875rem 0px 0px;
  cursor: auto;
}

/* custom checkbox */
input[type='checkbox'] {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
  overflow-x: auto;
}

.checkbox label {
  width: 100%;
  cursor: pointer;
  margin-bottom: 0;
  max-width: 18px;
}

.checkbox {
  position: relative;
  margin-left: auto;
}

.checkbox label:before {
  content: '';
  -webkit-appearance: none;
  background: #ffffff;
  border: 1px solid #8692a6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox input[type='checkbox']:checked + label:before {
  background: #09ab5d;
  border: none;
}

.checkbox input[type='checkbox']:checked + label:after {
  content: '';
  position: absolute;
  top: 2.5px;
  left: 6px;
  width: 6.5px;
  height: 11.21px;
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  cursor: pointer;
}

.condition-container {
  border: 2px solid rgba(134, 146, 166, 0.4);
  border-radius: 3px;
  margin: 0.8125rem 0px 3.8rem 0px;
  width: 100%;
  padding: 5.5% 4%;
}

.condition-container .condition-child:nth-child(odd) {
  height: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 600;
  font-size: calc(0.825rem + 0.3vw);
}

.condition-container .condition-child:nth-child(even) {
  border-top: 1px solid rgba(134, 146, 166, 0.4);
  height: 135px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: calc(0.8rem + 0.3vw);
}

input[type='text'] {
  border: 1px solid rgba(134, 146, 166, 0.4);
  border-radius: 3px;
  width: 100%;
  height: 55px;
  color: #000000;
  font-weight: 600;
  font-size: calc(0.82rem + 0.3vw);
  margin-top: 1rem;
  padding-left: 0.875rem;
}

input[type='text']::placeholder {
  color: rgba(52, 87, 70, 0.2);
  font-size: calc(0.6rem + 0.2vw);
}

.down {
  cursor: pointer !important;
  transform: rotate(180deg);
  margin: 0px 4px 0px auto !important;
}

.up {
  cursor: pointer !important;
  margin: 0px 4px 0px auto !important;
}

.no-tasks {
  font-size: calc(1rem + 0.3vw);
  color: #09ab5d;
  margin-top: 1.5rem;
}

.btn-cmpt {
  width: 100%;
  min-height: 64px;
  margin: 4.8rem;
}

@media (min-width: 1600px) {
  .container {
    padding-left: 105px;
    padding-right: 105px;
  }
  header {
    font-size: 20px;
  }

  span {
    font-size: 15px;
  }

  label {
    font-size: 16px;
  }

  input[type='text'] {
    font-size: 15px;
  }

  .conditions-container .social {
    font-size: 15px;
  }

  .condition-container .condition-child:nth-child(1) {
    font-size: 15px;
  }

  .condition-container .condition-child:nth-child(n + 2) {
    font-size: 14px;
  }

  .no-tasks {
    font-size: 25px;
  }
}

@media (max-width: 1300px) {
  .container {
    width: 70%;
  }
}

@media (max-width: 1024px) {
  .bg-container {
    align-items: flex-start;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
  }
}

@media (max-width: 500px) {
  .btn-cmpt {
    margin-top: 3rem;
  }
}
</style>
