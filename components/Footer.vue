<script setup>
    import Social from "./Social.vue";
</script>

<template>

     <footer class="self-end flex flex-col gap-10 flex flex-col items-center">
        <div class="pt-16 px-8 max-w-[1200px]">

            <h3 class="sr-only">Contattaci</h3>
            <ul class="font-medium text-lg">
                <li><p class="text-base">Il sito verrà aggiornato, seguici:</p>
                    <a class="flex items-center" href="https://www.instagram.com/swipe.festival/" target="blank"><img class="w-8" alt="Instagram" src="/assets/logo-instagram.svg"> swipe.festival</a></li>
            </ul>
            <Social />

        </div>
    </footer>

</template>



