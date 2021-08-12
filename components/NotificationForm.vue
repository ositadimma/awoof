<template>
  <div class="form">
    <label>Subject</label>
    <input v-model="title" type="text">
    <label>Body</label>
    <textarea v-model="body" />
    <button v-show="!validate && !loading" class="disable-1 btn-cmpt" disabled>
      Send
    </button>
    <button
      v-show="validate && !loading"
      class="btn-cmpt"
      @click="pushNotification()"
    >
      Send
    </button>
    <button v-show="loading" class="btn-cmpt" disabled>
      <div class="loader1" />
    </button>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
export default {
  name: 'Notificationform',
  data () {
    return {
      loading: false,
      body: '',
      title: ''
    }
  },
  computed: {
    validate () {
      return this.title !== '' && this.body !== ''
    }
  },
  methods: {
    async pushNotification () {
      this.loading = true
      try {
        await this.$axios.$post(
          '/admins/create_notification',
          {
            title: this.title,
            body: this.body
          }
        )

        this.loading = false
      } catch (err) {
        this.loading = false
        if (err.message.includes('Network')) {
          this.$toast.global.custom_error(
            'please check your connection and try again'
          )
        }
        if (err.response !== undefined && err.response.status === 400) {
          this.$toast.global.custom_error(err.response.data.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 40px 20.1% 0px 20%;
}
label {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #696f79;
  margin-bottom: 11px;
}
input {
  margin-bottom: 16px;
  height: 40px;
  padding-left: 1rem;
}
textarea {
  padding: 1rem;
  height: 200px;
  resize: vertical;
  font-size: 1rem;
}
.btn-cmpt {
  height: 64px;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 27px;
}
@media (max-width: 767px) {
  .form {
    padding: 40px 13% 0px 13%;
  }
}
</style>
