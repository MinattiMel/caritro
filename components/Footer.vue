<script setup>
import Social from "./Social.vue";
</script>

<template>

    <footer class="bg-sextiary flex flex-col items-center">
        <div class="flex flex-col lg:flex-row justify-between items-start max-w-[1920px] w-full p-8 lg:pt-28 lg:pb-32 lg:px-36">
            <div class="pb-8 lg:-mt-8">
                <img class="w-48 lg:w-[33vw] lg:pb-8" src="../assets/swipe-logo.svg" alt="Swipe Festival">
                <a class="text-white text-xs lg:text-lg underline underline-offset-4" href="https://www.instagram.com/swipe.festival/">
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

            <div class="text-white text-xs lg:text-lg">
                <p>
                    Trento, via Calepina 1 - Rovereto, piazza Rosimini 5<br>
                    T 0461 232050 - info@fondazionecaritro.it
                </p>
            </div>

            </div>

        </div>
    </footer>

</template>
