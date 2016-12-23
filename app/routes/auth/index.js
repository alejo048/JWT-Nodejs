const express = require('express');
const router = express.Router();

const pSetup = require('./handlers/pSetup')
const getUsers = require('./handlers/getUsers')
const logIn = require('./handlers/logIn')
const comprove = require('./middleware/tokenComprove')


router.get('/setup', pSetup);
router.get('/users', comprove ,getUsers)
router.post('/logIn', logIn)


module.exports = router;