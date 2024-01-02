<template>
<div class="container">
    
 <div class="jobsList">
    <h3 class="header-title">Search Job By Text!</h3>
    <div class="input">
        
    <input type="text" placeholder="Search Job By Text..." v-model="searchText">
    <div class="button">
    <button @click="filteredJobApplications">Submit</button>
    </div>
    </div>
    <h3> Jobs Applied: {{ jobApplications.length}}</h3>
    <li v-if="!showingSearchResults" v-for="application in jobApplications" class="jobs">
        <h2 class="title">{{ application.jobTitle }}</h2>
        <p>Company: {{ application.company }}</p>
        <p>Application Date: {{ application.applicationDate }}</p>
        <p>Contact Person: {{ application.contactPerson }}</p>
        <p>Contact Email: {{ application.contactEmail }}</p>
        <p>Contact Phone Number: {{ application.contactPhoneNumber }}</p>
        <p>Application Status: {{ application.applicationStatus }}</p>
        <p>Notes: {{ application.notes }}</p>
        <button class="update" exact>Update</button>
      </li>
      <!-- <li v-else="showingSearchResults" v-for="filtered in filteredApplications"></li>
      <h2 class="title">{{ filtered.jobTitle }}</h2>
        <p>Company: {{ filtered.company }}</p>
        <p>Application Date: {{ filtered.applicationDate }}</p>
        <p>Contact Person: {{ filtered.contactPerson }}</p>
        <p>Contact Email: {{ filtered.contactEmail }}</p>
        <p>Contact Phone Number: {{ filtered.contactPhoneNumber }}</p>
        <p>Application Status: {{ filtered.applicationStatus }}</p>
        <p>Notes: {{ filtered.notes }}</p>
        <button class="update" exact>Update</button> -->
 </div>

</div>
</template>

<script>






export default {

    data() {
        return {
            searchText: '',
            showingSearchResults: false,
            jobApplications: [
            {
    jobTitle: "Software Engineer",
    company: "TechCorp Inc.",
    applicationDate: "2023-01-15",
    contactPerson: "John Doe",
    contactEmail: "john.doe@example.com",
    contactPhoneNumber: "123-456-7890",
    applicationStatus: "In Review",
    notes: "Interview scheduled for next week."
  },
  {
    jobTitle: "Product Manager",
    company: "ABC Solutions",
    applicationDate: "2023-02-20",
    contactPerson: "Sarah Smith",
    contactEmail: "sarah.smith@example.com",
    contactPhoneNumber: "987-654-3210",
    applicationStatus: "Not Viewed",
    notes: "Need to follow up regarding application status."
  },
  {
    jobTitle: "Data Analyst",
    company: "DataTech Analytics",
    applicationDate: "2023-03-10",
    contactPerson: "Emily Johnson",
    contactEmail: "emily.johnson@example.com",
    contactPhoneNumber: "555-123-4567",
    applicationStatus: "Viewed",
    notes: "Received a confirmation email after applying. Apparently he pooped in his pants during the interview and that really put the interviewer off but he thinks he can redeem himself"
  },
  {
    jobTitle: "UX Designer",
    company: "Creative Innovations",
    applicationDate: "2023-04-05",
    contactPerson: "Mark Anderson",
    contactEmail: "mark.anderson@example.com",
    contactPhoneNumber: "777-888-9999",
    applicationStatus: "In Review",
    notes: "Submitted an online portfolio with the application."
  },
  {
    jobTitle: "UX Designer",
    company: "Creative Innovations",
    applicationDate: "2023-04-05",
    contactPerson: "Mark Anderson",
    contactEmail: "mark.anderson@example.com",
    contactPhoneNumber: "777-888-9999",
    applicationStatus: "In Review",
    notes: "Submitted an online portfolio with the application."
  },
  {
    jobTitle: "Front-End Developer",
    company: "Tech Solutions Inc.",
    applicationDate: "2023-03-15",
    contactPerson: "Sarah Johnson",
    contactEmail: "sarah.johnson@example.com",
    contactPhoneNumber: "555-123-4567",
    applicationStatus: "Pending",
    notes: "Completed coding test as part of the application process."
  },
  {
    jobTitle: "Marketing Manager",
    company: "Digital Marketing Pros",
    applicationDate: "2023-03-20",
    contactPerson: "Emily Williams",
    contactEmail: "emily.williams@example.com",
    contactPhoneNumber: "444-789-1234",
    applicationStatus: "Interview Scheduled",
    notes: "Scheduled for an interview on April 2nd, 2023."
  },
  {
    jobTitle: "Software Engineer",
    company: "Tech Innovators Ltd.",
    applicationDate: "2023-03-25",
    contactPerson: "John Smith",
    contactEmail: "john.smith@example.com",
    contactPhoneNumber: "666-555-7777",
    applicationStatus: "Accepted",
    notes: "Received a job offer and accepted the position."
  },
  {
    jobTitle: "Data Analyst",
    company: "Data Insights Corp.",
    applicationDate: "2023-03-30",
    contactPerson: "Laura Davis",
    contactEmail: "laura.davis@example.com",
    contactPhoneNumber: "777-333-1111",
    applicationStatus: "Rejected",
    notes: "Unfortunately, the company decided to move forward with other candidates."
  },
  
],

filteredApplications: [],

filteredApp: {
    jobTitle: '',
    company: '',
    applicationDate: '',
    contactPerson: '',
    contactEmail: '',
    contactPhoneNumber: '',
    applicationStatus: '',
    notes: ''
  },

  methods: {
    filteredJobApplications() {
      if (!this.searchText) {
        this.showingSearchResults = true;
        this.filteredApplications = this.jobApplications; 
      } else {
        const searchText = this.searchText.toLowerCase();
        this.filteredApplications = this.jobApplications.filter((application) => {
          return Object.values(application).some((value) =>
            String(value).toLowerCase().includes(searchText)
          );
        });
      }
    },
  },
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
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    border: 1px solid white;
    padding-top: 5px;
    margin:15px;
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
    display:flex;
    text-decoration: underline;
}

.update {
  margin-bottom: 8px;
  margin-right: 5px;
}

.update:hover{
    border: #535bf2;
}

.input{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    height: 100px;


}

.individual-jobs{
    display: flex;
    justify-content: center;
    border: 1px solid white;
}

.jobsList {
    overflow: auto;
   
    
}

.header-title{
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