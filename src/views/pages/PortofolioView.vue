<script setup>
// =========================
// IMPORT
// =========================
import { ref } from 'vue'

// =========================
// DATA PROJECT
// =========================
const projects = ref([
  {
    title: 'Pelatihan SDM ASN',
    category: 'Training',
    image: '/images/Content/test.jpg',
    desc: 'Program peningkatan kompetensi pegawai dalam manajemen kerja modern.'
  },
  {
    title: 'Workshop Organisasi',
    category: 'Consulting',
    image: '/images/Content/test.jpg',
    desc: 'Pendampingan pengembangan struktur dan budaya kerja organisasi.'
  },
  {
    title: 'Sistem Manajemen Kinerja',
    category: 'System',
    image: '/images/Content/test.jpg',
    desc: 'Pengembangan sistem untuk monitoring dan evaluasi kinerja.'
  },
  {
    title: 'Pelatihan Leadership',
    category: 'Training',
    image: '/images/Content/test.jpg',
    desc: 'Pelatihan kepemimpinan untuk meningkatkan efektivitas tim.'
  }
])

// =========================
// STATE
// =========================
const activeFilter = ref('All')

// =========================
// CONSTANT
// =========================
const categories = ['All', 'Training', 'Consulting', 'System']

// =========================
// COMPUTED (FILTER)
// =========================
const filteredProjects = () => {
  if (activeFilter.value === 'All') return projects.value
  return projects.value.filter(p => p.category === activeFilter.value)
}
</script>

<template>

  <!-- ========================= -->
  <!-- HEADER SECTION -->
  <!-- ========================= -->
  <section class="portfolio-header-section py-5 text-center text-white" style="background:#ffc107;">
    <div class="container">
      <h1 class="fw-bold text-dark">Portofolio Kami</h1>
      <p class="text-dark">
        Beberapa karya dan pengalaman yang telah kami kerjakan
      </p>
    </div>
  </section>


  <!-- ========================= -->
  <!-- FILTER SECTION -->
  <!-- ========================= -->
  <section class="portfolio-filter-section container py-4 text-center">
    <div class="d-flex flex-wrap justify-content-center gap-2">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeFilter = cat"
        class="btn"
        :class="activeFilter === cat ? 'btn-warning' : 'btn-outline-warning'"
      >
        {{ cat }}
      </button>
    </div>
  </section>


  <!-- ========================= -->
  <!-- PORTFOLIO GRID SECTION -->
  <!-- ========================= -->
  <section class="portfolio-grid-section container pb-5">
    <div class="row g-4">

      <div
        class="col-md-6 col-lg-4"
        v-for="(project, i) in filteredProjects()"
        :key="i"
      >
        <div class="card h-100 shadow-sm border-0 portfolio-card">

          <!-- IMAGE -->
          <img
            :src="project.image"
            class="card-img-top"
            style="height:200px; object-fit:cover;"
          />

          <!-- CONTENT -->
          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">{{ project.title }}</h5>

            <p class="text-muted small">
              {{ project.desc }}
            </p>

            <!-- CATEGORY -->
            <div class="mb-3">
              <span class="badge bg-warning text-dark">
                {{ project.category }}
              </span>
            </div>

            <a href="#" class="btn btn-outline-warning mt-auto">
              Lihat Detail
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>


  <!-- ========================= -->
  <!-- TRUST / CLIENT SECTION -->
  <!-- ========================= -->
  <section class="portfolio-trust-section container py-5">

    <!-- HEADER -->
    <div class="text-center mb-5">
      <h2 class="fw-bold">Dipercaya oleh Berbagai Instansi</h2>
      <p class="text-muted">
        Pengalaman kami mencakup berbagai sektor pemerintahan, BUMN, dan organisasi lainnya
      </p>
    </div>

    <div class="row g-4">

      <!-- LEFT COLUMN -->
      <div class="col-md-6">

        <!-- SURVEY -->
        <div class="mb-4">
          <h6 class="fw-bold text-warning">Survey / SKM / SPPK / Publik</h6>
          <ul class="small text-muted">
            <li>Bagian Organisasi Bangkalan</li>
            <li>Bagian Organisasi Kota Madiun</li>
            <li>Biro Umum Provinsi Jawa Timur</li>
            <li>Biro Administrasi Pembangunan Prov. Jatim</li>
            <li>DPMPTSP Provinsi Jawa Timur</li>
          </ul>
        </div>

        <!-- SOP -->
        <div class="mb-4">
          <h6 class="fw-bold text-warning">Penyusunan SOP / SPM</h6>
          <ul class="small text-muted">
            <li>DPMPTSP Provinsi Jawa Timur</li>
            <li>Biro Umum Provinsi Jawa Timur</li>
            <li>Dinas Pertanian Kota Surabaya</li>
          </ul>
        </div>

      </div>

      <!-- RIGHT COLUMN -->
      <div class="col-md-6">

        <!-- ISO -->
        <div class="mb-4">
          <h6 class="fw-bold text-warning">Konsultansi SMM ISO 9001</h6>
          <ul class="small text-muted">
            <li>Bappeda Provinsi Sulawesi Selatan</li>
            <li>DPMPTSP Kota Pasuruan</li>
          </ul>
        </div>

        <!-- OUTBOUND -->
        <div class="mb-4">
          <h6 class="fw-bold text-warning">Outbound Training</h6>
          <ul class="small text-muted">
            <li>PT INKA (Persero)</li>
            <li>Bank Jatim</li>
          </ul>
        </div>

      </div>

    </div>

  </section>


  <!-- ========================= -->
  <!-- CTA SECTION -->
  <!-- ========================= -->
  <section class="portfolio-cta-section py-5 text-center bg-light">
    <div class="container">
      <h2 class="fw-bold mb-3">Tertarik Bekerja Sama?</h2>

      <p class="text-muted mb-4">
        Diskusikan kebutuhan Anda bersama tim kami
      </p>

      <router-link to="/contact" class="btn btn-warning px-4">
        Hubungi Kami
      </router-link>
    </div>
  </section>

</template>

<style scoped>
/* ========================= */
/* PORTFOLIO CARD */
/* ========================= */
.portfolio-card {
  transition: 0.3s;
  cursor: pointer;
}

.portfolio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
</style>
