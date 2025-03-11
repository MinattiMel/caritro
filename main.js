import {createApp} from 'vue';
import{createWebHistory, createRouter} from "vue-router";
import './index.css';
import App from "./App.vue";
import Home from "./pages/Home.vue";
import ScorrendoTraLeGenerazioni from "./pages/01_ScorrendoTraLeGenerazioni.vue";
import Masterclass from "./pages/masterclass.vue";

// definisco le routes e le collego ad una componente
const routes = [
    {path: '/scorrendo-tra-le-generazioni', component: ScorrendoTraLeGenerazioni},
    {path: '/', component: Home},
    {path: '/masterclass', component: Masterclass},
    //{path: '/', component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app');
