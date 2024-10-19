<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <header class="flex-none">
    <NavigationBar/>
  </header>
  <div class="overscroll-contain overflow-auto inline-block p-6">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
