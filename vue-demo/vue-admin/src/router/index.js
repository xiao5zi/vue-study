import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: resolve => { require(['@/views/Root.vue'], resolve) },
      // redirect: { path: '/order' },
      children: [
        {
          path: '/order',
          name: 'order',
          component: resolve => { require(['@/views/order/order.vue']) }
        }
      ]
    }
  ]
})
