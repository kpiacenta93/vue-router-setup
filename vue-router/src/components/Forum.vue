<template>
  <div class="add-forum">
    <h1 class="title" v-show="showForumList">App-Tracker Forum</h1>
    <input type="text" placeholder="Add a forum.." class="add-input" v-model="newForumName" v-show="showForumList">
    <button class="forum-submit" v-on:click="addForum" v-show="showForumList">Submit</button>
  </div>
  <div class="forum-container">
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
            <h1 class="Username">User: Joe Blow</h1>
            {{ message.text }}
            <div class="timestamp">{{ message.timestamp }}</div>
            <a href="#" class="reply" v-on:click.prevent="showReplyBox(currentForumIndex, messageIndex)">Reply</a>
            <div v-if="message.showReplyInput">
              <input type="text" v-model="replyMessage" placeholder="Type your reply..." class="message-input">
              <!-- <button v-on:click="sendReply(currentForumIndex, messageIndex)">Send Reply</button> -->
            </div>
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
      // showReplyInput: false,
      showForumList: true,
      showFullForm: false,
      forums: [],
      newForumName: '',
      currentForumIndex: null,
      newMessage: '',
      replyMessage: '',
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
          timestamp: new Date().toLocaleString(),
          showReplyInput: false
        }
        this.forums[index].messages.push(newMsg);
        this.newMessage = '';
      }
    },

    closeFullForm() {
      this.showFullForm = false;
      this.showForumList = true;
    },
    showReplyBox(forumIndex, messageIndex) {
    this.forums[forumIndex].messages[messageIndex].showReplyInput = !this.forums[forumIndex].messages[messageIndex].showReplyInput;
},
sendReply(forumIndex, messageIndex) {
        const replyMsg = {
            text: this.replyMessage, 
            timestamp: new Date().toLocaleString(),
           
        };
     
        this.replyMessage = '';
        this.forums[forumIndex].messages[messageIndex].showReplyInput = false;
    },

  }
}
</script>

  

<style>
.reply {
  color: rgb(43, 241, 172);
}

.reply:hover {
  text-decoration: underline;
}


.Username {
  font-size: 1rem;
}


.forum-container {
  margin-bottom: 20px;
  position: relative;
  overflow: auto;
}

.title {
  /* margin-bottom: 700px; */
}

.add-input {
  margin-right: 10px;
  height: 20px;
  width: 260px;
}

.forum {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  border: 1px solid whitesmoke;
  width: 800px;
  height: 100px;
  border-radius: 15px;
}

.forum-button {
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

.add-forum {
  /* Removed the large margin-bottom */
  display: flex;
  /* justify-content: start; */
  align-items: center;
  flex-direction: column;
  /* Added to keep elements aligned vertically */
  /* margin-bottom: 500px; */
  margin-top: 10px;
}

.full-forum-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  overflow: auto;
}
</style>