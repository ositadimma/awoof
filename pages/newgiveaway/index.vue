<template>
  <div class="bg-container">
    <div class="container animate__fadeInUp">
      <header>
        New Giveaway
      </header>
      <div class="mode">
        <span>Already Completed</span>
        <div class="switch-container">
          <input id="switch" v-model="completed" type="checkbox">
          <label for="switch" class="switch-btn">
            <span>
              No
            </span>
            <span>
              Yes
            </span>
          </label>
        </div>
      </div>
      <hr>
      <label>
        User
      </label>
      <div v-click-outside="() => (selectUserOpen = false)" class="user-select">
        {{ user }}
        <img
          :class="{ 'select-up': selectUserOpen }"
          src="~/assets/images/dropdown.png"
          alt="select"
          @click="selectUserOpen = !selectUserOpen"
        >
        <div v-show="selectUserOpen" class="user-select-options-container">
          <div class="option">
            <input
              v-model="search"
              type="search"
              placeholder="search user"
              @input="filterSearch"
            >
          </div>
          <div
            v-for="(userData, index) in searchData"
            :key="index"
            class="option"
            @click="selectUser(shortenName(userData), userData._id)"
          >
            {{ shortenName(userData) }}
          </div>
        </div>
      </div>
      <label>
        Type
      </label>
      <div v-click-outside="() => (selectTypeOpen = false)" class="type-select">
        {{ type }}
        <img
          :class="{ 'select-up': selectTypeOpen }"
          src="~/assets/images/dropdown.png"
          alt="select"
          @click="selectTypeOpen = !selectTypeOpen"
        >
        <div v-show="selectTypeOpen" class="type-select-options-container">
          <div class="option" @click="selectType('Normal')">
            Normal
          </div>
          <div class="option" @click="selectType('Star')">
            Star
          </div>
        </div>
      </div>
      <label v-show="type == 'Star'">
        Minimum No. Of Stars (0 - 30)
      </label>
      <input
        v-show="type == 'Star'"
        v-model="noOfStars"
        class="no-of-stars"
        type="number"
        min="0"
        max="30"
        placeholder="0"
        @input="validateNoOfStars"
      >
      <div class="amt-per-winner-container">
        <div class="child">
          <label>Amount Per Winner</label>
          <div
            v-click-outside="() => (selectAmountOpen = false)"
            class="amt-select"
          >
            ₦ {{ amountPerWinner }}
            <img
              :class="{ 'select-up': selectAmountOpen }"
              src="~/assets/images/dropdown.png"
              alt="select"
              @click="selectAmountOpen = !selectAmountOpen"
            >
            <div v-show="selectAmountOpen" class="amt-select-options-container">
              <div class="option" @click="selectAmount('1,000')">
                ₦1,000
              </div>
              <div class="option" @click="selectAmount('2,000')">
                ₦2,000
              </div>
              <div class="option" @click="selectAmount('5,000')">
                ₦5,000
              </div>
              <div class="option" @click="selectAmount('10,000')">
                ₦10,000
              </div>
              <div class="option" @click="selectAmount('20,000')">
                ₦20,000
              </div>
              <div class="option" @click="selectAmount('50,000')">
                ₦50,000
              </div>
              <div class="option" @click="selectAmount('100,000')">
                ₦100,000
              </div>
            </div>
          </div>
        </div>
        <div class="child">
          <label class="no-of-winners-label">No. Of Winners</label>
          <div v-click-outside="removeFocusDiv" class="no-of-winners">
            <input
              v-model="noOfWinners"
              type="number"
              placeholder="0"
              :disabled="user === 'Select a user' ? false : true"
              @click="noOfWinnersFocus"
            >
          </div>
        </div>
      </div>
      <label>
        Amount
      </label>
      <div class="amt-container">
        ₦ {{ amount }}
      </div>
      <div class="custom-file">
        {{ image !== '' ? image.name : 'Upload AD Image' }}
        <label class="f-btn" for="file"> Select Image </label>
        <input
          id="file"
          type="file"
          class="file"
          @click="setImageTarget"
          @change="getImage"
        >
      </div>
      <textarea v-model="message" placeholder="Enter Giveaway Message" />
      <div class="conditions-container">
        <span>
          Please Select Platform of engagement.
        </span>
        <span>
          Learn More
        </span>
        <!-- <div class="social">
          <img src="~/assets/images/awoof.png" alt="select">
          No Engagement
          <div class="checkbox">
            <input id="check1" v-model="noEngagement" type="checkbox">
            <label for="check1" />
          </div>
        </div> -->
        <div v-show="!noEngagement" class="social">
          <img src="~/assets/images/facebook.png" alt="select">
          Facebook
          <img
            alt="drop"
            :class="!dropdown1 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            @click="dropdown1 = !dropdown1"
          >
        </div>
        <div v-show="dropdown1 && !noEngagement" class="condition-container">
          <!-- <div class="condition-child">
            Follow Page On Facebook
            <div class="checkbox">
              <input
                id="check2"
                v-model="followPageOnFacebook"
                type="checkbox"
              >
              <label for="check2" />
            </div>
          </div> -->
          <!-- <div class="condition-child">
            Facebook Username
            <input
              v-model="followFacebookPageLink"
              type="text"
              placeholder="Username"
            >
          </div> -->
          <div class="condition-child">
            Like Post On Facebook
            <input v-model="LikeFacebookLink" type="text" placeholder="Link">
          </div>
        </div>
        <div v-show="!noEngagement" class="social">
          <img src="~/assets/images/instagram.png" alt="select">
          Instagram
          <img
            :class="!dropdown2 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            alt="drop"
            @click="dropdown2 = !dropdown2"
          >
        </div>
        <div
          v-show="dropdown2 && !noEngagement"
          class="condition-container instagram"
        >
          <div class="condition-child">
            Follow On Instagram
            <div class="checkbox">
              <input id="check3" v-model="followInstagram" type="checkbox">
              <label for="check3" />
            </div>
          </div>
          <div class="condition-child">
            Instagram Username
            <input
              v-model="followInstagramLink"
              type="text"
              placeholder="Username"
            >
          </div>
          <div class="condition-child">
            Like Post On Instagram
            <input v-model="LikeInstagramLink" type="text" placeholder="Link">
          </div>
        </div>
        <div v-show="!noEngagement" class="social">
          <img src="~/assets/images/twitter.png" alt="select">
          Twitter
          <img
            :class="!dropdown3 ? 'down' : 'up'"
            src="~/assets/icons/dropdown.svg"
            alt="drop"
            @click="dropdown3 = !dropdown3"
          >
        </div>
        <div
          v-show="dropdown3 && !noEngagement"
          class="condition-container twitter"
        >
          <div class="condition-child">
            Follow On Twitter
            <div class="checkbox">
              <input id="check4" v-model="followTwitter" type="checkbox">
              <label for="check4" />
            </div>
          </div>
          <div class="condition-child">
            Twitter Username
            <input
              v-model="followTwitterLink"
              type="text"
              placeholder="Username"
            >
          </div>
          <div class="condition-child">
            Like Post On Twitter
            <input v-model="LikeTwitterLink" type="text" placeholder="Link">
          </div>
        </div>
      </div>
      <label
        class="end-label"
      >End date (should not be more than 30 days from now)</label>
      <input
        v-model="endAt"
        type="date"
        placeholder="mm/dd/yyyy"
        :max="formatDate(dateInThirtyDays)"
      >
      <button
        v-show="
          type === 'Please select a giveaway type' ||
            amount === '0' ||
            (endAt === '' && !loading)
        "
        class="disable-1 btn-cmpt"
      >
        Proceed
      </button>
      <button
        v-show="
          type !== 'Please select a giveaway type' &&
            amount !== '0' &&
            endAt !== '' &&
            !loading
        "
        class="btn-cmpt"
        @click="createGiveaway"
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
import moment from 'moment'
import vClickOutside from 'v-click-outside'
// import { mask } from 'vue-the-mask'
import Cookies from 'js-cookie'
export default {
  name: 'NewGiveaway',
  layout: 'dashboardLayout',
  directives: {
    clickOutside: vClickOutside.directive
  },
  async asyncData ({ $axios, $toast }) {
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    try {
      var response = await $axios.$get(
        'https://awoof-api.herokuapp.com/v1/admins/get_all_users'
      )
    } catch (err) {
      if (err.message.includes('Network')) {
        $toast.global.custom_error('please check your connection and try again')
      }

      if (err.response !== undefined) {
        if (err.response.status === 400) {
          $toast.global.custom_error(err.response.data.message)
        }
      }
    }
    return { data: response ? response.data : [] }
  },
  data () {
    return {
      searchData: [],
      search: '',
      user: 'Select a user',
      userId: '',
      selectUserOpen: false,
      type: 'Please select a giveaway type',
      selectTypeOpen: false,
      noOfStars: '0',
      selectAmountOpen: false,
      amountPerWinner: '1,000',
      noOfWinners: 0,
      noEngagement: false,
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
      image: '',
      message: '',
      followPageOnFacebook: false,
      followFacebookPageLink: '',
      followInstagram: false,
      followInstagramLink: '',
      followTwitter: false,
      followTwitterLink: '',
      LikeFacebookLink: '',
      LikeInstagramLink: '',
      LikeTwitterLink: '',
      endAt: '',
      completed: false,
      loading: false
    }
  },
  computed: {
    amount () {
      const parseAmount = parseInt(this.amountPerWinner.replace(',', ''))
      return (parseAmount * this.noOfWinners)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    dateInThirtyDays () {
      const today = new Date()
      const incomingDays = new Date()
      incomingDays.setDate(today.getDate() + 30)
      return incomingDays
    }
  },
  created () {
    // changes layout title of dashboard header
    this.$store.commit('setLayout', 'NEW GIVEAWAY')
  },
  methods: {
    shortenName (user) {
      if (
        user.firstName !== undefined &&
        user.lastName !== undefined &&
        (user.firstName + ' ' + user.lastName).length < 20
      ) {
        if ((user.firstName + ' ' + user.lastName).length < 18) {
          return user.firstName + ' ' + user.lastName
        } else {
          return (user.firstName + ' ' + user.lastName).substring(0, 18) + '...'
        }
      } else {
        return 'Admin'
      }
    },
    filterSearch () {
      if (this.search === '') {
        this.user = 'Select a user'
        this.noOfWinners = 0
      }
      const data = this.data.filter((obj) => {
        var stopSearch = false

        Object.values(obj).forEach((val) => {
          const filter1 = String(val)
            .toLowerCase()
            .includes(this.search.toLowerCase())
          const filter2 = String(this.formatDate(val))
            .toLowerCase()
            .includes(this.search.toLowerCase())
          if (filter1 || filter2) {
            stopSearch = true
          }
        })

        if (stopSearch) {
          return obj
        }
      })
      this.searchData = data
    },
    formatDate (value) {
      return moment(new Date(String(value))).format('YYYY-MM-DD')
    },
    validateNoOfStars (e) {
      if (parseInt(this.noOfStars) < 31 || this.noOfStars === '') {
      } else {
        e.target.value = '30'
        this.noOfStars = '30'
        this.$toast.global.custom_error(
          'minimum number of stars has to be less than or equal to 30'
        )
      }
    },
    selectUser (user, userId) {
      this.user = user
      this.userId = userId
      this.noOfWinners = 1
      this.selectUserOpen = false
    },
    selectType (type) {
      this.type = type
      this.selectTypeOpen = false
    },
    selectAmount (selectedAmount) {
      this.amountPerWinner = selectedAmount
      this.selectAmountOpen = false
    },
    noOfWinnersFocus () {
      document.querySelector('.no-of-winners').style.outline =
        '#000000 auto 2px'
    },
    removeFocusDiv () {
      document.querySelector('.no-of-winners').style.outline = '0'
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
        this.$toast.global.custom_error(
          'Can only images and images must be in png, jpeg, jpg, or gif format'
        )
      }
    },
    setDataToDefault () {
      this.noOfStars = '0'
      this.type = 'Please select a giveaway type'
      this.selectAmountOpen = false
      this.amountPerWinner = '1000'
      this.noOfWinners = 0
      this.noEngagement = false
      this.dropdown1 = false
      this.dropdown2 = false
      this.dropdown3 = false
      this.image = ''
      this.message = ''
      this.followInstagram = false
      this.followInstagramLink = ''
      this.followTwitter = false
      this.followTwitterLink = ''
      this.LikeFacebookLink = ''
      this.followPageOnFacebook = false
      // this.followFacebookPageLink = ''
      this.LikeInstagramLink = ''
      this.LikeTwitterLink = ''
      this.endAt = ''
      this.loading = false
      this.user = 'Select a user'
    },
    bodyFormatData () {
      // const stringDate = this.endAt.split('/')
      // const dateToConvert = stringDate[1] + ' ' + stringDate[0] + ' ' + stringDate[2]
      const endAt = new Date(this.endAt)
      // const today = new Date()
      // const dateInThirtyDays = new Date()
      // dateInThirtyDays.setDate(today.getDate() + 30)

      const data = new FormData()
      data.append('amount', parseInt(this.amount.replaceAll(',', '')))
      data.append(
        'amountPerWinner',
        parseInt(this.amountPerWinner.replaceAll(',', ''))
      )
      data.append('type', this.type.toLowerCase())
      data.append('user_id', this.userId)
      data.append('isAnonymous', false)
      data.append('minimumstars', this.type === 'Star' ? this.noOfStars : 0)
      data.append('frequency', `${this.dateInThirtyDays}`)
      data.append('message', this.message)
      data.append('likeFacebookLink', this.LikeFacebookLink)
      data.append('followPageOnFacebook', this.followPageOnFacebook)
      data.append('likeFacebook', this.LikeFacebookLink !== '')
      data.append('likeInstagramLink', this.LikeInstagramLink)
      data.append('followInstagram', this.followInstagram)
      data.append('followInstagramLink', this.followInstagramLink)
      data.append('likeInstagram', this.LikeInstagramLink !== '')
      data.append('likeTweetLink', this.LikeTwitterLink)
      data.append('followTwitter', this.followTwitter)
      data.append('followTwitterLink', this.followTwitterLink)
      data.append('likeTweet', this.LikeTwitterLink !== '')
      data.append('payment_reference', '')
      data.append('payment_status', 'success')
      data.append('gateway_response', '')
      data.append('image', this.image)
      data.append('expiry', '30 days')
      data.append('endAt', `${endAt}`)
      data.append('completed', this.completed)
      return data
    },
    async createGiveaway () {
      this.loading = true
      this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      this.$axios.setHeader('Content-Type', 'multipart/form-data')
      try {
        const response = await this.$axios.$post(
          'https://awoof-api.herokuapp.com/v1/admins/create_giveaway',
          this.bodyFormatData()
        )
        if (response) {
          this.$toast.global.custom_success('Giveaway created')
          this.setDataToDefault()
        }
        this.loading = false
      } catch (err) {
        this.loading = false
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
    }
  }
}
</script>

<style scoped>
.bg-container {
  background: #f7f7f8;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 2.12rem 4.45% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}

.container {
  width: 50%;
  max-width: 713px;
  /* max-height: 1287px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #fff;
  margin-bottom: 1.5rem;
  padding: 4.12rem 8.9% 3rem 8.9%;
}

header {
  font-size: calc(0.85rem + 0.3vw);
  display: block;
  position: relative;
  margin-bottom: 4rem;
}

header:before {
  content: '';
  width: 100%;
  border-bottom: 3px solid;
  position: absolute;
  bottom: 0;
  left: 0;
}

.mode {
  margin-bottom: 1.93rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

span {
  display: block;
  font-weight: 600;
  font-size: calc(0.625rem + 0.3vw);
}

/* On / off */
.switch-container {
  min-width: 61px;
  min-height: 28px;
  max-height: 31px;
  display: flex;
  align-items: center;
  position: relative;
}

#switch {
  opacity: 1;
  width: 0;
  height: 0;
  position: absolute;
  z-index: 1;
}

.switch-btn {
  min-width: 61px;
  min-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border-radius: 100px;
  padding: 0px 0.4375rem 0px 0.4375rem;
  cursor: pointer;
}

.switch-btn:before {
  content: '';
  width: 22px;
  height: 21px;
  border-radius: 50%;
  position: absolute;
  margin-top: -1px;
  left: 55%;
  background: #000000;
  transition: 0.5s;
}

#switch:checked + .switch-btn:before {
  left: 6%;
  background: #09ab5d;
}

.switch-container span {
  font-size: 11px;
  margin-bottom: -3px;
}

.switch-container .switch-btn span:nth-child(2) {
  color: #09ab5d;
}

hr {
  color: #8692a6;
  width: 100%;
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 11px;
  font-weight: 600;
  font-size: calc(0.6875rem + 0.3vw);
  color: #696f79;
  align-self: flex-start;
}

input[type='number'].no-of-stars {
  border: 1px solid #8692a6;
  width: 100%;
  min-height: 64px;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.no-of-winners-label:after {
  content: '*';
  color: red;
}

.amt-container {
  border: 1px solid #8692a6;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 1rem;
  padding: 0px 2px 0px 0.875rem;
}

/* .amt {
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  color: #000000;
  font-weight: 600;
  font-size: calc(0.9375rem + 0.3vw);
  padding-left: 0.875rem;
} */

input[type='number'] {
  border: none;
  flex: 1;
  width: 100%;
  height: 100%;
  color: #000000;
  font-weight: 600;
  font-size: calc(0.9375rem + 0.3vw);
  padding-left: 0.875rem;
}

input[type='number']::placeholder {
  color: #000000;
  font-size: calc(0.93rem + 0.3vw);
}

.amt-per-winner-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.amt-per-winner-container .child {
  width: 46%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.amt-per-winner-container .child:nth-child(2) label {
  align-self: flex-end;
}

.amt-select,
.type-select,
.user-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  font-weight: 600;
  font-size: calc(0.9375rem + 0.3vw);
  border: 1px solid #8692a6;
  border-radius: 6px;
  position: relative;
  z-index: 1;
  padding: 0px 1.56rem 0px 0.875rem;
}

.type-select {
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
}
.user-select {
  position: relative;
  z-index: 3;
  margin-bottom: 1.5rem;
}

.amt-select-options-container,
.type-select-options-container,
.user-select-options-container {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 100;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
}

.amt-select-options-container .option,
.type-select-options-container .option,
.user-select-options-container .option {
  cursor: pointer;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding-left: 5px;
  background-color: #fff;
  transition: background-color 0.1s ease-in-out;
}

.amt-select-options-container .option:hover,
.type-select-options-container .option:hover,
.user-select-options-container .option:hover {
  background-color: #09ab5d;
  color: #fff;
}

.user-select-options-container .option:first-child {
  padding: 0;
}

.amt-select-options-container .option:last-child,
.type-select-options-container .option:last-child,
.user-select-options-container .option:last-child {
  border-bottom: none;
}

input[type='search'] {
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  padding-left: 0.9rem;
  border: none;
}

input[type='search']:focus {
  outline: 0;
}

/* .amt-select-options-container .option:focus {
  outline: #8692a6 auto 3px;
} */

.select-up {
  transform: rotate(180deg);
}

.no-of-winners {
  width: 100%;
  height: 64px;
  border: 1px solid #8692a6;
  border-radius: 6px;
  padding: 0px 2px 0px 2px;
}

.no-of-winners input[type='number']:focus {
  outline: 0;
}

/* .select {
  font-weight: bold;
  font-size: calc(0.875rem + 0.3vw);
  padding-left: 0.875rem;
} */

img {
  max-width: 100%;
  cursor: pointer;
}

.custom-file {
  width: 100%;
  min-height: 55px;
  border: 3px solid rgba(134, 146, 166, 0.4);
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: calc(0.6875rem + 0.3vw);
  margin-bottom: 1.5rem;
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
  margin: -3px -3px 0px auto;
  transform: scaleY(1.01);
  cursor: pointer;
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

textarea {
  width: 100%;
  min-height: 104px;
  color: #000000;
  font-weight: 600;
  font-size: calc(0.687rem + 0.3vw);
  border: 3px solid rgba(134, 146, 166, 0.4);
  border-radius: 3px;
  resize: none;
  margin-bottom: 1.437rem;
  padding: 1.187rem 0px 0px 1.812rem;
}

textarea::placeholder {
  color: #000000;
  font-size: calc(0.68rem + 0.3vw);
}

.conditions-container {
  border-top: 2.5px solid rgba(134, 146, 166, 0.4);
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
  font-size: calc(0.625rem + 0.3vw);
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
  top: 2px;
  left: 5px;
  width: 6.5px;
  height: 11.21px;
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  cursor: pointer;
}

.condition-container {
  margin-top: -1.5rem;
  width: 100%;
  padding: 5.5% 4%;
}

.instagram .condition-child:nth-child(1),
.twitter .condition-child:nth-child(1) {
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 600;
  font-size: calc(0.825rem + 0.3vw);
}

.condition-container .condition-child:nth-child(n + 2) {
  border-top: 2px solid rgba(134, 146, 166, 0.4);
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: calc(0.8rem + 0.3vw);
}

input[type='text'] {
  border: 3px solid rgba(134, 146, 166, 0.4);
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
  color: #000000;
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

.end-label {
  color: #000000;
  font-size: calc(0.625rem + 0.3vw);
}

.end-label:after {
  content: '*';
  color: #ff0000;
}

input[type='date'] {
  border: 3px solid rgba(134, 146, 166, 0.4);
  border-radius: 3px;
  background: #fff;
  width: 100%;
  height: 55px;
  color: #000000;
  font-weight: 600;
  font-size: calc(0.82rem + 0.3vw);
  padding-left: 0.875rem;
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

  .amt {
    font-size: 19px;
  }

  input[type='number'] {
    font-size: 19px;
  }

  input[type='text'] {
    font-size: 15px;
  }

  .amt-select,
  .type-select {
    font-size: 19px;
  }

  /* .select {
    font-size: 18px;
  } */

  .custom-file {
    font-size: 14px;
    padding-left: 29px;
  }

  .f-btn {
    font-size: 15px !important;
  }

  textarea {
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
}

@media (max-width: 1300px) {
  .container {
    width: 70%;
  }
}

@media (max-width: 1024px) {
  .container {
    width: 100%;
  }
}

@media (max-width: 1366px) {
  .amt {
    margin-bottom: 1.5rem;
  }
  .amt-per-winner-container {
    flex-direction: column;
  }

  .amt-per-winner-container .child {
    width: 100%;
  }

  .amt-per-winner-container .child:nth-child(2) label {
    align-self: flex-start;
  }
}

@media (max-width: 500px) {
  .btn-cmpt {
    margin-top: 3rem;
  }
}
</style>
