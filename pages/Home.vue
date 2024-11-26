<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
</script>

<template>

    <div class="xl:grid xl:gap-8 xl:grid-cols-3 p-8 lg:p-16 min-h-screen min-w-screen">

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

        <div class="xl:justify-self-end flex flex-col gap-8 xl:col-start-2 xl:col-span-2 xl:row-span-2">
            <div class="grid gap-2 xl:grid-cols-3 xl:pt-12">
                <p class="xl:col-start-2 xl:col-span-2 text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-secondary [text-shadow:0px_0px_9px_#07fbfb]">20.01.2025</p>
                <p class="xl:col-start-2 xl:col-span-2 text-xl 2xl:text-3xl">Auditorium S. Chiara - Trento | Ore 17 - 19</p>
            </div>
            <div class="mt-auto">
                <h2 class="sr-only">Programma</h2>
                <ul class="lowercase text-xl lg:text-2xl xl:text-right space-y-3 lg:space-y-7">
                    <li class="text-primary lg:grid items-end gap-12 grid-cols-3">Moderatore <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Rudy Zerbi</strong></li>
                    <li class="lg:grid items-end gap-12 grid-cols-3">Artista musicale <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Kid Yugi</strong></li>
                    <li class="lg:grid items-end gap-12 grid-cols-3">Content creator <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Il Rosso</strong></li>
                    <li class="lg:grid items-end gap-12 grid-cols-3">Consulente sessuale <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Livio Ricciardi</strong></li>
                    <li class="lg:grid items-end gap-12 grid-cols-3">Discografico e manager <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Ciro Buccolieri</strong></li>
                    <li class="lg:grid items-end gap-12 grid-cols-3">Psicoterapeuta <strong class="text-left col-span-2 uppercase lg:text-5xl 2xl:text-7xl">Serena Valorzi</strong></li>
                </ul>
            </div>
        </div>

        <Footer/>

    </div>

</template>
