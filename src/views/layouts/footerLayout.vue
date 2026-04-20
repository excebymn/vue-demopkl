<script setup>
import Logo from '@/assets/image/Logo.png'
</script>
<template>
  <footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="https://www.google.com/search?q=makna+consulting&ie=UTF-8" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <div class="d-lg-flex">
              <img :src="Logo" alt="logo" height="30px" class="mb-sm-2" />
              <h6 class="text-uppercase fw-bold mb-4 justify-content-center">makna consulting</h6>
            </div>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">social media</h6>
            <p>
              <i class="fa fa-envelope me-2"></i
              ><a href="mailto:makna.team@gmail.com" class="text-reset text-capitalize">gmail</a>
            </p>
            <p>
              <i class="fa-brands fa-tiktok me-2"></i
              ><a href="#!" class="text-reset text-capitalize">TikTok</a>
            </p>
            <p>
              <i class="fa-brands fa-instagram me-2"></i
              ><a href="#!" class="text-reset text-capitalize">instagram</a>
            </p>
            <p>
              <i class="fa-brands fa-facebook me-2"></i
              ><a href="#!" class="text-reset text-capitalize">facebook</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Page</h6>
            <p>
              <router-link to="/portofolio" class="text-reset text-capitalize"
                >portofolio</router-link
              >
            </p>
            <p>
              <router-link to="/services" class="text-reset text-capitalize">services</router-link>
            </p>
            <p><router-link to="/about" class="text-reset text-capitalize">about</router-link></p>
            <p>
              <router-link to="/contact" class="text-reset text-capitalize">contact</router-link>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fa-solid fa-building me-3"></i> Karah Agung X/4 Surabaya</p>
            <p><i class="fas fa-envelope me-3"></i>makna.team@gmail.com</p>
            <p><i class="fas fa-phone me-3"></i>+62 813 3175 5314</p>
            <p><i class="fa-solid fa-earth-asia me-3"></i>Jawa Timur, Indonesia</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="#">ManusiaCoding.code</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>
