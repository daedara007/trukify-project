<template>
  <div class="bg-[#F6F1F1] min-h-screen px-6 md:px-16 py-40">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
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
    <div class="grid grid-row xl:grid-cols-3 justify-center gap-8 lg:px-30">
      <div
        v-for="item in filteredArmada"
        :key="item.name"
        class="bg-white rounded-2xl p-6 shadow-sm"
      >
        <img :src="item.image" class="w-full h-48 object-contain mb-4" />

        <h2 class="text-xl font-bold mb-4">{{ item.name }}</h2>

        <div class="space-y-2 text-sm">
          <div class="flex flex-row justify-evenly">
            <!-- Tenaga -->
            <div class="flex flex-1 items-center space-x-3">
              <div class="bg-[#19A7CE] p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-engine"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 4a1 1 0 0 1 0 2h-1v1h.383a2 2 0 0 1 1.787 1.106l1.45 2.894h.38v-1a1 1 0 0 1 .883 -.993l.117 -.007h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -1 -1v-1h-1v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-3.465a2 2 0 0 1 -1.664 -.89l-1.407 -2.11h-1.464a1 1 0 0 1 -.993 -.883l-.007 -.117v-2h-1v2a1 1 0 0 1 -2 0v-6a1 1 0 1 1 2 0v2h1v-2a1 1 0 0 1 1 -1h1.584l1.709 -1.707a1 1 0 0 1 .576 -.284l.131 -.009h1v-1h-1a1 1 0 1 1 0 -2z" /></svg>
              </div>
              <p>Tenaga {{ item.hp }} HP</p>
            </div>

            <!-- Angkut -->
            <div class="flex flex-1 items-center space-x-3">
              <div class="bg-[#19A7CE] p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-weight"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" /></svg>
              </div>
              <p>Daya Angkut {{ item.capacity }} Ton</p>
            </div>
          </div>

          <div class="flex flex-row justify-evenly">
            <!-- Transmisi -->
            <div class="flex flex-1 items-center space-x-3">
              <div class="bg-[#19A7CE] p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-manual-gearbox"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 8l0 8" /><path d="M12 8l0 8" /><path d="M19 8v2a2 2 0 0 1 -2 2h-12" /></svg>
              </div>
              <p>Transmisi {{ item.transmisi }}</p>
            </div>

            <!-- Axle -->
            <div class="flex flex-1 items-center space-x-3">
              <div class="bg-[#19A7CE] p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rv-truck"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M9 17h6" /><path d="M19 17h1a1 1 0 0 0 1 -1v-4.528a2 2 0 0 0 -.211 -.894l-.96 -1.92a3 3 0 0 0 -2.683 -1.658h-11.146a3 3 0 0 0 -3 3v6a1 1 0 0 0 1 1h1" /><path d="M3 12h18" /><path d="M15 12v-5" /><path d="M6 4m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z" /></svg>
              </div>
              <p>Axle {{ item.axle }}</p>
            </div>
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
          image: "https://isuzu-online.com/wp-content/uploads/2022/07/Isuzu-NLR-Bak-Besi.png",
          type: "Engkel",
          id: "elf1",
        },
        {
          name: "Mitsubishi Canter FE 71",
          hp: 108,
          capacity: 2,
          transmisi: "Manual",
          axle: "4x2",
          image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1300,h_900/https://www.mitsubishi-cikarang.com/wp-content/uploads/2017/02/bakbesi.png",
          type: "Engkel",
          id: "canter1",
        },
        {
          name: "Hino 115 SD STD - Euro4",
          hp: 115,
          capacity: 4,
          transmisi: "Manual",
          axle: "4x2",
          image: "https://www.hino.co.id//assets/uploads/products/115SDR-Box_(1)1.png",
          type: "Engkel",
          id: "hinosd1",
        },

        {
          name: "Hino 136 HDX 4x4",
          hp: 136,
          capacity: 6,
          transmisi: "Manual",
          axle: "4x4",
          image: "https://www.hino.co.id//assets/uploads/products/9c18458ff9bf22371fa4608c75b04f1f2.png",
          type: "Dump Truck",
          id: "hinohdx1",
        },
        {
          name: "UD Quester CGE",
          hp: 370,
          capacity: 20,
          transmisi: "Manual 9 percepatan",
          axle: "8x4",
          image: "https://www.udtrucks.com/sites/default/files/styles/truck_specification_images_main/public/2022-12/Quester-CGE_512x446_8.jpg",
          type: "Dump Truck",
          id: "udquester1",
        },
        {
          name: "Volvo A45",
          hp: 496,
          capacity: 42,
          transmisi: "Automatic",
          axle: "6x6",
          image: "https://www.volvoce.com/-/media/aprimo/images/articulated-haulers/a45/volvo-find-articulated-hauler-a45j-1000x1000.avif?mw=512&v=bIJ4Pw&f=avif&q=64&hash=D4D10220E3BCA0200FBDC92867BEB62D",
          type: "Dump Truck",
          id: "volvoa45",
        },

        {
          name: "Mitsubishi Fighter X",
          hp: 240,
          capacity: 16,
          transmisi: "Manual",
          axle: "4x2",
          image: "https://www.ktbfuso.co.id/wp-content/uploads/2023/02/VARIAN-8-FM-65-FSL-HiGear_WingBox-2.png",
          type: "Tronton",
          id: "fighterx1",
        },
        {
          name: "Hino FM 280 JW - Euro4",
          hp: 280,
          capacity: 18,
          transmisi: "Manual",
          axle: "6x4",
          image: "https://www.hino.co.id//assets/uploads/products/FM280JW_HIRES_copy.png",
          type: "Tronton",
          id: "hinofm280",
        },
        {
          name: "Isuzu Giga FVM",
          hp: 245,
          capacity: 16,
          transmisi: "Manual",
          axle: "6x2",
          image: "https://isuzu-astra.com/wp-content/uploads/2021/09/Isuzu-Giga-FVM.png",
          type: "Tronton",
          id: "gigafvm1",
        },

        {
          name: "Volvo FH16",
          hp: 780,
          capacity: 90,
          transmisi: "Automatic",
          axle: "6x4",
          image: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-fh16-cgi-exterior-1?qlt=82&wid=1024&ts=1705310176284&dpr=off&fit=constrain&fmt=png-alpha",
          type: "Trailer",
          id: "volvofh16",
        },
        {
          name: "Scania R770 6x4",
          hp: 770,
          capacity: 100,
          transmisi: "Automatic",
          axle: "6x4",
          image: "https://i.ibb.co.com/Gv2yTdxv/scaniar770.png",
          type: "Trailer",
          id: "scaniar770",
        },
        {
          name: "Renault T High",
          hp: 520,
          capacity: 26,
          transmisi: "Automatic",
          axle: "6x2",
          image: "https://www.renault-trucks.co.uk/sites/default/files/2025-02/3qtr_RGB_0.png",
          type: "Trailer",
          id: "renaulttlonghaul",
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

  
  mounted() {
    const query = this.$route.query.category;
    if (query && this.tabs.includes(query)) {
      this.activeTab = query;
    }
  },

  watch: {
    '$route.query.category'(newCategory) {
      if (newCategory && this.tabs.includes(newCategory)) {
        this.activeTab = newCategory;
      }
    },
  },

};
</script>