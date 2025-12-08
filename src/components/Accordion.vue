<template>
  <div class="w-full mx-auto space-y-4 lg:px-80 p-4 py-20">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-7"
    >
      <button
        class="w-full text-left py-3 bg-white flex justify-between items-center"
        @click="toggle(index)"
      >
        <span class="font-semibold text-gray-800">{{ item.title }}</span>
        <span>
          <svg
            v-if="active === index"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transform rotate-180 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        v-if="active === index"
        class="px-4 pb-4 pt-1 bg-gray-50 text-gray-700 leading-relaxed"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(null);

const toggle = (index) => {
  active.value = active.value === index ? null : index;
};

const items = [
  {
    title: "Apa saja yang termasuk dalam harga sewa?",
    content:
      "Harga sewa yang kami tawarkan sudah termasuk jasa sopir profesional. Biaya tambahan yang tidak termasuk dalam penawaran awal adalah bahan bakar (BBM), e-toll, parkir, dan biaya bongkar muat (tenaga kuli).",
  },
  {
    title: "Bagaimana sistem pembayaran?",
    content:
      "Kami memerlukan uang muka (DP) sebesar 50% saat konfirmasi jadwal. Pelunasan 50% sisanya dilakukan saat truk tiba di lokasi penjemputan. Pembayaran dapat dilakukan melalui transfer bank ke rekening perusahaan kami.",
  },
  {
    title: "Apakah ada biaya tambahan untuk perjalanan luar kota?",
    content:
      "Biaya tambahan untuk perjalanan luar kota dapat mencakup uang makan sopir, biaya inap, serta penyesuaian tarif berdasarkan jarak dan kondisi perjalanan.",
  },

  {
    title: "Apakah saya bisa menyewa truk tanpa sopir (lepas kunci)?",
    content:
      "Untuk saat ini belum.",
  },

  {
    title: "Bagaimana kondisi armada truk di Trukify?",
    content:
      "Armada di trukify dijamin prima, dan berkualitas untuk menunjang kebutuhan anda.",
  },

  {
    title: "Bagaimana cara saya menyewa truk?",
    content:
      "Cara dengan mengisi formulir pengajuan sewa pada halaman Sewa, lalu tim operasional kami akan menghubungi Anda untuk konfirmasi jadwal dan penawaran harga terbaik.",
  },
];
</script>