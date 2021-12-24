import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedApp from '../views/feed/feed-app.vue'
import FeedIndex from '../views/feed/feed-index.vue'

Vue.use(VueRouter)

const routes = [
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
        // route level code-splitting
        // this generates a separate chunk (user-details.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "user-details" */ '../views/feed/user-details.vue')
      },
    ],
  },
  {
    path: '/whiteboard',
    name: 'whiteboard',
    // route level code-splitting
    // this generates a separate chunk (whiteboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "whiteboard" */ '../views/whiteboard.vue')
  },
  {
    path: '/btns',
    name: 'btns',
    // route level code-splitting
    // this generates a separate chunk (btns.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "btns" */ '../views/btns.vue')
  },
  {
    path: '/inputs',
    name: 'inputs',
    // route level code-splitting
    // this generates a separate chunk (inputs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "inputs" */ '../views/inputs.vue')
  },
  {
    path: '/cmps',
    name: 'cmps',
    // route level code-splitting
    // this generates a separate chunk (cmps.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cmps" */ '../views/cmps.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
