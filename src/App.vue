<script setup>

import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
</script>

<template>
  <header class="d-flex justify-content-center">
    <Navbar />
  </header>

  <main>
    <About />
  </main>
</template>

<style scoped>
@font-face {
  font-family: "CircularStd";
  src: local("CircularStd"), url(./fonts/circular-std-medium-500.ttf) format("truetype");
}



header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
