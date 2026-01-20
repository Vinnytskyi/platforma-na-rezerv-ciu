<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">© 2025 <span class="footer-logo">GymReserve</span></p>
      <p class="footer-subtext">Online platform for gym reservations</p>
    </div>
  </footer>
</template>


<style>
.footer {
  background: #16213e; 
  color: white;
  padding: 0.6rem 0;
  text-align: center;
  border-top: 2px solid rgba(102,126,234,0.2);
  margin-top: 3rem;
}

.footer-text {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-logo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-subtext {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  margin: 0;
}
</style>