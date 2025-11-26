<script setup>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';

    import { ref } from 'vue';

    const lastUpdated = '16 Oktober 2025';

    // Data Privacy Policy
    const privacyPolicies = ref([
    {
        title: 'Informasi yang Kami Kumpulkan',
        content: [
        'Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat Anda mengisi formulir permintaan sewa atau menghubungi kami. Informasi ini meliputi:',
        'Data Identitas Pribadi: Nama lengkap, alamat email, dan nomor telepon.',
        'Data Pemesanan: Jenis truk yang dipilih, tanggal rencana pengiriman, alamat penjemputan, dan alamat tujuan.',
        'Data Komunikasi: Pesan, catatan, atau detail kebutuhan yang Anda tulis dalam formulir kontak kami.'
        ]
    },
    {
        title: 'Bagaimana Kami Menggunakan Informasi Anda',
        content: [
        'Informasi yang kami kumpulkan digunakan secara khusus untuk tujuan berikut:',
        'Untuk Memproses Layanan: Untuk menanggapi permintaan sewa Anda, memberikan penawaran harga, dan mengelola jadwal pemesanan.',
        'Untuk Berkomunikasi dengan Anda: Untuk mengirimkan konfirmasi pemesanan, pembaruan status, dan informasi penting lainnya terkait layanan kami.',
        'Untuk Dukungan Pelanggan: Untuk memberikan bantuan dan menjawab pertanyaan yang mungkin Anda miliki.',
        'Untuk Peningkatan Layanan: Untuk menganalisis bagaimana layanan kami digunakan sehingga kami dapat meningkatkannya di masa mendatang.'
        ]
    },
    {
        title: 'Keamanan Data',
        content: [
        'Kami menerapkan prosedur keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Kami tidak akan pernah menjual atau menyewakan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.'
        ]
    },
    {
        title: 'Berbagi Informasi dengan Pihak Ketiga',
        content: [
        'Kami hanya akan membagikan informasi pribadi Anda dalam lingkup yang terbatas dan untuk tujuan operasional. Informasi seperti nama, nomor telepon, dan alamat akan kami bagikan kepada pengemudi yang bertugas untuk melaksanakan layanan penjemputan dan pengiriman.'
        ]
    },
    {
        title: 'Hak Anda atas Data Anda',
        content: [
        'Anda memiliki hak untuk meminta akses atau melakukan koreksi terhadap data pribadi yang kami simpan. Untuk melakukannya, silakan hubungi kami melalui detail kontak yang tersedia.'
        ]
    },
    {
        title: 'Perubahan pada Pemberitahuan Privasi Ini',
        content: [
        'Kami dapat memperbarui Pemberitahuan Privasi ini dari waktu ke waktu. Versi terbaru akan selalu dipublikasikan di halaman ini dengan tanggal pembaruan yang tertera. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.'
        ]
    },
    {
        title: 'Hubungi Kami',
        content: [
        'Jika Anda memiliki pertanyaan lebih lanjut mengenai Pemberitahuan Privasi ini, silakan hubungi kami melalui email di privacy@trukify.com'
        ]
    }
    ]);

</script>

<template>
    <Navbar/>
    <section class="w-full bg-[#AFD3E2] flex-1 p-20">
        <div class="">
            <h1 class="text-3xl lg:text-4xl font-bold text-black mb-4 text-center mt-20">Pemberitahuan Privasi Trukify</h1>
        </div>
    </section>

    <section class="min-h-screen bg-[#F5F4F2] text-black font-sans py-12 px-4 sm:px-8 md:px-16">
        
        <div class="max-w-4xl mx-auto">
        <p class="text-sm text-gray-500 mb-6">
            Terakhir diperbarui: {{ lastUpdated }}
        </p>

        <div class="mb-8 leading-7 text-gray-700">
            <p class="mb-4">
            Terima kasih telah mengunjungi dan mempercayai Trukify. Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
            <p>
            Pemberitahuan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan situs web dan layanan kami.
            </p>
        </div>

        <div v-for="(policy, index) in privacyPolicies" :key="index" class="mb-8">
            <h3 class="font-bold text-gray-900 text-lg mb-3">
            {{ index + 1 }}. {{ policy.title }}
            </h3>
            
            <div class="text-gray-700 leading-7 space-y-2">
            <p v-for="(line, lineIndex) in policy.content" :key="lineIndex">
                <span v-if="line.includes(':')" class="block pl-4 sm:pl-0">
                <span class="font-medium text-gray-800">{{ line.split(':')[0] }}:</span>{{ line.split(':')[1] }}
                </span>
                <span v-else>
                {{ line }}
                </span>
            </p>
            </div>
        </div>

        </div>
    </section>

    <Footer/> 
</template>