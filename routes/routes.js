const express = require('express');
const router = express.Router();

const ideaRoute = require('./ideaRoute');

router.use(ideaRoute);

module.exports = router;