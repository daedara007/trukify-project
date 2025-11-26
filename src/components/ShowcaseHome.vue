<template>
  <section class="w-full bg-[#CCE2ED] py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-16">
        Armada Yang Memenuhi Kebutuhan Anda
      </h2>

      <!-- Scroll Wrapper for Mobile -->
      <div
        class="flex lg:grid lg:grid-cols-4 gap-12 overflow-x-auto lg:overflow-visible pb-6"
      >
        <!-- Item -->
        <div
          v-for="(item, index) in armada"
          :key="index"
          class="min-w-[260px] lg:min-w-0 shrink-0 text-center"
        >
          <!-- Title -->
          <h3 class="text-[22px] font-semibold text-gray-900">
            {{ item.name }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-gray-700 mt-1 leading-tight">
            {{ item.desc1 }} <br/>
            {{ item.desc2 }}
          </p>

          <!-- Button -->
          <button
            class="mt-4 font-semibold text-gray-900 hover:text-[#146C94] transition"
          >
            Lihat Lebih Banyak
          </button>

          <!-- Image -->
          <img
            :src="item.image"
            class="w-full h-48 object-contain mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArmadaSection",
  data() {
    return {
      armada: [
        {
          name: "Engkel",
          desc1: "Cocok untuk",
          desc2: "dalam kota",
          image: new URL('../assets/Engkel.png', import.meta.url).href,
        },
        {
          name: "Dump Truck",
          desc1: "Cocok untuk",
          desc2: "membawa material",
          image: new URL('../assets/Dump.png', import.meta.url).href,
        },
        {
          name: "Tronton",
          desc1: "Cocok untuk muatan",
          desc2: "banyak",
          image: new URL('../assets/Tronton.png', import.meta.url).href,
        },
        {
          name: "Trailer",
          desc1: "Cocok untuk muatan",
          desc2: "dan beban yang besar",
          image: new URL('../assets/Trailer.png', import.meta.url).href,
        },
      ],
    };
  },
};
</script>
