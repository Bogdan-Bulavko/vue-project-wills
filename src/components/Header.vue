<script setup lang="ts">
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
    <!--посмотрите на tailwind.config.js -->
  <header
    class="flex w-full justify-between items-center p-10 rounded-t-4xl xs:flex-col sm:flex-row"
  >
    <div class="flex items-center">
      <!--посмотрите на tailwind.config.js -->
      <div class="w-20 h-20 mr-2.5">
        <img src="/logo.jpeg" class="rounded-[50px]" alt="logo Me" />
      </div>
      <div>
        <h2 class="text-2xl font-medium text-black">Богдан</h2>
        <p>Веб-разработчик</p>
      </div>
    </div>
    <NavigationMenu />
  </header>
</template>

<style scoped>
header {
  background: rgba(255, 255, 255, 0.5);
}
</style>
