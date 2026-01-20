<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Rezervácia tréningu</h1>

    <!-- Formulár na vytvorenie rezervácie -->
    <div class="card p-4 mb-4">
      <h4 class="mb-3">Nová rezervácia</h4>
      <ReservationForm 
        :trainings="trainings"
        @reserve="addNewReservation"
      />
    </div>

    <!-- Zoznam rezervácií -->
    <div class="card p-4">
      <h4 class="mb-3">
        Moje rezervácie 
        <span class="badge bg-primary">{{ reservations.length }}</span>
      </h4>

      <ReservationTable 
        v-if="reservations.length"
        :reservations="reservations"
        @delete="deleteReservation"
      />

      <div v-else class="alert alert-info text-center">
        <h5>Zatiaľ nemáš žiadne rezervácie</h5>
        <p>Vytvor si prvú rezerváciu vyššie!</p>
      </div>
    </div>
  </div>
</template>

<script>
import trainingsData from '../data/trainings'
import { useReservationStore } from '../stores/reservationStore'
import ReservationForm from '../components/ReservationForm.vue'
import ReservationTable from '../components/ReservationTable.vue'

export default {
  name: 'ReservationsView',
  components: { ReservationForm, ReservationTable },

  data() {
    return {
      trainings: trainingsData.trainings
    }
  },

  computed: {
    reservations() {
      return useReservationStore().reservations
    }
  },

  created() {
    useReservationStore().loadReservations()
  },

  methods: {
    addNewReservation(reservation) {
      useReservationStore().addReservation(reservation)
      alert('Rezervácia vytvorená!')
    },
    deleteReservation(id) {
      if (confirm('Naozaj chceš zrušiť túto rezerváciu?')) {
        const store = useReservationStore()
        const index = store.reservations.findIndex(r => r.id === id)
        if (index !== -1) store.removeReservation(index)
      }
    }
  }
}
</script>

<style>
h1 { color: #000; }
.card { border: 1px solid #ddd; border-radius: 8px; }
.badge { font-size: 1rem; padding: 5px 10px; }
</style>
