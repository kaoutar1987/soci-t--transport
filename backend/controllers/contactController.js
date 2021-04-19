const Contact = require('../models/contact');
var nodemailer = require('nodemailer');

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

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'kaoutar1dev@gmail.com',
          pass: '1234azerty'
        }
      });
      
      var mailOptions = {
        from: 'kaoutar1dev@gmail.com',
        to: `${email}`,
        subject: 'Sending Email ',
        text: `${response}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

