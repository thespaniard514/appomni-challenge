import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue')
    },
    {
      path: '/contacts/create',
      name: 'contacts-create',
      component: () => import('@/views/ContactCreateView.vue')
    }
  ]
})
