import Vue from 'vue'
import Vuex from 'vuex'

import contactModule from './contact.module';
import contactsModule from './contacts.module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contactModule: contactModule,
    contactsModule: contactsModule
  }
});
