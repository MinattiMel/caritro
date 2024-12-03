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
    :class="{ 'flex-row-reverse': isReverse, 'lg:flex-row': isReverse, 'text-right': isReverse, 'lg:text-left': isReverse }"
   >

       <img class="rounded-full w-32 lg:hidden"
           v-if="imageUrl"
           :alt="imageAlt"
           :src="imageUrl"
       />

    <div 
    class="lg:grid grid-cols-12 lg:flex-row-reverse"
     :class="{'text-quaternary': isMain}"
    >
        <h3 class="text-3xl uppercase order-last col-span-4">{{ title }}</h3>

        <div class="lg:text-right col-span-4">
            <p class="text-s">
                {{ details }}
            </p>
            <a class="text-s"
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
<!--flex con img e div con nome e details. flex row reverse-->