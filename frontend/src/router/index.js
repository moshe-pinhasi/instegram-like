import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedApp from '../views/feed/feed-app.vue'
import FeedIndex from '../views/feed/feed-index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/whiteboard',
    name: 'whiteboard',
    component: () => import(/* webpackChunkName: "whiteboard" */ '../views/whiteboard.vue')
  },
  {
    path: '/cmps',
    name: 'cmps',
    component: () => import(/* webpackChunkName: "cmps" */ '../views/cmps.vue')
  },
  {
    path: '/auth',
    name: 'auth-app',
    component: () => import(/* webpackChunkName: "auth-app" */ '../views/auth/auth-app.vue'),
    children: [
      {
        path: 'login',
        name: 'login-index',
        component: () => import(/* webpackChunkName: "login-index" */ '../views/auth/login-index.vue')
      },
      {
        path: 'signup',
        name: 'signup-index',
        component: () => import(/* webpackChunkName: "signup-index" */ '../views/auth/signup-index.vue')
      },
      {
        path: '/*',
        redirect: {name: 'login-index'}
      }
    ],
  },
  {
    path: '/',
    name: 'feed-app',
    component: FeedApp,
    children: [
      {
        path: '',
        name: 'feed-index',
        component: FeedIndex,
      },
      {
        path: ':id',
        name: 'user-details',
        component: () => import(/* webpackChunkName: "user-details" */ '../views/feed/user-details.vue')
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
