<template>
  <div class="notification-container">
    <div class="notification-container-child animate__fadeInUp">
      <div class="notification-nav">
        <div class="notification-nav-child-1">
          <span :class="{ active: notificationOpen }">All Customers</span>
        </div>
      </div>
      <NotificationForm />
    </div>
  </div>
</template>

<script>
import NotificationForm from '~/components/NotificationForm'

export default {
  name: 'Notifications',
  layout: 'dashboardLayout',
  components: {
    NotificationForm
  },
  data () {
    return {
      key: 0,
      notificationOpen: true
    }
  },
  created () {
    this.$store.commit('setLayout', 'Notification') // changes layout title of dashboard header
  }
}
</script>

<style scoped>
.notification-container {
  background: #f7f7f8;
  flex: 1;

  width: 100%;
  height: 100%;

  padding: 30px 6% 0px 4.45%;
  overflow-y: auto;
  overflow-x: hidden;
}
.notification-container-child {
  width: 913px;
  height: auto;
  background: #ffffff;
}
.notification-nav {
  display: flex;
  padding-right: 39px;
}
.notification-nav .btn-cmpt {
  width: 188px;
}
.notification-nav-child-1 {
  display: flex;
  flex: 1;
}
.notification-nav-child-1 span {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 165px;
  height: 69px;
  cursor: pointer;
}
.notification-nav-child-1 .active {
  border-bottom: 4px solid;
  color: #09ab5d;
  cursor: auto;
}
@media (max-width: 1250px) {
  .notification-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .notification-container-child {
    width: 100%;
  }
  .notification-nav {
    padding-right: 0px;
  }
}
@media (max-width: 767px) {
  /* .notification-container {
    padding: 20px 4.5% 0px 4.5%;
  }
  .notification-container-child {
    width: 100%;
  } */
  .notification-nav {
    flex-direction: column;
    padding-right: 0px;
  }
  .notification-nav .btn-cmpt {
    min-height: 46px;
    align-self: center;
  }
  .notification-nav-child-1 {
    margin-bottom: 10px;
  }
  .notification-nav-child-1 span {
    width: 50%;
  }
}
</style>
