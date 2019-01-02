<template>
  <ul class="error-list" v-show="errors.length">
    <li v-for="error in errors" :key="error" class="error">
      {{error}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ErrorList',
  props: {
    errors: {type: Array, required: true}
  }
}
</script>

<style lang="scss" scoped>
.error-list {
  background-color: #dd0000;
  color: #ffffff;
  border-radius: 5px;
  list-style-type: none;
}

.error {
  padding: 10px;
  font-weight: bold;
}
</style>
