import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReservationsView from '../views/ReservationsView.vue'
import TrainingsView from '../views/TrainingsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/trainings', name: 'trainings', component: TrainingsView },
  { path: '/reservations', name: 'reservations', component: ReservationsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

