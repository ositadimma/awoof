<template>
  <div class="extra">
    <div class="head">
      <span>User’s Info</span>
      <span>FULL DETAILS</span>
    </div>
    <hr>
    <div>
      <span>
        Full Name
      </span>
      <span> {{ userInfo.firstName }} {{ userInfo.lastName }} </span>

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
import moment from 'moment'
export default {
  name: 'WinnerFulldetails',
  props: {
    userInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    format_date (value) {
      return moment(new Date(String(value))).format('Do MMMM, YYYY')
    }
  }
}
</script>

<style scoped>
.extra {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 370px;

  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;
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
  font-size: 11px;
  color: #75759e;
  margin-bottom: 2px;
}
.extra div:last-child span:nth-child(even) {
  font-weight: 600;
  font-size: 13px;
  color: #171717;
}
.extra div:last-child span:nth-child(2) {
  margin-bottom: 24px;
}
.extra div:last-child span:nth-child(2n + 2) {
  margin-bottom: 26px;
}
@media (max-width: 950px) {
  .extra {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    margin-left: 0px;
    padding-right: 23px;
  }
}
</style>
