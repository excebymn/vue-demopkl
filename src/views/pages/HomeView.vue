<script setup>
// ===============================
// IMPORT ASSETS
// ===============================
import { ref, onMounted } from 'vue'

// Hero images (slider)
import Hero1 from '/images/PrimaryLogo/Logo.png'
import Hero2 from '/images/Content/test.jpg'

// Dummy image
import TestLogo from '/images/Content/test.jpg'

// Trusted logos (auto generate 1-30)
const images = ref(Array.from({ length: 30 }, (_, i) => `/images/SecondaryLogo/${i + 1}.png`))

// ===============================
// HERO SLIDER LOGIC
// ===============================
const currentSlide = ref(0)
const heroSlides = [Hero1, Hero2]

// Auto slide tiap 5 detik
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})

// Manual control
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}
</script>

<template>
  <!-- ===============================
        HERO SECTION (SLIDER)
  =============================== -->
  <section class="hero py-5 bg-light">
    <div class="container">
      <div class="row align-items-center g-4">

        <!-- TEXT -->
        <div class="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
          <h1 class="fw-bold display-5 mb-3 text-dark">
            Solusi Memberi Arti
          </h1>
          <p class="lead text-muted">
            Mitra strategis pengembangan SDM & tata kelola instansi
          </p>

          <div class="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
            <router-link to="/services" class="btn btn-warning px-4">
              Pelajari Layanan
            </router-link>
            <router-link to="/contact" class="btn btn-outline-warning px-4">
              Hubungi Kami
            </router-link>
          </div>
        </div>

        <!-- IMAGE SLIDER -->
        <div class="col-lg-6 order-1 order-lg-2 text-center position-relative">
          <!-- Image -->
          <img
            :src="heroSlides[currentSlide]"
            class="img-fluid rounded shadow"
            style="max-height: 400px; object-fit: cover;"
          />

          <!-- Navigation Button -->
          <button class="slider-btn left" @click="prevSlide">‹</button>
          <button class="slider-btn right" @click="nextSlide">›</button>
        </div>

      </div>
    </div>
  </section>

  <!-- ===============================
        ABOUT SECTION
  =============================== -->
  <section class="container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>
      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
</section>


  <!-- ===============================
        SERVICES
  =============================== -->
  <section class="container py-5">
    <h2 class="fw-bold mb-4 text-center">Services</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="i in 3" :key="i">
        <div class="card h-100 shadow-sm">
          <img :src="TestLogo" class="card-img-top" style="height:200px; object-fit:cover;" />

          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">Service {{ i }}</h5>
            <p class="text-muted">
              Deskripsi singkat layanan untuk menarik user.
            </p>

            <router-link to="/services" class="btn btn-warning mt-auto">
              Selengkapnya
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- ===============================
        WHY US
  =============================== -->
  <section class="bg-light py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <div class="row g-4 mt-3">
        <div class="col-md-4">
          <div class="p-4 bg-white shadow rounded h-100">
            <i class="fa-solid fa-user-tie fa-2x mb-3 text-warning"></i>
            <h5>Profesional</h5>
            <p class="text-muted">Tim berpengalaman</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-4 bg-white shadow rounded h-100">
            <i class="fa-solid fa-building fa-2x mb-3 text-warning"></i>
            <h5>Terpercaya</h5>
            <p class="text-muted">Dipercaya banyak instansi</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-4 bg-white shadow rounded h-100">
            <i class="fa-solid fa-chart-line fa-2x mb-3 text-warning"></i>
            <h5>Berorientasi Hasil</h5>
            <p class="text-muted">Fokus pada impact</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- ===============================
        TRUSTED CLIENT
  =============================== -->
  <section class="container py-4 bg-white">
    <p class="text-center fw-semibold">Dipercaya oleh:</p>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div v-for="(img, i) in images" :key="'a'+i" class="marquee-item">
          <img :src="img" />
        </div>
        <div v-for="(img, i) in images" :key="'b'+i" class="marquee-item">
          <img :src="img" />
        </div>
      </div>
    </div>
  </section>

  <!-- ===============================
        CTA
  =============================== -->
  <section class="py-5 text-center text-white" style="background:#ffc107;">
    <div class="container">
      <h2 class="fw-bold mb-3 text-dark">
        Siap Meningkatkan SDM Anda?
      </h2>
      <p class="mb-4 text-dark">
        Konsultasikan kebutuhan Anda sekarang
      </p>

      <router-link to="/contact" class="btn btn-dark me-2">
        Hubungi Kami
      </router-link>
      <router-link to="/services" class="btn btn-outline-dark">
        Lihat Layanan
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* ===============================
   HERO SLIDER BUTTON
=============================== */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
}

.slider-btn.left { left: 10px; }
.slider-btn.right { right: 10px; }

/* ===============================
   MARQUEE LOGO
=============================== */
.marquee-wrapper {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  animation: scroll 20s linear infinite;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  margin-right: 20px;
}

.marquee-item img {
  height: 50px;
}

/* Animation */
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
