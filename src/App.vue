<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
<NavBar />
<Suspense>
  <router-view />
</Suspense>
</template>

<style>
* {
  margin: 0 auto;
  padding: 0;
}

body {
  background-color: #181b1f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
