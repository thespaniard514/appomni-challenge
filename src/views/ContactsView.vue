<template>
  <div class="contacts">
    <input type="text" v-model="searchQuery" placeholder="Filter contacts..."/>
    <table class="u-full-width">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Job Title & Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!contacts.length"><td colspan="4">No Contacts Found</td></tr>
        <tr v-for="(contact, index) in filterContacts" :key="contact._id" class="contact" @click="showModal(contact, index)">
          <td>{{ contact.firstName }} {{ contact.lastName }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td>{{ contact.jobTitle }} <span v-show="contact.company && contact.jobTitle">,</span> {{ contact.company }}</td>
        </tr>
      </tbody>
    </table>
    <Modal
        v-show="isModalVisible"
        @close="closeModal">
        <h2 slot="header">View/Manage Contact</h2>
        <ContactForm slot="body" @submitted="updateContact"/>
        <div slot="footer">
          <button
            type="button"
            class="button"
            @click="deleteContact">
            Delete
          </button>
        </div>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "@/components/Modal";
import ContactForm from '@/components/ContactForm';

export default {
  name: 'home',
  components: {
    Modal,
    ContactForm
  },
  computed: {
    ...mapGetters(['contacts', 'contact']),
    filterContacts() {
      if(!this.searchQuery){
        return this.contacts;
      }
      var self = this;
      return self.contacts.filter(function (contact) {
        var searchRegex = new RegExp(self.searchQuery, 'i')
        return (searchRegex.test(contact.firstName) ||
          searchRegex.test(contact.lastName) ||
          searchRegex.test(contact.jobTitle) ||
          searchRegex.test(contact.email) ||
          searchRegex.test(contact.phone) ||
          searchRegex.test(contact.company) ||
          searchRegex.test(contact.notes) ||
          searchRegex.test(contact.firstName + ' ' + contact.lastName)
        );
      });
    }
  },
  created() {
    this.$store.dispatch('getContacts');
  },
  data () {
    return {
      isModalVisible: false,
      indexOfUpdate: null,
      searchQuery: ''
    };
  },
  methods: {
    showModal(contact, index) {
      this.isModalVisible = true;
      this.$store.commit('clearSuccessMessage');
      this.$store.commit('clearErrors');
      this.$store.commit('setContact', contact);
      this.indexOfUpdate = index;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    updateContact(contact){
      this.$store.dispatch('updateContact', contact);
      this.contacts.splice(this.indexOfUpdate, 1, contact);
    },
    deleteContact() {
      if(confirm('Are you sure you want to delete?')){
        this.$store.dispatch('deleteContact', this.contact._id);
        this.contacts.splice(this.indexOfUpdate, 1);
        this.closeModal();
      }
    }
  }
}
</script>

<style lang="scss">
tr {
  padding: 5px;
}
tr.contact:hover{
  background-color: #ddd;
  cursor: pointer;
}
</style>
