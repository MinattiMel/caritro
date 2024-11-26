<script setup>
defineProps([
    'title','details', 'socialTitle','socialUrl', 'imageAlt', 'imageUrl'
])
</script>

<template>
   <div class="grid grid-cols-2 px-8 py-8">

    <div class="cols-span-2">
       <img class="rounded-full w-24"
           v-if="imageUrl"
           :alt="imageAlt"
           :src="imageUrl"
       />
    </div>

    <div class="cols-span-1">
       <h2 class="text-2xl">{{ title }}</h2>

       <p>{{ details }}</p>

       <a
           v-if="socialTitle && socialUrl"
           target="_blank"
           :href="socialUrl"
       >{{ socialTitle }}</a>
    </div>

   </div>
</template>
