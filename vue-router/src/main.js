import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import SeeApplications from './views/SeeApplications.vue'
import AddApplications from './views/AddApplications.vue'

const routes = [
   {
    path: "/",
    name: "Home",
    component: Home,
   },

   {
    path: "/SeeApplications",
    name: "SeeApplications",
    component: SeeApplications,
   },

   {
    path: "/AddApplications",
    name: "AddApplications",
    component: AddApplications
   }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});



createApp(App).use(router).mount('#app')
