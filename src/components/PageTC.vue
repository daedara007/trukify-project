<script setup>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';

    import { ref } from 'vue';

    const lastUpdated = '16 Oktober 2025';

    // Data Syarat dan Ketentuan
    const terms = ref([
    {
        title: 'Penerimaan Ketentuan',
        content: [
        'Dengan mengakses situs web kami, mengisi formulir pemesanan, atau menggunakan Layanan kami, Anda ("Penyewa", "Anda") secara otomatis menyatakan telah membaca, memahami, dan setuju untuk terikat sepenuhnya oleh semua Ketentuan yang tercantum dalam dokumen ini. Jika Anda tidak setuju dengan bagian mana pun dari Ketentuan ini, Anda tidak diperkenankan untuk menggunakan Layanan kami.'
        ]
    },
    {
        title: 'Definisi dan Lingkup Layanan',
        content: [
        '2.1. Trukify menyediakan layanan penyewaan kendaraan komersial (truk) yang wajib disertai dengan jasa pengemudi profesional yang disediakan oleh perusahaan.',
        '2.2. Lingkup layanan terbatas pada kegiatan transportasi dan pengiriman barang dari satu titik penjemputan ke satu titik tujuan yang telah disepakati. Layanan tidak mencakup penyewaan lepas kunci (tanpa sopir).',
        '2.3. Jasa pengemudi terbatas pada pengoperasian kendaraan. Proses bongkar muat barang bukan merupakan tanggung jawab utama pengemudi.'
        ]
    },
    {
        title: 'Pemesanan, Harga, dan Pembayaran',
        content: [
        '3.1. Proses Pemesanan: Pemesanan dilakukan dengan mengisi formulir permintaan sewa di situs web kami. Tim kami akan menghubungi Anda untuk konfirmasi ketersediaan, rincian kebutuhan, dan akan mengirimkan penawaran harga resmi melalui email atau WhatsApp.',
        '3.2. Harga dan Penawaran: Harga yang tertera di situs web bersifat estimasi. Penawaran harga resmi akan disesuaikan berdasarkan jenis truk, jarak tempuh, durasi sewa, dan tingkat kesulitan rute.',
        '3.3. Metode Pembayaran: Pemesanan dianggap sah dan jadwal akan dikunci setelah Penyewa melakukan pembayaran uang muka (DP) sebesar 50% dari total biaya. Sisa pembayaran 50% harus dilunasi saat armada truk tiba di lokasi penjemputan sebelum proses muat barang dimulai.'
        ]
    },
    {
        title: 'Kewajiban dan Tanggung Jawab Penyewa',
        content: [
        '4.1. Penyewa wajib memberikan informasi yang benar, akurat, dan lengkap mengenai nama, kontak, alamat penjemputan, alamat tujuan, serta deskripsi umum jenis muatan.',
        '4.2. Penyewa bertanggung jawab penuh atas legalitas dan keamanan barang yang diangkut. Dilarang memuat barang-barang ilegal, berbahaya, atau yang melanggar hukum yang berlaku di Republik Indonesia.',
        '4.3. Penyewa wajib memastikan bahwa akses jalan menuju lokasi penjemputan dan tujuan dapat dilalui dengan aman oleh jenis truk yang dipesan. Biaya atau kerugian yang timbul akibat akses jalan yang tidak memadai menjadi tanggung jawab Penyewa.'
        ]
    },
    {
        title: 'Kewajiban dan Tanggung Jawab Trukify',
        content: [
        '5.1. Kami berkewajiban untuk menyediakan unit armada dalam kondisi prima, bersih, laik jalan, dan sesuai dengan spesifikasi yang telah disepakati.',
        '5.2. Kami berkewajiban untuk menyediakan pengemudi yang memiliki surat izin mengemudi yang sah, berpengalaman, dan memahami standar keselamatan berkendara.',
        '5.3. Kami akan menginformasikan kepada Penyewa sesegera mungkin jika terjadi potensi keterlambatan yang signifikan yang disebabkan oleh kendala operasional dari pihak kami.'
        ]
    },
    {
        title: 'Pembatalan dan Perubahan Jadwal',
        content: [
        '6.1. Pembatalan oleh Penyewa: Pembatalan yang dilakukan lebih dari 24 jam sebelum jadwal penjemputan akan mendapatkan pengembalian uang muka (DP) penuh. Pembatalan yang dilakukan kurang dari 24 jam sebelum jadwal akan dikenakan potongan sebesar 50% dari DP yang telah dibayarkan. DP tidak dapat dikembalikan untuk pembatalan yang dilakukan pada hari H penjemputan.',
        '6.2. Perubahan Jadwal: Permintaan perubahan jadwal dapat dilayani maksimal 48 jam sebelum waktu penjemputan awal dan bergantung pada ketersediaan unit.'
        ]
    },
    {
        title: 'Batasan Tanggung Jawab (Force Majeure)',
        content: [
        'Trukify dibebaskan dari tanggung jawab atas kerugian, kerusakan, atau keterlambatan yang disebabkan oleh keadaan kahar (force majeure), termasuk namun tidak terbatas pada: bencana alam (banjir, gempa bumi), kerusuhan sipil, perang, kebakaran, serta kebijakan pemerintah atau penutupan jalan yang tak terduga. Kami juga tidak bertanggung jawab atas kerusakan barang yang disebabkan oleh pengepakan yang tidak memadai oleh pihak Penyewa.'
        ]
    },
    {
        title: 'Perubahan Ketentuan',
        content: [
        'Kami berhak untuk mengubah atau mengganti Ketentuan ini kapan saja atas kebijakan kami. Versi terbaru dari Syarat dan Ketentuan akan selalu tersedia di halaman ini dengan tanggal pembaruan yang tertera.'
        ]
    }
    ]);

</script>

<template>
    <Navbar/>
    <section class="w-full bg-[#AFD3E2] flex-1 p-20">
        <div class="">
            <h1 class="text-3xl lg:text-4xl font-bold text-black mb-4 text-center mt-20">Syarat dan Ketentuan Layanan Trukify</h1>
        </div>
    </section>

    <section class="min-h-screen bg-[#F5F4F2] text-[#333333] font-sans py-12 px-4 sm:px-8 md:px-16">
        
        <div class="max-w-4xl mx-auto">
        <p class="text-sm text-gray-500 mb-6">
            Terakhir diperbarui: {{ lastUpdated }}
        </p>

        <p class="mb-8 leading-7 text-gray-700">
            Selamat datang di Trukify. Harap baca Syarat dan Ketentuan ("Ketentuan", "S&K") ini dengan saksama sebelum menggunakan layanan penyewaan truk ("Layanan") yang dioperasikan oleh Trukify ("kami", "kita", atau "perusahaan").
        </p>

        <div v-for="(term, index) in terms" :key="index" class="mb-8">
            <h3 class="font-bold text-gray-900 text-lg mb-2">
            {{ index + 1 }}. {{ term.title }}
            </h3>
            
            <div class="text-gray-700 leading-7 space-y-1">
            <p v-for="(paragraph, pIndex) in term.content" :key="pIndex">
                {{ paragraph }}
            </p>
            </div>
        </div>

        </div>
    </section>

    <Footer/> 
</template>