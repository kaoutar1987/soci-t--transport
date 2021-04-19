
require('dotenv').config()
const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const connectDB =require('./database/db');
const contactRouter = require('../backend/routes/contact.routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use('/api', contactRouter);

// set up mongoose
connectDB();


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`app is running on port ${port}`));

