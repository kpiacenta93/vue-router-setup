<template>
  <!-- <header class="app-tracker-header">Welcome to App-Tracker</header> -->
  <div class="home-container">
    <!-- <h6 class="home-title">App-Tracker</h6> -->
    <div class="home-cards" ref="cardsContainer">
      <div class="card1">
        <p class="goal"><b>Our Goal</b> </p>
        <br>
        <p>Our goal at app tracker is to make your job searching process seamless. We give you the ability to
          effortlessley track the applications you have submitted!</p>
      </div>
      <div class="card2">
        <p class="goal"><b>Adding Applications</b> </p>
        <br>
        <p>Adding applications to our database is simple – just fill out a form with job details, and your application is
          securely saved. Stay organized and track your job search effortlessly with our user-friendly app.</p>
      </div>
      <div class="card3">
        <p class="goal"><b>Todo Feature</b> </p>
        <br>
        <p>App Tracker's to-do feature offers a focused and intuitive way for job seekers to manage their
          application-related tasks, ensuring no deadline or follow-up opportunity is missed during the job search
          journey.</p>
      </div>
      <div class="card4">
        <p class="goal"><b>Job Forum</b> </p>
        <br>
        <p>"App Tracker's job forum empowers users to create or contribute to discussions, sharing insights and advice,
          fostering a supportive community for navigating the job search process together."</p>
      </div>
      <div class="card5">
        <p class="goal"><b>Search Jobs</b> </p>
        <br>
        <p>App Tracker's job search feature enables users to effortlessly search for job openings and provides direct
          links to applications, streamlining the job discovery and application process.</p>
      </div>
      <button class="arrow left-arrow" @click="moveCards('left')">←</button>
      <button class="arrow right-arrow" @click="moveCards('right')">→</button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    moveCards(direction) {
      const container = this.$refs.cardsContainer;
      const cardWidth = container.querySelector('.card1').offsetWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollLeft += scrollAmount;
      console.log("button is being pressed")
    }
  }

}

</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: url('../assets/app-tracker-photo2.png');
  background-position: 2% center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 108%;
  height: 800px;
  margin-top: 50px;
  border: 1px solid whitesmoke;
  border-radius: 15px;
  margin-right: 50px;
  /* white-space: nowrap; */
}

.home-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  margin-bottom: 1000px;
  border: 1px solid #535bf2;
  border-radius: 10px 10px 10px 10px;
  width: 500px;
}

.home-cards {
  margin-left: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15px;
  height: 900px;
  /* width: 100%; */
  /* border: 1px solid white; */
  /* box-shadow: 2px 2px 2px black; */
  /* background-image: url('../assets/app-tracker-photo2.png'); */
  margin-top: 45px;
  margin-right: 90px;
  scroll-behavior: smooth;
  /* white-space: nowrap; */
}


.card1,
.card2,
.card3,
.card4,
.card5 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(234, 219, 219);
  height: 500px;
  width: 370px;
  padding: 10px;
  margin: 25px;
  border-radius: 15px;
  transition: transform 0.3s, background-color 0.3s;
  /* Add transition properties */
  background-color: rgba(51, 49, 49, 0.777);
  padding-right: 30px;
  border-right: 25px;
}

.card1:hover,
.card2:hover,
.card3:hover,
.card4:hover,
.card5:hover {
  transform: scale(1.1);
  background-color: rgba(92, 213, 246, 0.762);
  color: black;
  font-size: x-large;
  border: 1px solid black;


}


.goal {
  font: bolder;
  font-size: 3.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

}

.app-tracker-header {
  margin-bottom: 50px;
  font-size: 3rem;
}

.goal:hover {
  text-decoration: underline;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: transparent; */
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  z-index: 1;
  border: #535bf2;
}

.left-arrow {
  left: 0;
  border: #535bf2;
}

.right-arrow {
  right: 0;
}


@media (max-width: 768px) {
  .home-cards {
    flex-direction: column;
    /* Stack cards vertically */
  }

  /* Add styles for cards on smaller screens */
  .card {
    width: 80%;
    /* Adjust card width as needed */
    margin: 10px auto;
    /* Center align cards */
  }
}

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    /* Stack cards vertically */
  }

  /* Add styles for cards on smaller screens */
  .card {
    width: 80%;
    /* Adjust card width as needed */
    margin: 10px auto;
    /* Center align cards */
  }
}
</style>