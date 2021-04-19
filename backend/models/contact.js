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
    email: {
        type: String,
        trim: true,
        maxlength: 100,
        required: true,
        unique: true
    },
    phone: {
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