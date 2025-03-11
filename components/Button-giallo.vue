<script setup>
defineProps([
    'link','text','target'
])
</script>

<template>

    <a
        class="bg-[#FFAE00] text-center w-96 px-4 py-2 text-3xl text-[#D13800] rounded-lg uppercase font-bold"
        v-if="text"
        :target="target"
        :href="link"
   >
        {{ text }}
    </a>

</template>

