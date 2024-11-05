const express = require('express');
const router = express.Router();
const { Home, register } = require('../controllers/auth-controller'); // Ensure this path is correct

// Define routes with callback functions
router.route('/').get(Home);
router.route('/register').post(register);

module.exports = router;
