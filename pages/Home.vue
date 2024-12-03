<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";

</script>

<template>

    <div class="xl:grid xl:gap-8 xl:grid-cols-3 p-0 lg:p-16 min-h-screen min-w-screen">

        <Header/>

        <Card
            title="Rudy Zerbi"
            details="Moderatore"
            socialTitle="@rudyzerbi"
            socialUrl="https://www.instagram.com/rudyzerbi/"
        />

        <Card
            title="Rudy Zerbi"
            details="Moderatore"
            socialTitle="Titolo per il social"
        />
                
        <Button 
        text="prova"
        />

        <Link />

        <div class="xl:justify-self-end flex flex-col gap-8 xl:col-start-2 xl:col-span-2 xl:row-span-2">
            <div class="grid gap-2 xl:grid-cols-3 xl:pt-12">
                <p class="xl:col-start-2 xl:col-span-2 text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-secondary [text-shadow:0px_0px_9px_#07fbfb]">20.01.2025</p>
                <p class="xl:col-start-2 xl:col-span-2 text-xl 2xl:text-3xl">Auditorium S. Chiara - Trento | Ore 17 - 19</p>
            </div>
        </div>

        <Footer/>

        <div class="xl:col-span-3 mt-8 p-8 px-8 bg-[#2e0059] text-white">
            <h2 class="text-2xl font-bold text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-4">I TEMI</h2>
            <ul class="list-disc pl-5 space-y-0 text-lg">
                <li>SOCIAL NETWORK</li>
                <li>MONDO DEL WEB</li>
                <li>RELAZIONI E SESSUALITÀ</li>
                <li>CAMBIAMENTI DEL LAVORO</li>
                <li>LIBERTÀ DI ESPRESSIONE</li>
                <li>SALUTE MENTALE</li>
            </ul>
            <h2 class="text-2xl font-bold text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mt-8 mb-4">IL PERCHÉ</h2>
            <p class="text-base leading-7">
                Un evento per dare voce alla <strong>Gen Z</strong> e costruire un <strong>ponte tra generazioni</strong>.
                Fondazione Caritro e Sideout Music presentano un progetto che mira a dare alle nuove generazioni uno spazio autentico per 
                <strong>esprimersi</strong> su temi cruciali della <strong>contemporaneità</strong>.
                Al centro c’è la parola <strong>“SWIPE”</strong>, che da semplice gesto digitale si trasforma in un
                <strong>simbolo universale</strong>, capace di <strong>unire generazioni diverse</strong>
                attraverso un’azione ormai familiare a tutti.
                In un momento storico ricco di <strong>sfide</strong> e <strong>riflessioni</strong>, 
                questo evento punta a creare un <strong>dialogo autentico</strong> e inclusivo tra figli e genitori, studenti e adulti.
            </p>
        </div>

    </div>

    <div class="xl:col-span-3 mt-8 px-8 py-6 bg-[#d90a72] text-white">
            <h2 class="text-2xl font-bold text-[#07fbfb] [text-shadow:0px_0px_8px_#07fbfb] mb-6">INFO UTILI</h2>
            <ul class="space-y-4">
                <li class="flex items-center space-x-4">
                    <span class="text-2xl"></span>
                    <span class="text-lg">20.01.2025</span>
                </li>
                <li class="flex items-center space-x-4">
                    <span class="text-2xl"></span>
                    <span class="text-lg">17</span>
                </li>
                <li class="flex items-center space-x-4">
                    <span class="text-2xl"></span>
                    <div>
                        <span class="block text-lg font-bold">Auditorium S. Chiara Trento</span>
                        <p class="text-base mt-2 leading-7">
                            La location dell’evento è facilmente accessibile.
                            In <strong>auto</strong>, si può parcheggiare vicino all’Auditorium presso 
                            <strong>Piazza di Fiera</strong> (5 minuti a piedi) o <strong>Sanseverino</strong> (15 minuti).
                            Con i <strong>mezzi pubblici</strong>, le linee <strong>3, 8 e 4</strong> fermano a 5 minuti dalla sede, 
                            alla fermata <strong>"Centro Santa Chiara"</strong>.
                            Dalla <strong>stazione dei treni</strong>, l’Auditorium è raggiungibile in <strong>20 minuti a piedi</strong> o con le stesse linee.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

</template>
