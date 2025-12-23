<template>
  <div class="card mb-3" style="width: 18rem;">
    <img :src="training.image" class="card-img-top" alt="Training Image" />
    <div class="card-body">
      <h5 class="card-title">{{ training.name }}</h5>
      <p class="card-text">{{ training.description }}</p>
      <p class="card-text"><small class="text-muted">Time: {{ training.time }}</small></p>
      <button class="btn btn-primary" @click="reserve">Reserve</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingCard',
  props: {
    training: {
      type: Object,
      required: true
    }
  },
  methods: {
    reserve() {
      this.$emit('reserve', this.training)
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>
