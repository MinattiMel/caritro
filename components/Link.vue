<script setup>
defineProps([
    'text','target'
])
</script>

<template>
  
   <a
           v-if="text"
           :target="target"
           :href="link"
       >{{ text }}</a>

</template>