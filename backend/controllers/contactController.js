const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/contact');

exports.postMessage = (req, res) => {
    const message = new Contact({
        ...req.body
    });


    const saveMessage = message.save();
    try {
        res.status(201).send({message : 'your message has ben sended'})
    } catch (error) {
        res.status(400).send(error)
    }

};

exports.getMessages = async (req, res) => {

    try {
        const allMessage = await Contact.find();
        res.status(200).json(allMessage)
    } catch (error) {
        res.status(400).send(error)
    }
};

exports.postresponse = (req, res) => {
    const {email, response} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });
      
      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Sending Email ',
        html: '<h1>hello from server kaoutar</h1>',
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

