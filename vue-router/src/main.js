import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import SeeApplications from './views/SeeApplications.vue'
import AddApplications from './views/AddApplications.vue'
import SearchApplicationsViews from './views/SearchApplicationsViews.vue'
import ContactUs from './views/ContactUs.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import TodoViews from './views/TodoViews.vue'
import SearchJobsViews from './views/SearchJobsViews.vue'
// import { store } from './store/index.js'
import ForumView from './views/ForumView.vue'
import store from './store/index'
import UserAccountViews from './views/UserAccountViews.vue'



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
   },

   {
    path: "/SearchApplicationsViews",
    name: "SearchApplicationsViews",
    component: SearchApplicationsViews
   },

   {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs
   },

   {
    path: "/Login",
    name: "login",
    component: Login
   },

   {
    path: "/Register",
    name: "Register",
    component: Register
   },

   {
    path: '/TodoViews',
    name: 'TodoViews',
    component: TodoViews
   },

   {
    path: '/SearchJobs',
    name: 'SearchJobsViews',
    component: SearchJobsViews
   },

   {
    path: '/Forum',
    name: 'ForumView',
    component: ForumView
   },
   {
    path: '/UserAccountViews',
    name: 'UserAccountViews',
    component: UserAccountViews
   }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});



createApp(App).use(router).use(store).mount('#app')
