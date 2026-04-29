<script setup>
// add template files
import HeaderLayout from './views/layouts/headerLayout.vue'
import FooterLayout from './views/layouts/footerLayout.vue'
import CallToActionLayout from './views/layouts/CallToActionLayout.vue'
</script>

<!-- declare code -->
<template>
  <HeaderLayout />
  <RouterView />
  <CallToActionLayout />
  <FooterLayout />
</template>

<style scoped></style>
