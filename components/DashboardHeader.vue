<template>
  <div class="dashboard-header">
    <MobileDashboardSideBar :firstname="firstname" />
    <div class="dashboard-header__title">
      <h3>{{ layout }}</h3>
      <button
        v-if="currentPath === 'reservedusers'"
        class="btn-cmpt btn-cmpt--big"
        @click="showHeaderModal"
      >
        Reserve Username
      </button>
    </div>
    <!-- <div ref="headerInput" class="header-input">
      <input type="text" placeholder="Search User or Giveaway" @blur="removeFocus" @click="showFocus">
      <div class="search-container">
        <Searchicon />
      </div>
    </div> -->
    <span>Hello, {{ firstname }}</span>
    <div
      v-click-outside="closeMenu"
      class="profile"
      @click="menuOpen = !menuOpen"
    >
      <img src="~/assets/images/User.png" alt="user">
      <img
        :class="{ arrowup: menuOpen }"
        src="~/assets/icons/arrowdown.svg"
        alt="dropdown"
      >
      <div v-show="menuOpen" class="logout-container animate__fadeIn">
        <nuxt-link to="/user/login" @click.native="logOut">
          Logout
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import Cookies from 'js-cookie'
import MobileDashboardSideBar from './MobileDashboardSideBar'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    layout: {
      type: String,
      required: true
    }
  },
  component: {
    MobileDashboardSideBar
  },
  data () {
    return {
      firstname: Cookies.get('firstname'),
      currentPath: '',
      menuOpen: false
    }
  },
  watch: {
    $route (newRoute) {
      this.currentPath = newRoute.name
    }
  },
  created () {
    if (this.firstname === undefined || !this.firstname) {
      this.$router.push('/user/login')
    }
    this.currentPath = this.$route.name
  },
  methods: {
    showHeaderModal () {
      this.$store.commit('setModalHeaderOpen', true)
    },
    showFocus () {
      this.$refs.headerInput.style.outline = '#000000 auto 2px'
    },
    removeFocus () {
      this.$refs.headerInput.style.outline = '0'
    },
    closeMenu () {
      if (this.menuOpen) {
        this.menuOpen = false
      }
    },
    logOut () {
      Cookies.remove('firstname', '')
      Cookies.remove('token', '')
      Cookies.remove('userid', '')
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e2e2ea;

  min-width: 100%;
  max-width: 100%;
  height: 80px;
  padding: 0px 3.3% 0px 4.45%;
}
.dashboard-header__title {
  flex: 3;
  display: flex;
  align-items: center;
}
h3 {
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  margin-right: 1rem;
}
.header-input {
  border: 1px solid #e2e2ea;
  border-radius: 20px;

  width: 33.43%;
  max-width: 248px;
  height: 38px;
  background: #ffffff;

  display: flex;
  align-items: center;
  position: relative;
  margin-right: 45px;
}
input[type='text'] {
  border: none;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  padding-left: 27px;
  font-size: 15px;
}
input[type='text']::placeholder {
  color: #75759e;
  opacity: 0.4;
  font-size: 12px;
}
input[type='text']::-moz-placeholder {
  color: #75759e;
  opacity: 0.4;
  font-size: 12px;
}
input[type='text']:focus {
  outline: none;
}
span {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
}
.profile {
  display: flex;
  cursor: pointer;
  position: relative;
}
.profile .arrowup {
  transform: rotate(180deg);
}
.logout-container {
  position: absolute;
  z-index: 1;
  left: -40px;
  bottom: -50px;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: auto;
}
.logout-container a {
  color: #09ab5d;
}
.logout-container a:hover {
  color: #03572e;
}
.search-container {
  width: 10%;
  height: 100%;
  position: absolute;
  right: 0;
  background: transparent;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btn-cmpt--big {
  min-width: 200px;
  max-width: 200px;
  min-height: 45px;
}
@media (max-width: 950px) {
  .dashboard-header {
    justify-content: space-between;
  }
  .dashboard-header__title {
    flex: 0;
  }
  .header-input {
    margin-right: 0px;
  }
  h3 {
    flex: none;
  }
  span {
    display: none;
  }
}
@media (max-width: 767px) {
  .dashboard-header {
    padding: 0px 3.3% 0px 3.3%;
  }
  h3 {
    display: none;
  }
  input[type='text'] {
    padding-left: 3%;
  }
  .header-input {
    width: 50%;
  }
  .btn-cmpt--big {
    transform: scale(0.8);
  }
}
@media (max-width: 500px) {
  h3 {
    font-size: 13px;
    line-height: 23px;
  }
  .btn-cmpt--big {
    transform: scale(0.7);
  }
}
</style>
