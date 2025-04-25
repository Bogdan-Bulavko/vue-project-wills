<script setup lang="ts">
defineProps({ openMenu: Boolean })
</script>

<template>
  <nav class="overflow-hidden mr-2.5">
    <Transition>
      <ul
        class="flex gap-x-5 flex-wrap xs:w-60 xs:justify-center xsm:w-87 max-sm:mt-5 md:w-100 lg:w-full"
        v-if="openMenu"
      >
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav"
            ><img src="/icons/home.png" alt="home" class="w-[20px] inline" /> Главная</a
          >
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav"
            ><img src="/icons/location.png" alt="location" class="w-[20px] inline" /> Обо мне</a
          >
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav"
            ><img src="/icons/suitcase.png" alt="suitcase" class="w-[20px] inline" /> Опыт</a
          >
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav"
            ><img src="/icons/wrench.png" alt="wrench" class="w-[20px] inline" /> Стэк</a
          >
        </li>
        <li class="li-item-nav">
          <a href="#" class="a-li-item-nav"
            ><img src="/icons/agenda.png" alt="agenda" class="w-[20px] inline" /> Контакты</a
          >
        </li>
        <li
          class="cursor-pointer transition bg-white duration-400 rounded-2xl hover:bg-peach hover:text-white"
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
