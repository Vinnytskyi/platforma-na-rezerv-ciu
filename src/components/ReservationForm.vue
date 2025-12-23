<template>
  <form @submit.prevent="submitReservation" class="mb-4">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input v-model="name" type="text" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="email" type="email" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Training</label>
      <select v-model="selectedTraining" class="form-select" required>
        <option disabled value="">Select training</option>
        <option v-for="training in trainings" :key="training.id" :value="training.name">
          {{ training.name }}
        </option>
      </select>
    </div>
    <button type="submit" class="btn btn-success">Reserve</button>
  </form>
</template>

<script>
export default {
  name: 'ReservationForm',
  props: {
    trainings: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      name: '',
      email: '',
      selectedTraining: ''
    }
  },
  methods: {
    submitReservation() {
      const reservation = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        training: this.selectedTraining
      }
      this.$emit('reserve', reservation)
      this.name = ''
      this.email = ''
      this.selectedTraining = ''
    }
  }
}
</script>
