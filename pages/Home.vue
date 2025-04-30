<script setup>

import {ref} from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardMaggio from "../components/Card-maggio.vue";
import imgZerbi from "../assets/ospiti/rudy-zerbi-def.jpg";
import imgShablo from "../assets/ospiti/maggio/shablo.png";
import imgAndry from "../assets/ospiti/maggio/andry-new.png";
import imgMasoli from "../assets/ospiti/maggio/masoli.png";
import imgTripodi from "../assets/ospiti/maggio/tripodi.png";
import imgNudo from "../assets/ospiti/maggio/nudo.png";

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
            pageTitle="Talk - 22.05.25 - Piazza Fiera"
            linkLable="Come nasce un beat - 23.05.25 - Fondazione Caritro"
            linkUrl="/masterclass"
            imageSrc="../assets/foto_ospiti_maggio.png"
            imageAlt="Foto degli ospiti dell'evento"
        />


        <div class=" flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-24 pb-28 lg:pt-28 lg:pb-32 px-8 lg:px-36 text-octree">
                <!--<svg class="ml-0" width="695" height="1058" viewBox="0 0 695 1058" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M467.196 1035.76C495.244 1053.88 522.138 1056.89 553.559 1053.88C624.63 1047.14 682.813 987.843 690.969 913.7C698.724 842.868 661.987 780.029 606.316 751.484L606.316 751.407L604.824 750.722C600.236 748.439 595.576 746.307 590.77 744.518L46.3015 513.488C34.6868 508.35 36.9806 490.004 51.6537 491.374L290.791 538.418C354.29 544.812 409.268 492.63 409.268 425.947L409.268 424.235C409.268 380.388 385.019 340.5 347.008 321.926L44.6995 172.308C33.012 166.599 38.6191 148.102 51.326 150.499L231.116 192.481C270.22 199.865 306.156 168.426 306.156 126.902L306.156 3.50755L-100.247 3.50753C-135.455 3.50753 -163.964 33.3474 -163.964 70.1144L-163.964 137.939C-163.964 176.495 -143.574 211.854 -110.951 229.857M-88.8143 310.089C-127.955 302.629 -164 334.03 -164 375.631L-164 449.469C-164 480.755 -150.528 510.367 -127.299 530.12L422.266 997.548L467.159 1035.69" stroke="#9E2A00" stroke-opacity="0.2" stroke-width="5.67" stroke-miterlimit="10"/>
                </svg>-->


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
        <div class="max-h-[400px] overflow-hidden">
            <img src="../assets/foto_teatro.png" class="w-full" alt="Foto del teatro">
        </div>

        <div class=" text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full  px-8 pt-24 mb-12 lg:pt-28 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-octree mb-8 lg:mb-16 uppercase">Info utili</h2>

                <ul class="grid grid-cols-1 lg:grid-cols-2 lg:pl-16 gap-8">

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/calendario-viola.png" alt="Icona calendario">
                        <p class="text-2xl lg:text-3xl">22.05.2025</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/orologio-viola.png" alt="Icona orologio">
                        <p class="text-2xl lg:text-3xl">14:30</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[28px] lg:w-[38px]" src="../assets/posizione-viola.png" alt="icona luogo">
                        <p class="text-2xl lg:text-3xl mb-6">Piazza Fiera:<br>"Lounge Fuori Festival"</p>
                    </li>
                    <li class="flex items-start space-x-4">
                        <a class="" href="https://www.eventbrite.it/e/1096506202569?aff=oddtdtcreator"><img class="w-[30px] lg:w-[38px] -mt-2" src="../assets/biglietto-viola.png" alt="Icona biglietto cartaceo"></a>
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
