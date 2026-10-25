import { createRouter, createWebHistory } from 'vue-router'
import WeekPlanView from '@/views/WeekPlanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'week-plan',
      component: WeekPlanView,
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: () => import('@/views/FavoritesView.vue'),
    },
  ],
})

export default router
