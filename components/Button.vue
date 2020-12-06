<template>
  <button class="btn-cmpt">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.btn-cmpt {
  background: #09AB5D;
  border: none;
  border-radius: 3px;

  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: #FFFFFF;
  cursor: pointer;
}
</style>
