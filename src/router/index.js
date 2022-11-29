import { createRouter ,createWebHistory} from 'vue-router'
import HomeView from "@/views/homeView.vue";

import MapHomeView from "@/views/mapHomeView.vue";
import OL_ESRI from '@/views/OL_ESRI.vue'
const routes = [
  {
    path:'/',
    component:HomeView
  },
  {
    name:'mapHomeView',
    path:'/map',
    component:MapHomeView
  },
  {
    name:'blog',
    path:'/blog',
    component:()=>import('../views/blogView.vue')
  },
  {
    name:'userView',
    path: '/userView/:id',
    component: ()=>import('../views/userView.vue')
  },
  {
    name: 'esriMap',
    path: '/esriMap',
    component: OL_ESRI
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
