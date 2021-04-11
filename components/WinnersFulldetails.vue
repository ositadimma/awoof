<template>
  <div class="extra">
    <div class="head">
      <span>User’s Info</span>
      <span>FULL DETAILS</span>
    </div>
    <hr>
    <div>
      <span>
        <p>Full Name</p>
        <!-- <button class="add-btn btn-cmpt" @click="toggleEdit">
          Edit
        </button> -->
      </span>
      <span>{{ userInfo.firstName + ' ' + userInfo.lastName }}</span>

      <span>
        Username
      </span>
      <span>
        {{ userInfo.username }}
      </span>
      <span>
        Star Ratings
      </span>
      <div v-show="!edit" class="star-rating">
        <p>{{ userInfo.stars }}</p>
        <img src="~/assets/icons/star.svg" alt="star">
      </div>
      <!-- <div v-show="edit" class="star-rating-edit">
        <input
          v-model="noOfStars"
          type="number"
          min="0"
          max="30"
          @input="validateNoOfStars"
        >
      <img src="~/assets/icons/star.svg" alt="star">
      <button class="add-btn btn-cmpt">
        {{ buttonText }}
      </button>
    </div> -->
      <span class="wins">
        Number of wins
      </span>
      <div v-show="!edit" class="no-of-wins">
        <p>{{ userInfo.giveawaysWon }}</p>
      </div>
      <!-- <div v-show="edit" class="no-of-wins-edit">
        <input
          v-model="noOfWins"
          type="number"
        >
      </div> -->
      <span>
        Phone Number
      </span>
      <span>
        {{ userInfo.phoneNumber }}
      </span>

      <span>
        Email Address
      </span>
      <span>
        {{ userInfo.email }}
      </span>

      <span>
        Registration Date
      </span>
      <span>
        {{ format_date(userInfo.signupDate) }}
      </span>
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import moment from 'moment'
export default {
  name: 'WinnerFulldetails',
  props: {
    userInfo: {
      type: Object,
      default () {
        return {
          firstName: 'User does not exist',
          lastName: '',
          username: 'No username set',
          email: 'No email set',
          stars: 0,
          giveawaysWon: 0,
          phoneNumber: 'No phone number set'
        }
      }
    }
  },
  data () {
    return {
      noOfStars: '0',
      noOfWins: '0',
      buttonText: 'Add',
      edit: false
    }
  },
  methods: {
    toggleEdit () {
      this.edit = !this.edit
      this.noOfStars = this.userInfo.stars
    },
    format_date (value) {
      if (value !== undefined || value) {
        return moment(new Date(String(value))).format('Do MMMM, YYYY')
      }
      return 'No registration date set'
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
    bodyData () {
      const data = {
        stars: this.noOfStars,
        numberOfWins: this.noOfWins
      }
      return data
    },
    async update () {
      // this.buttonText = '.  .  .'
      // this.$axios.setHeader('x-auth-token', Cookies.get('token'))
      // try {
      //   var user = await this.$axios.$put(
      //     `http://awoofapiapp-env.eba-n5p9cvek.us-east-1.elasticbeanstalk.com/v1/users/${this.$route.params.id}`,
      //     this.bodyData
      //   )
      //   this.$nuxt.refresh()
      // } catch (err) {
      //   if (err.message.includes('Network')) {
      //     this.$toast.global.custom_error(
      //       'please check your connection and try again'
      //     )
      //   }
      //   if (err.response !== undefined) {
      //     if (err.response.status === 400) {
      //       this.$toast.global.custom_error(err.response.data.message)
      //     }
      //   }
      // }
      // this.buttonText = 'Add'
      // // console.log(user)
    }
  }
}
</script>

<style scoped>
.extra {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 370px; */

  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;
  margin-bottom: 1rem;
  padding: 0px 38px 0px 23px;
}
.extra .head {
  margin-top: 27px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.extra hr {
  width: 100%;
  margin-bottom: 19px;
}
.extra .head span:first-child {
  align-self: start;
  display: block;
  font-size: 12px;
  line-height: 19px;

  color: #a2abaa;
}
.extra .head span:last-child {
  font-weight: bold;
  font-size: 11px;
  line-height: 18px;

  color: #4cd964;
}
.extra div:last-child {
  display: flex;
  flex-direction: column;
}
.extra div:last-child span:nth-child(odd) {
  font-size: calc(0.6875rem + 0.1vw);
  color: #75759e;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
.extra div:last-child span:nth-child(even) {
  font-weight: 600;
  font-size: calc(0.7rem + 0.1vw);
  color: #171717;
  margin-bottom: 26px;
}
/* .extra div:last-child span:nth-child(2) {
  margin-bottom: 24px;
} */
.extra div:last-child span:nth-child(2n + 2) {
  margin: 3px 0px 26px;
}
.wins {
  font-weight: normal !important;
  color: #75759e !important;
  margin-bottom: 5px !important;
}
.star-rating,
.star-rating-edit,
.no-of-wins,
.no-of-wins-edit {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  color: #171717;
  margin-bottom: 26px;
}
.star-rating p,
.star-rating-edit p,
.no-of-wins p,
.no-of-wins-edit p {
  margin-top: 0.2rem;
}
.star-rating img,
.star-rating-edit img {
  margin-left: 0.6rem;
}
input[type='number'] {
  width: 62px;
  max-width: 62px;
  height: 31px;
  max-height: 31px;
  border: 1px solid #8692a6;
  border-radius: 4px;
}
.add-btn {
  width: 89px;
  max-width: 89px;
  max-height: 27px;
  background: #e74d75;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 2.5px;
}
@media (min-width: 1280px) {
  .extra {
    margin-bottom: 20px;
  }
}
@media (max-width: 950px) {
  .extra {
    width: 100%;
    height: auto;
    margin-left: 0px;
    padding-right: 23px;
  }
}
@media (max-width: 1600px) {
  .extra div:last-child span:nth-child(even) {
    font-size: 16px;
  }
  .extra div:last-child span:nth-child(odd) {
    font-size: 14px;
  }
}
</style>
