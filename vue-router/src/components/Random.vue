<template>
    <div class="form-container">
      <form @submit.prevent="sendEmail" class="form">
        <h5 class="title">Contact Us!</h5>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="from_name" name="from_name" required class="form-input">
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="from_email" name="from_email" required class="form-input">
  
        <label for="message">Message: </label>
        <textarea id="message" v-model="message" rows="4" name="message" required class="form-textarea"></textarea>
  
        <button type="submit" value="Send">Submit</button>
      </form>
    </div>
  </template>

<script>

import emailjs from 'emailjs-com';


export default {
    name: 'Random',

data(){
    return{
        from_name: '',
        from_email: '',
        message: '',
    }
},

methods: {
    sendEmail(e) { 
        try {
            emailjs.sendForm(import.meta.env.VITE_VUE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_VUE_EMAIL_JS_TEMPLATE_ID, e.target, import.meta.env.VITE_VUE_EMAIL_JS_USER_ID)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
            }, (error) => {
                console.log('Failed to send email.', error.text);
            });
        } catch (error) {
            console.log({error});
        }
        // Reset form fields
        this.from_name = '';
        this.from_email = '';
        this.message = '';
    },
}




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