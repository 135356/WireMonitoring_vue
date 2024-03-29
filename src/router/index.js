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
      is_lonin:true,
    }
  },
  { //登陆页面
    path: '/LogIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue'),
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
        is_lonin:true,
    }
  },
  { //视频监控
    path: '/VideoManagement',
    name: 'VideoManagement',
    component: () => import('../views/VideoManagement.vue'),
    meta:{
        keep_alive: false,
        is_lonin:true,
    }
  },
]

const router = new VueRouter({
  routes
});



export default router
