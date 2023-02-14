const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// POST /auth/generateToken
router.post('/generateToken', authController.generateKey)

module.exports = router;