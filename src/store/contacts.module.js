import Vue from "vue";
import ApiService from "@/common/api.service";

const state =  {
  contacts: []
};

const mutations = {
  setContacts(state, contacts){
    state.contacts = contacts;
  }
};
const actions = {
  async getContacts(context){
    const { data } = await ApiService.getContacts();
    context.commit('setContacts', data);
  }
};
const getters = {
  contacts() {
    return state.contacts;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
