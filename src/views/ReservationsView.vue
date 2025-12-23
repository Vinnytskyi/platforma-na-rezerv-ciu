<template>
  <div class="container mt-4">
    <h1 class="mb-4 text-center">My Reservations</h1>
    
    <ReservationForm :trainings="trainings" @reserve="addReservation" />
    
    <ReservationTable :reservations="reservations" @delete="deleteReservation" />
  </div>
</template>

<script>
import ReservationForm from '../components/ReservationForm.vue'
import ReservationTable from '../components/ReservationTable.vue'
import { useReservationStore } from '../stores/reservationStore'

export default {
  name: 'ReservationsView',
  components: { ReservationForm, ReservationTable },
  data() {
    return {
      trainings: [
        { id: 1, name: 'Yoga' },
        { id: 2, name: 'Pilates' },
        { id: 3, name: 'HIIT' }
      ]
    }
  },
  computed: {
    reservations() {
      return this.store.reservations
    }
  },
  methods: {
    addReservation(reservation) {
      this.store.addReservation(reservation)
    },
    deleteReservation(id) {
      this.store.removeReservation(id)
    }
  },
  created() {
    this.store = useReservationStore()
    this.store.loadReservations()
  }
}
</script>
