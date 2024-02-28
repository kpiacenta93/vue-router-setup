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
          <p>Viewd Applications: 34</p>
        </div>
        <div class="right-section">
          <h2>Account Settings</h2>
          <p>Newsletter: Subscribed</p>
          <p>Account Status: Active</p>
          <p>Membership Level: Premium</p>
        </div>
      </div>
    </div>
    <button v-on:click="getApplicationList">hello</button>
  </template>
  
  <script>
  import services from '../../services';

  export default {
      name: 'UserAccount',

      data(){
        return {
            jobsAppliedNum: 0,

        }
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
          return this.jobsAppliedNum
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },

    beforeMount() {
    this.getApplicationList();
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
  