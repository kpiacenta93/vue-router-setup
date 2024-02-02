<template>
    <div class="forum-container">
     <h1 class="title">App-Tracker Forum</h1>
     <div class="add-forum">
        <input type="text" placeholder="Add a forum.." class="add-input">
        <button class="forum-submit">Submit</button>
     </div>

    </div>


</template>

<script>
export default {
    name: 'Forum'
}
</script>

<style>
.forum-container {
    margin-bottom: 550px;
}
.title{
    margin-bottom: 20px;
}

.add-input {
    margin-right: 10px;
    height: 20px;
    width: 260px;
}

</style>