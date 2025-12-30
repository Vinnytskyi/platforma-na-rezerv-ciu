<template>
  <div class="profile-container">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="container">
        <div class="profile-info">
          <div class="profile-avatar">
            <span class="avatar-emoji">{{ userProfile.avatar }}</span>
          </div>
          <div class="profile-details">
            <h1>{{ userProfile.name }}</h1>
            <p><i class="bi bi-envelope"></i> {{ userProfile.email }}</p>
            <span class="badge bg-success">{{ userProfile.membership }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <!-- Stats Cards -->
       <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-emoji">📅</div>
          <h3>{{ reservations.length }}</h3>
          <p>Active Bookings</p>
        </div>
        
        <div class="stat-card">
          <div class="stat-emoji">🏆</div>
          <h3>{{ completedWorkouts }}</h3>
          <p>Completed</p>
        </div>
        
        <div class="stat-card">
          <div class="stat-emoji">🔥</div>
          <h3>{{ streakDays }}</h3>
          <p>Day Streak</p>
        </div>
        
        <div class="stat-card">
          <div class="stat-emoji">⏰</div>
          <h3>{{ totalHours }}h</h3>
          <p>Total Hours</p>
        </div>
      </div>

      <!-- My Reservations -->
      <div class="section-card">
        <div class="section-header">
          <h2>
            <i class="bi bi-calendar-week"></i> My Reservations
            <span class="badge bg-primary">{{ reservations.length }}</span>
          </h2>
        </div>

        <div class="reservations-grid" v-if="reservations.length > 0">
          <div 
            class="reservation-card"
            v-for="(r, index) in reservations" 
            :key="index"
          >
            <div class="card-header">
              <h5>{{ r.trainingName }}</h5>
            </div>
            
            <div class="card-body">
              <div class="info-row">
                <i class="bi bi-calendar3"></i>
                <span>{{ formatDate(r.reservationDate) }}</span>
              </div>
              <div class="info-row">
                <i class="bi bi-clock"></i>
                <span>{{ r.time }}</span>
              </div>
              <div class="info-row">
                <i class="bi bi-people"></i>
                <span>{{ r.participants }} people</span>
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-sm btn-danger w-100" @click="cancelReservation(index, r)">
                <i class="bi bi-trash"></i> Cancel
              </button>
            </div>
          </div>
        </div>

        <div v-else class="empty-state">
          <div class="empty-icon">📅</div>
          <h4>No reservations</h4>
          <p>Book your first training!</p>
          <button class="btn btn-primary" @click="goToTrainings">
            <i class="bi bi-plus"></i> Book Training
          </button>
        </div>
      </div>

      <!-- Achievements -->
      <div class="section-card">
        <h2><i class="bi bi-trophy"></i> Achievements</h2>
        <div class="achievements-grid">
          <div 
            class="achievement"
            v-for="achievement in achievements" 
            :key="achievement.name"
            :class="{ earned: achievement.earned }"
          >
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <div class="achievement-name">{{ achievement.name }}</div>
            <div class="achievement-desc">{{ achievement.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useReservationStore } from '../stores/reservationStore'

export default {
  name: 'ProfileView',

  data() {
    return {
      store: null,
      userProfile: {
        name: 'John Doe',
        email: 'john@example.com',
        membership: 'Premium Member',
        avatar: '👨'
      },
      completedWorkouts: 42,
      streakDays: 7,
      totalHours: 68,
      achievements: [
        { name: 'First Step', icon: '🎯', description: 'First workout', earned: true },
        { name: 'Week Warrior', icon: '🔥', description: '7 day streak', earned: true },
        { name: 'Early Bird', icon: '🌅', description: '5 morning sessions', earned: true },
        { name: 'Consistency', icon: '💪', description: '30 workouts', earned: false },
        { name: 'Social Star', icon: '👥', description: 'Train with 10 people', earned: false },
        { name: 'Century', icon: '💯', description: '100 workouts', earned: false }
      ]
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
    cancelReservation(index, reservation) {
      if (confirm(`Cancel "${reservation.trainingName}"?`)) {
        this.store.removeReservation(index)
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })
    },

    goToTrainings() {
      this.$router.push('/trainings')
    }
  }
}
</script>

<style>
.profile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 0;
  color: white;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.avatar-emoji {
  font-size: 3.5rem;
}

.profile-details h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.profile-details p {
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.stats-grid,
.reservations-grid,
.achievements-grid {
  display: grid;
  gap: 1.5rem;
}

.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 3rem;
}

.reservations-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.achievements-grid {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.stat-card,
.section-card,
.reservation-card,
.achievement {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.stat-emoji {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-card:hover,
.reservation-card:hover,
.achievement:hover {
  transform: translateY(-5px);
}

.stat-card {
  padding: 1.5rem;
  text-align: center;
}

.section-card {
  padding: 2rem;
  margin-bottom: 3rem;
}

.stat-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.stat-card h3 {
  margin: 0;
  font-size: 2rem;
  color: #667eea;
}

.stat-card p {
  margin: 0.5rem 0 0 0;
  color: #6c757d;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header h2 {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reservation-card {
  border: 2px solid #e9ecef;
  overflow: hidden;
}

.reservation-card:hover {
  border-color: #667eea;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
}

.card-header h5 {
  margin: 0;
  font-size: 1.1rem;
}

.card-body {
  padding: 1.25rem;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.info-row i {
  width: 20px;
  font-size: 1.1rem;
  color: #667eea;
}

.card-actions {
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.empty-state {
  text-align: center;
  padding: 3rem;
}

.empty-icon {
  font-size: 4rem;
  opacity: 0.5;
  margin-bottom: 1rem;
}

.achievement {
  border: 2px solid #e9ecef;
  padding: 1.5rem 1rem;
  text-align: center;
}

.achievement.earned {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe5cc 100%);
  border-color: #ffc107;
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  filter: grayscale(100%);
  opacity: 0.5;
}

.achievement.earned .achievement-icon {
  filter: grayscale(0%);
  opacity: 1;
}

.achievement-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.achievement-desc {
  font-size: 0.75rem;
  color: #6c757d;
}

@media (max-width: 768px) {
  .profile-info {
    flex-direction: column;
    text-align: center;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>