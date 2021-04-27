const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const contact = require('../models/contact');

exports.postMessage =async (req, res) => {
    const message = new Contact({
        ...req.body
    });
    // console.log(object)
    try {
       const saveMessage =await message.save();
       if(saveMessage){
        return res.status(201).send({message : 'your message has ben sent'})
       }
    } catch (error) {
        res.status(400).send(error)
    }

};

exports.getMessages = async (req, res) => {

    try {
        const allMessage = await Contact.find();
        res.status(200).json(allMessage);
    } catch (error) {
        res.status(400).send(error)
    }
};


exports.findContact = async (req, res) => {

  const { Email,date } = req.body;

  // console.log(date);
  // console.log(new Date(date));
  try {
    if (date && Email) {
      const result = await Contact.find({ Email, date });
      if (result) return res.status(200).json(result);
    } else if (date && !Email) {
      const result = await Contact.find({ date });
      if (result) return res.status(200).json(result);
    } else if (!date && Email) {
      const result = await Contact.find({ Email });
      if (result) return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });
      exports.postreply = async (req, res) => {
        const { id } = req.params;
        const { message } = req.body;
        try{
        const currentContact = await Contact.findOne({ _id: id });
        console.log(currentContact)
        if (currentContact) {
      const mailOptions = {
        from: process.env.EMAIL,
        to: currentContact.Email,
        subject: 'Sending Email ',
        text: message,
      };
      const envoiMail = await transporter.sendMail(mailOptions);
      if (envoiMail) res.status(200).json('Mail sent');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
 };
      
 exports.singleContact = async (req, res) => {
  const { id } = req.params;
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) return res.status(200).json(currentContact);
  } catch (error) {
    return res.status(500).json(error);
  }
};
   
