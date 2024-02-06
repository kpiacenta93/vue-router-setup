<template>
    <div class="forum-container">
      <h1 class="title" v-show="showForumList">App-Tracker Forum</h1>
      <div class="add-forum">
        <input type="text" placeholder="Add a forum.." class="add-input" v-model="newForumName">
        <button class="forum-submit" v-on:click="addForum" v-show="showForumList">Submit</button>
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
          <h2>Forum Name: {{ forums[currentForumIndex]?.name }}</h2>
          <div class="chat-messages">
            <div v-for="message in forums[currentForumIndex]?.messages" :key="message" class="message">
              {{ message.text }}
              <div class="timestamp">{{ message.timestamp }}</div>
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
          this.newForumName = ''; 
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
            const newMsg = {
                text: this.newMessage,
                timestamp: new Date().toLocaleString()
            }
          this.forums[index].messages.push(newMsg);
          this.newMessage = ''; 
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
    border: 2px solid #007bff;
    height: 500px;
    width: 1200px;
    margin: 20px auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    background-color: #f8f9fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-y: auto;
    color: black;
}

.chat-messages {
    width: 90%;
    height: 80%;
    overflow-y: auto;
    background-color: #a2a6a9; 
    border: 1px solid #cfd8dc; 
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    gap: 10px; 
}

.message {
    background-color: #007bff; 
    color: white; 
    padding: 10px;
    border-radius: 15px;
    max-width: 60%;
    align-self: flex-end; 
    word-wrap: break-word;
}

.message-input {
    width: calc(90% - 20px); 
    padding: 10px;
    border-radius: 20px; 
    border: 1px solid #cfd8dc; 
    margin-right: 10px; 
}

.forum-button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff; 
    color: white;
    cursor: pointer; 
}


button:focus {
    outline: none; 
}

button:hover {
    background-color: #0056b3; 
}

</style>