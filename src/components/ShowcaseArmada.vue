<template>
  <div class="bg-[#F4EEEA] min-h-screen px-6 md:px-16 py-40">
    <!-- Title -->
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10">
      Armada Lengkap Kami
    </h1>

    <!-- Tabs -->
    <div class="flex justify-center space-x-6 mb-8 text-lg font-medium">
      <button 
        v-for="item in tabs" 
        :key="item"
        @click="activeTab = item"
        class="pb-1"
        :class="activeTab === item 
          ? 'text-black border-b-2 border-[#2BA8D9]' 
          : 'text-gray-500'"
      >
        {{ item }}
      </button>
    </div>

    <!-- Search -->
    <div class="flex justify-center mb-12">
      <div class="relative w-full max-w-xl">
        <span class="absolute left-4 top-3 text-gray-500">
          🔍
        </span>
        <input
          type="text"
          v-model="search"
          placeholder="Cari truk yang diinginkan"
          class="w-full bg-white py-3 pl-12 pr-4 rounded-full shadow focus:outline-none"
        />
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-row lg:grid-cols-3 justify-center gap-8 lg:px-60">
      <div
        v-for="item in filteredArmada"
        :key="item.name"
        class="bg-white rounded-2xl p-6 shadow-sm"
      >
        <img :src="item.image" class="w-full h-48 object-contain mb-4" />

        <h2 class="text-xl font-bold mb-4">{{ item.name }}</h2>

        <div class="space-y-2 text-sm">
          <!-- Tenaga -->
          <div class="flex items-center space-x-3">
            <div class="bg-[#D8F3FE] p-2 rounded-lg">
              ⚙️
            </div>
            <p>Tenaga {{ item.hp }} HP</p>
          </div>

          <!-- Angkut -->
          <div class="flex items-center space-x-3">
            <div class="bg-[#D8F3FE] p-2 rounded-lg">
              📦
            </div>
            <p>Daya Angkut {{ item.capacity }} Ton</p>
          </div>

          <!-- Transmisi -->
          <div class="flex items-center space-x-3">
            <div class="bg-[#D8F3FE] p-2 rounded-lg">
              🕹️
            </div>
            <p>Transmisi {{ item.transmisi }}</p>
          </div>

          <!-- Axle -->
          <div class="flex items-center space-x-3">
            <div class="bg-[#D8F3FE] p-2 rounded-lg">
              🚛
            </div>
            <p>Axle {{ item.axle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Engkel", "Dump Truck", "Tronton", "Trailer"],
      activeTab: "Engkel",
      search: "",
      armada: [
        {
          name: "Isuzu ELF NLR",
          hp: 120,
          capacity: 3,
          transmisi: "Manual",
          axle: "4x2",
          image: "/assets/truck1.png",
          type: "Engkel",
        },
        {
          name: "Isuzu ELF NLR",
          hp: 120,
          capacity: 3,
          transmisi: "Manual",
          axle: "4x2",
          image: "/assets/truck1.png",
          type: "Engkel",
        },
        {
          name: "Canter FE 71",
          hp: 108,
          capacity: 2,
          transmisi: "Manual",
          axle: "4x2",
          image: "/assets/truck2.png",
          type: "Engkel",
        },
      ],
    };
  },

  computed: {
    filteredArmada() {
      return this.armada
        .filter(item => item.type === this.activeTab)
        .filter(item => 
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
    },
  },
};
</script>