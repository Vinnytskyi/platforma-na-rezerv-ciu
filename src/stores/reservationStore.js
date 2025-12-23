import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservations', {
  state: () => ({
    reservations: []
  }),
  actions: {
    addReservation(reservation) {
      this.reservations.push(reservation)
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    },
    removeReservation(id) {
      this.reservations = this.reservations.filter(r => r.id !== id)
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    },
    loadReservations() {
      const data = localStorage.getItem('reservations')
      if (data) this.reservations = JSON.parse(data)
    }
  }
})
