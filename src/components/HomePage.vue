<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import Header from './Header.vue'

const activeBlock: Ref<string> = ref('home')

const chooseActiveBlock = (e: Event): void => {
  const target = e.currentTarget as HTMLElement
  const id = target.id
  activeBlock.value = id
}
</script>

<template>
  <Header :chooseActiveBlock="chooseActiveBlock" />
  <div
    class="max-sm:h-dvh h-[510px] relative section border-white border-x-2 border-b-2 rounded-b-4xl overflow-x-hidden"
  >
    <Transition name="home"
      ><section
        class="w-full absolute top-0 left-0 flex gap-10 items-center justify-center max-sm:flex-col p-10 max-xsm:p-5"
        v-if="activeBlock === 'home'"
      >
        <img class="rounded-4xl border-white border-2" src="/logo.jpeg" alt="logo" />
        <div>
          <div class="flex gap-3 items-center mb-5">
            <img src="/hello.png" alt="hello" />
            <h2 class="text-black text-2xl">HELLO</h2>
          </div>

          <p class="mb-5 max-w-96 text-lg">
            Я Булавко Богдан, Фронтенд-разработчик из Роcсии. У меня хороший опыт в разработке,
            создании и настройке веб-сайтов.
          </p>
          <div class="max-w-[330px] flex justify-around">
            <a
              href="#"
              class="text-center p-4 text-base font-semibold cursor-pointer rounded-3xl bg-peach text-peach2 duration-400 hover:px-6 focus:bg-white focus:text-peach"
            >
              Мои Контакты
            </a>
            <a
              href="#"
              class="text-center flex items-center gap-1 w-[160px] p-4 text-base font-semibold cursor-pointer rounded-3xl"
              ><span class="hover:mr-2 duration-500">Мои Работы</span> <span class="text-lg"></span
            ></a>
          </div>
        </div></section
    ></Transition>
    <Transition name="about">
      <section class="w-full absolute top-0 left-0 p-10 max-xsm:p-5" v-if="activeBlock === 'about'">
        <div class="inline-block mb-5 p-3 bg-white rounded-4xl border-peach2 border-2">
          <img class="w-[20px] mr-2 pb-2 inline-block" src="/icons/location.png" alt="location" />
          <h2 class="text-black text-2xl font-medium inline-block">Обо мне</h2>
        </div>

        <div class="flex gap-10 justify-around items-center max-md:flex-col">
          <img class="rounded-4xl border-white border-2" src="/logo.jpeg" alt="logo" />
          <div>
            <div class="p-5 bg-white rounded-4xl border-peach2 border-2">
              <p class="text-lg">
                Я Булавко Богдан, Фронтенд-разработчик из Роcсии. У меня хороший опыт в разработке,
                создании и настройке веб-сайтов. Я с удовольствием поговорю с вами о вашем проекте.
              </p>
            </div>
            <div
              class="flex justify-between max-lg:flex-col gap-5 p-5 bg-white rounded-4xl border-peach2 border-2"
            >
              <div>
                <div class="flex justify-between gap-10">
                  <b class="mb-5 text-lg">Возраст</b>
                  <p class="mb-5 text-lg">25</p>
                </div>
                <div class="flex justify-between gap-10">
                  <b class="mb-5 text-lg">Проживание</b>
                  <p class="mb-5 text-lg">Россия</p>
                </div>
              </div>
              <div>
                <div class="flex justify-between gap-10">
                  <b class="mb-5 text-lg">Mail</b>
                  <p class="mb-5 text-lg">zarechnyy00@internet.ru</p>
                </div>
                <div class="flex justify-between gap-10">
                  <b class="mb-5 text-lg">Телефон</b>
                  <p class="mb-5 text-lg">8-(920)-461-30-58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
.section {
  background: rgba(255, 255, 255, 0.5);
}

.home-enter-active {
  transition: 1s;
  transform: translateX(-1500px);
}

.home-enter-to {
  transition: 1s;
  transform: translateX(0);
}

.home-leave-active {
  transition: 1s;
  transform: translateX(0);
}

.home-leave-to {
  transition: 1s;
  transform: translateX(1500px);
}

.about-enter-active {
  transition: 1s;
  transform: translateX(-1500px);
}

.about-enter-to {
  transition: 1s;
  transform: translateX(0);
}

.about-leave-active {
  transition: 1s;
  transform: translateX(0);
}

.about-leave-to {
  transition: 1s;
  transform: translateX(1500px);
}
</style>
