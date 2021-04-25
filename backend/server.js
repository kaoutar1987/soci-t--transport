
require('dotenv').config()
const express = require('express');
const mongoose = require ('mongoose');
const connectDB =require('./database/db');
const contactRouter = require('../backend/routes/contact.routes');
const cors = require('cors')
//const Joi =require('@hapi/joi')
const authRoute = require('./routes/authUser');

const app = express();


//Import Routes

//Router middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use('/api', contactRouter);
app.use('/api/user', authRoute)

// set up mongoose
connectDB();


const port =   5000; 
app.listen(port, () => console.log(`app is running on port ${port}`));

