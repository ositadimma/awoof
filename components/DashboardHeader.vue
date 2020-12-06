<template>
  <div class="dashboard-header">
    <h3>{{ layout }}</h3>
    <div class="header-input">
      <input type="text" placeholder="Search User or Giveaway">
      <Searchicon />
    </div>
    <span>Hello, Kolade</span>
    <div class="profile" @click="showMenu">
      <img src="~/assets/images/User.png" alt="user">
      <img id="arrow" src="~/assets/icons/arrowdown.svg" alt="dropdown">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      required: true
    }
  },
  methods: {
    showMenu () {
      const arrow = document.getElementById('arrow')
      if (arrow.classList.length) {
        arrow.classList.remove('arrowup')
      } else {
        arrow.classList.add('arrowup')
      }
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #E2E2EA;

  height: 80px;
  padding: 0px 3.3% 0px 4.45%;
}
h3 {
  flex: 3;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
}
.header-input {
  border: 1px solid #E2E2EA;
  border-radius: 20px;
  height: 38px;
  background: #FFFFFF;

  display: flex;
  align-items: center;

  padding-right: 1.4%;
  margin-right: 45px;
}
.header-input input {
  border: none;
  border-radius: 20px;
  height: 100%;

  padding-left: 27px;
  font-size: 12px;
}
.header-input input::placeholder, .header-input input::-moz-placeholder {
  color: #75759E;
  opacity: 0.4;
}
.header-input input:focus {
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
}
.profile .arrowup {
  transform: rotate(180deg);
}
@media (max-width: 950px) {
  .dashboard-header {
    justify-content: space-between;
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
    padding: 0px;
  }
  h3 {
    display: none;
  }
}
@media (max-width: 500px) {
  h3 {
    font-size: 13px;
    line-height: 23px;
  }
}
</style>
