<template>
  <div class="card h-100">
    <img :src="training.image" class="card-img-top training-image" />
    
    <div class="card-body">
      <h5 class="card-title">{{ training.title }}</h5>
      <p class="card-text">{{ training.description }}</p>
      <p><strong>Trvanie:</strong> {{ training.duration }} minút</p>

      <div class="mb-3">
        <strong>Dostupné časy:</strong><br>
        <span 
          v-for="(slot, i) in training.timeSlots" 
          :key="i"
          class="badge bg-secondary me-1 mt-1"
        >
          {{ slot }}
        </span>
      </div>

      <button class="btn btn-primary w-100 mb-2" @click="$emit('reserve', training.id)">
        Rezervovať
      </button>
      
      <button 
        class="btn w-100" 
        :class="training.isFavorite ? 'btn-warning' : 'btn-outline-warning'" 
        @click="$emit('toggle-favorite', training.id)"
      >
        {{ training.isFavorite ? '★ Obľúbené' : '☆ Pridať do obľúbených' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingCard',
  props: {
    training: Object
  }
}
</script>

<style>
.training-image {
  height: 200px;
  object-fit: cover;
}
.badge {
  font-size: 0.9rem;
  padding: 5px 10px;
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
