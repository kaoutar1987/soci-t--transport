
require('dotenv').config()
const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const connectDB =require('./database/db');
const contactRouter = require('../backend/routes/contact.routes');
//const Joi =require('@hapi/joi')

const app = express();


//Import Routes
const authRoute = require('./routes/authUser');

//Router middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', contactRouter);
app.use('/api/user', authRoute)

// set up mongoose
connectDB();


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`app is running on port ${port}`));

