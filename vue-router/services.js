import Axios from "axios";

const url = Axios.create({
    baseURL: 'http://localhost:3000',
})

const jobsURL = Axios.create({
    baseURL: "https://serpapi.com/search?engine=google_jobs",
})

export default {
    getAllApplications(){
        return url.get('/getAllApplications')
    },

    addNewApplication(application){
     return url.post('/addApplications', application)
    },

    deleteApplicationById(id){
        return url.delete(`/deleteAppById/${id}`, id)
    },

    getSearchedJobs(keyword) {
        return jobsURL.get(`/proxy?engine=google_jobs&q=${keyword}`);
      }
}