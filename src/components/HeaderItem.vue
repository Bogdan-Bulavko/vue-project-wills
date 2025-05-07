<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { PropType } from 'vue'
import NavigationMenu from './NavigationMenu.vue'

defineProps({
  chooseActiveBlock: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true,
  },
  openModal: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true,
  },
})

const openMenu: Ref<boolean> = ref(false)
const changeCheckedOpenMenu = (): void => {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <header
    class="/* Layout */ flex w-full justify-between items-center p-10 max-sm:p-5 max-sm:relative rounded-t-4xl /* Border */ border-x-2 border-y-2 border-white /* Background */ bg-[#ffffff80]"
  >
    <div class="flex items-center">
      <div class="flex items-center w-[80px] h-[80px] mr-2.5">
        <img src="/logo2.png" class="rounded-[50px]" alt="logo Me" />
      </div>
      <div class="mr-2.5">
        <h2 class="text-2xl font-medium text-black">Богдан</h2>
        <p>Фронтенд-разработчик</p>
      </div>
    </div>

    <div class="flex items-center">
      <div class="overflow-hidden">
        <NavigationMenu
          :openMenu="openMenu"
          :changeCheckedOpenMenu="changeCheckedOpenMenu"
          :chooseActiveBlock="chooseActiveBlock"
          :openModal="openModal"
        />
      </div>
      <div class="text-center cursor-pointer pl-5" @click="changeCheckedOpenMenu">
        <img src="/icons/menu.png" alt="menu" class="w-[20px]" />
      </div>
    </div>
  </header>
</template>
