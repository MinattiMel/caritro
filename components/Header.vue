<script setup>
import Button from "./Button.vue";
import Social from "./Social.vue";
</script>

<template>

    <header class="bg-[url('/assets/bg.png')] bg-no-repeat bg-cover bg-center text-white flex flex-col items-center relative">
        <div class="min-h-screen max-h-[1080px] flex flex-col">

            <div class="flex flex-col items-start max-w-[1920px] w-full p-8 pt-24 pb-0 lg:grid grid-cols-12 grid-flow-row auto-rows-max gap-8">

                <svg class="max-w-lg lg:max-w-4xl lg:col-span-8 col-start-1 row-start-2 lg:-mt-24" viewBox="0 0 224 70">
                    <title>Swipe</title>
                    <clipPath id="logo-swipe">
                        <path d="M 0.59 0.179993 L 223.399998 0.179993 L 223.399998 69.600006 L 0.59 69.600006 Z"/>
                    </clipPath>
                    <g clip-path="url(#logo-swipe)">
                        <path id="Percorso" fill="#ffffff" stroke="none"
                              d="M 130.029999 18.320007 C 131.119995 16.279999 131.660004 13.889999 131.429993 11.350006 C 130.910004 5.610001 126.330002 0.919998 120.610001 0.26001 C 115.139999 -0.369995 110.289993 2.600006 108.089996 7.089996 L 89.729996 52.279999 C 89.330002 53.220001 87.919998 53.029999 88.020004 51.850006 L 91.649994 32.550003 C 92.139999 27.429993 88.119995 22.98999 82.970001 22.98999 L 82.839996 22.98999 C 79.459999 22.98999 76.379997 24.949997 74.940002 28.009995 L 63.389999 52.410004 C 62.949997 53.350006 61.519997 52.899994 61.709999 51.869995 L 64.949997 37.360001 C 65.519997 34.210007 63.089996 31.300003 59.889999 31.300003 L 50.360001 31.300003 L 50.360001 64.089996 C 50.360001 66.929993 52.660004 69.229996 55.5 69.229996 L 60.739998 69.229996 C 63.720001 69.229996 66.449997 67.580002 67.839996 64.949997 L 79.480003 40.169998 C 79.940002 39.199997 81.399994 39.710007 81.149994 40.759995 L 74.029999 63.160004 C 73.449997 66.320007 75.879997 69.229996 79.089996 69.229996 L 84.789993 69.229996 C 87.199997 69.229996 89.490005 68.139999 91.009995 66.270004 L 130.029999 18.300003 Z"/>
                        <path id="path1" fill="#ffffff" stroke="none"
                              d="M 42.029999 46.800003 L 41.650002 46.619995 C 38.769997 45.440002 33.440002 44.800003 28.019997 44.490005 L 13.75 44.259995 C 13.209999 44.289993 12.740002 43.839996 12.720001 43.289993 C 12.700001 42.740005 13.139999 42.279999 13.689999 42.259995 L 26.709999 42.410004 L 43.879997 44.570007 L 45.970001 33.559998 C 38.970001 31.809998 29.190002 30.770004 23.650002 30.770004 C 7.939999 30.770004 0.599998 34.490005 0.599998 43.470001 C 0.599998 47.449997 1.689999 50.710007 4.790001 52.860001 C 4.889999 52.889999 7.700001 55.139999 19.309998 55.809998 L 34.330002 56.089996 C 34.889999 56.059998 35.339996 56.509995 35.360001 57.059998 C 35.379997 57.610001 34.940002 58.070007 34.389999 58.089996 L 21.379997 57.940002 C 6.220001 57.199997 3.380001 54.479996 3.040001 54.589996 L 1.189999 66.419998 C 7.41 68.169998 17.190002 69.600006 25.989998 69.600006 C 42.720001 69.600006 47.730003 65.820007 47.730003 57.610001 C 47.730003 52.759995 46.059998 48.990005 42.040001 46.800003"/>
                        <path id="path2" fill="#ffffff" stroke="none" d="M 112.770004 42.699997 L 112.770004 69.309998 L 125.539993 69.309998 L 125.539993 33 L 120.660004 33 L 112.770004 42.699997 Z"/>
                        <path id="path3" fill="#ffffff" stroke="none"
                              d="M 162.110001 33 L 128.729996 33 L 128.729996 69.309998 L 141.5 69.309998 L 141.5 62.389999 L 162.110001 62.389999 C 170.100006 62.389999 176.479996 58.449997 176.479996 46.899994 C 176.479996 36.039993 170.100006 33.009995 162.110001 33.009995 M 160.5 50.139999 L 141.490005 50.139999 L 141.490005 45.240005 L 160.5 45.240005 C 162.149994 45.240005 163.240005 45.610001 163.240005 47.690002 C 163.240005 49.550003 162.149994 50.139999 160.5 50.139999"/>
                        <path id="path4" fill="#ffffff" stroke="none" d="M 223.410004 44.240005 L 223.410004 33.059998 L 179.339996 33.059998 L 179.339996 69.369995 L 223.410004 69.369995 L 223.410004 58.190002 L 192.110001 58.190002 L 192.110001 55.820007 L 219.980011 55.820007 L 219.980011 46.509995 L 192.110001 46.509995 L 192.110001 44.240005 L 223.410004 44.240005 Z"/>
                    </g>
                </svg>

                <h1 class="flex items-center uppercase text-4xl lg:text-5xl pb-4 text-secondary [text-shadow:0px_0px_2px_#ffffff] font-medium row-start-3 col-span-12">
                    <span class="sr-only">Swipe</span> Scorrendo tra le generazioni
                </h1>

                <div class="row-start-4 col-span-12">
                    <div class="lg:flex lex-row gap-4">
                        <p class="text-6xl lg:text-3xl pb-4 text-secondary [text-shadow:0px_0px_4px_#ffffff]">20.01.2025</p>
                        <p class="text-4xl lg:text-3xl">Auditorium S. Chiara Trento | Ore 17</p>
                    </div>
                </div>

                <div class="row-start-1 col-end-11">
                    <Button
                        class="text-4xl"
                        text="Prenota"
                        link=" https://www.eventbrite.it/e/1096506202569?aff=oddtdtcreator"
                    />
                </div>

                <div class="col-span-3 col-start-1 row-start-1 pt-16 lg:pt-0">
                    <Social/>
                </div>

            </div>

            <img src="../assets/ospiti/panoramica-ospiti.png" class="hidden lg:block w-full mt-auto" alt="Foto degli ospiti dell'evento">

        </div>

        <div class="absolute right-0 left-0 flex flex-col items-center -bottom-24 lg:bottom-0">
            <div class="p-4 rounded-full w-40 lg:w-32 bg-quinary lg:bg-transparent">
                <img class="" src="../assets/frecce.png" alt="Immagine di una freccia verso il basso">
            </div>
        </div>

    </header>

</template>
