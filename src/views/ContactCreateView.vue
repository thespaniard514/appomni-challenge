<template>
  <div>
    <ContactForm @submitted="create"/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
  name: 'ContactCreate',
  components: {
    ContactForm
  },
  created() {
    this.$store.commit('resetState');
  },
  methods: {
    create(contact) {
      console.log('creating');
      this.$store.dispatch('createContact', contact);
    }
  }
}
</script>
<style scoped lang="scss">
</style>
