<template>
    <div class="input-container">
      <div class="input-wrapper">
        <input type="text" placeholder="Search Jobs..." class="SearchJobs" v-model="jobTitle">
        <input type="text" placeholder="Location..." class="SearchJobs" v-model="location">
        <button class="button-search" @click="fetchJobs">Enter</button>
      </div>
      <div v-if="isLoading" class="loading">Loading...</div>
      <div class="job-display" v-if="!isLoading && showJobs">
        <div class="job-list">
          <div v-for="(job, index) in jobListings" :key="index" class="jobs">
            <h2>Job Title: {{ job.title }}</h2>
            <br>
            <h3>Company Name: {{ job.companyName }}</h3>
            <br>
            <p><b>Description:</b> {{ job.description }}</p>
            <h2>Compensation: {{ job.pay }}</h2>
            <br>
            <a :href="job.companyUrl" target="_blank">Apply</a>
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
       
        jobTitle: "",
        location: "",
        showJobs: false,
        isLoading: false,
        jobListings: []
      };
    },
    methods: {
      async fetchJobs() {
        this.isLoading = true;
        this.showJobs = false;
        const options = {
          method: 'POST',
          url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': import.meta.env.VITE_VUE_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
          },
          data: {
            title: this.jobTitle,
            location: this.location,
            rows: 25
          }

        };
  
        try {
          const response = await axios.request(options);
          this.jobListings = response.data; 
          this.showJobs = true;
        } catch (error) {
          console.error(error);
        } finally {
          this.isLoading = false;
        }

        if(this.jobListings.length === 0){
            alert("your query had no results... Please try again!")
            this.jobTitle = "";
            this.location = "";
        }
      },
    } 
  }
  </script>
  

<style>
.jobs {
    border: 1px solid white;
    margin: 10px;
    padding: 5px;
}

.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px;
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

