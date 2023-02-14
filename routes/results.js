const express = require('express');

const resultsController = require('../controllers/results');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// POST /results/getData
router.get('/getData', isAuth, resultsController.getData)

module.exports = router;