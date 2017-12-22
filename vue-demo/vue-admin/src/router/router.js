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
    { path: 'home', title: '首页', name: 'main_home', component: resolve => { require(['@/views/home/home.vue'], resolve) } }
  ]
}

// 作为 Main 组件的子页面展示，并且在左侧菜单显示的路由
export const appRouter = [
  {
    path: '/article',
    name: 'article',
    title: '文章管理',
    icon: 'ios-paper-outline',
    component: Main,
    children: [
      { path: 'list', name: 'article_list', title: '文章管理', component: resolve => { require(['@/views/article/article-list.vue'], resolve) } }
    ]
  },
  {
    path: '/system',
    name: 'system',
    title: '系统管理',
    icon: 'gear-a',
    component: Main,
    children: [
      { path: 'user', name: 'user', title: '用户管理', icon: 'person', component: resolve => { require(['@/views/system/user/user.vue'], resolve) } },
      { path: 'permission', name: 'permission', title: '权限管理', icon: 'key', component: resolve => { require(['@/views/system/permission/permission.vue'], resolve) } }
    ]
  }
]

export const routers = [
  loginRouter,
  mainRouter,
  ...appRouter,
  page404
]
