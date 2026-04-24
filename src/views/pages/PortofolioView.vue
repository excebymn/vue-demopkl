
<script setup>
import { ref } from 'vue'

// Dummy data (nanti tinggal ganti)
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
    image: '/images/Content/test.```html id="prtfl1"jpg',
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

const images = ref(
  Array.from({ length: 30 }, (_, i) => `/images/SecondaryLogo/${i + 1}.png`)
)

const activeFilter = ref('All')

const categories = ['All', 'Training', 'Consulting', 'System']

const filteredProjects = () => {
  if (activeFilter.value === 'All') return projects.value
  return projects.value.filter(p => p.category === activeFilter.value)
}
</script>

<template>
  <!-- ===============================
        HEADER
  =============================== -->
  <section class="py-5 text-center text-white" style="background:#ffc107;">
    <div class="container">
      <h1 class="fw-bold text-dark">Portofolio Kami</h1>
      <p class="text-dark">
        Beberapa karya dan pengalaman yang telah kami kerjakan
      </p>
    </div>
  </section>

  <!-- ===============================
        FILTER
  =============================== -->
  <section class="container py-4 text-center">
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

  <!-- ===============================
        PORTFOLIO GRID
  =============================== -->
  <section class="container pb-5">
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
<section class="container py-4 bg-white">
  <div class="text-center mb-5">
    <h2 class="fw-bold">Dipercaya oleh Berbagai Instansi</h2>
    <p class="text-muted">
      Pengalaman kami mencakup berbagai sektor pemerintahan, BUMN, dan organisasi lainnya
    </p>
  </div>

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
<section class="container py-5">


  <div class="row g-4">

    <!-- LEFT -->
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
          <li>Dinas Kelautan dan Perikanan Prov. Jatim</li>
          <li>Dinas Perindustrian Prov. Jatim</li>
          <li>Dinas Perumahan Rakyat Prov. Jatim</li>
          <li>Inspektorat Kota Madiun</li>
          <li>RSUD Kota Madiun</li>
          <li>RSUD Soegiri Lamongan</li>
        </ul>
      </div>

      <!-- SOP -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">Penyusunan SOP / SPM</h6>
        <ul class="small text-muted">
          <li>DPMPTSP Provinsi Jawa Timur</li>
          <li>Biro Umum Provinsi Jawa Timur</li>
          <li>Dinas Pertanian Kota Surabaya</li>
          <li>Dinas Ketahanan Pangan Surabaya</li>
          <li>Disnaker Kota Surabaya</li>
        </ul>
      </div>

      <!-- SDM -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">Peningkatan Kapasitas SDM</h6>
        <ul class="small text-muted">
          <li>Dinas Lingkungan Hidup Bojonegoro</li>
          <li>DPRD Kota Probolinggo</li>
          <li>DPMPTSP Kota Surabaya</li>
          <li>Sekretariat DPRD Kab. Magetan</li>
          <li>RSUD Dr. Soedono</li>
          <li>Dinas Kesehatan Kab. Bangkalan</li>
          <li>Kementerian Perhubungan Darat VIII</li>
          <li>BKD Kab. Lamongan</li>
          <li>Dispendukcapil Kab. Ngawi</li>
          <li>Puskesmas Kab. Ngawi</li>
        </ul>
      </div>

    </div>

    <!-- RIGHT -->
    <div class="col-md-6">

      <!-- ISO -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">Konsultansi SMM ISO 9001</h6>
        <ul class="small text-muted">
          <li>Bappeda Provinsi Sulawesi Selatan</li>
          <li>DPMPTSP Kota Pasuruan</li>
          <li>DPMPTSP Kab. Magetan</li>
          <li>Dispendukcapil Kab. Gresik</li>
          <li>UPT BLK Lamongan</li>
          <li>Sekretariat Daerah Kota Madiun</li>
        </ul>
      </div>

      <!-- ANJAB -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">ANJAB / ABK / EVJAB / SKJ</h6>
        <ul class="small text-muted">
          <li>Bagian Organisasi Kab. Lebak</li>
          <li>Bagian Organisasi Kab. Pandeglang</li>
          <li>Bagian Organisasi Kab. Serang</li>
          <li>Bagian Organisasi Kab. Probolinggo</li>
          <li>Bagian Organisasi Kab. Bangkalan</li>
          <li>Bagian Organisasi Kota Tangerang</li>
        </ul>
      </div>

      <!-- OUTBOUND -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">Outbound Training</h6>
        <ul class="small text-muted">
          <li>PT INKA (Persero)</li>
          <li>Bank Jatim</li>
          <li>PT IMB (Jawa Timur 3)</li>
          <li>PT EMDEE Beauty</li>
          <li>RSUD Sidoarjo</li>
          <li>Dispendukcapil Kab. Gresik</li>
          <li>Instansi & organisasi lainnya</li>
        </ul>
      </div>

      <!-- EVALUASI -->
      <div class="mb-4">
        <h6 class="fw-bold text-warning">Evaluasi Kelembagaan</h6>
        <ul class="small text-muted">
          <li>Kecamatan PD (Kab. Madiun)</li>
          <li>Kecamatan PD (Kab. Probolinggo)</li>
          <li>Bagian Organisasi Kota Madiun</li>
          <li>Bagian Organisasi Kab. Bangkalan</li>
        </ul>
      </div>

    </div>

  </div>
</section>
```


  <!-- ===============================
        CTA
  =============================== -->
  <section class="py-5 text-center bg-light">
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
/* ===============================
   HOVER EFFECT
=============================== */
.portfolio-card {
  transition: 0.3s;
  cursor: pointer;
}

.portfolio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.marquee-wrapper {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 25s linear infinite;
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

/* animation */
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>


```
