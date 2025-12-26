<template>
  <div class="container mt-5">
    <h1>My Profile</h1>

    <div class="card mt-4">
      <div class="card-body">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Membership:</strong> Active</p>
      </div>
    </div>

    <h2 class="mt-5">My Reservations</h2>
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

      <li v-if="reservations.length === 0" class="list-group-item text-center text-muted">
        No reservations yet.
      </li>
    </ul>
  </div>
</template>

<script>
import { useReservationStore } from '../stores/reservationStore'

export default {
  name: 'ProfileView',

  data() {
    return {
      store: null
    }
  },

  computed: {
    reservations() {
      return this.store.reservations
    }
  },

  created() {
    this.store = useReservationStore()
    this.store.loadReservations()
  },

  methods: {
    deleteReservation(index) {
      this.store.removeReservation(index)
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>
