const mongoose = require('mongoose');

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
        type: Date,
         default: Date.now },
});


    

    module.exports = mongoose.model('Contact', contactSchema);