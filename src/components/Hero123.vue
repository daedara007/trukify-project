<template>
  <div class="text-white font-montserrat">
    <div class="relative h-144 bg-cover bg-center" :style="{ backgroundImage: `url(${hero})` }">
      <div class="absolute inset-0 bg-black opacity-60"></div>

      <div class="relative z-10 flex items-center justify-center h-full text-center mx-60 px-6">
        <div>
            <h1 class="text-white text-7xl font-bold">Trukify, Partner Transportasi <br>Logistik Anda</h1>
            <p class="text-white text-4xl font-light mt-10">Dengan armada modern dan proses sewa yang mudah, Trukify siap<br> menjadi mitra logistik andalan untuk semua kebutuhan Anda</p>
            <button class="bg-transparent outline-solid rounded-xs hover:bg-[#a8a8a860] h-8 w-40 mt-10"><a href="/sewa">Sewa Sekarang</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import hero from '../assets/Heroimg.jpg'
</script>