const express = require('express');
const router = express.Router();
const ideaController = require('../controllers/ideaController');

router.post('/idea', ideaController.create);

router.get('/idea', ideaController.findAll);

module.exports = router;