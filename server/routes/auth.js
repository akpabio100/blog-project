const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authcontroller');

router.post('/register', registerUser);

const { loginUser } = require('../controllers/authcontroller');

router.post('/login', loginUser);

module.exports = router;