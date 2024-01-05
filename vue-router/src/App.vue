<!-- <template>
  <div class="main-container">
    <header class="nav-bar">
      <div class="nav-links">
        <aside><div class="side-bar" @click="toggleDropDown">-
          <div class="side-bar-menu">
        <a href="" class="toggleMenu">Hello</a>
        <a href="" class="toggleMenu">Are You THere</a>
        <a href="" class="toggleMenu">Noone is home</a>
      </div>
        </div></aside>
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
  <footer class="footer"><span>&copy; App-Tracker 2023</span></footer>
</template>



<script>
export default {
  data(){
    return {
      isDropDownOpen: false,
    };
  },
  methods: {
  pushToContact(){
    this.$router.params("/ContactUs")
  },
  toggleDropDown(){
    this.isDropDownOpen = !this.isDropDownOpen
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

.side-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 20px;
  width: 20px;;
  margin-right: 20px;
  border-radius:15px 15px 15px 15px;
}

.side-bar:hover {
  border-radius: 5px 5px 5px 5px;
  /* border: #646cff; */
  height: 25px;
  width: 25px;
  cursor: pointer;

}


.toggleMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid black;
  margin-top: 150px;
  margin-left: 100px;
  background-color: whitesmoke;
  width: 200px;
  height: 500px;
}

.side-bar-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
}




</style> -->
<template>
  <div class="main-container">
    <header class="nav-bar">
      <div class="nav-links">
        <aside>
          <div class="side-bar" @click="toggleDropDown">
            {{ isDropDownOpen ? '-' : '+' }}
            <div class="side-bar-menu" :class="{ 'open-menu': isDropDownOpen }">
              <p class="links"><b>LINKS</b></p>
              <a href="" class="toggleMenu">Job Resources</a>
              <a href="" class="toggleMenu">Job Boards</a>
              <a href="" class="toggleMenu">Blog</a>
              <a href="" class="toggleMenu">Register</a>
              <a href="" class="toggleMenu">Login</a>
            </div>
          </div>
        </aside>
        <router-link to="/">Home|</router-link>
        <router-link to="/SeeApplications">See Applications|</router-link>
        <router-link to="/AddApplications">Add Applications</router-link>
      </div>
      <div class="contact-button">
        <router-link to="/ContactUs" class="contact">Contact Us!</router-link>
      </div>
    </header>
    <router-view />
  </div>
  <footer class="footer"><span>&copy; App-Tracker 2023</span></footer>
</template>

<script>
export default {
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  methods: {
    pushToContact() {
      this.$router.params("/ContactUs");
    },
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },
  },
};
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
  font-size: large;
  color: black;
}



.nav-links router-link {
  margin-right: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 20px;
}
.nav-links router-link:hover {
  text-decoration: 1px solid black;
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

.side-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 20px;
  width: 20px;
  margin-right: 20px;
  border-radius: 15px;
  cursor: pointer;
}

.side-bar a {
  margin-bottom: -3px;
}

.side-bar:hover {
  border-radius: 5px 5px 5px 5px;
}

.side-bar-menu a:hover {
  text-decoration: underline;
  background-color: rgba(92, 213, 246, 0.501);
  border-radius: 5px 5px 5px 5px;
  width: 100vh
}

.side-bar-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
  position: absolute;
  background-color: whitesmoke;
  top: 60px; 
  left: 0;
  z-index: 1;
  box-shadow: 5px 5px 10px solid whitesmoke;
  
}

.open-menu {
  margin-top: 10px;
  width: 199px; 
  height: 290px;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid black
}

.toggleMenu {
  text-decoration: none;
  color: black;
  padding: 10px;
}

.links {
  font-size: 2rem;
  text-decoration: underline;
  margin-top: 10px;
}

</style>

