<template>
  <div class="container">

    <div class="jobsList">
      <button @click="getApplicationList()"></button>
      <h3 class="header-title">Search Job By Text!</h3>
      <div class="input">

        <input type="text" placeholder="Search Job By Text..." v-model="searchText">
        <div class="button">
          <button>Submit</button>
          <!-- <button @click="checking()">hey yo</button> -->
        </div>
      </div>
      <h3> Jobs Applied: {{ jobApplications.length }}</h3>
      <li v-for="application in jobApplications"  :key="jobApplications.application_id" class="jobs">
        <h2 class="title">{{ application.job_title }}</h2>
        <p>Company: {{ application.company }}</p>
        <p>Application Date: {{ application.application_date }}</p>
        <p>Contact Person: {{ application.contact_person }}</p>
        <p>Contact Email: {{ application.contact_email }}</p>
        <p>Contact Phone Number: {{ application.contact_phone }}</p>
        <p>Application Status: {{ application.application_status }}</p>
        <p>Notes: {{ application.notes }}</p>
        <button class="update-button" exact>Update</button>
      </li>
    </div>

  </div>
</template>

<script>

import services from '../../services';




export default {

  methods : {
    getApplicationList() {
    services.getAllApplications()
      .then((response) => {
        let data = response.data;
        console.log(data)
        this.jobApplications = response.data

        console.log(this.jobApplications)
        // console.log(toRaw(this.jobApplications))
        // console.log(this.filteredApp[0])
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },

  },
  beforeMount() {
    this.getApplicationList();
  },


  data() {
    return {
      searchText: '',
      showingSearchResults: false,
      jobApps: [],
      jobApplications: [], 
    }

  }
}

</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px
}

.jobs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  padding-top: 5px;
  margin: 15px;
  transition: background-color 0.3s;
  height: 200px;
  padding-left: 5px;
  font-size: 0.7rem;
  font-family: monospace;
  width: 1200px;
  overflow: auto;
  font-size: 1.1rem;
  border-radius: 15px 15px 15px 15px;

}

.jobs:hover {
  background-color: rgb(92, 212, 246);
  color: black;
  border: 3px solid black;
  transform: scale(1.6rem);
}

.title {
  display: flex;
  text-decoration: underline;
}

.update-button {
  margin-bottom: 8px;
  margin-right: 5px;
  background-color: (92, 212, 246)
}

.update:hover {
  border: #535bf2;
}

.input {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  height: 100px;


}

.individual-jobs {
  display: flex;
  justify-content: center;
  border: 1px solid white;
}

.jobsList {
  overflow: auto;


}

.header-title {
  display: flex;
  font-family: monospace;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  border-radius: 15px 15px 15px 15px;
  color: black;
  background-color: rgb(92, 212, 246)
}
</style>