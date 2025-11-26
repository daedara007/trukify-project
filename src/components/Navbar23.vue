<template>
<nav class="bg-[#146C94] fixed w-full z-20 top-0 start-0 border-default font-montserrat">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/Logo.png" class="h-10" alt="Trukify Logo" />
        <span class="text-white self-center text-xl text-heading font-bold whitespace-nowrap">Trukify</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base lg:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
    </button>
    <div class="hidden w-full lg:block lg:w-auto space-x-6 text-white font-extralight" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="/armada" class="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Armada</a>
        </li>
        <li>
          <a href="/tentang" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Tentang</a>
        </li>
        <li>
          <a href="/bantuan" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Bantuan</a>
        </li>
        <li>
          <a href="/sewa" class="py-2 px-3 text-heading bg-transparent outline-solid rounded-xs hover:bg-[#a8a8a860] h-8 w-40 mt-10">Sewa Sekarang</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>