<template>
  <div>
    <ErrorList :errors="errors" />
    <SuccessMessage :message="successMessage" />
    <form id="contact-form" @submit.prevent="submit(contact)">
      <div class="row">
        <div class="six columns">
          <label>First: </label>
          <input class="u-full-width" name="First Name" type="text" v-model="contact.firstName" />
        </div>
        <div class="six columns">
          <label>Last: </label>
          <input class="u-full-width" type="text" v-model="contact.lastName"/>
        </div>
      </div>
      <div class="row">
        <div class="six columns">
          <label>Company: </label>
          <input class="u-full-width" type="text" v-model="contact.company"/>
        </div>
        <div class="six columns">
          <label>Job Title: </label>
          <input class="u-full-width" type="text" v-model="contact.jobTitle"/>
        </div>
      </div>
      <div clas="row">
        <div class="twelve columns">
          <label>Phone: </label>
          <input type="text" v-model="contact.phone"/>
        </div>
      </div>
      <div clas="row twelve columns">
        <div class="twelve columns">
          <label>Email: </label>
          <input type="email" v-model="contact.email" />
        </div>
      </div>
      <div clas="row twelve columns">
        <div class="twelve columns">
          <label>Notes: </label>
          <textarea class="u-full-width" v-model="contact.notes"></textarea>
        </div>
      </div>
      <div class="row">
        <input class="button-primary" type="submit" value="Save" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorList from '@/components/ErrorList';
import SuccessMessage from '@/components/SuccessMessage';

export default {
  name: 'ContactForm',
  components: {
    ErrorList,
    SuccessMessage
  },
  computed: {
    ...mapGetters(['errors', 'contact', 'successMessage'])
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validate() {
      this.$store.commit('clearErrors');
      if(!this.contact.firstName && !this.contact.lastName &&
         !this.contact.company && !this.contact.jobTitle &&
         !this.contact.phone && !this.contact.email && !this.contact.notes){
         this.$store.commit('addError', 'At least one item must be filled.');
      }
      if(this.contact.email && !this.validateEmail(this.contact.email)){
        this.$store.commit('addError', 'Email is invalid.');
      }
    },
    submit(contact) {
      this.validate();
      if(!this.errors.length){
        this.$emit('submitted', this.contact)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
