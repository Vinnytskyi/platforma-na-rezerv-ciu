import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TrainingsView from '../views/TrainingsView.vue'
import ReservationsView from '../views/ReservationsView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/trainings', name: 'trainings', component: TrainingsView },
  { path: '/reservations', name: 'reservations', component: ReservationsView },
  { path: '/profile', name: 'profile', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory('/platforma-na-rezerv-ciu/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
  return {top: 0}
}
})

export default router

