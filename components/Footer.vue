<script setup>
import Social from "./Social.vue";
</script>

<template>

    <footer class="bg-sextiary flex flex-col items-center">
        <div class="flex flex-col lg:flex-row justify-between items-start max-w-[1920px] w-full p-8 lg:p-16">
            <div class="pb-8 lg:-mt-8">
                <img class="w-48 lg:w-80" src="../assets/swipe-logo.svg" alt="Swipe Festival">
                <a class="text-white text-xs lg:text-lg" href="https://www.instagram.com/swipe.festival/">
                    @swipe.festival
                </a>
            </div>


            <div>

            <div>
                <p class="text-white text-xs lg:hidden">Un progetto di:</p>
                <div class="py-4">
                    <Social/>
                </div>
            </div>

            <div class="text-white text-xs lg:text-lg pb-16">
                <p>
                    Trento, via Calepina 1 - Rovereto, piazza Rosimini 5<br>
                    T 0461 232050 - info@fondazionecaritro.it
                </p>
            </div>

            </div>

        </div>
    </footer>

</template>
