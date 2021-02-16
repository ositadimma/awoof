<template>
  <nav :class="sideBarOpen ? 'mobilesidebar-open' : 'mobilesidebar'">
    <div
      :class="sideBarOpen ? 'hamburger open' : 'hamburger'"
      @click="sideBarOpen = !sideBarOpen"
    >
      <span />
      <span />
      <span />
      <span />
    </div>
    <h1>Welcome, {{ firstname }}</h1>
    <div class="dashboard-sidebar-nav">
      <h3>Menu</h3>
      <nuxt-link
        :class="currentPath.includes('index') ? 'active' : 'inactive'"
        to="/"
        @click.native="closeSideBar"
      >
        <Dashboardicon />
        <span>Dashboard</span>
      </nuxt-link>
      <div class="Giveaways">
        <div
          id="gift"
          :class="currentPath.includes('giveaways') ? 'active' : 'inactive'"
          @click="showgiveaway = !showgiveaway"
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
              @click="closeSideBar"
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
              @click="closeSideBar"
            >
              Winners
            </li>
          </nuxt-link>
        </ul>
      </div>
      <nuxt-link
        :class="currentPath.includes('transactions') ? 'active' : 'inactive'"
        to="/transactions"
        @click.native="closeSideBar"
      >
        <Transactionsicon />
        <span>Transactions</span>
      </nuxt-link>
      <nuxt-link
        :class="currentPath.includes('referrals') ? 'active' : 'inactive'"
        to="/referrals"
        @click.native="closeSideBar"
      >
        <Referralsicon />
        <span>Referrals</span>
      </nuxt-link>
      <nuxt-link
        :class="currentPath.includes('settings') ? 'active' : 'inactive'"
        to="/settings"
        @click.native="closeSideBar"
      >
        <Settingsicon />
        <span>Settings & Roles</span>
      </nuxt-link>
      <button class="btn-cmpt" @click="newGiveaway">
        New Giveaway
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileSideBar',
  props: {
    firstname: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      sideBarOpen: false,
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
    closeSideBar () {
      this.sideBarOpen = false
    },
    newGiveaway () {
      this.closeSideBar()
      this.$router.push('/newgiveaway')
    }
  }
}
</script>

<style scoped>
.mobilesidebar {
  display: none;
}

.mobilesidebar-open {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background: #001431;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0px 3.3% 0px 3.3%;
}

.hamburger {
  display: block;
  width: 30px;
  min-height: 26px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  position: relative;
}

.hamburger span {
  display: block;
  min-height: 3px;
  max-height: 3px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 9px;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  margin-top: 8px;
}

.hamburger span:nth-child(4) {
  margin-top: 16px;
}

.open {
  top: 30px;
}

.open span {
  background-color: #09ab5d;
}

.open span:nth-child(1) {
  top: 0;
  width: 0%;
  left: 50%;
}

.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.open span:nth-child(4) {
  top: 0;
  width: 0%;
  left: 50%;
}

.mobilesidebar h1 {
  display: none;
}

.mobilesidebar-open h1 {
  display: block;
  font-size: calc(1rem + 1vw);
  align-self: center;
  color: #09ab5d;
  position: absolute;
  top: 30px;
}

.mobilesidebar .dashboard-sidebar-nav {
  display: none;
}

.dashboard-sidebar-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
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
.Giveaways .inactive .svg-stroke {
  fill: rgba(255, 255, 255, 0.2);
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
  .mobilesidebar {
    display: block;
  }

  .mobilesidebar-open {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>
