import Vue from "vue";
import ApiService from "@/common/api.service";

const initialState = () => {
  return { contact: {
      _id: '',
      firstName: '',
      lastName: '',
      company: '',
      jobTitle: '',
      phone: '',
      email: '',
      notes: ''
    },
    errors: [],
    successMessage: ''
  }
};

export const state = initialState();

export const mutations = {
  addError(context, error){
    var exists = state.errors.filter(item => {
      return item === error;
    });
    if(!exists.length){state.errors.push(error);}
  },
  clearErrors(context){
    state.errors = [];
  },
  resetState(state){
    Object.assign(state, initialState());
  },
  setSuccessMessage(context, message) {
    state.successMessage = message;
  },
  clearSuccessMessage(context){
    state.successMessage = '';
  },
  setContact(context, contact){
    state.contact = {...contact};
  }
};

export const actions = {
  createContact(context, contact){
    delete contact._id;
    ApiService.createContact(contact);
    context.commit('resetState');
    context.commit('setSuccessMessage', 'Created Contact');
  },
  getContact(context, contactId){
    ApiService.getContact(contactId);
  },
  updateContact(context, contact){
    ApiService.updateContact(contact);
    context.commit('setSuccessMessage', 'Updated Contact');
  },
  deleteContact(context, contactId){
    ApiService.deleteContact(contactId);
    context.commit('resetState');
  }
};

const getters = {
  errors() {
    return state.errors;
  },
  contact() {
    return state.contact;
  },
  successMessage() {
    return state.successMessage;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
