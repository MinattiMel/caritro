<script setup>
import {ref} from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Beat from "../components/Beat.vue";

const zoom = ref(20)
const center = ref([46.067131, 11.1226172])
const markerPos = ref([46.0668766, 11.1226172])
const link = "https://maps.app.goo.gl/iJ7hKnmCw4e2c3CW6";

const onMapReady = (map) => {
    const marker = L.marker(markerPos.value).addTo(map);
    marker.bindPopup('<b>Fondazione Caritro</b><br />Via Calepina, 1<br />38122 Trento TN<br /><br /><a target="_blank" href="' + link + '">Indicazioni stradali</a>').openPopup();
};

</script>

<template>

    <div class="bg-gradient-to-b from-[#ff7931] to-[#c63804] min-h-screen w-full">

        <Header
            pageTitle="Masterclass - 23.05.25 - Trento"
            linkLable="Talk - 22.05.25 - Trento"
            linkUrl="/"
            imageSrc="../assets/ospiti/andry.png"
            imageAlt="Foto di Andry the Hitmaker"
            buttonlabel="Iscriviti"
            buttonUrl="x"
        />



        <div class="pt-24 pb-28 lg:pt-28 lg:pb-32 text-white">

        <div class="max-w-[1920px] px-8 lg:px-36">
            <h2 class="text-4xl lg:text-7xl text-octree mb-4 uppercase">Come nasce un beat</h2>
            <div class="lg:pb-[35px] pt-[37px]">
                <p class="lg:w-[550px]">Scopri il processo creativo dietro la produzione musicale, guidato da un <strong class="black">ospite speciale</strong> che mostrerà ogni passo, dall'idea al risultato finale.</p>
            </div>
            <div class="grid grid-cols-2 items-center md:hidden">
                    <svg class="w-auto" viewBox="0 0 155 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0001 1.99994C9.0001 10.9999 1.00033 37.4999 2.5002 55.9999C4.00006 74.4999 23.5003 101 46.0002 101C68.5001 101 84.0002 86.0064 95.5002 81.4999C107 76.9935 116.411 81.7106 119.487 89.7715C123.849 103.582 111.205 112.465 100.211 117.588C86.9239 123.895 71.1654 126.888 58.2561 134.615C36.1942 148.439 47.0001 176.611 68.5001 179.611C90.0001 182.611 128 177.582 148.5 169.611" stroke="#31006B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M126 161.955L151.6 169.15L132.968 188.994" stroke="#31006B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                <div class="flex flex-col items-end text-white">
                    <img class="w-[250px] pr-2 pt-12" alt="foto di Andry the Hitmaker" src="../assets/ospiti/maggio/andry-02.png">
                    <div class="text-right">
                        <p class="uppercase text-2xl whitespace-nowrap">Andry the Hitmaker</p>
                        <p>Produttore musicale  
                            <a class="underline" href="https://www.instagram.com/andrythehitmaker/">@andrythehitmaker</a>
                        </p>
                    </div>
                </div>

            </div> <!--sistemare-->
        </div>

            <Beat/>
            <ul class="list-disc list-inside">
                <li class="max-w-[1920px] px-8 lg:px-36 pb-[35px] pt-[37px]">
                    <h3 class="text-xl lg:text-4xl font-medium inline-block">Pratica e sperimenta</h3>
                    <p class="lg:w-[550px] pl-6">
                    Non solo teoria: avrai l’opportunità di<strong class="black"> metterti in gioco </strong>
                    e creare, esplorando il lato pratico del beatmaking.
                    </p>
                </li>
                <li class="max-w-[1920px] px-8 lg:px-36 pb-[35px] pt-[37px]">
                    <h3 class="text-xl lg:text-4xl font-medium inline-block">Vivi un'esperienza unica</h3>
                    <p class="lg:w-[510px] pl-6">
                    Porta la tua curiosità e<strong class="black"> lasciati ispirare </strong>
                    dal potenziale creativo di questo mondo.
                    </p>
                </li>
            </ul>

        </div>

        <div class="max-h-[400px] overflow-hidden">
            <img src="../assets/foto_teatro.png" class="w-full" alt="Foto del teatro">
        </div>

        <div class=" text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full  px-8 pt-24 mb-12 lg:pt-28 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-octree mb-8 lg:mb-16 uppercase">Info utili</h2>

                <ul class="grid grid-cols-1 lg:grid-cols-2 lg:pl-16 gap-8">

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/calendario-viola.png" alt="Icona calendario">
                        <p class="text-2xl lg:text-3xl">23.05.2025</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/orologio-viola.png" alt="Icona orologio">
                        <p class="text-2xl lg:text-3xl">17 - 19</p>
                    </li>

                    <li class="flex items-start space-x-4 lg:col-span-2">
                        <img class="w-[40px]" src="../assets/posizione-viola.png" alt="icona luogo">
                        <div>
                            <p class="text-2xl lg:text-3xl mb-6">Fondazione Caritro:<br>sala conferenze</p>
                        </div>
                    </li>

                </ul>

            </div>

            <div class="w-full h-96">

                <l-map
                    ref="mapRef"
                    v-model:zoom="zoom"
                    v-model:center="center"
                    @ready="onMapReady"
                >
                    <l-tile-layer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        layer-type="base"
                    ></l-tile-layer>
                </l-map>

            </div>

        </div>

        <Footer
        main="true"
        />

    </div>

</template>
