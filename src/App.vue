<script setup>

import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Technologies from './components/Technologies.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <header class="d-flex justify-content-center underline">
    <Navbar />
  </header>

  <main>
    <div class=" top-padding">
      <About />
      <Technologies />
      <Projects />
    </div>
  </main>
</template>

<style scoped>
@font-face {
  font-family: "CircularStd";
  src: local("CircularStd"), url(./fonts/CircularStd-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "CircularStdBold";
  src: local("CircularStdBold"), url(./fonts/CircularStd-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "CircularStdBlack";
  src: local("CircularStdBlack"), url(./fonts/CircularStd-Black.ttf) format("truetype");
}

.top-padding {
  padding-top: 100px;
}

.underline {
  border-bottom: 1px solid #000;

}
</style>