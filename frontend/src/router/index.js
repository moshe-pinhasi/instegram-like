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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
