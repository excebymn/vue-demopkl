<script setup>
// add template files
import HeaderLayout from './views/layouts/headerLayout.vue'
import FooterLayout from './views/layouts/footerLayout.vue'
</script>

<!-- declare code -->
<template> 
  <HeaderLayout />
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
