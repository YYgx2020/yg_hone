import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页',
      index: 1
    }
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: () => import('@/views/ArticleList'),
    meta: {
      title: '文章列表',
      index: 2
    }
  },
  {
    path: '/messageBoard',
    name: 'messageBoard',
    component: () => import('@/views/MessageBoard'),
    meta: {
      title: '留言板',
      index: 3,
    }
  },
  {
    path: '/self',
    name: 'self',
    component: () => import('@/views/Self'),
    meta: {
      title: '关于我',
      index: 4,
    }
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: {
      name: 'posts',
    },
    component: () => import('@/views/admin'),
    meta: {
      title: '个人中心',
      index: 5,
    },
    children: [
      {
        path: '',
        name: 'posts',
        component: () => import('@/views/admin/Posts'),
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import('@/views/admin/Drafts'),
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/admin/MessageBox'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router