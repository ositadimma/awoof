<template>
  <div class="no-data-container">
    No data available
  </div>
</template>

<script>
export default {
  name: 'NoData'
}
</script>

<style scoped>
.no-data-container {
  width: 100%;
  min-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #09ab5d;
  overflow-x: auto;
}
</style>
