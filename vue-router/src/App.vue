<template>
  <div>
    <header class="nav-bar">
      <div class="nav-links">
        <router-link to="/">Home|</router-link>
        <router-link to="/SeeApplications"> See Applications| </router-link>
        <router-link to="/AddApplications">  Add Applications</router-link>
      </div>
      <div class="contact-button">
        <router-link  to="/ContactUs" class="contact">Contact Us!</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>



<script>
export default {
  methods: {
  pushToContact(){
    this.$router.params("/ContactUs")
  }
}
}



</script>

<style scoped>
body {
  margin: 0;
  background-color: whitesmoke;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  
}

.nav-links {
  display: flex;
  list-style: none;
  padding-right: 10px;
  justify-content: space-between;
  font-family: monospace;
  /* margin: 0; */
  font-size: large;
  color: black;
  border:5px;
  
}

.nav-links:hover {
  text-decoration: 1px solid black ;
}

.nav-links router-link {
  margin-right: 20px; /* Add margin between router links */
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 20px;
  
}


.contact-button {
  display: flex;
  align-items: center;
  font-family: monospace;
}

.contact {
  display: flex;
  align-items: center;
  
  width: 75px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  padding: 5px 10px;
  background-color: rgb(92, 212, 246);
  color: whitesmoke;
  font-weight: bold;
  
}

.contact:hover {
  border: #646cff;
  text-decoration: underline;
  color: #646cff;
  transform: scale(1.1);
}
</style>

