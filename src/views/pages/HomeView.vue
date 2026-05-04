<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const Hero2 = 'https://placehold.co/1600x800/orange/white'

// ===============================
// HERO SLIDES (PAKAI LINK)
// ===============================
const heroSlides = ref([
  {
    image: 'https://placehold.co/1600x800',
    title: 'Solusi Memberi Arti',
    desc: 'Mitra strategis pengembangan SDM & tata kelola instansi',
  },
  {
    image: 'https://placehold.co/1600x800/black/blue',
    title: 'Transformasi Digital',
    desc: 'Meningkatkan efisiensi melalui teknologi',
  },
])

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length
}

const goTo = (i) => {
  currentSlide.value = i
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const images = ref(Array.from({ length: 30 }, (_, i) => `/images/SecondaryLogo/${i + 1}.png`))

// duplicated track (biar looping seamless)
const loopImages = computed(() => [...images.value, ...images.value])

const TestLogo = Hero2

const whyItems = [
  {
    title: 'Profesional',
    desc: 'Tim berpengalaman',
    icon: 'bi-person-badge',
    link: '/services',
  },
  {
    title: 'Terpercaya',
    desc: 'Dipercaya banyak instansi',
    icon: 'bi-building',
    link: '/about',
  },
  {
    title: 'Berorientasi Hasil',
    desc: 'Fokus pada impact',
    icon: 'bi-graph-up',
    link: '/services',
  },
]
</script>

<template>
  <!-- ========================= -->
  <!-- HERO MICROSOFT STYLE -->
  <!-- ========================= -->
  <section class="hero" :style="{ backgroundImage: `url(${heroSlides[currentSlide].image})` }">
    <!-- overlay biar text kebaca -->
    <div class="overlay"></div>

    <div class="container hero-content">
      <h1 class="text-white fw-bold display-4">
        {{ heroSlides[currentSlide].title }}
      </h1>

      <p class="text-light lead">
        {{ heroSlides[currentSlide].desc }}
      </p>

      <div class="d-flex gap-2">
        <router-link to="/services" class="btn btn-warning"> Pelajari Layanan </router-link>

        <router-link to="/contact" class="btn btn-outline-light"> Hubungi Kami </router-link>
      </div>
    </div>

    <!-- NAV -->
    <button class="nav left" @click="prevSlide">‹</button>
    <button class="nav right" @click="nextSlide">›</button>

    <!-- DOT -->
    <div class="dots">
      <span
        v-for="(s, i) in heroSlides"
        :key="i"
        :class="{ active: i === currentSlide }"
        @click="goTo(i)"
      ></span>
    </div>
  </section>

  <!-- ========================= -->
  <!-- SEMUA BAGIAN BAWAH TIDAK DIUBAH -->
  <!-- ========================= -->

  <section class="home-about-section container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>
      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
  </section>

  <section class="home-services-section container py-5">
    <h2 class="fw-bold mb-4 text-center">Services</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="i in 3" :key="i">
        <div class="card h-100 shadow-sm">
          <img :src="TestLogo" class="card-img-top" style="height: 200px; object-fit: cover" />

          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">Service {{ i }}</h5>
            <p class="text-muted">Deskripsi singkat layanan untuk menarik user.</p>

            <router-link to="/services" class="btn btn-warning mt-auto"> Selengkapnya </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-why-section bg-light py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <div class="row g-4 mt-3">
        <div class="col-md-4" v-for="(item, index) in whyItems" :key="index">
          <router-link :to="item.link" class="text-decoration-none">
            <div class="p-4 bg-white shadow rounded h-100 why-card">
              <i :class="['bi', item.icon, 'fs-1', 'mb-3', 'text-warning']"></i>
              <h5 class="text-dark">{{ item.title }}</h5>
              <p class="text-muted">{{ item.desc }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="home-trusted-section container py-4 bg-white">
    <p class="text-center fw-semibold">Dipercaya oleh:</p>
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div v-for="(img, i) in loopImages" :key="i" class="marquee-item">
          <img :src="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.hero {
  position: relative;
  width: 100%;

  height: 70vh;
  min-height: 400px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
}

/* content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;

  text-align: left;
  margin-left: 80px;
}

/* TABLET */
@media (max-width: 992px) {
  .hero {
    height: 60vh;
  }

  .hero-content {
    padding-left: 40px;
  }
}

/* MOBILE */
@media (max-width: 576px) {
  .hero {
    height: auto;
    padding: 60px 20px;
  }

  .hero-content {
    padding-left: 0;
    text-align: center;
    margin: auto;
  }
}

/* NAV */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  z-index: 2;
}

.nav.left {
  left: 20px;
}
.nav.right {
  right: 20px;
}

/* DOT */
.dots {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 2;
}

.dots span {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background: white;
}

/* MARQUEE */
.marquee-wrapper {
  overflow: hidden;
  padding: 14px 0; /* ruang atas bawah */
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
  gap: 16px;
  align-items: center;
}

.marquee-item {
  flex: 0 0 auto;
  padding: 0;
}

/* pause saat hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 auto;
  position: relative;

  height: 45px; /* penting: lebih besar dari img */
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
}

.marquee-item:hover {
  transform: scale(1.2);
  z-index: 10;
}

.marquee-item img {
  max-height: 50px;
  width: auto;
  object-fit: contain;
  display: block;
}

.marquee-item:hover img {
  transform: scale(1.2);
  z-index: 10;
}

/* KEYFRAME FIX */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
