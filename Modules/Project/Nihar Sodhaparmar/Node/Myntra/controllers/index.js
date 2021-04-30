const express = require('express');
const router = express.Router();

require('./startup/logging')();
require('./startup/routes')(router);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

module.exports = router;