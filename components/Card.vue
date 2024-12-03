<script setup>
const props=defineProps([
    'title','details', 'socialTitle','socialUrl', 'imageAlt', 'imageUrl','reverse','main'
])
const isReverse = props.reverse
const isMain = props.main
</script>

<template>
   <div 
    class="px-8 py-8 flex grow-0 gap-4 text-left text-white items-center"
    :class="{ 'flex-row-reverse': isReverse , 'text-right': isReverse }"
   >

       <img class="rounded-full w-32"
           v-if="imageUrl"
           :alt="imageAlt"
           :src="imageUrl"
       />

    <div 
     :class="{'text-quaternary': isMain}"
    >
        <h2 class="text-3xl uppercase">{{ title }}</h2>
        <div>
            <p class="text-s">{{ details }}</p>

            <a class="text-s"
             v-if="socialTitle && socialUrl"
             target="_blank"
             :href="socialUrl"
            >{{ socialTitle }}</a>
        </div>
    </div>

   </div>
</template>
<!--flex con img e div con nome e details. flex row reverse-->