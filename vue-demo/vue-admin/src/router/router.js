import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login-登录'
  },
  component: resolve => { require(['@/views/login.vue'], resolve) }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/error-page/404.vue'], resolve) }
}

// 作为 Main 组件的子页面展示，但是不在左侧菜单显示的路由
export const mainRouter = {
  path: '/',
  name: 'mainRouter',
  component: Main,
  children: [
    { path: 'home', title: { i18n: 'home' }, name: 'main_home', component: resolve => { require(['@/views/home/home.vue'], resolve) } }
  ]
}

// 作为 Main 组件的子页面展示，并且在左侧菜单显示的路由
export const appRouter = [
  {
    path: '/system',
    name: 'system',
    title: 'System',
    icon: 'gear-a',
    component: Main,
    children: [
      {
        path: 'user',
        name: 'user',
        title: 'User',
        icon: 'person',
        component: resolve => { require(['@/views/system/user/user.vue'], resolve) }
      },
      {
        path: 'permission',
        name: 'permission',
        title: 'Permission',
        icon: 'settings',
        component: resolve => { require(['@/views/system/permission/permission.vue'], resolve) }
      }
    ]
  }
]

export const routers = [
  loginRouter,
  mainRouter,
  ...appRouter,
  page404
]
