<script setup>

import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import imgZerbi from "../assets/ospiti/rudy-zerbi.jpg";
import imgYugi from "../assets/ospiti/gennaio/kid-yugi.jpg";
import imgIlRosso from "../assets/ospiti/gennaio/il-rosso.jpg";
import imgRicciardi from "../assets/ospiti/gennaio/livio-ricciardi.jpg";
import imgBuccolieri from "../assets/ospiti/gennaio/ciro-buccolieri.jpg";
import imgValorzi from "../assets/ospiti/gennaio/serena-valorzi.jpg";
import Social from "../components/Social.vue";
import Button from "../components/Button.vue";
import ImageSlider from "../components/ImageSlider.vue";
import fotoSlider01 from "../assets/foto-evento-gennaio/swipe-gennaio-01.jpg";
import fotoSlider02 from "../assets/foto-evento-gennaio/swipe-gennaio-02.jpg";
import fotoSlider03 from "../assets/foto-evento-gennaio/swipe-gennaio-03.jpg";
import fotoSlider04 from "../assets/foto-evento-gennaio/swipe-gennaio-04.jpg";
import fotoSlider05 from "../assets/foto-evento-gennaio/swipe-gennaio-05.jpg";
import fotoSliderVideo from "../assets/foto-evento-gennaio/video-finale-gennaio.png";

defineProps([
    'imageSliderURL', 'imageSliderAlt'
])

</script>

