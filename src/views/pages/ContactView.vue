<template>

  <!-- ========================= -->
  <!-- HEADER / HERO SECTION -->
  <!-- ========================= -->
  <section class="contact-header-section py-5 text-center text-white" style="background:#ffc107;">
    <div class="container">
      <h1 class="fw-bold text-dark">Hubungi Kami</h1>
      <p class="text-dark">
        Pilih cara termudah untuk terhubung dengan kami
      </p>
    </div>
  </section>


  <!-- ========================= -->
  <!-- CONTACT OPTIONS SECTION -->
  <!-- ========================= -->
  <section class="contact-options-section container py-5">

    <div class="row g-4 justify-content-center">

      <!-- WhatsApp -->
      <div class="col-md-4">
        <a href="https://wa.me/6287846395250" target="_blank" class="text-decoration-none">
          <div class="card h-100 text-center shadow-sm border-0 p-4 contact-card">
            <i class="fa-brands fa-whatsapp fa-2x text-success mb-3"></i>
            <h5 class="fw-bold">WhatsApp</h5>
            <p class="text-muted">Chat langsung dengan tim kami</p>
          </div>
        </a>
      </div>

      <!-- Instagram -->
      <div class="col-md-4">
        <a href="https://instagram.com/username" target="_blank" class="text-decoration-none">
          <div class="card h-100 text-center shadow-sm border-0 p-4 contact-card">
            <i class="fa-brands fa-instagram fa-2x text-danger mb-3"></i>
            <h5 class="fw-bold">Instagram</h5>
            <p class="text-muted">Lihat aktivitas & update terbaru</p>
          </div>
        </a>
      </div>

      <!-- TikTok -->
      <div class="col-md-4">
        <a href="https://tiktok.com/@username" target="_blank" class="text-decoration-none">
          <div class="card h-100 text-center shadow-sm border-0 p-4 contact-card">
            <i class="fa-brands fa-tiktok fa-2x mb-3"></i>
            <h5 class="fw-bold">TikTok</h5>
            <p class="text-muted">Konten singkat & insight menarik</p>
          </div>
        </a>
      </div>

      <!-- Email -->
      <div class="col-md-4">
        <a href="mailto:email@makna.com" class="text-decoration-none">
          <div class="card h-100 text-center shadow-sm border-0 p-4 contact-card">
            <i class="fa-solid fa-envelope fa-2x text-warning mb-3"></i>
            <h5 class="fw-bold">Email</h5>
            <p class="text-muted">Untuk komunikasi formal</p>
          </div>
        </a>
      </div>

    </div>

  </section>


  <!-- ========================= -->
  <!-- CTA SECTION -->
  <!-- ========================= -->
  <section class="contact-cta-section py-5 text-center bg-light">
    <div class="container">
      <h2 class="fw-bold mb-3">Masih Bingung Mulai Dari Mana?</h2>

      <p class="text-muted mb-4">
        Tenang, kamu bisa langsung ngobrol santai dulu dengan kami
      </p>

      <a href="https://wa.me/6287846395250" target="_blank" class="btn btn-warning px-4">
        Chat Sekarang
      </a>
    </div>
  </section>

</template>

<style scoped>
/* ========================= */
/* CONTACT CARD */
/* ========================= */
.contact-card {
  transition: 0.3s;
  cursor: pointer;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
</style>
