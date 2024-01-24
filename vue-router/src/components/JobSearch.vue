<template>
    <div class="input-container">
        <div class="input-wrapper">
            <input type="text" placeholder="Search Jobs..." class="SearchJobs" v-model="jobTitle">
            <button class="button-search" @click="changeTrueToFalse">enter</button>
            <button v-on:click="fetchJobs"></button>
        </div>
        <div class="job-display" v-show="showJobs">
            <div class="job-list">
                <div v-for="job in jobListings" class="jobs">
                    <h2>{{ job.company }}</h2>
                    <h3>{{ job.title }}</h3>
                    <p>{{ job.description }}</p>
                    <h2>{{ job.pay }}</h2>
                    <a :href="job.applicationLink" target="_blank">Apply</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import services from '../../services'
import axios from 'axios';



export default {
   
    data() {
        return {

            JobTitle: "",
            keyword: "",
            showJobs: false,
            jobListings: [
                {
                    title: "Software Engineer",
                    company: "TechCorp",
                    description: "Develop and maintain software applications.",
                    pay: "$80,000 - $100,000 per year",
                    applicationLink: "https://fakejobapplicationlink.com/software-engineer"
                },
                {
                    title: "Marketing Manager",
                    company: "MarketPro",
                    description: "Manage marketing campaigns and strategy.",
                    pay: "$70,000 - $90,000 per year",
                    applicationLink: "https://fakejobapplicationlink.com/marketing-manager"
                },
                
            ],
        };
    },
    methods: {
        async fetchJobs() {
            const options = {
                method: 'POST',
                url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '1ee67a8032msh7a0cd1a941ab87bp1c6da8jsn7069f8fbc4be',
                    'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
                },
                data: {
                    title: this.jobTitle, 
                    location: 'Berlin',
                    rows: 100
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data)
                this.jobListings = response.data; 
                
            } catch (error) {
                console.error(error);
            }
        },
    },


        changeTrueToFalse() {
            this.showJobs = true;
        },

        logInputText(){
            console.log(this.keyword)
        },

        searchJobs(keyword){
            
            services.getSearchedJobs(this.keyword)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    };
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
}

.button-search {
    width: 100px;
    height: 65px;
    margin-left: 10px;
    margin-bottom: 15px;
}

.job-display {
    max-height: 300px; /* Set the maximum height for the job listings container */
    overflow-y: auto; /* Add a vertical scrollbar when content overflows */
}

.job-list {
    padding: 10px; /* Add some padding to the job list container */
}
</style>