<template>

    <div class="">

        <header
            class="bg-[url('/assets/sfondi/bg-viola.png')] bg-no-repeat bg-cover bg-center text-white flex flex-col items-center relative">
            <div class="min-h-screen max-h-[1080px] flex flex-col">

                <div
                    class="flex flex-col items-start max-w-[1920px] w-full p-8 pt-24 pb-0 lg:grid grid-cols-12 grid-flow-row auto-rows-max gap-8">

                    <svg class="max-w-lg lg:max-w-4xl lg:col-span-8 col-start-1 row-start-2 lg:-mt-24"
                        viewBox="0 0 224 70">
                        <title>Swipe</title>
                        <clipPath id="logo-swipe">
                            <path d="M 0.59 0.179993 L 223.399998 0.179993 L 223.399998 69.600006 L 0.59 69.600006 Z" />
                        </clipPath>
                        <g clip-path="url(#logo-swipe)">
                            <path id="Percorso" fill="#ffffff" stroke="none"
                                d="M 130.029999 18.320007 C 131.119995 16.279999 131.660004 13.889999 131.429993 11.350006 C 130.910004 5.610001 126.330002 0.919998 120.610001 0.26001 C 115.139999 -0.369995 110.289993 2.600006 108.089996 7.089996 L 89.729996 52.279999 C 89.330002 53.220001 87.919998 53.029999 88.020004 51.850006 L 91.649994 32.550003 C 92.139999 27.429993 88.119995 22.98999 82.970001 22.98999 L 82.839996 22.98999 C 79.459999 22.98999 76.379997 24.949997 74.940002 28.009995 L 63.389999 52.410004 C 62.949997 53.350006 61.519997 52.899994 61.709999 51.869995 L 64.949997 37.360001 C 65.519997 34.210007 63.089996 31.300003 59.889999 31.300003 L 50.360001 31.300003 L 50.360001 64.089996 C 50.360001 66.929993 52.660004 69.229996 55.5 69.229996 L 60.739998 69.229996 C 63.720001 69.229996 66.449997 67.580002 67.839996 64.949997 L 79.480003 40.169998 C 79.940002 39.199997 81.399994 39.710007 81.149994 40.759995 L 74.029999 63.160004 C 73.449997 66.320007 75.879997 69.229996 79.089996 69.229996 L 84.789993 69.229996 C 87.199997 69.229996 89.490005 68.139999 91.009995 66.270004 L 130.029999 18.300003 Z" />
                            <path id="path1" fill="#ffffff" stroke="none"
                                d="M 42.029999 46.800003 L 41.650002 46.619995 C 38.769997 45.440002 33.440002 44.800003 28.019997 44.490005 L 13.75 44.259995 C 13.209999 44.289993 12.740002 43.839996 12.720001 43.289993 C 12.700001 42.740005 13.139999 42.279999 13.689999 42.259995 L 26.709999 42.410004 L 43.879997 44.570007 L 45.970001 33.559998 C 38.970001 31.809998 29.190002 30.770004 23.650002 30.770004 C 7.939999 30.770004 0.599998 34.490005 0.599998 43.470001 C 0.599998 47.449997 1.689999 50.710007 4.790001 52.860001 C 4.889999 52.889999 7.700001 55.139999 19.309998 55.809998 L 34.330002 56.089996 C 34.889999 56.059998 35.339996 56.509995 35.360001 57.059998 C 35.379997 57.610001 34.940002 58.070007 34.389999 58.089996 L 21.379997 57.940002 C 6.220001 57.199997 3.380001 54.479996 3.040001 54.589996 L 1.189999 66.419998 C 7.41 68.169998 17.190002 69.600006 25.989998 69.600006 C 42.720001 69.600006 47.730003 65.820007 47.730003 57.610001 C 47.730003 52.759995 46.059998 48.990005 42.040001 46.800003" />
                            <path id="path2" fill="#ffffff" stroke="none"
                                d="M 112.770004 42.699997 L 112.770004 69.309998 L 125.539993 69.309998 L 125.539993 33 L 120.660004 33 L 112.770004 42.699997 Z" />
                            <path id="path3" fill="#ffffff" stroke="none"
                                d="M 162.110001 33 L 128.729996 33 L 128.729996 69.309998 L 141.5 69.309998 L 141.5 62.389999 L 162.110001 62.389999 C 170.100006 62.389999 176.479996 58.449997 176.479996 46.899994 C 176.479996 36.039993 170.100006 33.009995 162.110001 33.009995 M 160.5 50.139999 L 141.490005 50.139999 L 141.490005 45.240005 L 160.5 45.240005 C 162.149994 45.240005 163.240005 45.610001 163.240005 47.690002 C 163.240005 49.550003 162.149994 50.139999 160.5 50.139999" />
                            <path id="path4" fill="#ffffff" stroke="none"
                                d="M 223.410004 44.240005 L 223.410004 33.059998 L 179.339996 33.059998 L 179.339996 69.369995 L 223.410004 69.369995 L 223.410004 58.190002 L 192.110001 58.190002 L 192.110001 55.820007 L 219.980011 55.820007 L 219.980011 46.509995 L 192.110001 46.509995 L 192.110001 44.240005 L 223.410004 44.240005 Z" />
                        </g>
                    </svg>

                    <h1
                        class="flex items-center uppercase text-4xl lg:text-5xl pb-4 text-secondary [text-shadow:0px_0px_2px_#ffffff] font-medium row-start-3 col-span-12">
                        <span class="sr-only">Swipe</span> Scorrendo tra le generazioni
                    </h1>

                    <div class="row-start-4 col-span-12">
                        <div class="lg:flex lex-row gap-4">
                            <p class="text-6xl lg:text-3xl pb-4 text-secondary [text-shadow:0px_0px_4px_#ffffff]">
                                20.01.2025</p>
                            <p class="text-4xl lg:text-3xl">Auditorium S. Chiara Trento | Ore 17</p>
                        </div>
                    </div>

                    <div class="row-start-1 col-end-11">
                        <!--quando presente-->
                        <Button />
                    </div>


                    <div class="col-span-3 col-start-1 row-start-1 pt-16 lg:pt-0">
                        <Social />
                    </div>

                </div>

                <img src="../assets/ospiti/gennaio/panoramica-ospiti-gennaio.png" class="hidden lg:block w-full mt-auto"
                    alt="Foto degli ospiti dell'evento">

            </div>

            <div class="absolute right-0 left-0 flex flex-col items-center -bottom-24 lg:bottom-0">
                <div class="p-4 rounded-full w-40 lg:w-32 bg-quinary lg:bg-transparent">
                    <img class="" src="../assets/frecce.png" alt="Immagine di una freccia verso il basso">
                </div>
            </div>

        </header>

        <div class="bg-quinary flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-24 pb-28 lg:pt-28 lg:pb-32 px-8 lg:px-36">

                <h2
                    class="text-4xl lg:text-7xl text-secondary [text-shadow:0px_0px_4px_#ffffff] mb-8 lg:mb-16 uppercase">
                    Ospiti</h2>

                <Card title="Rudy Zerbi" details="Moderatore" socialTitle="@rudyzerbi"
                    socialUrl="https://www.instagram.com/rudy_zerbi/" imageAlt="immagine di Rudy Zerbi"
                    :imageUrl="imgZerbi" main="true" />

                <Card title="Kid Yugi" details="Artista musicale" socialTitle="@kidyugiy3p"
                    socialUrl="https://www.instagram.com/kidyugiy3p/" imageAlt="immagine di kid Yugi"
                    :imageUrl="imgYugi" reverse="true" />

                <Card title="Il Rosso" details="Content creator" socialTitle="@ilrossopiubellodiinstagraam"
                    socialUrl="https://www.instagram.com/ilrossopiubellodiinstagraam/" imageAlt="immagine di Il Rosso"
                    :imageUrl="imgIlRosso" />

                <Card title="Livio Ricciardi" details="Consulente sessuale" socialTitle="@livioricciardi"
                    socialUrl="https://www.instagram.com/livioricciardi/" imageAlt="immagine di Livio Ricciardi"
                    :imageUrl="imgRicciardi" reverse="true" />

                <Card title="Ciro Buccolieri" details="Discografico e manager" socialTitle="@cirobuccolieri"
                    socialUrl="https://www.instagram.com/cirobuccolieri/" imageAlt="immagine di Ciro Buccolieri"
                    :imageUrl="imgBuccolieri" />

                <Card title="Serena Valorzi" details="Psicoterapeuta" socialTitle="@serena-valorzi"
                    socialUrl="https://it.linkedin.com/in/serena-valorzi-31235146" imageAlt="immagine di Serena Valorzi"
                    :imageUrl="imgValorzi" reverse="true" />

            </div>
        </div>


        <div class="bg-[#2e0059] text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-24 pb-28 lg:pt-28 lg:pb-32 px-8 lg:px-36">

                <h2
                    class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-8 lg:mb-16 uppercase">
                    I temi</h2>
                <ul class="list-disc pl-5 space-y-0 text-xl uppercase lg:columns-2 lg:text-2xl mb-28">
                    <li>Social network</li>
                    <li>Mondo del web</li>
                    <li>Relazioni e sessualità</li>
                    <li>Cambiamenti del lavoro</li>
                    <li>Libertà di espressione</li>
                    <li>Salute mentale</li>
                </ul>

                <h2
                    class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-8 lg:mb-16 uppercase">
                    Il perchè</h2>
                <p class="text-xl font-regular leading-7 lg:pl-28">
                    Un evento per dare voce alla <strong>Gen Z</strong> e costruire un <strong>ponte tra
                        generazioni</strong>.
                    Fondazione Caritro e Sideout Music presentano un progetto che mira a dare alle nuove generazioni uno
                    spazio autentico per
                    <strong>esprimersi</strong> su temi cruciali della <strong>contemporaneità</strong>.
                    Al centro c'è la parola <strong>“SWIPE”</strong>, che da semplice gesto digitale si trasforma in un
                    <strong>simbolo universale</strong>, capace di <strong>unire generazioni diverse</strong>
                    attraverso un'azione ormai familiare a tutti.
                    In un momento storico ricco di <strong>sfide</strong> e <strong>riflessioni</strong>,
                    questo evento punta a creare un <strong>dialogo autentico</strong> e inclusivo tra figli e genitori,
                    studenti e insegnanti, nonni e nipoti.
                    Un’occasione per <strong>confrontarsi</strong>, <strong>comprendersi</strong> e immaginare insieme
                    il <strong>futuro</strong>.
                </p>

            </div>

            <ImageSlider
                :imageSliderURL="[fotoSlider01, fotoSlider02, fotoSlider03, fotoSlider04, fotoSlider05, fotoSliderVideo]"
                :imageSliderALT="['Palco con gli ospiti', 'Serena Valorzi sul palco', 'Il Rosso sul palco', 'Kid Yugi sul palco', 'Ciro Buccolieri sul palco', 'Link al video finale']"
                :imageSliderLink="['', '', '', '', '', 'https://youtu.be/lZfIpMa4J9Y?si=EQpEo-gjDguf5ILF']" />

        </div>
        <!--foto singola o slider quando è un evento passato
        <div class="max-h-[400px] overflow-hidden">
            <img src="../assets/foto_teatro.png" class="w-full" alt="Foto del teatro">
        </div>
        -->

        <div class="bg-[#d90a72] text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full  px-8 pt-24 mb-12 lg:pt-28 lg:px-36">

                <h2
                    class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-8 lg:mb-16 uppercase">
                    Info utili</h2>

                <ul class="grid grid-cols-1 lg:grid-cols-2 lg:pl-16 gap-8">

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/icone-gennaio/calendario_icona.png" alt="Icona calendario">
                        <p class="text-2xl lg:text-3xl">20.01.2025</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/icone-gennaio/orologio_icona.png" alt="Icona orologio">
                        <p class="text-2xl lg:text-3xl">17</p>
                    </li>

                    <li class="flex items-start space-x-4 lg:col-span-2">
                        <a class="" href="https://www.eventbrite.it/e/1096506202569?aff=oddtdtcreator"><img
                                class="w-[40px] min-w-[40px] h-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:cursor-pointer"
                                src="../assets/icone-gennaio/biglietto_icona.png" alt="Icona biglietto cartaceo"></a>
                        <div>
                            <p class="text-2xl lg:text-3xl mb-6">Biglietti dal 16.12.2024</p>
                            <p class="text-xl leading-7">
                                Non è necessario stampare i biglietti puoi semplicemente mostrare il QR code
                                all’ingresso.
                            </p>
                        </div>
                    </li>

                    <li class="flex items-start space-x-4 lg:col-span-2">
                        <img class="w-[40px]" src="../assets/icone-gennaio/luogo_icona.png" alt="icona luogo">
                        <div>
                            <p class="text-2xl lg:text-3xl mb-6">Auditorium S. Chiara Trento</p>
                            <p class="text-xl leading-7">
                                La location dell'evento è facilmente accessibile.<br>
                                In <strong>auto</strong>, si può parcheggiare vicino all'Auditorium presso
                                <strong>Piazza di Fiera</strong> (5 minuti a piedi) o <strong>Sanseverino</strong> (15
                                minuti).<br>
                                Con i <strong>mezzi pubblici</strong>, le linee <strong>3, 8 e 4</strong> fermano a 5
                                minuti dalla sede, alla fermata <strong>"Centro Santa Chiara"</strong>.<br>
                                Dalla <strong>stazione dei treni</strong>, l'Auditorium è raggiungibile in <strong>20
                                    minuti a piedi</strong> o con le stesse linee.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>

            <div class="w-full overflow-hidden">
                <a class=""
                    href="https://www.google.com/maps?ll=46.064033,11.127248&z=15&t=m&hl=it&gl=IT&mapclient=embed&cid=4976153971624757266"
                    target="_blank">
                    <img class="hidden 2xl:block w-full" src="../assets/maps-santa-chiara/map-lg.png" alt="Mappa">
                    <img class="hidden lg:block 2xl:hidden w-full" src="../assets/maps-santa-chiara/map-md.png"
                        alt="Mappa">
                    <img class="lg:hidden w-full" src="../assets/maps-santa-chiara/map.png" alt="Mappa">
                </a>
            </div>

        </div>

        <Footer />

    </div>

</template>
