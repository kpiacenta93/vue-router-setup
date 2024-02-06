<template>
    <div class="forum-container">
        <h1 class="title">App-Tracker Forum</h1>
        <div class="add-forum">
            <input type="text" placeholder="Add a forum.." class="add-input" v-model="newForumName">
            <button class="forum-submit" v-on:click="addForum">Submit</button>
            
        </div>
        <div class="forum-list" v-show="showForumList">
            <div v-for="(forum, index) in forums" :key="forum" class="forum">
                {{ forum }}  
                <button v-on:click="deleteForm(index)" class="forum-button">Delete forum</button>
                <button class="forum-button">View Forum</button>
            </div>
            <div class="full-forum-container" v-show="showFullForm">
                <div class="full-forum-box">

                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Forum',
    data() {
        return {
            showForumList: true,
            showFullForm: false,
           forums: [],
           newForumName: '',
        }
    },

    methods: {
        addForum() {
            if (this.newForumName.trim() !== '') {
                this.forums.push(this.newForumName);
                console.log("this is forums: ", this.forums)
                this.newForumName = ''; // Clear input after adding
            }
        },

        deleteForm(index) { // Pass index as parameter
            this.forums.splice(index, 1); // Remove the forum at the specified index
        }
    }
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

.forum{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    border: 1px solid whitesmoke;
    width: 800px;
    height: 100px;
    border-radius: 15px;
}

.forum-button{
    display: flex;
    justify-content: flex-end;
    align-items: end;
}
</style>