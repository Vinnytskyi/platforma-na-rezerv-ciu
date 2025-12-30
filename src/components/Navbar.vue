<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">💪GymReserve</div>
      
      <div class="nav-links">
        <router-link to="/" class="nav-link" exact>Home</router-link>
        <router-link to="/trainings" class="nav-link">Trainings</router-link>
        <router-link to="/reservations" class="nav-link">Reservations</router-link>
        <router-link to="/profile" class="nav-link">Profile</router-link>
        <router-link to="/reservations" class="btn-book">Book Now</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.logo {
  font-size: 24px;
  font-weight: 500;
  color: white;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  font-size: 16px;
  padding: 6px 14px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 400;
}

.nav-link:hover {
  background: rgba(102, 126, 234, 0.2);
  color: white;
}

.router-link-active {
  color: white;
  background: rgba(102, 126, 234, 0.3);
}

.btn-book {
  padding: 8px 16px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  margin-left: 8px;
  transition: 0.2s;
  font-size: 16px;
}

.btn-book:hover {
  background: #5568d3;
}
</style>