<template>
  <div class="form">
    <label>Message Body</label>
    <textarea v-model="text" />
    <button v-show="!loading" class="disable-1 btn-cmpt">
      Send
    </button>
    <button
      v-show="validate && !loading"
      class="btn-cmpt"
      @click="changePassword"
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
      text: '',
      loading: false
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
