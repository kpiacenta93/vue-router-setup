<template>
    <div class="user-account-container">
      <h1>Welcome to your account dashboard, Joe Blow!</h1>
      <div class="grid-container">
        <div class="left-section">
          <h2>Profile Information</h2>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Location: New York, USA</p>
        </div>
        <div class="right-section">
          <h2>Account Settings</h2>
          <p>Newsletter: Subscribed</p>
          <p>Account Status: Active</p>
          <p>Membership Level: Premium</p>
        </div>
        <div class="left-section">
          <h2>Application Info:</h2>
          <p>Jobs Applied: {{ jobsAppliedNum }}</p>
          <p>Interviews # : 10</p>
          <p>Viewd Applications: {{ viewedAppNum }}</p>
        </div>
        <div class="right-section">
          <h2>Account Settings</h2>
          <p>Newsletter: Subscribed</p>
          <p>Account Status: Active</p>
          <p>Membership Level: Premium</p>
        </div>
      </div>
    </div>
    <button v-on:click="fetchData"> View Saved Job Data! {{ title }}</button>
  </template>
  
  <script>
  import services from '../../services';

  export default {
      name: 'UserAccount',

      data(){
        return {
            title: '',
            jobsAppliedNum: 0,
            viewedAppNum: 0,
            jobApplications: [],

        }
      },

    beforeMount() {
    this.getApplicationList();
  },

      methods: {
        getApplicationList() {
      services.getAllApplications()
        .then((response) => {
          let data = response.data;
          console.log(data)
          this.jobApplications = response.data
          this.jobsAppliedNum = this.jobApplications.length;
          console.log("this is the number for applied jobs", this.jobsAppliedNum)
          console.log(this.jobApplications)
          this.viewedAppNum = this.jobApplications.filter(app => app.application_status === "viewed").length
          console.log("this is viewed app number", this.viewedAppNum)
          return this.jobsAppliedNum
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },

   async fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json(); // Convert the response to JSON
     this.title = data.title
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}



      }
  }
  </script>
  
  <style scoped>
  .user-account-container {
    text-align: center;
    /* border: 1px solid white; */
    /* background-image: url('../assets/app-tracker-photo2.png'); */
    /* width: 1500px; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    /* justify-content: center; */
  }
  
  .left-section, .right-section {
    background-color: #92cdcf;
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    color: #333;
  }
  
  p {
    color: #666;
  }
  </style>
  