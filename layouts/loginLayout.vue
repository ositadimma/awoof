<template>
  <div class="login-ctn">
    <img src="~/assets/images/Logo.png" alt="logo" class="logo easeIn">
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
  margin: 5rem 0 49px;
}

@media (min-width: 1025px) {
  .login-ctn::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  .login-ctn::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .login-ctn::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
  }
}

@media (max-height: 850px) {
  .logo {
    margin-bottom: 29px;
  }
}
@media (max-width: 800px) {
  .logo-ctn {
    overflow-y: hidden;
  }
  .logo {
    display: none;
  }
}
</style>
