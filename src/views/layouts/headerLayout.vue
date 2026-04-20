<script setup>
import Logo from '@/assets/image/Logo.png'
</script>

<template>
  <header class="m-2 p-3 sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded">
      <div class="container-fluid">
        <!--! ./ container-fluid -->
        <!--? Logo  -->
        <router-link class="navbar-brand text-capitalize" to="/">
          <img :src="Logo" alt="Logo" height="30" class="d-inline-block align-text-top" />
          makna consulting
        </router-link>
        <!--? Logo  -->

        <div class="ms-auto me-2">
          <!--? Responsive Button -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!--? Responsive Button -->

          <!--? navigation button -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active text-capitalize" aria-current="page" to="/"
                  >home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active text-capitalize"
                  aria-current="page"
                  to="/services"
                  >services</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active text-capitalize" aria-current="page" to="/about"
                  >about</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active text-capitalize"
                  aria-current="page"
                  to="/contact"
                  >contact</router-link
                >
              </li>
            </ul>
          </div>
          <!--? navigation button -->
        </div>
      </div>
      <!--! ./ container-fluid -->
    </nav>
  </header>
</template>
