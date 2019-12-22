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
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
