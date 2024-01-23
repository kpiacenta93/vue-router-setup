<template>
    <div class="input-container">
        <div class="input-wrapper">
            <input type="text" placeholder="Search Jobs..." class="SearchJobs">
            <button class="button-search">enter</button>
        </div>
    </div>
</template>

<style>
.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px;
}
.input-wrapper {
    display: flex;
    align-items: center;
}
.SearchJobs {
    margin-bottom: 200px;
    width: 300px;
    height: 60px;
}
.button-search {
    width: 100px;
    height: 65px;
    margin-left: 10px; 
    margin-bottom: 210px;
}
</style>
