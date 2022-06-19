import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Rankings from './pages/Rankings.vue'
import Team from './pages/Team.vue'
import Matches from './pages/Matches.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/rankings', component: Rankings },
        { 
            path: '/team/:id', 
            name: 'Team', 
            component: Team 
        },
        {
            path: '/matches',
            component: Matches
        }
    ]
})

createApp(App).use(router).mount('#app')
