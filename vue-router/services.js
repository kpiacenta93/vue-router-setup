import Axios from "axios";

const url = Axios.create({
    baseURL: 'http://localhost:3000',
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
    }
}