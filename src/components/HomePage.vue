<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <Header />
  <section
    class="flex gap-10 items-center justify-center max-sm:flex-col rounded-b-4xl border-white border-x-2 border-b-2 p-10 max-xsm:p-5"
  >
    <img class="rounded-4xl border-white border-2" src="/logo.jpeg" alt="" />
    <div>
      <div class="flex gap-3 items-center mb-5">
        <img src="/hello.png" alt="" />
        <h2 class="text-black text-2xl">HELLO</h2>
      </div>

      <p class="mb-5 max-w-96 text-lg">
        Я Булавко Богдан, Фронтенд-разработчик из Роcсии. У меня хороший опыт в разработке, создании
        и настройке веб-сайтов.
      </p>
      <div class="max-w-[320px] flex justify-around">
        <button
          class="p-4 text-base font-semibold cursor-pointer rounded-3xl bg-peach text-peach2 duration-400 hover:px-6"
        >
          Мои Контакты
        </button>
        <button class="p-4 text-base font-semibold cursor-pointer rounded-3xl">Мои Работы</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: rgba(255, 255, 255, 0.5);
}
</style>
