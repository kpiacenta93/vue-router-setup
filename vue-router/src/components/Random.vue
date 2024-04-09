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
    <div class="kyles-div">
        <h1> -></h1>
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
                alert("email has been sent successfully! Congrats!")
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

<style scoped>
.form-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  color: #42b983;
  margin-bottom: 20px;
  font-size: 35px;
}

.form-input, .form-textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Added for better box sizing */
}

.form-input:focus, .form-textarea:focus {
  border-color: #42b983;
  outline: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

button[type="submit"] {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #369974;
}

.kyles-div {
    display: flex;
    border: 1px solid white;
    margin-top: 15px;
    border-radius: 50%;
    height: 500px;
    width: 500px;
    justify-content: center;
    align-items: center;
}
</style>
