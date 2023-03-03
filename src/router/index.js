import { createRouter ,createWebHistory} from 'vue-router'


const routes = [
  {
    path:'/',
    component:()=>import('../views/LoginView.vue')
  },
  {
    name:'mapHomeView',
    path:'/map',
    component:()=>import('../views/arcRest.vue')
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
    component: ()=>import('../views/OL_ESRI.vue')
  },
  {
    name: 'selfArcWms',
    path: '/selfArcWms',
    component: ()=>import('../views/selfArcWMS.vue'),
    children:[
      {
        name:'bottomControl',
        path: '/bottomControl',
        component:()=>import('../components/bottomControl.vue')
      }
    ]
  },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
