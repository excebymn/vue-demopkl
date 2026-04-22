<script setup>
// ===============================
// IMPORT
// ===============================
import Logo from '/images/PrimaryLogo/Logo.png'

// ===============================
// NAV MENU (BIAR DINAMIS)
// ===============================
const menus = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
]
</script>

<template>
  <header class="sticky-top shadow-sm bg-white">
    <nav class="navbar navbar-expand-lg container">
      <!-- ===============================
           LOGO
      =============================== -->
      <router-link
        class="navbar-brand fw-bold text-capitalize d-flex align-items-center gap-2"
        to="/"
      >
        <img :src="Logo" alt="logo" height="32" />
        makna consulting
      </router-link>

      <!-- ===============================
           TOGGLE BUTTON (MOBILE)
      =============================== -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- ===============================
           MENU
      =============================== -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- LOOP MENU -->
          <li v-for="menu in menus" :key="menu.path" class="nav-item">
            <router-link
              :to="menu.path"
              class="nav-link text-capitalize"
              active-class="active fw-bold text-warning"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
