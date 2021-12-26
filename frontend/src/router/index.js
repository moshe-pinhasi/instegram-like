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
