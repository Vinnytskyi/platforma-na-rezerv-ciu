<!-- src/views/TrainingsView.vue -->
<template>
  <div class="container mt-4">
    <h1 class="mb-4 text-center">Available Trainings</h1>
    <div class="d-flex flex-wrap justify-content-center">
      <TrainingCard
        v-for="t in trainings"
        :key="t.id"
        :training="t"
        @reserve="reserveTraining"
      />
    </div>
  </div>
</template>

<script>
import TrainingCard from '../components/TrainingCard.vue'

export default {
  name: 'TrainingsView',
  components: { TrainingCard },
  data() {
    return {
      trainings: [
        {
          id: 1,
          name: 'Yoga',
          description: 'Relaxing and stretching exercises.',
          time: '08:00 - 09:00',
          image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg'
        },
        {
          id: 2,
          name: 'Pilates',
          description: 'Core strength and flexibility training.',
          time: '09:30 - 10:30',
          image: 'https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg'
        },
        {
          id: 3,
          name: 'HIIT',
          description: 'High intensity interval training.',
          time: '11:00 - 11:45',
          image: 'https://images.pexels.com/photos/6390240/pexels-photo-6390240.jpeg'
        },
        {
          id: 4,
          name: 'Boxing',
          description: 'Intense cardio and strength workout.',
          time: '12:00 - 12:55',
          image: 'https://images.pexels.com/photos/7187935/pexels-photo-7187935.jpeg'
        }
      ]
    }
  },
  methods: {
    reserveTraining(training) {
      alert(`You reserved: ${training.name}`)
    }
  }
}
</script>
