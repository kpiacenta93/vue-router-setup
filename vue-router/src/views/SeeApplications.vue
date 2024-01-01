<template>

<div class="container">
    <div class="seeCalendar">See Calendar</div>
    <router-link to="/SearchApplicationsViews" class="searchApps">Search Apps</router-link>
    <router-view/>
</div>

</template>

<script>

import SearchApplicationsViews from './SearchApplicationsViews.vue';
export default {


}

</script>

<style>
/* .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 750px;
    font-family: monospace;
    font-size: 2rem;
    text-decoration: underline;
} */

.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
}

.seeCalendar, .searchApps {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 1px solid white;
    width: 400px;
    height: 400px;
    transition: background-color 0.3s;
    font-family: monospace;
    font-size: x-large;
    cursor: pointer;
    
}

.searchApps:hover {
    transform: scaleY(1.3rem);
    background-color: rgb(92, 212, 246);
    text-decoration: underline;
    border: 1px solid black;
}

.seeCalendar:hover {
    transform: scaleY(1.3rem);
    background-color: rgb(92, 212, 246);
    text-decoration: underline;
    border: 1px solid black;
}
</style>
