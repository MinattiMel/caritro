import {createApp} from 'vue';
import{createWebHistory, createRouter} from "vue-router";
import './index.css';
import App from "./App.vue";
import Home from "./pages/Home.vue";
import ScorrendoTraLeGenerazioni from "./pages/ScorrendoTraLeGenerazioni.vue";
import Masterclass from "./pages/Masterclass.vue";
import Landingpage from "./pages/Landingpage.vue";


// definisco le routes e le collego ad una componente
const routes = [
    {path: '/scorrendo-tra-le-generazioni', component: ScorrendoTraLeGenerazioni},
    {path: '/masterclass', component: Masterclass},
    {path: '/landingpage', component: Landingpage},
    {path: '/', component: Home},
    //{path: '/', component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app');



// slider per immagini
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}









