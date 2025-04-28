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
  <!--посмотрите на tailwind.config.js -->
  <header
    class="flex w-full justify-between items-center rounded-t-4xl border-white border-x-2 border-y-2 p-10 max-xsm:p-5 xs:flex-col sm:flex-row"
  >
    <div class="flex items-center">
      <div class="flex items-center w-[80px] h-[80px] mr-2.5">
        <img src="/logo2.png" class="rounded-[50px]" alt="logo Me" />
      </div>
      <div class="mr-2.5">
        <h2 class="text-2xl font-medium text-black">Богдан</h2>
        <p class="">Фронтенд-разработчик</p>
      </div>

      <div class="text-center hidden max-sm:block cursor-pointer" @click="changeCheckedOpenMenu">
        <img src="/icons/menu.png" alt="menu" class="w-[20px] inline" />
      </div>
    </div>

    <div class="flex items-center">
      <NavigationMenu :openMenu="openMenu" />
      <div class="text-center block max-sm:hidden cursor-pointer" @click="changeCheckedOpenMenu">
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
