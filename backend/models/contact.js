const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;

const contactSchema = new mongoose.Schema({

    Prenon: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    Non:{
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    Email: {
        type: String,
        trim: true,
        maxlength: 100,
        required: true,

    },
    Phone: {
        type: String,
        maxlength: 12,
       required: [true, "Please enter your number!"]

    },
    Message:{
        type: String,
        required: true,
    },
    date: { 
        type: String,
         default: dt },
});


    

    module.exports = mongoose.model('Contact', contactSchema);