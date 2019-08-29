import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/courselist',
      name: 'courselist',
      component: () => import('@/views/courselist/Courselist.vue'),
      children: [
        {
          path: '/courselist',
          name: 'newest',
          component: () => import('@/components/Newest.vue')
        },
        {
          path: '/courselist/popular',
          name: 'popular',
          component: () => import('@/views/courselist/popular/Popular.vue')
        }
      ]
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('@/views/unloggedsearch/Unloggedsearch.vue')
    }
  ]
})
