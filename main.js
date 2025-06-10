import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import './index.css';
import App from "./App.vue";
import Landingpage from "./pages/Landingpage.vue";
import ScorrendoTraLeGenerazioni_05 from './pages/ScorrendoTraLeGenerazioni_05.vue';
import ScorrendoTraLeGenerazioni_01 from './pages/ScorrendoTraLeGenerazioni_01.vue';
import Masterclass_05 from './pages/Masterclass_05.vue';


// definisco le routes e le collego ad una componente
const routes = [
  { path: '/scorrendo-tra-le-generazioni-01', component: ScorrendoTraLeGenerazioni_01 },
  { path: '/masterclass-05', component: Masterclass_05 },
  { path: '/', component: Landingpage },
  { path: '/scorrendo-tra-le-generazioni-05', component: ScorrendoTraLeGenerazioni_05 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app');
