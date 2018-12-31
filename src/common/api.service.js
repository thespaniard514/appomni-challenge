import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

const apiURL = 'http://localhost:4000/';

export default {
  createContact(contact) {
    return Vue.axios.post(apiURL + 'contacts/create', contact)
      .catch(function(err){
        console.log(err);
      });
  },
  getContacts() {
    return Vue.axios.get(apiURL + 'contacts/')
    .catch(function(err){
      console.log(err);
    });
  },
  updateContact(contact) {
    return Vue.axios.put(apiURL + 'contacts/update/' + contact._id, contact)
      .catch(function(err){
        console.log(err);
      });
  },
  deleteContact(contactId) {
    return Vue.axios.delete(apiURL + 'contacts/delete/' + contactId)
      .catch(function(err){
        console.log(err);
      });
  }
}
