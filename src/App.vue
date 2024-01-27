<script setup>

import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
</script>

<template>
  <header class="d-flex justify-content-center underline">
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



.underline{
      border-bottom: 1px solid #000;

}
</style>