<template>
  <footer class="footer">
    <div class="container text-center">
      <p class="mb-1">© {{ currentYear }} GymReserve</p>
      <p class="mb-0 small">Online platform for gym reservations</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>


