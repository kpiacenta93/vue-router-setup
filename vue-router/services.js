import Axios from "axios";
const api_key = '3624dfb7cff1a1fe2c79eb613d4dd089ce05cca1be345652b584b545f3f57b5e'
const url = Axios.create({
    baseURL: 'http://localhost:3000/',
})

const jobsURL = Axios.create({
    // baseURL: "https://serpapi.com/search?engine=google_jobs",
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

      getAppById(id){
        return url.get(`/getAppById/${id}`, id)
      },

      updateAppById(id){
        return url.put(`/updateAppById/${id}`, id)
      }
}