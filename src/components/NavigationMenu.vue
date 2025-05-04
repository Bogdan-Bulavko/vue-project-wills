<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  openMenu: Boolean,
  changeCheckedOpenMenu: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true
  },
  chooseActiveBlock: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true
  }
})
</script>

<template>
  <Transition>
    <nav
      class="relative max-sm:h-full sm:mr-2.5 z-10 max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:bg-white max-sm:rounded-t-4xl sm:w-[320px] md:w-100 lg:w-full"
      v-if="openMenu"
    >
      <ul class="flex gap-x-5 flex-wrap xs:justify-center max-sm:mt-3">
        <li
          class="li-item-nav"
          id="home"
          @click="(e) => chooseActiveBlock(e)"
        >
          <a href="#" class="a-li-item-nav">
            <img src="/icons/home.png" alt="home" class="w-[20px] inline" /> Главная
          </a>
        </li>
        <li
          class="li-item-nav"
          id="about"
          @click="(e) => chooseActiveBlock(e)"
        >
          <a href="#" class="a-li-item-nav">
            <img src="/icons/location.png" alt="location" class="w-[20px] inline" /> Обо мне
          </a>
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav">
            <img src="/icons/suitcase.png" alt="suitcase" class="w-[20px] inline" /> Опыт
          </a>
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav">
            <img src="/icons/wrench.png" alt="wrench" class="w-[20px] inline" /> Стэк
          </a>
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav">
            <img src="/icons/agenda.png" alt="agenda" class="w-[20px] inline" /> Контакты
          </a>
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav">Войти</a>
        </li>
      </ul>
      <div
        class="absolute top-0 right-4 text-center cursor-pointer hidden max-sm:block"
        @click="(e) => changeCheckedOpenMenu(e)"
      >
        <img src="/icons/cancel.png" alt="menu" class="w-[20px] inline" />
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translatex(0);
  transition: 1s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(665px);
  transition: 1s;
}
</style>
