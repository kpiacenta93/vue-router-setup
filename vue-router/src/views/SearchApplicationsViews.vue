<template>
  <div class="container">

    <div class="jobsList" v-show="showFullList">

      <h3 class="header-title">Search Jobs</h3>
      <div class="input">

        <input type="text" placeholder="Search Job By Text..." v-model="searchText">
        <div class="button">
          <button @click="filterApplications()">Submit</button>
          <button @click="deleteSearch()">Delete search</button>
          <!-- <button @click="checking()">hey yo</button> -->
        </div>
      </div>
      <h3> Jobs Applied: {{ jobApplications.length }}</h3>
      <li v-for="application in (showingSearchResults ? filteredApplications : jobApplications)"
        :key="application.application_id" class="jobs">
        <h2 class="title">{{ application.job_title }}</h2>
        <!-- <p>Company: {{ application.company }}</p>
        <p>Application Date: {{ formatDate(application.application_date) }}</p>
        <p>Contact Person: {{ application.contact_person }}</p>
        <p>Contact Email: {{ application.contact_email }}</p>
        <p>Contact Phone Number: {{ application.contact_phone }}</p>
        <p>Application Status: {{ application.application_status }}</p>
        <p>Notes: {{ application.notes }}</p> -->
        <div class="buttons">
          <button @click="getApplicationById(application.application_id)" class="update-button" exact>Update/View</button>
          <button @click="deleteApplicationById(application.application_id)" class="update-button" exact>delete</button>
        </div>
      </li>
    </div>
    <div class="single-application-view" v-show="showSingleApp">
      <h2 class="title">{{ selectedApplication.job_title }}</h2>
      <p>Company: {{ selectedApplication.company }}</p>
      <p>Application Date: {{ formatDate(selectedApplication.application_date) }}</p>
      <p>Contact Person: {{ selectedApplication.contact_person }}</p>
      <p>Contact Email: {{ selectedApplication.contact_email }}</p>
      <p>Contact Phone Number: {{ selectedApplication.contact_phone }}</p>
      <p>Application Status: {{ selectedApplication.application_status }}</p>
      <div class="action-buttons" v-if="!updateNotes">
        <label for="options">Choose a new application status:</label>
        <select id="options" name="options">
          <option value="option1">In Review</option>
          <option value="option2">Application Viewed</option>
          <option value="option3">Under Consideration</option>
          <option value="option4">Offer Exteneded</option>
        </select>
        <button class="update-notes"
          v-on:click="updateAppStatusById(selectedApplication.application_id, newStatus)">Update Status</button>
      </div>
      <p>Notes: {{ selectedApplication.notes }}</p>
      <button v-if="updateNotes" v-on:click="toggleUpdateNotes()">Update Notes/Application Status</button>
      <div class="action-buttons" v-if="!updateNotes">
        <input type="text" placeholder="Add New Notes..">
        <button class="update-notes" v-on:click="toggleUpdateNotes()">Update Notes</button>
      </div>
      <button @click="getFullListView()">Back To List!</button>
    </div>

  </div>
</template>

<script>

// import { updateAppById } from '../../db';
import services from '../../services';




export default {
  methods: {

    deleteSearch(){
     this.searchText = '';
     this.filterApplications()
    },

    toggleUpdateNotes() {
      this.updateNotes = !this.updateNotes;
    },

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


    deleteApplicationById(id) {
      services.deleteApplicationById(id)
        .then((response) => {
          console.log(response.data)
        })
      alert("application has been succsessfully removed")
      this.searchText = ''
      this.getApplicationList()
    },

    getApplicationById(id) {
      services.getAppById(id)
        .then((response) => {
          let application = response.data[0];
          this.showFullList = false;
          this.showSingleApp = true;
          this.selectedApplication = application;
          console.log("this is the response: ", response.data)

          console.log("selected application: ", this.selectedApplication);
          console.log("this is the selectedApp: ", {
            name: this.selectedApplication.job_title,
            company: this.selectedApplication.company
          });
        })
        .catch((error) => {
          console.error("Couldn't retrieve application", error);
        });
    },

    updateAppStatusById(tableName, columnName, value, id) {

      const requestData = {
        table: tableName,
        column: columnName,
        value: value
      }

      services.updateStatusAppById(id, requestData)
        .then(response => {
          console.log(this.selectedApplication.application_status = response.data)
          console.log("this is the response from update status", this.selectedApplication.application_status)
        })
        .catch((error) => {
          console.log("could not update status properly", error)
        })
    },



    //end of servies methods ----------------------------------------------------------
    getFullListView() {
      this.showFullList = true;
      this.updateNotes = !this.updateNotes;
      this.showSingleApp = false;
      this.selectedApplication = [];
    }

  },
  beforeMount() {
    this.getApplicationList();
  },


  data() {
    return {
      updateNotes: true,
      updateNotesView: false,
      searchText: '',
      showingSearchResults: false,
      filteredApplications: [],
      jobApplications: [],
      selectedApplication: [],
      showFullList: true,
      showSingleApp: false,
      selectedApplicationID: null,
      newStatus: '',
    }

  },

  computed: {
    // selectedApplication() {
    //   return this.jobApplications.find(app => app.application_id === this.selectedApplication || {})
    // }
  }
}

</script>


<style scoped>
.action-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}


.single-application-view {
  border-radius: 15px;
  border: 1px solid white;
  height: 900px;
  width: 800px;
  /* position: relative; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, rgb(20, 17, 17), rgb(60, 57, 57));
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px
}

.jobs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
  padding-top: 5px;
  margin: 15px;
  background: linear-gradient(to right, rgb(20, 17, 17), rgb(60, 57, 57));

  transition: background-color 0.3s;
  height: 200px;
  padding-left: 5px;
  font-size: 0.7rem;
  font-family: monospace;
  width: 1220px;
  overflow: hidden;
  font-size: 1.1rem;
  border-radius: 15px 15px 15px 15px;
  /* background-image: url('../assets/app-tracker-photo2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(0, 0, 0); */

}

.jobs:hover {
  background: rgb(92, 212, 246);
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