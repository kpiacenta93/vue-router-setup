
import { all } from 'axios';
import { response } from 'express';
import pkg from 'pg';
import dotenv from 'dotenv'
dotenv.config()
const {Pool} = pkg;

let DB = process.env.database;
let Pass = process.env.password;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: DB,
    password: Pass,
    port: 5432,
});


pool.connect()
.then(() => {
    console.log('postgres connected')
})
.catch((err) => {
    console.log("something is fucked up")
});


export const getAll = (callback) => {
    const queryString = 'SELECT * FROM job_applications';

    pool.query(queryString)
        .then((res) => {
            
            callback(null, res.rows);
            console.log(res.rows);
        })
        .catch((err) => {
            
            callback(err, null);
            console.log('this is the 500 error message', err);
        });

     
};

export const addNewApplication = (applicationData, callback) => {
    const queryString = 'INSERT INTO public.job_applications (job_title, company, application_date, contact_person, contact_email, contact_phone, application_status, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    
    const values = [  
      applicationData.job_title,
      applicationData.company,
      applicationData.application_date,
      applicationData.contact_person,
      applicationData.contact_email,
      applicationData.contact_phone,
      applicationData.application_status,
      applicationData.notes
    ];
    console.log("this is values", values)
  
    pool.query(queryString, values)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch((err) => {
        callback(err, null);
        console.error('coming from db.js:', err);
      });

  };

  
  // export const createNewUser = (user, callback) => {
  //    const queryString = 'INSERT INTO public.users(username, password_hash, role, application_id) VALUES (1$, 2$, 3$, 4$, 5$);'

  //    const userDetails = [
      
  //    ];
  // }
  

 