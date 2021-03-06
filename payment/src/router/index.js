import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkPayment',
    name: 'checkPayments',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckPayment.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
