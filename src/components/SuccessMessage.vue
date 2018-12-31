<template>
  <div class="success-message" v-show="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props: {
    message: {type: String, required: true}
  }
}
</script>

<style lang="scss" scoped>
.success-message {
  background-color: #00dd00;
  color: #ffffff;
  border-radius: 5px;
  list-style-type: none;
}

.success-message p {
  padding: 10px;
  font-weight: bold;
}

</style>
