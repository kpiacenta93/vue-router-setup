<template>
    
    <div class="form-container">
        
        <form action="mailto:piacentakyle@gmail.com" method="post" enctype="text/plain" class="form">
            <h5 class="title">Contact Us!</h5>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required class="form">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required class="form">

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required class="form">

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required class="form"></textarea>

        <input type="submit" value="Submit" class="submit-button">
    </form>
    </div>
    <button v-on:click="checking()"></button>

</template>

<script>

import services from '../../services';

export default {
    name: 'Random',

    methods: {
  checking() {
    services.getAllApplications()
      .then((response) => {
       let data = response.data;
       console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
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
    }

    /* .form-container{
        border: #646cff;
    } */

    .submit-button {
        margin-top:10px;
    }


  

</style>