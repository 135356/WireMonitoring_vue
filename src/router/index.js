import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
        keep_alive: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
        keep_alive: false,
    }
  },
  { //视频监控
    path: '/VideoManagement',
    name: 'VideoManagement',
    component: () => import('../views/VideoManagement.vue'),
    meta:{
        keep_alive: false,
    }
  },
  { //盾构施工管理
    path: '/ConstructionManagement',
    name: 'ConstructionManagement',
    component: () => import('../views/ConstructionManagement.vue'),
    meta:{
        keep_alive: false,
    }
  },
  { //地图
    path: '/CanvasMap',
    name: 'CanvasMap',
    component: () => import('../views/CanvasMap.vue'),
    meta:{
        keep_alive: false,
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
