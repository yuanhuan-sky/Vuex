import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'count1',
    // component: Home
    component: () => import('../views/count1.vue')
  },
  {
    path: '/2',
    name: 'count2',
    // component: Home
    component: () => import('../views/count2.vue')
  },
  {
    path: '/3',
    name: 'count3',
    // component: Home
    component: () => import('../views/count3.vue')
  },
  {
    path: '/4',
    name: 'echarts',
    // component: Home
    component: () => import('../views/echarts.vue')
  },
  {
    path: '/5',
    name: 'computed',
    // component: Home
    component: () => import('../views/computed.vue')
  },
  {
    path: '/6',
    name: 'watch',
    // component: Home
    component: () => import('../views/watch.vue')
  },
  {
    path: '/A',
    name: 'A',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/A.vue')
  },
  {
    path: '/B',
    name: 'B',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/B.vue')
  },
  {
    path: '/C',
    name: 'C',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/C.vue')
  },
  {
    path: '/D',
    name: 'D',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/D.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/parent.vue')
  },
  {
    path: '/children',
    name: 'children',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/Component communication/children.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
