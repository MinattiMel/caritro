<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Link from "../components/Link.vue";

</script>

<template>

    <div>

        <Header/>

        <Card
            title="Rudy Zerbi"
            details="Moderatore"
            socialTitle="@rudyzerbi"
            socialUrl="https://www.instagram.com/rudyzerbi/"
        />

        <Card
            title="Kid Yugi"
            details="Artista musicale"
            socialTitle="@kidyugiy3p"
            socialUrl="https://www.instagram.com/kidyugiy3p/"
        />

        <Card
            title="Il Rosso"
            details="Content creator"
            socialTitle="@ilrossopiubellodiinstagraam"
            socialUrl="https://www.instagram.com/ilrossopiubellodiinstagraam/"

        />

        <Card
            title="Livio Ricciardi"
            details="Consulente sessuale"
            socialTitle="@livioricciardi"
            socialUrl="https://www.instagram.com/livioricciardi/"

        />
 
        <Card
            title="Ciro Buccolieri"
            details="Discografico e manager"
            socialTitle="@cirobuccolieri"
            socialUrl="https://www.instagram.com/cirobuccolieri/"

        />

        <Card
            title="Serena Valorzi"
            details="Psicoterapeuta"
            socialTitle="@serena-valorzi"
            socialUrl="https://it.linkedin.com/in/serena-valorzi-31235146"

        />

        <Link />


        <Footer/>

    </div>

</template>
