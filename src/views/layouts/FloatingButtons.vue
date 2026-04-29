<template>
  <div>
    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      class="fab-wa text-decoration-none"
      aria-label="WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
      <span class="fab-label">Konsultasi Gratis</span>
    </a>

    <!-- Scroll To Top -->
    <button
      v-show="showTop"
      @click="scrollToTop"
      class="btn btn-warning shadow rounded-circle shadow fab-top"
      aria-label="Back to top"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FloatingActions',
  data() {
    return { showTop: false }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showTop = window.scrollY > 250
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
.fab-wa,
.fab-top {
  position: fixed;
  right: 22px;
  z-index: 1050;
}

.fab-wa {
  bottom: 24px;
  width: 58px;
  height: 58px;
  border-radius: 50px;
  background: linear-gradient(135deg, #198754, #20c997);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.18);
  transition: all .3s ease;
  overflow: hidden;
}

.fab-wa i {
  font-size: 1.9rem;
  min-width: 58px;
  text-align: center;
}

.fab-label {
  white-space: nowrap;
  opacity: 0;
  max-width: 0;
  font-weight: 600;
  transition: all .3s ease;
}

.fab-wa:hover {
  width: 230px;
  justify-content: start;
}

.fab-wa:hover .fab-label {
  opacity: 1;
  max-width: 170px;
  margin-right: 18px;
}

.fab-top {
  bottom: 94px;
  width: 52px;
  height: 52px;
}

.fab-top i {
  font-size: 1.1rem;
}

@media (max-width: 576px) {
  .fab-wa,
  .fab-top {
    right: 14px;
  }

  .fab-wa:hover {
    width: 58px;
  }

  .fab-wa:hover .fab-label {
    opacity: 0;
    max-width: 0;
    margin-right: 0;
  }
}
</style>
