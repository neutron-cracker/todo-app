<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="flex-none">
      <NavigationBar/>
    </header>
    <div class="flex-grow overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
