<script setup>
import Logo from '/images/PrimaryLogo/Logo.png'

// ===============================
// DATA
// ===============================
const socials = [
  { icon: 'fa-google', link: 'https://google.com' },
  { icon: 'fa-facebook-f', link: '#' },
  { icon: 'fa-instagram', link: '#' },
  { icon: 'fa-tiktok', link: '#' },
]

const pages = [
  { name: 'portofolio', path: '/portofolio' },
  { name: 'services', path: '/services' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
]
</script>

<template>
  <footer class="bg-dark text-light pt-5">

    <!-- ===============================
         SOCIAL
    =============================== -->
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center pb-4 border-bottom">
      <p class="mb-2 mb-md-0">Terhubung dengan kami:</p>

      <div>
        <a
          v-for="s in socials"
          :key="s.icon"
          :href="s.link"
          class="text-light me-3 fs-5"
        >
          <i :class="['fab', s.icon]"></i>
        </a>
      </div>
    </div>

    <!-- ===============================
         CONTENT
    =============================== -->
    <div class="container py-5">
      <div class="row g-4">

        <!-- ABOUT -->
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-2 mb-3">
            <img :src="Logo" height="30" />
            <h5 class="mb-0 text-uppercase">Makna Consulting</h5>
          </div>
          <p class="text-muted small">
            Solusi pengembangan SDM dan organisasi yang profesional dan terpercaya.
          </p>
        </div>

        <!-- PAGE -->
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Halaman</h6>
          <ul class="list-unstyled">
            <li v-for="p in pages" :key="p.path">
              <router-link :to="p.path" class="text-decoration-none text-light">
                {{ p.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Kontak</h6>
          <p class="small mb-1">📍 Surabaya, Jawa Timur</p>
          <p class="small mb-1">📧 makna.team@gmail.com</p>
          <p class="small mb-1">📞 +62 813 3175 5314</p>
        </div>

      </div>
    </div>

    <!-- ===============================
         COPYRIGHT
    =============================== -->
    <div class="text-center py-3 border-top small">
      © 2026 Makna Consulting — All Rights Reserved
    </div>

  </footer>
</template>
