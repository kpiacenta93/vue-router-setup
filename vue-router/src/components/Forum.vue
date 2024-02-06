<template>
    <div class="forum-container">
      <h1 class="title" v-show="showForumList">App-Tracker Forum</h1>
      <div class="add-forum">
        <input type="text" placeholder="Add a forum.." class="add-input" v-model="newForumName">
        <button class="forum-submit" v-on:click="addForum">Submit</button>
      </div>
      <div class="forum-list" v-show="showForumList">
        <div v-for="(forum, index) in forums" :key="forum.name" class="forum">
          {{ forum.name }}  
          <button v-on:click="deleteForm(index)" class="forum-button">Delete forum</button>
          <button class="forum-button" v-on:click="showFullFormFn(index)">View Forum</button>
        </div>
      </div>
      <div class="full-forum-container" v-show="showFullForm">
        <div class="full-forum-box">
          <h2>{{ forums[currentForumIndex]?.name }}</h2>
          <div class="chat-messages">
            <div v-for="message in forums[currentForumIndex]?.messages" :key="message" class="message">
              {{ message }}
            </div>
          </div>
          <input type="text" v-model="newMessage" placeholder="Type a message..." class="message-input">
          <button v-on:click="sendMessage(currentForumIndex)">Send</button>
        </div>
        <button v-on:click="closeFullForm">Close</button>
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
        currentForumIndex: null,
        newMessage: '',
      }
    },
  
    methods: {
      addForum() {
        if (this.newForumName.trim() !== '') {
          this.forums.push({ name: this.newForumName, messages: [] });
          this.newForumName = ''; // Clear input after adding
        }
      },
  
      deleteForm(index) {
        this.forums.splice(index, 1);
      },
  
      showFullFormFn(index) {
        this.currentForumIndex = index;
        this.showForumList = false;
        this.showFullForm = true;
      },
  
      sendMessage(index) {
        if (this.newMessage.trim() !== '') {
          this.forums[index].messages.push(this.newMessage);
          this.newMessage = ''; // Clear input after sending
        }
      },
  
      closeFullForm() {
        this.showFullForm = false;
        this.showForumList = true;
      },
    }
  }
  </script>

  

<style>
.forum-container {
    margin-bottom: 550px;
    position: relative;
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

.full-forum-box {
    border: 2px solid #007bff; /* A brighter border color for visibility */
    height: 500px;
    width: 500px;
    margin: 20px auto; /* Centers the box */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Adds shadow for depth */
    border-radius: 10px; /* Rounds the corners for a modern look */
    background-color: #f8f9fa; /* A light background color for contrast */
    padding: 20px; /* Adds space inside the box */
    display: flex;
    flex-direction: column; /* Organizes content vertically */
    align-items: center; /* Centers content horizontally */
    justify-content: start; /* Aligns content to the top */
    overflow-y: auto; /* Enables vertical scrolling if content overflows */
}

.full-forum-container {
    margin-top: 200px;
    display: flex;
    justify-content: center; /* Ensures the box is centered in the container */
    align-items: center; /* Vertically centers the box in its container */
    height: 100%; /* Takes full height of the viewport or its parent */
    width: 100%; /* Takes full width of the viewport or its parent */
    position: absolute; /* Positions the container above other content */
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adds a semi-transparent overlay */
}

.forum-container {
    position: relative; /* Ensures the full forum container is positioned relative to this */
}

</style>