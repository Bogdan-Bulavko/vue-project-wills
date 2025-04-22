<script setup lang="ts">
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
  <header
    class="flex justify-between items-center py-10 px-10 rounded-t-4xl min-[320px]:flex-col min-[650px]:flex-row"
  >
    <div class="flex items-center">
      <div class="w-[80px] h-[80px] mr-2.5">
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
