<script setup>
defineProps([
    'title',' details', 'socialTitle','socialUrl', 'imageAlt', 'imageUrl'
])
</script>

<template>
   <div>

       <h2>{{ title }}</h2>

       <p>{{ details }}</p>

       <img
           v-if="imageUrl"
           :alt="imageAlt"
           :src="imageUrl"
       />

       <a
           v-if="socialTitle && socialUrl"
           target="_blank"
           :href="socialUrl"
       >{{ socialTitle }}</a>

   </div>
</template>
