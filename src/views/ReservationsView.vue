<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Reserve Your Training</h1>

    <div class="card p-3 mb-4">
      <h5>Select Training:</h5>

      <select v-model="selectedTraining" class="form-select mb-3">
        <option v-for="t in trainings" :key="t.id" :value="t">
          {{ t.title }}
        </option>
      </select>

      <h5>Select Time Slot:</h5>

      <select v-model="selectedTime" class="form-select mb-3">
        <option v-for="slot in selectedTraining.timeSlots" :key="slot">
          {{ slot }}
        </option>
      </select>

      <button class="btn btn-success" @click="reserve">
        Reserve
      </button>
    </div>

    <h2>My Reservations</h2>

    <ul class="list-group">
      <li
        v-for="(r, index) in reservations"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ r.trainingName }} | {{ r.time }}

        <button class="btn btn-danger btn-sm" @click="deleteReservation(index)">
          Delete
        </button>
      </li>

      <li
        v-if="reservations.length === 0"
        class="list-group-item text-center text-muted"
      >
        No reservations yet
      </li>
    </ul>
  </div>
</template>

<script>
import trainingsData from '../data/trainings'
import { useReservationStore } from '../stores/reservationStore'

export default {
  name: 'ReservationsView',

  data() {
    return {
      trainings: trainingsData.trainings,
      selectedTraining: null,
      selectedTime: '',
      store: null
    }
  },

  computed: {
    reservations() {
      return this.store.reservations
    }
  },

  created() {
    // Підключаємо store Pinia
    this.store = useReservationStore()
    this.store.loadReservations()

    // Встановлюємо перше тренування за замовчуванням або з query
    const id = Number(this.$route.query.trainingId)
    this.selectedTraining =
      this.trainings.find(t => t.id === id) || this.trainings[0]

    this.selectedTime = this.selectedTraining.timeSlots[0]
  },

  methods: {
    reserve() {
      this.store.addReservation({
        trainingName: this.selectedTraining.title,
        time: this.selectedTime
      })
    },
    deleteReservation(index) {
      this.store.removeReservation(index)
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
