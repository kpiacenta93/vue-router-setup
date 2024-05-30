<template>
  <div class="input-container">
    <h1 class="title">Search Open Jobs By Title & Location: </h1>
    <div class="input-wrapper">
      <input type="text" placeholder="Search Jobs By Title and Location..." class="SearchJobs" v-model="query"> <!-- Ensure you have a model for 'query' -->
      <!-- <input type="text" placeholder="Location..." class="SearchJobs" v-model="location"> -->
      <button class="button-search" @click="fetchJobs">Enter</button>
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div class="job-display" v-if="!isLoading && showJobs">
      <div class="job-list">
        <div v-for="(job, index) in jobListings" :key="index" class="jobs" :class="{ 'job-saved': isJobSaved(job) }">
          <h2> Company: {{ job.employer_name }}</h2>
          <img :src="job.employer_logo" :alt="job.employer_name + ' logo'" onerror="this.style.display='none'" class="employee-logo" />
          <p><b>Job Title :</b> {{ job.job_title }}</p>
          <h2>Description: {{ job.job_description }}</h2>
          <a :href="job.employer_website" target="_blank">Apply</a>
          <br>
          <button v-on:click=viewSavedJobs(job)>Add To Saved Jobs!</button>
          <br>
          <br>
          <button v-if="isJobSaved(job)" v-on:click="removeSelectedJob(job)" >Remove Job From Saved Jobs!</button>
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
    addToJobsClicked: false, 
    displayRemoveSavedJobButton: false, 
    savedJobsCount: 0,
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

  viewSavedJobs(job){
    const isJobAlreadySaved = this.selectedJobListing.some(savedJob => savedJob.job_id === job.job_id);
    this.savedJobsCount++
  
    // const selectedJobListingVariable = JSON.parse(localStorage.getItem("selectedJobListings"))
    // console.log(selectedJobListingVariable)
    // console.log("This is the local storage job name: ", localStorage.getItem("jobName"))
    if(isJobAlreadySaved){
      alert("that job has already been saved!")
    }
    if(!isJobAlreadySaved){
      this.selectedJobListing.push(job);
      this.displayRemoveSavedJobButton = true;
      localStorage.setItem("selectedJobListings", JSON.stringify(this.selectedJobListing))
      console.log("Your current Saved Job is: ", job.employer_name)
      console.log("this is the saved job array length: ", this.selectedJobListing.length)
      console.log("is this the selected job list?? ", this.selectedJobListing)
      
    }
    
  },

  isJobSaved(job) {
    return this.selectedJobListing.some(savedJob => savedJob.job_id === job.job_id);
  },

  removeSelectedJob(job) {
  this.selectedJobListing = this.selectedJobListing.filter(savedJob => savedJob.job_id !== job.job_id);
  console.log(this.selectedJobListing.length)
  this.savedJobsCount--;
},

created(){
  const savedJobs = localStorage.getItem("selectedJobListings")

  if(savedJobs){
    this.savedJobs = JSON.parse(savedJobs);
  }
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
    background-color: none;
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
    /* background-color: blue; */
    /* Add a vertical scrollbar when content overflows */
}

.job-list {
    padding: 10px;
    /* Add some padding to the job list container */
    /* background-color: none; */
}

.job-saved {
  background-color: #0fc5d623; 
}

.savedJobs {
  margin-left: 10px;
}
.title {
  color: rgb(57, 198, 236);
  font-family: monospace;
}
</style>

