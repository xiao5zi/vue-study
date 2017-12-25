import { mainRouter, appRouter } from '@/router/router'

const app = {
  state: {
    menuList: [],
    currentPath: [
      {
        title: '首页',
        path: '/home',
        name: 'home'
      }
    ],
    routers: [
      mainRouter,
      ...appRouter
    ]
  },
  mutations: {
    updateMenuList (state) {
      state.menuList = appRouter
    },
    setCurrentPath (state, pathArr) {
      state.currentPath = pathArr
    }
  }
}

export default app
