<script setup>
import { ref } from 'vue'

// Props per immagini e testi alternativi
const props = defineProps({
  imageSliderURL: {
    type: Array,
    required: true
  },
  imageSliderALT: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const modalImage = ref(null)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.imageSliderURL.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.imageSliderURL.length) % props.imageSliderURL.length
}

const openImage = (src) => {
  modalImage.value = src
}
</script>


<template>
  <div class="w-full max-w-5xl mx-auto overflow-hidden relative">
    <!-- Slider -->
    <div
      ref="slider"
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(src, idx) in imageSliderURL"
        :key="idx"
        class="w-full flex-shrink-0 p-2"
      >
        <img
          :src="src"
          :alt="imageSliderALT[idx] || `Immagine ${idx + 1}`"
          class="rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
          @click="openImage(src)"
        />
      </div>
    </div>

    <!-- Frecce -->
    <button
      @click="prev"
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-100 z-10"
    >
      ‹
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-100 z-10"
    >
      ›
    </button>

    <!-- Zoom modal -->
    <div
      v-if="modalImage"
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      @click.self="modalImage = null"
    >
      <img :src="modalImage" alt="Zoom immagine" class="max-w-[90%] max-h-[90%] rounded-lg shadow-xl" />
    </div>
  </div>
</template>