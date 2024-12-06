<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";

</script>

<template>

    <div class="">

        <Header/>

        <div class="bg-quinary flex flex-col items-center">

            <div class="max-w-[1200px] w-full">

                <div class="w-full flex items-center justify-center">
                    <div class="p-4 rounded-full flex items-center justify-center w-40 bg-quinary -mt-14 lg:bg-transparent lg:-mt-48">
                        <img class="" src="../assets/frecce.png" alt="">
                    </div>
                </div>

                <h2 class="text-3xl uppercase px-8 text-secondary [text-shadow:0px_0px_4px_#ffffff]">Ospiti</h2>

                <Card
                    title="Rudy Zerbi"
                    details="Moderatore"
                    socialTitle="@rudyzerbi"
                    socialUrl="https://www.instagram.com/rudyzerbi/"
                    imageAlt="immagine di Rudy Zerbi"
                    imageUrl="../assets/Rudy Zerbi-def.jpg"
                    main="true"
                />

                <Card
                    title="Kid Yugi"
                    details="Artista musicale"
                    socialTitle="@kidyugiy3p"
                    socialUrl="https://www.instagram.com/kidyugiy3p/"
                    imageAlt="immagine di kid Yugi"
                    imageUrl="../assets/Kid Yugi-def.jpg"
                    reverse="true"
                />

                <Card
                    title="Il Rosso"
                    details="Content creator"
                    socialTitle="@ilrossopiubellodiinstagraam"
                    socialUrl="https://www.instagram.com/ilrossopiubellodiinstagraam/"
                    imageAlt="immagine di Il Rosso"
                    imageUrl="../assets/Il Rosso.png"

                />

                <Card
                    title="Livio Ricciardi"
                    details="Consulente sessuale"
                    socialTitle="@livioricciardi"
                    socialUrl="https://www.instagram.com/livioricciardi/"
                    imageAlt="immagine di Livio Ricciardi"
                    imageUrl="../assets/Livio Ricciardi.jpg"
                    reverse="true"

                />

                <Card
                    title="Ciro Buccolieri"
                    details="Discografico e manager"
                    socialTitle="@cirobuccolieri"
                    socialUrl="https://www.instagram.com/cirobuccolieri/"
                    imageAlt="immagine di Ciro Buccolieri"
                    imageUrl="../assets/Ciro Buccolieri-def.jpg"

                />

                <Card
                    title="Serena Valorzi"
                    details="Psicoterapeuta"
                    socialTitle="@serena-valorzi"
                    socialUrl="https://it.linkedin.com/in/serena-valorzi-31235146"
                    imageAlt="immagine di Serena Valorzi"
                    imageUrl="../assets/Serena-Valorzi-def.jpg"
                    reverse="true"
                />

            </div>

        </div>


        <div class="xl:col-span-3 p-8 px-8 bg-[#2e0059] text-white flex flex-col items-center">
            <div class="max-w-[1200px] w-full">

                <h2 class="text-4xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-4 uppercase">I temi</h2>
                <ul class="list-disc pl-5 space-y-0 text-2xl uppercase">
                    <li>Social network</li>
                    <li>Mondo del web</li>
                    <li>Relazioni e sessualità</li>
                    <li>Cambiamenti del lavoro</li>
                    <li>Libertà di espressione</li>
                    <li>Salute mentale</li>
                </ul>

                <h2 class="text-4xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mt-8 mb-4">IL PERCHÉ</h2>
                <p class="text-xl font-regular leading-7">
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
            <img src="../assets/fotoTeatro.jpg" class="w-full" alt="">
        </div>

        <div class="xl:col-span-3 px-8 py-6 bg-[#d90a72] text-white flex flex-col items-center">
            <div class="max-w-[1200px] w-full">

                <h2 class="text-4xl font-regular text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-10">INFO UTILI</h2>
                <ul class="space-y-8">

                    <li class="flex items-center space-x-4">
                        <img src="../assets/Calendario.svg" alt="icona calendario">
                        <p class="text-3xl">20.01.2025</p>
                    </li>

                    <li class="flex items-center space-x-4">
                        <img src="../assets/Orologio.svg" alt="icona orologio">
                        <p class="text-3xl">17</p>
                    </li>

                    <li class="flex items-start space-x-4">
                        <img src="../assets/Luogo.svg" alt="icona luogo">
                        <div>
                            <p class="text-3xl">Auditorium S. Chiara Trento</p>
                            <p class="text-xl mt-2 leading-7 pb-8">
                                La location dell'evento è facilmente accessibile.
                                In <strong>auto</strong>, si può parcheggiare vicino all'Auditorium presso
                                <strong>Piazza di Fiera</strong> (5 minuti a piedi) o <strong>Sanseverino</strong> (15 minuti).
                                Con i <strong>mezzi pubblici</strong>, le linee <strong>3, 8 e 4</strong> fermano a 5 minuti dalla sede,
                                alla fermata <strong>"Centro Santa Chiara"</strong>.
                                Dalla <strong>stazione dei treni</strong>, l'Auditorium è raggiungibile in <strong>20 minuti a piedi</strong> o con le stesse linee.
                            </p>
                            <a href="https://www.google.com/maps?ll=46.064033,11.127248&z=15&t=m&hl=it&gl=IT&mapclient=embed&cid=4976153971624757266" target="_blank">
                                <img class="hidden 2xl:block w-full" src="../assets/map-lg.png" alt="Mappa">
                                <img class="hidden lg:block 2xl:hidden w-full" src="../assets/map-md.png" alt="Mappa">
                                <img class="lg:hidden w-full" src="../assets/map.png" alt="Mappa">
                            </a>
                        </div>
                    </li>

                    <li class="flex text-3xl items-start space-x-4">
                        <img src="../assets/Biglietto.svg" alt="icona biglietto cartaceo">
                        <div>
                            <p class="">Biglietti dal 16.11.2024</p>
                            <p class="text-xl mt-2 leading-7">
                                Non è necessario stampare i biglietti puoi semplicemente mostrare il QR code all’ingresso.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>
        </div>

        <Footer/>

    </div>

</template>
