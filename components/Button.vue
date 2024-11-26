<script setup>
defineProps([
    'link','text','target'
])
</script>

<template>

<a class="bg-red-500 font-thin text-center w-24 py-4 rounded"
           v-if="text"
           :target="target"
           :href="link"
       >{{ text }}</a>

</template>
