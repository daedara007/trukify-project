<template>
  
<div class="p-14" id="accordion-card" data-accordion="collapse">
  <h2 id="accordion-card-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-1" aria-expanded="true" aria-controls="accordion-card-body-1">
      <span>Apa saja yang termasuk dalam harga sewa?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-1" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Harga sewa yang kami tawarkan sudah termasuk jasa sopir profesional. Biaya tambahan yang tidak termasuk dalam penawaran awal adalah bahan bakar (BBM), e-toll, parkir, dan biaya bongkar muat (tenaga kuli).</p>
    </div>
  </div>
  <h2 id="accordion-card-heading-2" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-2" aria-expanded="false" aria-controls="accordion-card-body-2">
      <span>Bagaimana sistem pembayaran?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-2" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Kami memerlukan uang muka (DP) sebesar 50% saat konfirmasi jadwal. Pelunasan 50% sisanya dilakukan saat truk tiba di lokasi penjemputan. Pembayaran dapat dilakukan melalui transfer bank ke rekening perusahaan kami.</p>
    </div>
  </div>
  <h2 id="accordion-card-heading-3" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-3" aria-expanded="false" aria-controls="accordion-card-body-3">
      <span>Apakah ada biaya tambahan untuk perjalanan luar kota?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-3" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-3">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Test</p>
    </div>
  </div>
</div>

</template>