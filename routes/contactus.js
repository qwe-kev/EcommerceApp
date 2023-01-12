const express = require('express');

const contactController = require('../controllers/contact')

const router = express.Router();

router.get('/contactus', contactController.getContact)

module.exports = router;