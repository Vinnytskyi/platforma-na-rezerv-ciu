import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservationStore', {
  state: () => ({
    reservations: []
  }),
  actions: {
    addReservation(reservation) {
      this.reservations.push(reservation)
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    },
    removeReservation(index) {
      this.reservations.splice(index, 1)
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    },
    loadReservations() {
      const saved = localStorage.getItem('reservations')
      if (saved) this.reservations = JSON.parse(saved)
    }
  }
})
