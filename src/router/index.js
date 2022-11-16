import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../layout/HomeView.vue'
import Goods from '../views/Goods'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        component: Goods,
      }, {
        path: '/rates',
        component: () => import(/* webpackChunkName: "Rates" */ '../views/Rates')
      }, {
        path: '/shop',
        component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop')
      },
    ],
  }
]
//  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const router = new VueRouter({
  routes
})

export default router
