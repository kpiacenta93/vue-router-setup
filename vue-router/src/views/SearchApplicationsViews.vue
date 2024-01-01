<template>
<div class="container">
    
 <div class="jobsList">
    <div class="input">
    <input type="text" placeholder="Search Job By Text...">
    <div class="button">
    <button>Submit</button>
    </div>
    </div>
    <li v-for="(application, index) in jobApplications" :key="index" class="jobs">
    
        <h2 class="title">{{ application.jobTitle }}</h2>
        <p>Company: {{ application.company }}</p>
        <p>Application Date: {{ application.applicationDate }}</p>
        <p>Contact Person: {{ application.contactPerson }}</p>
        <p>Contact Email: {{ application.contactEmail }}</p>
        <p>Contact Phone Number: {{ application.contactPhoneNumber }}</p>
        <p>Application Status: {{ application.applicationStatus }}</p>
        <p>Notes: {{ application.notes }}</p>
 
        <button class="update">Update</button>
      </li>
 </div>

</div>
</template>

<script>






export default {

    data() {
        return {
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
  }
]
            
        }
    }
   
}

</script>


<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px
}

.jobs {
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    border: 1px solid white;
    padding-top: 5px;
    transition: background-color 0.3s;
    height: 200px;
    padding-left: 5px;
    font-size: 0.8rem;
    font-family: monospace;
    width: 1200px;
    
}

.jobs:hover {
    background-color: rgb(92, 212, 246);
    color: black;
    border: 3px solid black;
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
    height: 50px;

}

.individual-jobs{
    display: flex;
    justify-content: center;
    border: 1px solid white;
}
</style>