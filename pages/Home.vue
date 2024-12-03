<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Link from "../components/Link.vue";

</script>

<template>

    <div>

        <Header/>
        <div class=" bg-quinary">
            <div class="flex items-center justify-center">
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
            imageAlt="immagine di Rudy zerbi"
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
            right="true"
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
            right="true"

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
            right="true"

        />
    </div>

        <Link />


        <Footer/>

    </div>

</template>
