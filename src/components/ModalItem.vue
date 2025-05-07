<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  activeModal: Boolean,

  openModal: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true,
  },
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-1000 opacity-0"
    enter-to-class="transition duration-1000 opacity-100"
    leave-active-class="transition duration-1000 opacity-0"
  >
    <section
      v-if="activeModal"
      class="/* Layout */ fixed top-0 left-0 w-full h-dvh z-10 flex items-center bg-[#04040480]"
    >
      <div class="/* Layout */ m-auto p-5 bg-white rounded-4xl">
        <div class="/* Layout */ mb-3 flex justify-end cursor-pointer">
          <img
            src="/icons/cancel.png"
            alt="cancel"
            class="w-[20px] inline"
            @click="(e) => openModal(e)"
          />
        </div>
        <h3 class="/* Typography */ text-2xl text-black text-center mb-5">Вход</h3>
        <div class="/* Layout */ mb-3 flex flex-col justify-between m-auto">
          <div class="flex justify-between items-center mb-2">
            Имя
            <input type="text" class="input-modal" />
          </div>
          <div class="flex justify-between items-center mb-5">
            Пароль
            <input type="password" class="input-modal" />
          </div>
          <button
            class="/* Layout */ m-auto w-2/5 p-2 rounded-3xl cursor-pointer /* Typography */ text-base font-semibold text-center /* Effects */ duration-400 hover:px-4 /* Background */ bg-peach text-peach2"
          >
            Войти
          </button>
        </div>
      </div>
    </section>
  </Transition>
</template>
