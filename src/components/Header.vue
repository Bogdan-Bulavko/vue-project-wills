<script setup lang="ts">
import NavigationMenu from './NavigationMenu.vue'

import { ref } from 'vue'
import type { Ref } from 'vue'
const openMenu: Ref<boolean> = ref(false)
const changeCheckedOpenMenu = (): void => {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <header
    class="flex justify-between items-center py-10 px-10 rounded-t-4xl min-[320px]:flex-col min-[650px]:flex-row"
  >
    <div class="flex items-center">
      <div class="w-[80px] h-[80px] mr-2.5">
        <img src="/logo2.png" class="rounded-[50px]" alt="logo Me" />
      </div>
      <div class="mr-2.5">
        <h2 class="text-2xl font-medium text-black">Богдан</h2>
        <p>Фронтенд-разработчик</p>
      </div>

      <div
        class="text-center hidden max-[650px]:block cursor-pointer"
        @click="changeCheckedOpenMenu"
      >
        <img src="/icons/menu.png" alt="menu" class="w-[20px] inline" />
      </div>
    </div>

    <div class="flex items-center">
      <NavigationMenu :openMenu="openMenu" />
      <div
        class="text-center block max-[650px]:hidden cursor-pointer"
        @click="changeCheckedOpenMenu"
      >
        <img src="/icons/menu.png" alt="menu" class="w-[20px] inline" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background: rgba(255, 255, 255, 0.5);
}
</style>
