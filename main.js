import { createApp } from 'vue';
import './index.css';
import App from "./App.vue";
import Home from "./pages/Home.vue";
import SwipeFestival from "./pages/SwipeFestival.vue";
import Festival from "./pages/Festival.vue";
import {createMemoryHistory, createRouter} from "vue-router";



// definisco le routes e le collego ad una componente
const routes = [
    { path: '/', component: Home },
    { path: '/swipe-festival', component: SwipeFestival },
    { path: '/festival/:eventName', component: Festival },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app');

