<script setup>
const props = defineProps([
    'title', 'details', 'socialTitle', 'socialUrl', 'imageAlt', 'imageUrl', 'reverse', 'main'
])
const isReverse = props.reverse
const isMain = props.main
</script>

<template>
    <div
        class=" py-8 flex grow-0 gap-2 text-left text-white items-center"
        :class="{ 'flex-row-reverse': isReverse, 'lg:flex-row': isReverse, 'text-right': isReverse, 'lg:text-left': isReverse }"
    >

        <img class="rounded-full w-32 lg:hidden"
             v-if="imageUrl"
             :alt="imageAlt"
             :src="imageUrl"
        />

        <div
            class="lg:grid grid-cols-12 lg:flex-row-reverse lg:w-full"
            :class="{'text-quaternary': isMain}"
        >
            <h3 class="text-2xl lg:text-5xl xl:text-7xl uppercase col-end-13 col-span-7">{{ title }}</h3>

            <div class="lg:text-right col-span-4 row-start-1">
                <p class="lg:text-xl">
                    {{ details }}
                </p>
                <a class="text-xs lg:text-xl underline underline-offset-4"
                   v-if="socialTitle && socialUrl"
                   target="_blank"
                   :href="socialUrl"
                >
                    {{ socialTitle }}
                </a>
            </div>

        </div>

    </div>
</template>
