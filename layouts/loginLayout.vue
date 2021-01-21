<template>
  <div class="login-ctn">
    <img src="~/assets/images/Login-logo.png" alt="logo" class="logo">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LoginLayout'

}
</script>

<style scoped>
.login-ctn {
  width: 100vw;
  height: 100vh;
  background: #001431;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
}

.logo {
  margin-bottom: 49px;
}

@media (max-width: 800px) {
  .logo {
      display: none;
  }
}
</style>
