<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="container hero-content">
        <div class="text-center text-white position-relative">
          <h1 class="display-1 fw-bold mb-4 animate-fade-in">
            Welcome to <span class="text-gradient-hero">{{ appName }}</span>
          </h1>
          <p class="lead mb-5 fs-3 animate-fade-in-delay">
            {{ heroSubtitle }}
          </p>
          <div class="d-flex gap-3 justify-content-center animate-fade-in-delay-2">
            <button class="btn btn-primary btn-lg px-5 py-3" @click="goToTrainings">
              Browse Trainings
            </button>
            <button class="btn btn-outline-light btn-lg px-5 py-3" @click="scrollToAbout">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <i class="bi bi-chevron-down"></i>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5">
      <div class="container">
        <div class="row g-4 text-center">
          <div class="col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-box">
              <div class="stat-icon">{{ stat.icon }}</div>
              <h2 class="counter">{{ stat.value }}</h2>
              <p class="text-muted">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section py-5" ref="aboutSection">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">About Our Service</h2>
          <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-md-6" v-for="feature in features" :key="feature.title">
            <div class="feature-card h-100">
              <div class="feature-icon" :class="feature.bgClass">
                <i :class="feature.iconClass"></i>
              </div>
              <h4 class="mt-3">{{ feature.title }}</h4>
              <p class="text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container">
        <div class="cta-card text-center text-white p-5">
          <h2 class="display-5 fw-bold mb-3">{{ ctaTitle }}</h2>
          <p class="lead mb-4">{{ ctaSubtitle }}</p>
          <button class="btn btn-light btn-lg px-5 py-3" @click="goToTrainings">
            Get Started Now
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">What Our Members Say</h2>
          <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
          <div class="col-md-4" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="testimonial-card h-100">
              <div class="stars mb-3">
                <i class="bi bi-star-fill text-warning" v-for="n in 5" :key="n"></i>
              </div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author mt-4">
                <div class="author-avatar">{{ testimonial.avatar }}</div>
                <div>
                  <strong>{{ testimonial.name }}</strong>
                  <div class="text-muted small">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import appData from '../data/trainings.js'

export default {
  name: 'HomeView',

  data() {
    return {
      appName: appData.appName,
      heroSubtitle: appData.heroSubtitle,
      ctaTitle: appData.ctaTitle,
      ctaSubtitle: appData.ctaSubtitle,
      stats: appData.stats,
      features: appData.features,
      testimonials: appData.testimonials
    }
  },

  methods: {
    goToTrainings() {
      this.$router.push('/trainings')
    },

    scrollToAbout() {
      this.$refs.aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  position: relative;
}

.text-gradient-hero {
  color: white; 
  font-weight: bold;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-15px); }
  60% { transform: translateX(-50%) translateY(-7px); }
}

.animate-fade-in { animation: fadeIn 1s ease-in; }
.animate-fade-in-delay { animation: fadeIn 1s ease-in 0.3s both; }
.animate-fade-in-delay-2 { animation: fadeIn 1s ease-in 0.6s both; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stat-box, .feature-card, .testimonial-card {
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  border: 2px solid transparent;       
  transition: transform 0.3s ease, border-color 0.3s ease; 
}

.stat-box:hover, .feature-card:hover, .testimonial-card:hover {
  transform: translateY(-5px);
}


.stat-icon { font-size: 2rem; margin-bottom: 10px; }
.counter { font-weight: bold; font-size: 2rem; color: #667eea; }

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}

.cta-section { background: #f0f0f0; padding: 40px 0; }
.cta-card {
  background: #667eea;
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

.testimonial-text { font-style: italic; color: #555; margin-bottom: 10px; }
.testimonial-author { display: flex; align-items: center; gap: 10px; }
.author-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: #667eea;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.home-container { overflow-x: hidden; }
.title-underline {
  width: 80px;
  height: 4px;
  background: #667eea;
  margin: 10px auto;
}

.btn {
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}
.btn-primary { background: #667eea; color: white; border: none; }
.btn:hover { opacity: 0.9; }

</style>
