<script setup>
defineProps([
    'link', 'text', 'target'
])
</script>

<template>

    <a class="bg-color shadow-[] text-color text-center w-96 px-4 py-2 text-3xl rounded-lg uppercase font-bold"
        v-if="text" :target="target" :href="link">
        {{ text }}
    </a>

</template>
