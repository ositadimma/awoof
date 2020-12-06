<template>
  <div class="dashboard-sidebar">
    <img class="dashboard-logo" src="~/assets/images/Logo.png" alt="logo">
    <div class="dashboard-sidebar-nav">
      <h3>Menu</h3>
      <div id="dashboard" :class="currentPath == '/' ? 'active' : 'inactive' " @click="showActive($event, '/')">
        <Dashboardicon />
        <span>Dashboard</span>
      </div>
      <div class="Giveaways">
        <div id="gift" :class="currentPath == '/giveaways/givers' || currentPath == '/giveaways/winners' || currentPath == '/giveaways/givers/detail' ? 'active' : 'inactive' " @click="showGiveaway">
          <Gifticon />
          <span>Giveaways</span>
          <Strokeicon />
        </div>
        <ul id="Giveaway-menu">
          <li :class="currentPath == '/giveaways/givers' || currentPath == '/giveaways/givers/detail' ? 'list-active' : 'list-inactive' " @click="showActive($event, '/giveaways/givers')">
            Givers
          </li>
          <li :class="currentPath == '/giveaways/winners' ? 'list-active' : 'list-inactive' " @click="showActive($event, '/giveaways/winners')">
            Winners
          </li>
        </ul>
      </div>
      <div id="transaction" :class="currentPath == '/transactions' || currentPath == '/transactions/detail' ? 'active' : 'inactive' " @click="showActive($event, '/transactions')">
        <Transactionsicon />
        <span>Transactions</span>
      </div>
      <div id="referral" :class="currentPath == '/referrals' || currentPath == '/referrals/detail' ? 'active' : 'inactive' " @click="showActive($event, '/referrals')">
        <Referralsicon />
        <span>Referrals</span>
      </div>
      <div id="setting" :class="currentPath == '/settings' ? 'active' : 'inactive' " @click="showActive($event, '/settings')">
        <Settingsicon />
        <span>Settings & Roles</span>
      </div>
      <Button text="New Giveaway" />
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'DashboardSideBar',
  components: {
    Button
  },
  data () {
    return {
      showgiveaway: true,
      currentPath: window.location.pathname
    }
  },
  methods: {
    showActive (e, route) {
      document.getElementById('Giveaway-menu').style.display = 'none'
      this.showgiveaway = true // hides the drop down for giveaway when clicked on another div

      this.currentPath = route
      this.$router.push(route)
      // ...
    },
    showGiveaway () {
      const gift = document.getElementById('gift')
      if (this.showgiveaway) { // show give away menu bar
        gift.classList.remove('inactive')
        gift.classList.add('active')
        document.getElementById('Giveaway-menu').style.display = 'flex'
        document.getElementById('Giveaway-menu').style.flexDirection = 'column'
        document.getElementById('Giveaway-menu').style.alignItems = 'flex-start'
        this.showgiveaway = false
      } else { // hide give away menu bar
        if (gift.classList[0] === 'inactive') {
          gift.classList.remove('inactive')
          gift.classList.add('active')
        }
        document.getElementById('Giveaway-menu').style.display = 'none'
        this.showgiveaway = true
      }
      // ...
    }
  }
}
</script>

<style scoped>
.dashboard-sidebar {
  min-width: 292px;
  height: 100%;

  background: #001431;
  position: sticky;
  top: 0;
}
.dashboard-logo {
  margin: 23px 0px 25px 31px;
}
.dashboard-sidebar-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}
.dashboard-sidebar-nav h3 {
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.01em;

  color: #FFFFFF;
  margin: 15px 0px 12px 0px;
  padding-left: 41px;
  cursor: auto;
}
.dashboard-sidebar-nav .inactive {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.01em;

  color: rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
  padding-left: 41px;
  cursor: pointer;
}
.dashboard-sidebar-nav .inactive:hover {
  color: #09AB5D;
}
.dashboard-sidebar-nav .active {
  border-left: 4px solid;
  display: flex;
  align-items: center;

  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.01em;

  margin-bottom: 24px;
  padding-left: 41px;
  color: #09AB5D;
  cursor: auto;
}
.dashboard-sidebar-nav .active .svg, .dashboard-sidebar-nav .inactive:hover .svg{
  fill: #09AB5D;
}
.dashboard-sidebar-nav .inactive .svg {
  fill: rgba(255, 255, 255, 0.2);
}
.dashboard-sidebar-nav .active span, .dashboard-sidebar-nav .inactive span {
  padding-top: 6px;
  margin-left: 20px;
}
/* Giveaway dropdown */
.Giveaways {
  margin-bottom: 24px;
}
.Giveaways .inactive {
  margin-bottom: 0px;
}
.Giveaways .inactive span {
  margin-right: 40px;
}
.Giveaways .active {
  cursor: pointer;
}
.Giveaways .active span {
  margin-right: 40px;
}
.Giveaways .active {
  margin-bottom: 0px;
}
.Giveaways ul {
  padding-left: 33%;
  display: none;
}
.Giveaways ul li {
  cursor: pointer;

  color: rgba(255, 255, 255, 0.2);
}
.Giveaways ul li.list-active {
  color: #FFFFFF;
  cursor: auto;
}
.Giveaways ul li:hover {
  color: #FFFFFF;
}
.Giveaways ul li:nth-child(1) {
  margin: 10px 0px 12px 0px;
}
.Giveaways .inactive:hover .svg-stroke, .Giveaways .active .svg-stroke {
  fill: #FFFFFF;
}
.btn-cmpt {
  width: 216px;
  height: 46px;
  margin: 0 auto;

  margin-top: 49px;
}
@media (max-width: 767px) {
  .dashboard-sidebar {
    display: none;
  }
}
@media (orientation: landscape) {
  .dashboard-sidebar {
    overflow-y: auto;
    padding-bottom: 10px;
  }
}
</style>
