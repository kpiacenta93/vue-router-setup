<template>
    <div class="user-account-container">
      <h1>Welcome, User!</h1>
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'UserAccount'
  }
  </script>
  
  <style scoped>
  .user-account-container {
    text-align: center;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }
  
  .left-section, .right-section {
    background-color: #f5f5f5;
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
  