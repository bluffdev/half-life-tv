import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Rankings from './pages/Rankings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/rankings', component: Rankings }
    ]
})

createApp(App).use(router).mount('#app')
