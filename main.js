import {createApp} from 'vue';
import './index.css';
import App from "./App.vue";
import Home from "./pages/Home.vue";
import SwipeFestival from "./pages/SwipeFestival.vue";
import {createMemoryHistory, createRouter} from "vue-router";

// definisco le routes e le collego ad una componente
const routes = [
    {path: '/', component: Home},
    // per ora non serve questa rotta
    // {path: '/swipe-festival', component: SwipeFestival},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount('#app');
