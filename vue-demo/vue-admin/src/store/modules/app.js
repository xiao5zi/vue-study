import { mainRouter, appRouter } from '@/router/router'

const app = {
  state: {
    menuList: [],
    routers: [
      mainRouter,
      ...appRouter
    ]
  },
  mutations: {
    updateMenuList (state) {
      state.menuList = appRouter
    }
  }
}

export default app
