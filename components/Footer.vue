<script setup>
import Social from "./Social.vue";
</script>

<template>

    <footer class="bg-sextiary flex flex-col items-center">
        <div class="max-w-[1920px] w-full pt-28 pb-32 px-8 lg:px-36">

            <div class="flex flex-col lg:flex-row justify-between items-start gap-8">

                <div class="pb-8 lg:-mt-10">
                    <img class="w-48 lg:w-[33vw] pb-4 lg:pb-8" src="../assets/swipe-logo.svg" alt="Swipe Festival">
                    <a class="text-white lg:text-lg underline underline-offset-4" href="https://www.instagram.com/swipe.festival/">
                        @swipe.festival
                    </a>
                </div>

                <div>

                    <div>
                        <p class="text-white lg:hidden">Un progetto di:</p>
                        <div class="py-4">
                            <Social/>
                        </div>
                    </div>

                    <div class="text-white lg:text-lg">
                        <p>
                            Trento, via Calepina 1 - Rovereto, piazza Rosimini 5<br>
                            T 0461 232050 - info@fondazionecaritro.it
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </footer>

</template>
