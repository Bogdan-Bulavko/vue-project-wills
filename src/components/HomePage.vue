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
      <div class="max-w-[330px] flex justify-around">
        <a
          href="#"
          class="text-center p-4 text-base font-semibold cursor-pointer rounded-3xl bg-peach text-peach2 duration-400 hover:px-6 focus:bg-white focus:text-peach"
        >
          Мои Контакты
        </a>
        <a href="#" class="text-center flex items-center gap-1 w-[160px] p-4 text-base font-semibold cursor-pointer rounded-3xl"
          ><span class="hover:mr-2 duration-500">Мои Работы</span> <span class="text-lg">&#9658</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: rgba(255, 255, 255, 0.5);
}
</style>
