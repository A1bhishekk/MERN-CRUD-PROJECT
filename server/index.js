import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
const port=process.env.PORT ||'8000';


dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


//Database Connection
Connection(username,password);

//json parser
// app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


//Cors
app.use(cors());

// load Routes 
app.use("/",Routes);


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})