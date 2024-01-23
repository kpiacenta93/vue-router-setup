<template>
    <div class="input-container">
        <div class="input-wrapper">
            <input type="text" placeholder="Search Jobs..." class="SearchJobs">
            <button class="button-search" @click="changeTrueToFalse">enter</button>
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
export default {
    data() {
        return {
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
                // Add more job listings here
            ],
        };
    },
    methods: {
        changeTrueToFalse() {
            this.showJobs = true;
        },
    },
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

