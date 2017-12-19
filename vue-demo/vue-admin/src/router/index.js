import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'

// 路由配置
Vue.use(VueRouter)

const RouterConfig = {
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
})
