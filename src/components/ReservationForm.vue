<template>
  <form @submit.prevent="createReservation">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Meno a priezvisko:</label>
        <input v-model="formData.name" type="text" class="form-control" placeholder="Tvoje meno" required />
      </div>

      <div class="col-md-6 mb-3">
        <label class="form-label">Email:</label>
        <input v-model="formData.email" type="email" class="form-control" placeholder="tvoj@email.sk" required />
      </div>

      <div class="col-md-6 mb-3">
        <label class="form-label">Tréning:</label>
        <select v-model="formData.selectedTraining" class="form-select" required>
          <option value="">Vyber tréning</option>
          <option v-for="t in trainings" :key="t.id" :value="t.title">
            {{ t.title }} - {{ t.duration }} min
          </option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <label class="form-label">Dátum:</label>
        <input v-model="formData.date" type="date" class="form-control" :min="getMinDate()" required />
      </div>

      <div class="col-md-6 mb-3">
        <label class="form-label">Čas:</label>
        <select v-model="formData.time" class="form-select" required>
          <option value="">Vyber čas</option>
          <option v-for="(slot, i) in getTimeSlots()" :key="i">{{ slot }}</option>
        </select>
      </div>

      <div class="col-md-6 mb-3">
        <label class="form-label">Počet účastníkov:</label>
        <input v-model="formData.participants" type="number" class="form-control" min="1" max="10" required />
      </div>

      <div class="col-12 mb-3">
        <label class="form-label">Poznámka (nepovinné):</label>
        <textarea v-model="formData.notes" class="form-control" rows="2" placeholder="Tvoja poznámka..."></textarea>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-success w-100">Vytvoriť rezerváciu</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ReservationForm',
  
  props: { trainings: { type: Array, required: true } },

  data() {
    return {
      formData: {
        name: '',
        email: '',
        selectedTraining: '',
        date: '',
        time: '',
        participants: 1,
        notes: ''
      }
    }
  },

  methods: {
    getMinDate() {
      const today = new Date()
      return today.toISOString().split('T')[0]
    },

    getTimeSlots() {
      const t = this.trainings.find(t => t.title === this.formData.selectedTraining)
      return t ? t.timeSlots : []
    },

    createReservation() {
      const r = {
        id: Date.now(),
        name: this.formData.name,
        email: this.formData.email,
        trainingName: this.formData.selectedTraining,
        date: new Date().toLocaleDateString('sk-SK'),
        reservationDate: this.formData.date,
        time: this.formData.time,
        participants: this.formData.participants,
        notes: this.formData.notes
      }

      this.$emit('reserve', r)

      Object.assign(this.formData, { name:'', email:'', selectedTraining:'', date:'', time:'', participants:1, notes:'' })
    }
  }
}
</script>

<style>
.form-label { font-weight: bold; margin-bottom: 5px; }
</style>
