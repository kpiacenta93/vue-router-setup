<template>
    <div>
      <h2>Job Application Form:</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" v-model="jobTitle" required>
        </div>
        <div class="form-group">
          <label for="company">Company:</label>
          <input type="text" id="company" v-model="company" required>
        </div>
        <div class="form-group">
          <label for="applicationDate">Application Date:</label>
          <input type="date" id="applicationDate" v-model="applicationDate" required>
        </div>
        <div class="form-group">
          <label for="contactPerson">Contact Person:</label>
          <input type="text" id="contactPerson" v-model="contactPerson">
        </div>
        <div class="form-group">
          <label for="contactEmail">Contact Email:</label>
          <input type="email" id="contactEmail" v-model="contactEmail">
        </div>
        <div class="form-group">
          <label for="contactPhone">Contact Phone Number:</label>
          <input type="tel" id="contactPhone" v-model="contactPhone">
        </div>
        <div class="form-group">
          <label for="applicationStatus">Application Status:</label>
          <select id="applicationStatus" v-model="applicationStatus">
            <option value="viewed">Viewed</option>
            <option value="inReview">In Review</option>
            <option value="notViewed">Not Viewed</option>
          </select>
        </div>
        <div class="form-group">
          <label for="notes">Notes on Job:</label>
          <textarea id="notes" v-model="notes" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  </template>
  
  <script>

  
  export default {
 

    
    data() {
      return {
        jobTitle: "",
        company: "",
        applicationDate: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: "",
        applicationStatus: "Not Viewed",
        notes: "",
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log("Form submitted with data:", this.$data);
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