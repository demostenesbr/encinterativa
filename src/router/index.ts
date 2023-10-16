import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/howtoparticipate',
      name: 'howtoparticipate',
      component: () => import('../views/HowToParticipateView.vue')
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('../views/AwardsView.vue')
    },
    {
      path: '/participatingproducts',
      name: 'participatingproducts',
      component: () => import('../views/ParticipatingProductsView.vue')
    },
    {
      path: '/revenues',
      name: 'revenues',
      component: () => import('../views/RevenuesView.vue')
    },
    {
      path: '/nbapills',
      name: 'nbapills',
      component: () => import('../views/NBAPillsView.vue')
    },
    {
      path: '/winners',
      name: 'winners',
      component: () => import('../views/WinnersView.vue')
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
