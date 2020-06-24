import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index'),
    children:[
      {
        name:'home',
        path: '/home',
        component: () => import('@/views/home/Home'),
        meta: {
          title: '系统首页'
        }
      },
      {
        name:'findOrder',
        path: '/findOrder',
        component: () => import('@/views/course/findOrder/index'),
        meta: {
          title: '查询订单'
        }
      },
      {
        name:'course-order',
        path: '/course-order',
        component: () => import('@/views/course/course-order/index'),
        meta: {
<<<<<<< HEAD
          title: '批量订单'
=======
          title: '查询订单'
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
        }
      },
      {
        name:'course-list',
        path: '/course-list',
        component: () => import('@/views/course/course-list/index'),
        meta: {
<<<<<<< HEAD
          title: '订单列表'
=======
          title: '查询订单'
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
        }
      },
      {
        name:'course-task',
        path: '/course-task',
        component: () => import('@/views/course/course-task/index'),
        meta: {
<<<<<<< HEAD
          title: '批量结果'
        }
      },
      {
        name:'course-detail',
        path: '/course-detail',
        component: () => import('@/views/course/course-task/detail'),
        meta: {
          title: '批量结果详情'
        }
      },
      {
        name:'agent-pay',
        path: '/agent-pay',
        component: () => import('@/views/agent/agent-pay/index'),
        meta: {
          title: '代理充值'
        }
      },
      {
        name:'agent-list',
        path: '/agent-list',
        component: () => import('@/views/agent/agent-list/index'),
        meta: {
          title: '代理列表'
        }
      },
      {
        name:'agent-add',
        path: '/agent-add',
        component: () => import('@/views/agent/agent-add/index'),
        meta: {
          title: '新增代理'
        }
      },
      {
        name:'user-flow',
        path: '/user-flow',
        component: () => import('@/views/flow/user-flow/index'),
        meta: {
          title: '流水管理'
        }
      },
      {
        name:'user-pay',
        path: '/user-pay',
        component: () => import('@/views/flow/user-pay/index'),
        meta: {
          title: '流水管理'
        }
      },
      {
        name:'complaints-add',
        path: '/complaints-add',
        component: () => import('@/views/complaints/complaints-add/index'),
        meta: {
          title: '流水管理'
        }
      },
      {
        name:'complaints-details',
        path: '/complaints-details',
        component: () => import('@/views/complaints/complaints-details/index'),
        meta: {
          title: '流水管理'
=======
          title: '查询订单'
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
        }
      }
    ]
  }
]
// 0: "course-order" 课程订单
// 1: "agent" 代理
// 2: "course-error"  课程错误
// 3: "user-flow" 
// 4: "user-wallet" 钱包
// 5: "complaints" 工单
// 6: "complaints-add" 工单添加
// 7: "agent-pay"  订单付款
// 8: "complaints-details" 工单细节
// 9: "course-setting" 课程设置
// 10: "agent-add" 代理添加
// 11: "course-list" 课程列表
// 12: "course"  课程
// 13: "agent-list" 代理列表
// 14: "course-task" 课程结果
// 15: "user" 用户

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
