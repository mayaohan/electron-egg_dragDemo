import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '../views/layout/Layout.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      // component:HomeView,
      meta: { title: 'home', icon: 'dashboard', noCache: false },
      children:[
        {
          path: '/job',
          name: 'job',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/systemJob/index.vue'),
          meta: { title: 'Job', icon: 'dashboard', noCache: false }
        },
        {
          path: '/HomeView',
          name: 'HomeView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/HomeView.vue'),
          meta: { title: 'HomeView', icon: 'dashboard', noCache: false }
        },
        {
          path: '/about',
          name: 'AboutView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: { title: 'AboutView', icon: 'dashboard', noCache: false }
        },
        {
          path: '/createwindow',
          name: 'createwindow',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/CreateWindow.vue'),
          meta: { title: 'createwindow', icon: 'dashboard', noCache: false }
        },
        {
          path: '/aweDnd',
          name: 'aweDnd',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AweDnd/AweDnd.vue'),
          meta: { title: 'aweDnd', icon: 'dashboard', noCache: false }
        },
        {
          path: '/Grid',
          name: 'Grid',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/GridLayouts.vue'),
          meta: { title: 'Grid', icon: 'dashboard', noCache: false }
        },
        {
          path: '/Drag',
          name: 'Drag',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AweDnd/Drag.vue'),
          meta: { title: 'Drag', icon: 'dashboard', noCache: false }
        }
      ]
    },
    
  ]
})

export default router
