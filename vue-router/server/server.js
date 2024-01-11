
import express from 'express';
import { getAll } from '../db.js';
import cors from 'cors';
import { addNewApplication } from '../db.js';
import { deleteAppById } from '../db.js';
import bcrypt from 'bcrypt'

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

const users = [];

app.get('/Users', (req, res) => {
   res.json(users)
});

app.post('/Users', async (req, res) => {

  try{
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password, salt);

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




