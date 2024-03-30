<template>
  <div class="input-container">
    <div class="input-wrapper">
      <input type="text" placeholder="Search Jobs By Title and Location..." class="SearchJobs" v-model="query"> <!-- Ensure you have a model for 'query' -->
      <!-- <input type="text" placeholder="Location..." class="SearchJobs" v-model="location"> -->
      <button class="button-search" @click="fetchJobs">Enter</button>
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div class="job-display" v-if="!isLoading && showJobs">
      <div class="job-list">
        <div v-for="(job, index) in jobListings" :key="index" class="jobs">
          <h2> Company: {{ job.employer_name }}</h2>
          <img :src="job.employer_logo" :alt="job.employer_name + ' logo'" onerror="this.style.display='none'" class="employee-logo" />
          <p><b>Job Title :</b> {{ job.job_title }}</p>
          <h2>Description: {{ job.job_description }}</h2>
          <a :href="job.employer_website" target="_blank">Apply</a>
          <br>
          <button v-on:click=viewSavedJobs() v-bind="selectedJobListing">Add To Saved Jobs!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
  return {
    query: "",
    location: "", 
    page: "1", 
    showJobs: false,
    isLoading: false,
    jobListings: [],
    selectedJobListing: [],
  };
},
methods: {
  async fetchJobs() {
    this.isLoading = true;
    this.showJobs = false;
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: this.query,
        page: this.page,
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_VUE_SEARCH_JOBS_API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.jobListings = response.data.data; 
      console.log("This is the job data: ",this.jobListings)
      this.showJobs = true;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }

    if (this.jobListings.length === 0) {
      alert("Your query had no results... Please try again!");
      this.query = "";
      
    }
  },

  viewSavedJobs(){
    console.log(this.selectedJobListing)
  }
}
}
</script>

  

<style>

.employee-logo {
  /* display: flex; */
  /* justify-content: center; */
  width: 500px;
  align-items: center;
  height: 200px
}
.jobs {
    border: 1px solid white;
    margin: 10px;
    padding: 5px;
}

.input-container {
    display: flex;
    justify-content:baseline;
    align-items: center;
    flex-direction: column;
    margin: 70px;
    height: 100vh;
    
}

.input-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.SearchJobs {
    margin-bottom: 10px;
    width: 300px;
    height: 60px;
    border-radius: 15px;
    margin: 5px
}

.button-search {
    width: 100px;
    height: 65px;
    margin-left: 10px;
    margin-bottom: 15px;
}

.job-display {
    max-height: 800px;
    /* Set the maximum height for the job listings container */
    overflow-y: auto;
    /* Add a vertical scrollbar when content overflows */
}

.job-list {
    padding: 10px;
    /* Add some padding to the job list container */
}
</style>

