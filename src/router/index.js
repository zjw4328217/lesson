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
          title: '查询订单'
        }
      },
      {
        name:'course-list',
        path: '/course-list',
        component: () => import('@/views/course/course-list/index'),
        meta: {
          title: '查询订单'
        }
      },
      {
        name:'course-task',
        path: '/course-task',
        component: () => import('@/views/course/course-task/index'),
        meta: {
          title: '查询订单'
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
