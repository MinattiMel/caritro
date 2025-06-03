<script setup>

import {ref} from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardMaggio from "../components/Card-maggio.vue";
import imgZerbi from "../assets/ospiti/rudy-zerbi.jpg";
import imgShablo from "../assets/ospiti/maggio/shablo.png";
import imgAndry from "../assets/ospiti/maggio/andry-new.png";
import imgMasoli from "../assets/ospiti/maggio/masoli.png";
import imgTripodi from "../assets/ospiti/maggio/tripodi.png";
import imgNudo from "../assets/ospiti/maggio/nudo.png";

import fotoOspitiMaggio from "../assets/ospiti/maggio/panoramica-ospiti-maggio.png";

const zoom = ref(20)
const center = ref([46.065335, 11.123905])
const markerPos = ref([46.065135, 11.123905])
const link = "https://maps.app.goo.gl/JNZyrwv4gqKkBHCS8";

const onMapReady = (map) => {
    const marker = L.marker(markerPos.value).addTo(map);
    marker.bindPopup('<b>Piazza Fiera: Lounge fuori Festival</b><br />Piazza Fiera<br />38122 Trento TN<br /><br /><a target="_blank" href="' + link + '">Indicazioni stradali</a>').openPopup();
};

</script>

<template class="">

    <div class="bg-gradient-to-b from-[#ff7931] to-[#c63804] min-h-screen w-full">

        <Header
            pageTitle="Talk - 22.05.25 - ore 14:30 - Piazza Fiera"
            linkLable="Come nasce un beat - 23.05.25 - Fondazione Caritro"
            linkUrl="/masterclass"
            :imageSrc="fotoOspitiMaggio"
            imageAlt="Foto degli ospiti dell'evento"
        />


        <div class=" flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-24 pb-28 lg:pt-28 lg:pb-32 px-8 lg:px-36 text-octree">

                <h2 class="text-4xl lg:text-7xl text-octree mb-8 lg:mb-16 uppercase">Ospiti</h2>

                <CardMaggio
                    title="Rudy Zerbi"
                    details="Moderatore"
                    socialTitle="@rudyzerbi"
                    socialUrl="https://www.instagram.com/rudy_zerbi/"
                    imageAlt="immagine di Rudy Zerbi"
                    :imageUrl="imgZerbi"
                    main="true"
                />

                <CardMaggio
                    title="Shablo"
                    details="Produttore e manager"
                    socialTitle="@shablo"
                    socialUrl="https://www.instagram.com/shablo/"
                    imageAlt="immagine di Shablo"
                    :imageUrl="imgShablo"
                    reverse="true"
                />

                <CardMaggio
                    title="Andry The Hitmaker"
                    details="Produttore musicale"
                    socialTitle="@andrythehitmaker"
                    socialUrl="https://www.instagram.com/andrythehitmaker/"
                    imageAlt="immagine di Andry the hitmaker"
                    :imageUrl="imgAndry"

                />

                <CardMaggio
                    title="Marco Masoli"
                    details="AR director (Warner Music Italia)"
                    socialTitle="@pleasecallmemaso"
                    socialUrl="https://www.instagram.com/pleasecallmemaso/"
                    imageAlt="immagine di Marco Masoli"
                    :imageUrl="imgMasoli"
                    reverse="true"

                />

                <CardMaggio
                    title="Marta Blumi Tripodi"
                    details="Autrice e comunicatrice"
                    socialTitle="@tharealblumi"
                    socialUrl="https://www.instagram.com/tharealblumi/"
                    imageAlt="immagine di Marta Blumi Tripodi"
                    :imageUrl="imgTripodi"

                />

                <CardMaggio
                    title="Michele Nudo"
                    details="A&R Director (Emi/Universal Music Italia)"
                    socialTitle="@jkuio"
                    socialUrl="https://www.instagram.com/jkuio/"
                    imageAlt="immagine di Michele Nudo"
                    :imageUrl="imgNudo"
                    reverse="true"
                />

            </div>
        </div>
        <div class="text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-24 pb-28 lg:pt-28 lg:pb-32 px-8 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-octree mb-8 lg:mb-16 uppercase">I temi</h2>
                <ul class="list-disc pl-5 space-y-0 text-xl uppercase lg:columns-2 lg:text-2xl mb-28">
                    <li>Professioni artistiche</li>
                    <li>Storie di successo</li>
                    <li>Cambiamenti musicali</li>
                    <li>Dinamiche sociali</li>
                </ul>

                <h2 class="text-4xl lg:text-7xl font-regular text-octree mb-8 lg:mb-16 uppercase">Il perchè</h2>
                <p class="text-xl font-regular leading-7 lg:pl-28">
                    Il secondo appuntamento di <strong>SWIPE</strong> entra nel cuore della musica. Partendo dalle professioni che operano in questo mondo, andremo a parlare di <strong>storie, cambiamenti e dinamiche</strong> accadute negli ultimi anni. Un dialogo tra generazioni, background e generi diversi che porterà a <strong>conoscere</strong> più a fondo <strong>il linguaggio universale della musica!</strong>
                </p>

            </div>
        </div>
        <div class="overflow-hidden">
            <img src="../assets/palco.png" class="max-h-[550px] w-full object-cover object-center" alt="Foto del teatro">
        </div>

        <div class=" text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full  px-8 pt-24 mb-12 lg:pt-28 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-octree mb-8 lg:mb-16 uppercase">Info utili</h2>

                <ul class="grid grid-cols-1 lg:grid-cols-2 lg:pl-16 gap-8">

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/icone-maggio/calendario-viola.png" alt="Icona calendario">
                        <p class="text-2xl lg:text-3xl">22.05.2025</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/icone-maggio/orologio-viola.png" alt="Icona orologio">
                        <p class="text-2xl lg:text-3xl">14:30</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/icone-maggio/posizione-viola.png" alt="icona luogo">
                        <p class="text-2xl lg:text-3xl mb-6">Piazza Fiera:<br>"Lounge Fuori Festival"</p>
                    </li>
                    <li class="flex items-start space-x-4">
                        <a class="" href="https://www.eventbrite.it/e/1096506202569?aff=oddtdtcreator"><img class="w-[30px] lg:w-[38px] -mt-2" src="../assets/icone-maggio/biglietto-viola.png" alt="Icona biglietto cartaceo"></a>
                        <p class="text-2xl -mt-4 lg:text-3xl mb-6">Ingresso libero e gratuito</p>
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
