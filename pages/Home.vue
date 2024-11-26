<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";

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
"
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

    </div>

</template>
