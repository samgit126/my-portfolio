import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/top-scorers',
      name: 'TopScorers',
      component: () => import('../views/TopScorer.vue'),
    },
    {
      path: '/complaint',
      name: 'Complaint',
      component: () => import('../views/Complaint.vue'),
    }

  ],
})

export default router
