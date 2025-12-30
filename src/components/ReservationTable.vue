<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>Meno</th>
          <th>Email</th>
          <th>Tréning</th>
          <th>Dátum</th>
          <th>Čas</th>
          <th>Účastníci</th>
          <th>Akcie</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in reservations" :key="r.id">
          <td>{{ r.name }}</td>
          <td>{{ r.email }}</td>
          <td>{{ r.trainingName }}</td>
          <td>{{ r.reservationDate }}</td>
          <td>{{ r.time }}</td>
          <td>{{ r.participants }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="$emit('delete', r.id)">
              Zrušiť
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReservationTable',
  props: {
    reservations: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.table { margin-bottom: 0; }
.btn-sm { padding: 5px 15px; font-size: 0.875rem; }
</style>
