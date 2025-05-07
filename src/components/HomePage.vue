<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import ModalItem from './ModalItem.vue'
import HeaderItem from './HeaderItem.vue'

const activeBlock: Ref<string> = ref('home')
const activeModal: Ref<boolean> = ref(false)

const openModal = (): void => {
  activeModal.value = !activeModal.value
}

const chooseActiveBlock = (e: Event): void => {
  const target = e.currentTarget as HTMLElement
  const id = target.id
  activeBlock.value = id
}
</script>

<template>
  <ModalItem :activeModal="activeModal" :openModal="openModal" />
  <HeaderItem
    :chooseActiveBlock="chooseActiveBlock"
    :activeModal="activeModal"
    :openModal="openModal"
  />
  <div
    class="/* Layout */ max-sm:h-dvh h-[510px] relative rounded-b-4xl overflow-x-hidden /* Border */ border-x-2 border-b-2 border-white /* Background */ bg-[#ffffff80]"
  >
    <Transition
      enter-active-class="transform-gpu transition-transform duration-1000 -translate-x-[1500px]"
      enter-to-class="transform-gpu transition-transform duration-1000 translate-x-0"
      leave-active-class="transform-gpu transition-transform duration-1000 translate-x-0"
      leave-to-class="transform-gpu transition-transform duration-1000 translate-x-[1500px]"
    >
      <section
        v-if="activeBlock === 'home'"
        class="/* Layout */ section-home-page flex justify-between items-center max-sm:flex-col"
      >
      <!--https://tailwindcss.com/docs/flex-basis-->
      <div class="basis-2/5">
        <img class="img-me-section" src="/logo.jpeg" alt="logo" />
      </div >
        <div class="basis-3/5 sm:border-l-2 pl-8 sm:border-white">
          <div class="flex  items-center ">
            <img src="/hello.png" alt="hello" />
            <h2 class="text-black text-4xl">HELLO</h2>
          </div>
          <p class="mb-5 pt-2 max-w-168 text-xl text-balance ">
            Я Булавко Богдан, Фронтенд-разработчик из Роcсии. У меня хороший опыт в разработке,
            создании и настройке веб-сайтов.
          </p>
          <div class="max-w-[330px] flex justify-around">
            <a
              href="#"
              class="/* Layout */ p-4 rounded-3xl /* Typography */ text-center text-base font-semibold /* Effects */ duration-400 hover:px-6 focus:bg-white focus:text-peach /* Background */ bg-peach text-peach2 cursor-pointer"
            >
              Мои Контакты
            </a>
            <a
              href="#"
              class="/* Layout */ p-4 rounded-3xl flex items-center gap-1 w-[160px] cursor-pointer /* Typography */ text-base font-semibold text-center"
            >
              <span class="hover:mr-2 duration-500">Мои Работы</span>
              <img class="w-[22px]" src="/arrows.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </Transition>

    <Transition
      enter-active-class="transform-gpu transition-transform duration-1000 -translate-x-[1500px]"
      enter-to-class="transform-gpu transition-transform duration-1000 translate-x-0"
      leave-active-class="transform-gpu transition-transform duration-1000 translate-x-0"
      leave-to-class="transform-gpu transition-transform duration-1000 translate-x-[1500px]"
    >
      <section v-if="activeBlock === 'about'" class="section-home-page">
        <div
          class="/* Layout */ inline-block mb-5 p-3 rounded-4xl /* Background */ bg-white /* Border */ border-2 border-peach2"
        >
          <img class="w-[20px] mr-2 pb-2 inline-block" src="/icons/location.png" alt="location" />
          <h2 class="inline-block text-black text-2xl font-medium">Обо мне</h2>
        </div>
        <div class="flex items-center justify-center max-md:flex-col max-md:gap-5">
          <img class="img-me-section sm:mr-5 md:mr-10" src="/logo.jpeg" alt="logo" />

          <div
            class="/* Layout */ max-w-[590px] sm:pl-5 md:pl-10 /* Border */ md:border-l-2 md:border-white"
          >
            <div class="/* Layout */ bg-text-home mb-5 /* Border */ border-2 border-peach2">
              <p class="text-lg">
                Я Булавко Богдан, Фронтенд-разработчик из Роcсии. У меня хороший опыт в разработке,
                создании и настройке веб-сайтов. Я с удовольствием поговорю с вами о вашем проекте.
              </p>
            </div>
            <div
              class="/* Layout */ bg-text-home flex justify-between gap-5 max-lg:flex-col /* Border */ border-2 border-peach2"
            >
              <div>
                <div class="flex-info-text">
                  <b class="mb-5 text-lg">Возраст</b>
                  <p class="mb-5 text-lg">25</p>
                </div>
                <div class="flex-info-text">
                  <b class="mb-5 text-lg">Проживание</b>
                  <p class="mb-5 text-lg">Россия</p>
                </div>
              </div>
              <div>
                <div class="flex-info-text">
                  <b class="mb-5 text-lg">Mail</b>
                  <p class="mb-5 text-lg">zarechnyy00@internet.ru</p>
                </div>
                <div class="flex-info-text">
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
