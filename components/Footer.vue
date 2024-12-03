<script setup>
    import Social from "./Social.vue";
</script>

<template>

     <footer class="bg-sextiary">
        <div class="flex flex-col items-right pt-16 px-8 max-w-[1200px]">
            <div class="pb-8">
                <img class="w-48" src="../assets/swipe-logo.svg">
                <a class="text-white text-xs" href="https://www.instagram.com/swipe.festival/">
                    @swipe.festival
                </a>
            </div>

            <div>
                <p class="text-white text-xs">Un progetto di:</p>
                <Social />
            </div>
            
            <div class="text-white text-xs pb-16">
                <p>Trento, via Calepina 1 - Rovereto, piazza Rosimini 5<br>
                    T 0461 232050 - info@fondazionecaritro.it</p>
            </div>

        </div>
    </footer>

</template>



