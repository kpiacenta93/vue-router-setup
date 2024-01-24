
import express from 'express';
import { getAll } from '../db.js';
import cors from 'cors';
import { addNewApplication } from '../db.js';
import { deleteAppById } from '../db.js';
import bcrypt from 'bcrypt'
import axios from 'axios';
const app = express();
const port = 3000;


app.use(express.json()).use(cors({
  origin: 'http://localhost:5173', // Change this to match your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// app.get('/searchJobs', async (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   try {
//       const keyword = req.query;
//       const apiUrl = `https://serpapi.com/search?engine=google_jobs&q=${keyword}`;
      
//       // Make a GET request to the API using Axios
//       const response = await jobsURL.get(apiUrl);

//       // Send the response data back to the client
//       res.status(200).json(response.data);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching data from the API' });
//   }
// });


// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '1ee67a8032msh7a0cd1a941ab87bp1c6da8jsn7069f8fbc4be',
//     'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
//   },
//   data: {
//     title: 'Software Engineer',
//     location: 'Berlin',
//     rows: 100
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

app.get('/', cors(), (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/getAllApplications', (req, res) => {
  getAll((err, result) => {
    if (err) {
      res.status(422).send(err);
    } else {
      
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result)
    }
  });
});

app.post('/addApplications', (req, res) => {
  const applicationData = req.body;

  addNewApplication(applicationData, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result); 
    }
  });
});

app.delete('/deleteAppById/:id', (req, res) => {
  const applicationId = req.params.id;

  deleteAppById(applicationId, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    }
  });
});

const users = [];

app.get('/Users', (req, res) => {
   res.json(users)
});

app.post('/Users', async (req, res) => {

  try{
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password, salt);
    console.log(password)

    const user = {name: req.body.name, password: hashPass}
    users.push(user);
    res.status(201).send("success");

  } catch(err) {
    res.status(400).send("something went wrong")
  }

});

app.post('/Users/Login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);

    if(user == null){
      return res.status(400).send("cant find user");
    }
    try{
      if(await bcrypt.compare(req.body.password, user.password)){
        res.send("succsess")
      } else {
        res.send('not allowed')
      }
    } catch {
      res.status(500).send()
    }
})




