<template>
  <div class="dashboard-sidebar">
    <img class="dashboard-logo" src="~/assets/images/Logo.png" alt="logo">
    <div class="dashboard-sidebar-nav">
      <h3>Menu</h3>
      <nuxt-link
        :class="currentPath.includes('index') ? 'active' : 'inactive'"
        to="/"
      >
        <Dashboardicon />
        <span>Dashboard</span>
      </nuxt-link>
      <div class="Giveaways">
        <div
          id="gift"
          :class="currentPath.includes('giveaways') ? 'active' : 'inactive'"
          @click="showGiveaway"
        >
          <Gifticon />
          <span>Giveaways</span>
          <Strokeicon />
        </div>
        <ul
          :id="
            (currentPath.includes('giveaways') && showgiveaway) ||
              (!currentPath.includes('giveaways') && showgiveaway)
              ? 'show-menu'
              : 'hide-menu'
          "
        >
          <nuxt-link to="/giveaways/givers">
            <li
              :class="
                currentPath.includes('giveaways-givers')
                  ? 'list-active'
                  : 'list-inactive'
              "
            >
              Givers
            </li>
          </nuxt-link>
          <nuxt-link to="/giveaways/winners">
            <li
              :class="
                currentPath.includes('giveaways-winners')
                  ? 'list-active'
                  : 'list-inactive'
              "
            >
              Winners
            </li>
          </nuxt-link>
        </ul>
      </div>
      <nuxt-link
        :class="currentPath.includes('transactions') ? 'active' : 'inactive'"
        to="/transactions"
      >
        <Transactionsicon />
        <span>Transactions</span>
      </nuxt-link>
      <nuxt-link
        :class="currentPath.includes('referrals') ? 'active' : 'inactive'"
        to="/referrals"
      >
        <Referralsicon />
        <span>Referrals</span>
      </nuxt-link>
      <nuxt-link
        :class="currentPath.includes('settings') ? 'active' : 'inactive'"
        to="/settings"
      >
        <Settingsicon />
        <span>Settings & Roles</span>
      </nuxt-link>
      <button class="btn-cmpt">
        New Giveaway
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardSideBar',
  data () {
    return {
      showgiveaway: false,
      currentPath: ''
    }
  },
  watch: {
    $route () {
      this.currentPath = this.$route.name
    }
  },
  mounted () {
    this.currentPath = this.$route.name
  },
  methods: {
    showGiveaway () {
      /* eslint-disable-next-line */
      this.showgiveaway = this.showgiveaway ? false : true
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

  color: #ffffff;
  margin: 15px 0px 12px 0px;
  padding-left: 41px;
  cursor: auto;
}
a {
  text-decoration: none;
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
  color: #09ab5d;
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
  color: #09ab5d;
  cursor: auto;
}
.dashboard-sidebar-nav .active .svg,
.dashboard-sidebar-nav .inactive:hover .svg {
  fill: #09ab5d;
}
.dashboard-sidebar-nav .inactive .svg {
  fill: rgba(255, 255, 255, 0.2);
}
.dashboard-sidebar-nav .active span,
.dashboard-sidebar-nav .inactive span {
  padding-top: 6px;
  margin-left: 20px;
}
/* Giveaway dropdown */
#show-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#hide-menu {
  display: none;
}
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
  color: #ffffff;
  cursor: auto;
}
.Giveaways ul li:hover {
  color: #ffffff;
}
.Giveaways ul li:nth-child(1) {
  margin: 10px 0px 12px 0px;
}
.Giveaways .inactive:hover .svg-stroke,
.Giveaways .active .svg-stroke {
  fill: #ffffff;
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
