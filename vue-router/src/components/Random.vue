<template>
    <div class="form-container">
      <form @submit.prevent="submitForm" class="form">
        <h5 class="title">Contact Us!</h5>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required class="form-input">
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required class="form-input">
  
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required class="form-input">
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" rows="4" required class="form-textarea"></textarea>
  
        <button type="submit" v-on:click="consoleLogFormData()">Submit</button>
      </form>
    </div>
  </template>

<script>


export default {
    name: 'Random',

data(){
    return{
        name: '',
        email: '',
        subject: '',
        message: '',
    }
},

methods: {
        consoleLogFormData(){
            console.log("this is name: ", this.name)
        }
},



}
</script>

<style>
.title {
    font-size: 3rem;
    color: white;
}
    
    .form{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 500px;
        width:600px;
        border-radius: 15px;
    }

    /* .form-container{
        border: #646cff;
    } */

    button {
        margin-top:10px;
    }


  

</style>