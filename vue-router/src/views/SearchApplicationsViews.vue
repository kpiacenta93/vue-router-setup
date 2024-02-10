<template>
  
  <div class="container">
    
    <div class="jobsList">
      
      <h3 class="header-title">Search Jobs</h3>
      <div class="input">

        <input type="text" placeholder="Search Job By Text..." v-model="searchText">
        <div class="button">
          <button @click="filterApplications()">Submit</button>
          <!-- <button @click="checking()">hey yo</button> -->
        </div>
      </div>
      <h3> Jobs Applied: {{ jobApplications.length }}</h3>
      <li v-for="application in (showingSearchResults ? filteredApplications : jobApplications)" :key="application.application_id" class="jobs">
        <h2 class="title">{{ application.job_title }}</h2>
        <p>Company: {{ application.company }}</p>
        <p>Application Date: {{ formatDate(application.application_date) }}</p>
        <p>Contact Person: {{ application.contact_person }}</p>
        <p>Contact Email: {{ application.contact_email }}</p>
        <p>Contact Phone Number: {{ application.contact_phone }}</p>
        <p>Application Status: {{ application.application_status }}</p>
        <p>Notes: {{ application.notes }}</p>
        <div class="buttons">
        <button @click="findAppId(application)" class="update-button" exact>Update</button>
        <button @click="deleteApplicationById(application.application_id)" class="update-button" exact>delete</button>
        </div>
      </li>
    </div>

  </div>
</template>

<script>

import services from '../../services';




export default {
  methods : {
    formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  filterApplications() {
  if (this.searchText) {
    this.showingSearchResults = true;
    console.log(this.showingSearchResults);
    console.log(this.searchText);
    this.filteredApplications = this.jobApplications.filter((application) => {
      return Object.values(application).some((value) =>
        String(value).toLowerCase().includes(this.searchText.toLowerCase())
      );
    });

    if (this.filteredApplications.length === 0) {
      alert('Your search provided no results, try again!');
      this.searchText = '';
      this.filterApplications();
      
    }
    this.$router.push('/SearchApplicationsViews')
  } else {
    this.showingSearchResults = false;
    this.filteredApplications = this.jobApplications;
  }
},


    getApplicationList() {
    services.getAllApplications()
      .then((response) => {
        let data = response.data;
        console.log(data)
        this.jobApplications = response.data

        console.log(this.jobApplications)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },

  findAppId(application){
    console.log(application.application_id)
  },

  deleteApplicationById(id){
    services.deleteApplicationById(id)
    .then((response) => {
      console.log(response.data)
    })
    alert("application has been succsessfully removed")
    this.searchText = ''
    this.getApplicationList()
  }

  },
  beforeMount() {
    this.getApplicationList();
  },


  data() {
    return {
      searchText: '',
      showingSearchResults: false,
      filteredApplications: [],
      jobApplications: [], 
    }

  }
}

</script>


<style scoped>
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
  width: 1220px;
  overflow: hidden;
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

.update-button {
  border: 1px solid #535bf2;
  color: grey
}
.buttons .update-button:hover {
  transform: scaleY(1.2);
  color: white;
  background-color: black;
}
</style>