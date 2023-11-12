import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('@/views/alerts/Alert.vue')
    },
  ]
})

export default router
