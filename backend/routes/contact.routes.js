const express = require('express');
const router = express.Router();
const { postMessage, getMessages, postresponse } = require('../controllers/contactController')

router.post('/sendMessage', postMessage);

router.get('/allMssage', getMessages);

router.post('/response', postresponse)



module.exports = router;