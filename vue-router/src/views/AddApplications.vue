<template>
    <div>
      <h2>Job Application Form:</h2>
      <form @submit.prevent="submitForm"  >
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" v-model="application.job_title" required>
        </div>
        <div class="form-group">
          <label for="company" class="labels">Company:</label>
          <input type="text" id="company"  v-model="application.company" required>
        </div>
        <div class="form-group">
          <label for="applicationDate">Application Date:</label>
          <input type="date" id="applicationDate"  v-model="application.application_date" required>
        </div>
        <div class="form-group">
          <label for="contactPerson">Contact Person:</label>
          <input type="text" id="contactPerson" v-model="application.contact_person">
        </div>
        <div class="form-group">
          <label for="contactEmail">Contact Email:</label>
          <input type="email" id="contactEmail" v-model="application.contact_email">
        </div>
        <div class="form-group">
          <label for="contactPhone">Contact Phone Number:</label>
          <input type="tel" id="contactPhone" v-model="application.contact_phone">
        </div>
        <div class="form-group">
          <label for="applicationStatus">Application Status:</label>
          <select id="applicationStatus" v-model="application.application_status">
            <option value="viewed">Viewed</option>
            <option value="inReview">In Review</option>
            <option value="notViewed">Not Viewed</option>
          </select>
        </div>
        <div class="form-group">
          <label for="notes">Notes on Job:</label>
          <textarea id="notes"  rows="4" v-model="application.notes"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  </template>
  
  <script>
  import services from '../../services'
  
  export default {
    data() {
      return {
        application: {
          job_title: null,
          company: null,
          application_date: new Date(),
          contact_person: null,
          contact_email: null,
          contact_phone: null,
          application_status: "Not Viewed",
          notes: null,
        },
      };
    },
    methods: {
      submitForm() {
        services.addNewApplication(this.application).then((response) => {
          this.application = response.data;
          console.log("Form submitted with data:", this.application);
        });
        alert("application has been submitted!");
        this.$router.push('/');
      },
    },
  };
  </script>
  

<style>
.form-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    margin: 10px;
    border: 1px solid white;

}

.form-group:hover {
    background-color: rgb(92, 212, 246);
    color:black;
    
}

.labels {
  font-size: larger;
}
</style>

<!-- <template>
    <AddApplications/>

</template>


<script>
import AddApplications from '../components/AddApplications.vue';
export default {
    components: {
        AddApplications
    }
}
</script>

<style>

</style> -->