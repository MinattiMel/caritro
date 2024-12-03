const jsImage = document.getElementById('jsImage');

// Aggiungiamo un evento 'mouseenter' per ingrandire l'immagine
jsImage.addEventListener('mouseenter', () => {
    jsImage.style.transform = 'scale(1.1)';
});

// Aggiungiamo un evento 'mouseleave' per riportare l'immagine alla dimensione originale
jsImage.addEventListener('mouseleave', () => {
    jsImage.style.transform = 'scale(1)';
});
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";

</script>

<template>

    <div class="">

        <Header/>

        <div class="bg-quinary flex flex-col items-center">

            <div class="max-w-[1200px] w-full">

                <div class="w-full flex items-center justify-center">
                    <div class="p-6 rounded-full flex items-center justify-center w-40 bg-quinary -mt-14">
                        <img class="" src="../assets/frecce-in-giu.png">
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
                    Al centro c'è la parola <strong>“SWIPE”</strong>, che da semplice gesto digitale si trasforma in un
                    <strong>simbolo universale</strong>, capace di <strong>unire generazioni diverse</strong>
                    attraverso un'azione ormai familiare a tutti.
                    In un momento storico ricco di <strong>sfide</strong> e <strong>riflessioni</strong>, 
                    questo evento punta a creare un <strong>dialogo autentico</strong> e inclusivo tra figli e genitori, studenti e adulti.
                </p>

            </div>
        </div>

        <div class="xl:col-span-3 px-8 py-6 bg-[#d90a72] text-white flex flex-col items-center">
            <div class="max-w-[1200px] w-full">

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
                                La location dell'evento è facilmente accessibile.
                                In <strong>auto</strong>, si può parcheggiare vicino all'Auditorium presso 
                                <strong>Piazza di Fiera</strong> (5 minuti a piedi) o <strong>Sanseverino</strong> (15 minuti).
                                Con i <strong>mezzi pubblici</strong>, le linee <strong>3, 8 e 4</strong> fermano a 5 minuti dalla sede, 
                                alla fermata <strong>"Centro Santa Chiara"</strong>.
                                Dalla <strong>stazione dei treni</strong>, l'Auditorium è raggiungibile in <strong>20 minuti a piedi</strong> o con le stesse linee.
                            </p>
                            <div>
                                <iframe class="sm:justify-center ml-20 sm:ml-0" src="https://maps.app.goo.gl/z8c5cFgWVFfY7RLx8" width="" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

        <Footer/>

    </div>

</template>