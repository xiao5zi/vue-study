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
          name: 'home',
          component: resolve => { require(['@/views/home/home.vue'], resolve) }
        },
        {
          path: '/loan',
          name: 'loan',
          component: resolve => { require(['@/views/loan/loanDetails.vue'], resolve) }
        },
        {
          path: '/lines',
          name: 'lines',
          component: resolve => { require(['@/views/lines/linesUsed.vue'], resolve) }
        },
        {
          path: '/funnel',
          name: 'funnel',
          component: resolve => { require(['@/views/funnel/funnelRateDetails.vue'], resolve) }
        },
        {
          path: '/overdue',
          name: 'overdue',
          component: resolve => { require(['@/views/overdue/overdueAmount.vue'], resolve) }
        }
      ]
    }
  ]
})
