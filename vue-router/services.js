import Axios from "axios";
const api_key = '3624dfb7cff1a1fe2c79eb613d4dd089ce05cca1be345652b584b545f3f57b5e'
const entry = Axios.create({
    baseURL: 'http://localhost:3000/',
})

const jobsURL = Axios.create({
    // baseURL: "https://serpapi.com/search?engine=google_jobs",
})

export default {
    getAllApplications(){
        return entry.get('/getAllApplications')
    },

    addNewApplication(application){
     return entry.post('/addApplications', application)
    },

    deleteApplicationById(id){
        return entry.delete(`/deleteAppById/${id}`, id)
    },

      getAppById(id){
        return entry.get(`/getAppById/${id}`, id)
      },

      updateStatusAppById(id, newStatus){
        return entry.put(`/UpdateStatusById/${id}`,newStatus)
      }
}