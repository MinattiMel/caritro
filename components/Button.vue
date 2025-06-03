<script setup>
defineProps({
  link: String,
  text: String,
  target: String,
  variant: {
    type: String,
    default: 'default' // può essere 'default' o 'orange'
  }
})
</script>

<template>
  <a
    v-if="text"
    :href="link"
    :target="target"
    :class="[
      'inline-block text-center px-4 py-2 text-3xl rounded-lg uppercase font-bold',
      variant === 'default'
        ? 'bg-secondary text-tertiary shadow-[0_0_4px_1px_rgba(255,255,255,1)]'
        : 'bg-[#FFAE00] text-[#D13800]'
    ]"
  >
    {{ text }}
  </a>
</template>
