<script setup>
defineProps(['text', 'target', 'link', 'variant'])
</script>

<template>
   <a
       v-if="link"
       :class="
        (variant === 'secondary' ? 'bg-amber-50 text-amber-600' : 'bg-amber-600 text-white')
       "
       :target="target"
       :href="link"
   >
       {{text}}
   </a>
</template>
