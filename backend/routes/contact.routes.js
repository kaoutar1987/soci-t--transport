const express = require('express');
const router = express.Router();
const { postMessage, 
    getMessages,
    findContact, 
    postreply,
    singleContact
 } = require('../controllers/contactController')

router.post('/sendmessage', postMessage);

router.get('/allMssage', getMessages);

router.post('/reply/:id', postreply)

router.post('/singlecontact/:id', singleContact);

router.post('/search', findContact);


module.exports = router;