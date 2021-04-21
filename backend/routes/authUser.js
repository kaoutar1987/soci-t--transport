const router =require('express').Router();
const User = require('../models/User');
//Validation
const Joi = require('@hapi/joi');

const schema ={
    name : Joi.string().min(6).required(),
    lastname : Joi.string().min(6).required(),
    email :Joi.string().min(6).required().email(),
    password :Joi.string().min(6).required(),

};
 



//register
 router.post('/register', async (req, res) => {
     //lets validate the data before we a user
    const validation = Joi.validate(req.body, schema)
    res.send(validation)


  //  const user = new User({
    //    ...req.body

    //})
   // try{
      //  const savedUser = await user.save();
      //  res.send(savedUser);

   // }catch(err){
      //  res.status(400).send(err);
    //}
 });







module.exports = router;
