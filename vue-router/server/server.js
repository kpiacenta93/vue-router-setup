
import express from 'express';
import { getAll } from '../db.js';
import cors from 'cors';
import { addNewApplication } from '../db.js';
import { deleteAppById } from '../db.js';
import { getAppById } from '../db.js';
import { updateAppById } from '../db.js';
import bcrypt from 'bcrypt'
import axios from 'axios';
const app = express();
const port = 3000;


app.use(express.json()).use(cors({
  origin: 'http://localhost:5173', // Change this to match your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.get('/hello', cors(), (req, res) => {
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

app.get('/getAppById/:id', (req, res) => {
  const application_id = req.params.id;

  getAppById(application_id, (err, result) => {
    if (err) {
      res.setHeader('Content-Type', 'application/json')
      res.status(400).json({ error: err.message })
    } else {
      console.log("this is response: ".res)
      res.status(200).json(result)
    }
  })

})



// user log in and validation section
const users = [];

app.get('/Users', (req, res) => {
  res.json(users)
});

app.post('/Users', async (req, res) => {

  try {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password, salt);
    console.log(password)

    const user = { name: req.body.name, password: hashPass }
    users.push(user);
    res.status(201).send("success");

  } catch (err) {
    res.status(400).send("something went wrong")
  }

});

app.post('/Users/Login', async (req, res) => {
  const user = users.find(user => user.name = req.body.name);

  if (user == null) {
    return res.status(400).send("cant find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("succsess")
    } else {
      res.send('not allowed')
    }
  } catch {
    res.status(500).send()
  }
});

app.put('/UpdateStatusById/:id', async (req, res) => {
  const { id } = req.params;
  const newStatus = req.body;

  updateAppById(id, newStatus, (err, result) => {
    if (err) {
      res.status(400).json({ error: "There was an error updating the app.", details: err });
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(res)
    }
  })
});




