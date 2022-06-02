<script setup lang="ts">
import Rankings from './pages/Rankings.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Suspense>
    <Rankings />
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
