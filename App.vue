<script setup>


/*

 import {ref, computed} from 'vue'

 // function per controllare se i link sono esterni
 const isExternalURL = (url) => new URL(url).origin !== location.origin;

 // riferiemnto a current path
 const currentPath = ref(window.location.pathname)

 // gestione dei click sui link interni
 window.addEventListener('click', (ev) => {
 if (ev.target.matches('a[href]') || ev.target.closest('a[href]')) {
 const target = ev.target.matches('a[href]') ? ev.target : ev.target.closest('a[href]');
 // skip dei link esterni
 if (target.getAttribute('target') === '_blank' || isExternalURL(target.href)) {
 return;
 }
 ev.preventDefault();
 window.history.pushState({}, '', target.href);
 currentPath.value = window.location.pathname;
 }
 });

 // gestione del back browser
 window.addEventListener('popstate', () => {
 currentPath.value = window.location.pathname;
 })

 // carico la vista corrente in base alla route
 const currentView = computed(() => {
 return routes[currentPath.value || '/'] || NotFound
 })*/

</script>

<template>

    <main>
        <RouterView />
    </main>

    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/swipe-festival">Go to Swipe</RouterLink>
    </nav>
    
</template>
