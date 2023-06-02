import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

/* ROUTES */
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
