const express = require('express')
const authController = require('./../controllers/authController')
const router = express.Router();

//POST
router.post('/signup', authController.signup)

module.exports = router;