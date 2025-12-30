<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Tréningy</h1>

    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card p-3 text-center stats-card">
          <h2>{{ trainings.length }}</h2>
          <p class="mb-0">Dostupné tréningy</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-3 text-center stats-card-green">
          <h2>{{ countFavorites() }}</h2>
          <p class="mb-0">Obľúbené</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div 
        class="col-md-4 mb-4" 
        v-for="training in trainings" 
        :key="training.id"
      >
        <TrainingCard 
          :training="training"
          @reserve="bookTraining"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import trainingsData from '../data/trainings'
import TrainingCard from '../components/TrainingCard.vue'

export default {
  name: 'TrainingsView',

  components: {
    TrainingCard
  },

  data() {
    return {
      trainings: trainingsData.trainings
    }
  },

  methods: {
    // Počet obľúbených tréningov
    countFavorites() {
      let count = 0
      for (let i = 0; i < this.trainings.length; i++) {
        if (this.trainings[i].isFavorite) {
          count++
        }
      }
      return count
    },

    // Rezervácia tréningu
    bookTraining(id) {
      this.$router.push('/reservations?trainingId=' + id)
    },

    // Prepnutie obľúbeného
    toggleFavorite(id) {
      for (let i = 0; i < this.trainings.length; i++) {
        if (this.trainings[i].id === id) {
          this.trainings[i].isFavorite = !this.trainings[i].isFavorite
          break
        }
      }
    }
  }
}
</script>

<style>
.stats-card,
.stats-card-green {
  border-radius: 10px;
  color: white;
  border: 3px solid transparent;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stats-card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: #b39ddb;
}

.stats-card-green {
  background: linear-gradient(135deg, #43cea2, #185a9d);
  border-color: #7ddfc3;
}

.stats-card:hover,
.stats-card-green:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.stats-card h2,
.stats-card-green h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
</style>


