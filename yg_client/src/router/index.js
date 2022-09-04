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
        meta: {
          title: '个人中心'
        }
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import('@/views/admin/Drafts'),
        meta: {
          title: '个人中心-草稿文案'
        }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/admin/MessageBox'),
        meta: {
          title: '个人中心-网友留言'
        }
      },
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/editor'),
    meta: {
      title: '写文章',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=>{
	console.log('beforeEach',to,from)
	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
			next() //放行
		}else{
			alert('暂无权限查看')
			// next({name:'guanyu'})
		}
	}else{
		next() //放行
	}
})

// 全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
	console.log('afterEach')
  console.log('to: ', to);
  console.log('from: ', from);
	if(to.meta.title){ 
		document.title = to.meta.title //修改网页的title
	}else{
		document.title = 'vue_test'
	}
})

export default router