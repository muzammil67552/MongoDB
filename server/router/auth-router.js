const express = require('express');
const router = express.Router();
const { Home, register, login } = require('../controllers/auth-controller'); // Ensure this path is correct

// Define routes with callback functions
router.route('/').get(Home);
router.route('/register').post(register);
router.route('/login').post(register);    // for posting the data from user method will be post and define route

module.exports = router;
