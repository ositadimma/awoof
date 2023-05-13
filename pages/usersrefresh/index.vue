<template>
  <div />
</template>

<script>

export default {
  name: 'Usersrefresh',
  data () {
    return {
      key: 0
    }
  },
  created () {
    this.$router.push('/users')
  }
}
</script>
