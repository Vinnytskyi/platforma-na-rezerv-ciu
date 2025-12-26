<template>
  <div class="card mb-3" style="width: 18rem;">
    <img :src="training.image" class="card-img-top" alt="Training Image" />
    <div class="card-body">
      <h5 class="card-title">{{ training.name }}</h5>
      <p class="card-text">{{ training.description }}</p>
      <p class="card-text"><small class="text-muted">Time: {{ training.time }}</small></p>
      <p class="card-text"><small class="text-muted">Slots left: {{ training.slots }}</small></p>
      <button
        class="btn btn-primary"
        @click="reserve"
        :disabled="training.slots === 0"
      >
        Reserve
      </button>
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
