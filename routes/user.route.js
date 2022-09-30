const express = require('express');
const userController = require('../controllers/user.controller.js');
const { userValidator, validate } = require('../validator/userValidator.js');
const router = express.Router();

router.post('/send-email', userValidator, validate, userController.sendEmail);

module.exports = router;
