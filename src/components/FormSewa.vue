<script setup>
import { reactive, computed, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  trucktype: '',
  rentaldate: '',
  rentaldateend: '',
});

const isFormValid = computed(() => {
  return (
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.trucktype.trim() !== '' &&
    form.rentaldate.trim() !== '' &&
    form.rentaldateend.trim() !== ''
  );
});

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.phone = '';
  form.trucktype = '';
  form.rentaldate = '';
  form.rentaldateend = '';
};

const isModalOpen = ref(false);

const submitForm = () => {
  if (!isFormValid.value) {
    alert('Isi semua form terlebih dahulu.');
    return;
  }

  console.log('Mengirim pesan:', form);
  isModalOpen.value = true;
  resetForm();
  
};
</script>

<template>
  <section class="bg-[#FAF6F6] py-16 px-4 lg:px-80 font-sans">
    <div class="flex flex-col px-6 space-y-6">
      <div>
            <label class="block text-gray-600 mb-2 font-medium">Nama Lengkap</label>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="Masukkan nama anda" 
              class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
            />
      </div>

      <div>
            <label class="block text-gray-600 mb-2 font-medium">Nomor Telepon</label>
            <input 
              v-model="form.phone"
              type="text" 
              placeholder="Masukkan nomor telepon anda" 
              class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
            />
      </div>

      <div>
            <label class="block text-gray-600 mb-2 font-medium">Email</label>
            <input 
              v-model="form.email"
              type="text" 
              placeholder="Masukkan email anda" 
              class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
            />
      </div>

      <div>
        <label class="block text-gray-600 mb-2 font-medium">Tipe Truk</label>
        <select v-model="form.trucktype" class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-700">
          <option disabled value="">Pilih tipe truk</option>
          <option value="Engkel">Engkel</option>
          <option value="Dump Truck">Dump Truck</option>
          <option value="Tronton">Tronton</option>
          <option value="Trailer">Trailer</option>
        </select>
      </div>

      <div class="flex flex-row space-x-4">
        <div class="flex-1">
          <label class="block text-gray-600 mb-2 font-medium">Tanggal Mulai</label>
          <input
            v-model="form.rentaldate"
            type="date"
            class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
          />
        </div>

        <div class="flex-1">
          <label class="block text-gray-600 mb-2 font-medium">Tanggal Selesai</label>
          <input
            v-model="form.rentaldateend"
            type="date"
            class="w-full bg-white rounded-xl border-none p-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
          />
        </div>
      </div>

      <div class="mt-4 flex flex-row justify-between items-center">  
            
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
              </div>
              <span class="text-gray-800 font-semibold text-lg">08123456789</span>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
              </div>
              <div class="text-gray-800 font-medium leading-relaxed">
                Jl. Soekarno Hatta Km. 2, Gn. Samarinda,<br>
                Kec. Balikpapan Utara, Kota Balikpapan,<br>
                Kalimantan Timur 76125
              </div>
            </div>

            <button @click="submitForm" class="bg-[#1C5D80] hover:bg-[#164a66] text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-300">Kirim</button>
      </div>

    </div>
  </section>  

  <div 
    v-if="isModalOpen"
    class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-[#17A6D8] text-white rounded-2xl p-10 w-[90%] max-w-md text-center relative">

      <!-- Close button -->
      <button 
        @click="isModalOpen = false" 
        class="absolute top-3 right-3 text-white text-xl font-bold"
      >
        ×
      </button>

      <div class="flex justify-center mb-4">
        <div class="w-20 h-20 flex items-center justify-center rounded-full bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" stroke="black" stroke-width="5" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7"/>
          </svg>
        </div>
      </div>

      <h2 class="text-xl font-bold mb-2">Terima Kasih</h2>
      <p class="text-sm">
        Formulir anda berhasil di kirim<br>
        mohon menunggu hingga kami membalas
      </p>
    </div>
  </div>

</template>