import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => { require(['@/views/Root.vue'], resolve) },
      children: [
        {
          path: '/home',
          name: 'home_index',
          component: resolve => { require(['@/views/home/home.vue'], resolve) }
        },
        {
          path: '/loan-detail',
          name: 'loan_detail',
          component: resolve => { require(['@/views/loan/loanDetails.vue'], resolve) }
        }
      ]
    }
  ]
})
