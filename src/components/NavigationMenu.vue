<script setup lang="ts">
defineProps({ openMenu: Boolean })
</script>

<template>
  <nav class="overflow-hidden mr-2.5">
    <Transition>
      <ul
        class="flex gap-x-5 flex-wrap min-[320px]:w-60 min-[320px]:justify-center min-[425px]:w-87 max-[650px]:mt-5 min-[768px]:w-100 min-[1024px]:w-full"
        v-if="openMenu"
      >
        <li class="cursor-pointer transition duration-400 focus:bg-white hover:translate-x-2">
          <a
            href="#"
            class="p-2.5 flex gap-2 items-center rounded-2xl focus:bg-white transition duration-400"
            ><img src="/icons/home.png" alt="home" class="w-[20px] inline" /> Главная</a
          >
        </li>
        <li class="cursor-pointer transition duration-400 focus:bg-white hover:translate-x-2">
          <a
            href="#"
            class="p-2.5 flex gap-2 items-center rounded-2xl focus:bg-white transition duration-400"
            ><img src="/icons/location.png" alt="location" class="w-[20px] inline" /> Обо мне</a
          >
        </li>
        <li class="cursor-pointer transition duration-400 focus:bg-white hover:translate-x-2">
          <a
            href="#"
            class="p-2.5 flex gap-2 items-center rounded-2xl focus:bg-white transition duration-400"
            ><img src="/icons/suitcase.png" alt="suitcase" class="w-[20px] inline" /> Опыт</a
          >
        </li>
        <li class="cursor-pointer transition duration-400 focus:bg-white hover:translate-x-2">
          <a
            href="#"
            class="p-2.5 flex gap-2 items-center rounded-2xl focus:bg-white transition duration-400"
            ><img src="/icons/wrench.png" alt="wrench" class="w-[20px] inline" /> Стэк</a
          >
        </li>
        <li class="cursor-pointer transition duration-400 focus:bg-white hover:translate-x-2">
          <a
            href="#"
            class="p-2.5 flex gap-2 items-center rounded-2xl focus:bg-white transition duration-400"
            ><img src="/icons/agenda.png" alt="agenda" class="w-[20px] inline" /> Контакты</a
          >
        </li>
        <li
          class="cursor-pointer transition bg-white duration-400 rounded-2xl hover:bg-[#ff7e5f] hover:text-white"
        >
          <button class="p-2.5">Войти</button>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translatex(0);
  transition: 1s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(650px);
  transition: 1s;
}
</style>
