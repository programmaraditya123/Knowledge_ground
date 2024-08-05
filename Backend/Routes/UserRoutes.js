const express = require('express');
const mathpagecontroller = require('../Controllers/UserController');

const router = express.Router();

router.get('/math',mathpagecontroller)

module.exports = router;