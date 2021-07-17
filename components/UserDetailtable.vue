<template>
  <div class="body">
    <span>User Details</span>
    <hr>
    <div class="user-grid-container">
      <div class="user-grid">
        <div class="th">
          Full Name
        </div>
        <div class="td" data-title="Full Name">
          {{
            userDetail.firstName !== undefined ||
              userDetail.lastName !== undefined
              ? userDetail.firstName + ' ' + userDetail.lastName
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Email
        </div>
        <div class="td" data-title="Email">
          {{ userDetail.email !== undefined ? userDetail.email : 'nil' }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Phone Number
        </div>
        <div class="td" data-title="Phone Number">
          {{
            userDetail.phoneNumber !== undefined
              ? userDetail.phoneNumber
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Balance
        </div>
        <div class="td" data-title="Balance">
          {{
            userDetail.balance !== undefined
              ? amountDelimeter(userDetail.balance)
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Registration Date
        </div>
        <div class="td" data-title="Registration Date">
          {{
            userDetail.signupDate !== undefined
              ? format_date(userDetail.signupDate)
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          User Status
        </div>
        <div
          :class="
            userDetail.isActive !== undefined && userDetail.isActive
              ? 'td active'
              : 'td inactive'
          "
          data-title="User Status"
        >
          {{
            userDetail.isActive !== undefined
              ? userDetail.isActive
                ? 'Active'
                : 'InActive'
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Stars
        </div>
        <div class="td" data-title="Stars">
          {{ userDetail.stars !== undefined ? userDetail.stars : 'nil' }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Giveaways Won
        </div>
        <div class="td" data-title="Giveaways Won">
          {{
            userDetail.giveawaysWon !== undefined
              ? amountDelimeter(userDetail.giveawaysWon)
              : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Followers
        </div>
        <div class="td" data-title="Followers">
          {{
            userDetail.followers !== undefined ? userDetail.followers : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Following
        </div>
        <div class="td" data-title="Following">
          {{
            userDetail.following !== undefined ? userDetail.following : 'nil'
          }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Location
        </div>
        <div class="td" data-title="Location">
          {{ userDetail.location !== undefined ? userDetail.location : 'nil' }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Twitter
        </div>
        <div class="td" data-title="Location">
          {{ socialMediaAccountDetail.twitter !== undefined ? socialMediaAccountDetail.twitter : 'nil' }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Instagram
        </div>
        <div class="td" data-title="Location">
          {{ socialMediaAccountDetail.instagram !== undefined ? socialMediaAccountDetail.instagram : 'nil' }}
        </div>
      </div>
      <div class="user-grid">
        <div class="th">
          Facebook
        </div>
        <div class="td" data-title="Location">
          {{ socialMediaAccountDetail.facebook !== undefined ? socialMediaAccountDetail.facebook : 'nil' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Userdetailtable',
  props: {
    userDetail: {
      type: Object,
      default () {
        return {}
      }
    },
    socialMediaAccountDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    amountDelimeter (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    format_date (value) {
      const today = new Date().getTime()
      const createdAt = new Date(String(value)).getTime()
      if (today === createdAt) {
        return `Today, ${moment(new Date(String(value))).format('hh:mm')}`
      }
      return moment(new Date(String(value))).format('DD MMM YYYY, hh:mm')
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  /* height: 370px; */
  /* max-height: 1000px; */
  background: #ffffff;
  border: 1px solid #e2e2ea;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  padding-bottom: 25px;
}
hr {
  margin-bottom: 19px;
  width: 92.5%;
  align-self: center;
}
.body span {
  align-self: start;
  display: block;
  /* margin-left: 3.8%;
  margin-top: 27px;
  margin-bottom: 16px; */
  margin: 27px 0px 16px 3.8%;
  font-size: 12px;
  line-height: 19px;

  color: #a2abaa;
}
.edit-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 27px 0px 16px 0px;
}
.edit-container span {
  margin: 0px 0px 0px 3.8%;
  align-self: center;
}
.edit-btn {
  width: 89px;
  max-width: 89px;
  max-height: 27px;
  background: #e74d75;
  border-radius: 10px;
  margin: 0px 3.8% 0px auto;
}
.save-btn {
  width: 160px;
  max-width: 160px;
  min-height: 46px;
  background: #09ab5d;
  border-radius: 3px;
  margin: 0px 3.8% 0px auto;
}
input[type='text'] {
  color: #000000;
  font-size: 12px;
  width: 80%;
  max-width: 201px;
  height: 58px;
  border: 1px solid #8692a6;
  border-radius: 4px;
  padding-left: 14px;
}
/* table */
table {
  table-layout: auto;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px 3.4% 0px 3.4%;
}
th,
td {
  text-align: left;
}
th {
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  color: #75759e;
}
td {
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #171717;
  overflow-x: auto;
}
.Amount {
  width: 25%;
}
.Tasks {
  width: 17%;
}
.Status {
  width: 18%;
}
.user-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px 18px;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  padding: 0px 3.4% 0px 3.4%;
}
.user-grid {
  display: flex;
  flex-direction: column;
}
.user-grid .th {
  font-size: 11px;
  line-height: 19px;
  color: #75759e;
}
.user-grid .td {
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #171717;
  overflow-x: auto;
}
.active {
  color: #09ab5d !important;
}
.inactive {
  color: #fd0404 !important;
}
.ongoing {
  color: #e1931e;
}
.completed {
  color: #09ab5d;
}
.blur-container {
  position: absolute;
  bottom: -21px;
  right: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1)
  );
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 7%;
}
.action {
  width: 163px;
  position: absolute;
  right: 0;
  display: flex;
  margin-right: 3.4%;
  cursor: pointer;
}
.action span {
  display: block;
  margin: 10px 1.18rem 0px 0px;
  font-weight: bold;
  font-size: 12px;
  color: #083577;
}
@media (max-width: 950px) {
  .body {
    width: 100%;
    height: auto;
  }
  .body span {
    margin-left: 3.8%;
  }
  thead {
    display: none;
  }
  tr {
    display: flex;
    flex-direction: column;
  }
  td {
    display: flex;
    justify-content: space-between;
  }
  td::before {
    content: attr(data-title);
  }
  .Amount,
  .Tasks,
  .Status {
    width: 100%;
  }
  .user-grid-container {
    display: flex;
    flex-direction: column;
  }
  .user-grid {
    display: block;
    width: 100%;
  }
  .user-grid .th {
    display: none;
  }
  .user-grid .td {
    display: flex;
    justify-content: space-between;
  }
  .user-grid .td::before {
    content: attr(data-title);
    color: #000000;
  }
}
</style>
