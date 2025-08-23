<template>
  <div id="app">
    <NavBar :searchLine="searchLine" @update:searchLine="searchLine = $event" />
    <router-view :searchLine="searchLine" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';

const searchLine = ref('');
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
