<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Available Trainings</h1>

    <div class="d-flex flex-wrap justify-content-center">
      <div
        class="card m-2"
        style="width: 18rem"
        v-for="t in trainings"
        :key="t.id"
      >
        <img :src="t.image" class="card-img-top" />

        <div class="card-body">
          <h5>{{ t.title }}</h5>
          <p>{{ t.description }}</p>

          <small>Times: {{ t.timeSlots.join(', ') }}</small>

          <button
            class="btn btn-primary mt-2"
            @click="reserve(t.id)"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trainingsData from '../data/trainings'

export default {
  data() {
    return {
      trainings: trainingsData.trainings
    }
  },
  methods: {
    reserve(id) {
      this.$router.push('/reservations?trainingId=' + id)
    }
  }
}
</script>
