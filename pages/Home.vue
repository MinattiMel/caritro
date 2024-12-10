<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import imgZerbi from "../assets/ospiti/rudy-zerbi-def.jpg";
import imgYugi from "../assets/ospiti/kid-yugi-def.jpg";
import imgIlRosso from "../assets/ospiti/il-rosso.png";
import imgRicciardi from "../assets/ospiti/livio-ricciardi.jpg";
import imgBuccolieri from "../assets/ospiti/ciro-buccolieri-def.jpg";
import imgValorzi from "../assets/ospiti/serena-valorzi-def.jpg";

</script>

<template>

    <div class="">

        <Header/>

        <div class="bg-quinary flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-28 pb-32 px-8 lg:px-36">

                <h2 class="text-4xl lg:text-7xl text-secondary [text-shadow:0px_0px_4px_#ffffff] mb-28 uppercase">Ospiti</h2>

                <Card
                    title="Rudy Zerbi"
                    details="Moderatore"
                    socialTitle="@rudyzerbi"
                    socialUrl="https://www.instagram.com/rudy_zerbi/"
                    imageAlt="immagine di Rudy Zerbi"
                    :imageUrl="imgZerbi"
                    main="true"
                />

                <Card
                    title="Kid Yugi"
                    details="Artista musicale"
                    socialTitle="@kidyugiy3p"
                    socialUrl="https://www.instagram.com/kidyugiy3p/"
                    imageAlt="immagine di kid Yugi"
                    :imageUrl="imgYugi"
                    reverse="true"
                />

                <Card
                    title="Il Rosso"
                    details="Content creator"
                    socialTitle="@ilrossopiubellodiinstagraam"
                    socialUrl="https://www.instagram.com/ilrossopiubellodiinstagraam/"
                    imageAlt="immagine di Il Rosso"
                    :imageUrl="imgIlRosso"

                />

                <Card
                    title="Livio Ricciardi"
                    details="Consulente sessuale"
                    socialTitle="@livioricciardi"
                    socialUrl="https://www.instagram.com/livioricciardi/"
                    imageAlt="immagine di Livio Ricciardi"
                    :imageUrl="imgRicciardi"
                    reverse="true"

                />

                <Card
                    title="Ciro Buccolieri"
                    details="Discografico e manager"
                    socialTitle="@cirobuccolieri"
                    socialUrl="https://www.instagram.com/cirobuccolieri/"
                    imageAlt="immagine di Ciro Buccolieri"
                    :imageUrl="imgBuccolieri"

                />

                <Card
                    title="Serena Valorzi"
                    details="Psicoterapeuta"
                    socialTitle="@serena-valorzi"
                    socialUrl="https://it.linkedin.com/in/serena-valorzi-31235146"
                    imageAlt="immagine di Serena Valorzi"
                    :imageUrl="imgValorzi"
                    reverse="true"
                />

            </div>
        </div>


        <div class="bg-[#2e0059] text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-28 pb-32 px-8 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-28 uppercase">I temi</h2>
                <ul class="list-disc pl-5 space-y-0 text-xl uppercase lg:columns-2 lg:text-2xl mb-28">
                    <li>Social</li>
                    <li>Mondo del web</li>
                    <li>Relazioni e sessualità</li>
                    <li>Cambiamenti del lavoro</li>
                    <li>Libertà di espressione</li>
                    <li>Salute mentale</li>
                </ul>

                <h2 class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-28 uppercase">Il perchè</h2>
                <p class="text-xl font-regular leading-7 px-28">
                    Un evento per dare voce alla <strong>Gen Z</strong> e costruire un <strong>ponte tra generazioni</strong>.
                    Fondazione Caritro e Sideout Music presentano un progetto che mira a dare alle nuove generazioni uno spazio autentico per
                    <strong>esprimersi</strong> su temi cruciali della <strong>contemporaneità</strong>.
                    Al centro c'è la parola <strong>“SWIPE”</strong>, che da semplice gesto digitale si trasforma in un
                    <strong>simbolo universale</strong>, capace di <strong>unire generazioni diverse</strong>
                    attraverso un'azione ormai familiare a tutti.
                    In un momento storico ricco di <strong>sfide</strong> e <strong>riflessioni</strong>,
                    questo evento punta a creare un <strong>dialogo autentico</strong> e inclusivo tra figli e genitori, studenti e insegnanti, nonni e nipoti.
                    Un’occasione per <strong>confrontarsi</strong>, <strong>comprendersi</strong> e immaginare insieme il <strong>futuro</strong>.
                </p>

            </div>
        </div>

        <div class="max-h-[400px] overflow-hidden">
            <img src="../assets/FacciamoEco_24.11.12.jpg" class="w-full" alt="Foto del teatro">
        </div>

        <div class="bg-[#d90a72] text-white flex flex-col items-center">
            <div class="max-w-[1920px] w-full pt-28 pb-32 px-8 lg:px-36">

                <h2 class="text-4xl lg:text-7xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-28 uppercase">Info utili</h2>

                <ul class="grid grid-cols-1 lg:grid-cols-2 lg:pl-16 gap-8">

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/icon-calendario.svg" alt="Icona calendario">
                        <p class="text-2xl lg:text-3xl">20.01.2025</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img class="w-[38px]" src="../assets/icon-orologio.svg" alt="Icona orologio">
                        <p class="text-2xl lg:text-3xl">17</p>
                    </li>

                    <li class="flex items-start space-x-4 lg:col-span-2">
                        <img class="w-[40px]" src="../assets/icon-biglietto.svg" alt="Icona biglietto cartaceo">
                        <div>
                            <p class="text-2xl lg:text-3xl mb-6">Biglietti dal 16.11.2024</p>
                            <p class="text-xl leading-7">
                                Non è necessario stampare i biglietti puoi semplicemente mostrare il QR code all’ingresso.
                            </p>
                        </div>
                    </li>

                    <li class="flex items-start space-x-4 lg:col-span-2">
                        <img class="w-[40px]" src="../assets/icon-luogo.svg" alt="icona luogo">
                        <div>
                            <p class="text-2xl lg:text-3xl mb-6">Auditorium S. Chiara Trento</p>
                            <p class="text-xl leading-7">
                                La location dell'evento è facilmente accessibile.<br>
                                In <strong>auto</strong>, si può parcheggiare vicino all'Auditorium presso <strong>Piazza di Fiera</strong> (5 minuti a piedi) o <strong>Sanseverino</strong> (15 minuti).<br>
                                Con i <strong>mezzi pubblici</strong>, le linee <strong>3, 8 e 4</strong> fermano a 5 minuti dalla sede, alla fermata <strong>"Centro Santa Chiara"</strong>.<br>
                                Dalla <strong>stazione dei treni</strong>, l'Auditorium è raggiungibile in <strong>20 minuti a piedi</strong> o con le stesse linee.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>

            <div class="w-full overflow-hidden">
                <a class="" href="https://www.google.com/maps?ll=46.064033,11.127248&z=15&t=m&hl=it&gl=IT&mapclient=embed&cid=4976153971624757266" target="_blank">
                    <img class="hidden 2xl:block w-full" src="../assets/maps/map-lg.png" alt="Mappa">
                    <img class="hidden lg:block 2xl:hidden w-full" src="../assets/maps/map-md.png" alt="Mappa">
                    <img class="lg:hidden w-full" src="../assets/maps/map.png" alt="Mappa">
                </a>
            </div>

        </div>

        <Footer/>

    </div>

</template>
