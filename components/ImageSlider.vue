<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  imageSliderURL: {
    type: Array,
    required: true
  },
  imageSliderALT: {
    type: Array,
    default: () => []
  },
  imageSliderLink: {
    type: Array,
    default: () => []
  }
})

const modalImage = ref(null)

function openImage(src) {
  modalImage.value = src
}

function closeModal() {
  modalImage.value = null
}
</script>

<template>
  <div class="w-full max-w-5xl mx-auto">
    <Swiper :modules="[Autoplay, Pagination, Keyboard]" :slides-per-view="1" pagination
      class="w-full h-[420px] lg:h-[700px]">
      <SwiperSlide v-for="(src, idx) in imageSliderURL" :key="idx" class="flex items-center justify-center">
        <div class="h-full flex items-center justify-center">

          <!-- Link per quell'immagine -->
          <a v-if="imageSliderLink[idx]" :href="imageSliderLink[idx]" target="_blank" rel="noopener noreferrer"
            class="object-contain max-h-[350px] lg:max-h-[600px] max-w-[90%] cursor-pointer transition-transform duration-200 hover:scale-105 block">
            <img :src="src" :alt="imageSliderALT[idx] || `Immagine ${idx + 1}`" class="rounded-2xl" />
          </a>

          <!-- Apri la modale al click -->
          <img v-else :src="src" :alt="imageSliderALT[idx] || `Immagine ${idx + 1}`"
            class="object-contain max-h-[400px] lg:max-h-[600px] max-w-[90%] rounded-2xl cursor-pointer transition-transform duration-200 hover:scale-105"
            @click="openImage(src)" />

        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Modal per zoom -->
    <div v-if="modalImage" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      @click.self="closeModal">
      <img :src="modalImage" alt="Zoom" class="max-w-[90%] max-h-[90%] rounded-lg shadow-xl" />
    </div>
  </div>
</template>