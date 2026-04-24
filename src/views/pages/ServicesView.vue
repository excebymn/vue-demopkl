<script setup>
import { ref } from 'vue'

// DATA LOCAL (tidak nyentuh global)
const services = ref([
  {
    title: 'Outbound Training',
    desc: 'Team building, event organizer, dan tour',
    items: ['Team Building', 'Paintball', 'Rafting'],
  },
  {
    title: 'Pengembangan SDM',
    desc: 'Pelatihan soft skill dan kompetensi',
    items: ['Public Speaking', 'Service Excellence', 'ISO Training'],
  },
  {
    title: 'Manajemen Pemerintahan',
    desc: 'Konsultasi SOP, ISO, dan reformasi birokrasi',
    items: ['SOP & ISO', 'Survey IKM', 'Reformasi Birokrasi'],
  },
])
</script>

<template>
  <div class="service-page">

    <!-- HERO -->
    <section class="service-hero py-5">
      <div class="container text-center">
        <h1 class="fw-bold">Layanan Kami</h1>
        <p class="text-muted">
          Solusi profesional untuk pengembangan SDM dan organisasi
        </p>
      </div>
    </section>

    <!-- CATEGORY -->
    <section class="container py-5">
      <div class="row g-4">
        <div
          class="col-md-4"
          v-for="(service, i) in services"
          :key="i"
        >
          <div class="card service-card h-100 p-3">
            <h5 class="fw-bold">{{ service.title }}</h5>
            <p class="text-muted">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAIL ZIGZAG -->
    <section class="service-detail py-5">
      <div class="container">
        <div
          class="row align-items-center mb-5"
          v-for="(service, i) in services"
          :key="'detail'+i"
        >
          <!-- IMAGE -->
          <div
            class="col-md-6"
            :class="{ 'order-md-2': i % 2 !== 0 }"
          >
            <img
              src="https://placehold.co/500"
              class="img-fluid rounded"
            />
          </div>

          <!-- TEXT -->
          <div class="col-md-6">
            <h3 class="fw-bold">{{ service.title }}</h3>
            <ul>
              <li v-for="(item, j) in service.items" :key="j">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="service-cta text-center py-5">
      <div class="container">
        <h2 class="fw-bold text-dark">
          Siap bekerja sama dengan kami?
        </h2>
        <router-link to="/contact" class="btn btn-dark mt-3">
          Hubungi Kami
        </router-link>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* =========================
   ISOLATED STYLE (NO CONFLICT)
========================= */

.service-page {
  background: #ffffff;
}

/* HERO */
.service-hero {
  background: linear-gradient(to right, #fff, #fff8e1);
}

/* CARD */
.service-card {
  transition: 0.3s;
  border: none;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* DETAIL */
.service-detail {
  background: #f9f9f9;
}

/* CTA */
.service-cta {
  background: #ffc107;
}
</style>
