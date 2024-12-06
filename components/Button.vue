<script setup>
defineProps([
    'link','text','target'
])
</script>

<template>

    <a
        class="bg-secondary shadow-[0_0_4px_1px_rgba(255,255,255,1)] text-center w-96 px-4 py-2 text-3xl text-tertiary rounded-lg uppercase font-bold"
        v-if="text"
        :target="target"
        :href="link"
   >
        {{ text }}
    </a>

</template>

