import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'count1',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/count1.vue')
  },
  {
    path: '/2',
    name: 'count2',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/count2.vue')
  },
  {
    path: '/3',
    name: 'count3',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/count3.vue')
  },
  {
    path: '/4',
    name: 'echarts',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/echarts.vue')
  },
  {
    path: '/5',
    name: 'computed',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/computed.vue')
  },
  {
    path: '/6',
    name: 'watch',
    // component: Home
    component: () => import( /* webpackChunkName: "about" */ '../views/watch.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
