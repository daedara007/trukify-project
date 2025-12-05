<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
<nav class="bg-[#146C94] fixed w-full z-20 top-0 start-0 border-default font-montserrat">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/Logo.png" class="h-10" alt="Trukify Logo" />
        <span class="text-white self-center text-xl text-heading font-bold whitespace-nowrap">Trukify</span>
    </a>
    <button @click="isOpen = !isOpen"
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base lg:hidden">
      <span class="sr-only">Open main menu</span>
      <!-- Icon Burger -->
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
      <!-- Icon X -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.36a1 1 0 011.414 1.415L13.414 10.586l4.361 4.36a1 1 0 01-1.414 1.415L12 12l-4.361 4.36a1 1 0 01-1.414-1.415l4.361-4.36-4.361-4.36a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <div class="hidden w-full lg:block lg:w-auto space-x-6 text-white font-extralight" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 bg-neutral-secondary-soft lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-neutral-primary lg:space-y-0 space-y-4">
        <li>
          <a href="/armada" class="block py-2 px-3 bg-brand rounded lg:bg-transparent lg:text-fg-brand lg:p-0">Armada</a>
        </li>
        <li>
          <a href="/tentang" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary lg:hover:bg-transparent lg:border-0 lg:hover:text-fg-brand lg:p-0 lg:dark:hover:bg-transparent">Tentang</a>
        </li>
        <li>  
          <a href="/bantuan" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary lg:hover:bg-transparent lg:border-0 lg:hover:text-fg-brand lg:p-0 lg:dark:hover:bg-transparent">Bantuan</a>
        </li>
        <li>
          <a href="/sewa" class="py-2 px-3 text-heading bg-transparent outline-solid rounded-xs hover:bg-[#a8a8a860] h-8 w-40 mt-10">Sewa Sekarang</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>