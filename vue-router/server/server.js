
import express from 'express';
import { getAll } from '../db.js';
import cors from 'cors';
import { addNewApplication } from '../db.js';
import { deleteAppById } from '../db.js';

const app = express();
const port = 3000;

app.use(express.json()).use(cors())

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




