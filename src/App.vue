<script setup lang="ts">
import Rankings from './pages/Rankings.vue';
</script>

<template>
  <Suspense>
    <Rankings />
  </Suspense>
</template>

<style>
* {
  margin: 0 auto;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
