<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Training</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="res in reservations" :key="res.id">
        <td>{{ res.name }}</td>
        <td>{{ res.email }}</td>
        <td>{{ res.training }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="$emit('delete', res.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
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
