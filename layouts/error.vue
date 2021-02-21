<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page does not exist.
    </h1>
    <h1 v-else>
      Please check your connection and try again.
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Error',
  // eslint-disable-next-line
  props: ["error"]
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

h1 {
  font-weight: 600;
  font-size: calc(2rem + 0.5vw);
  color: #09ab5d;
  text-align: center;
}

@media (min-width: 1600px) {
  h1 {
    font-size: 45px;
  }
}
</style>
