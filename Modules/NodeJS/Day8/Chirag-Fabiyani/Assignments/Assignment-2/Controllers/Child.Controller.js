const express = require('express');
const router = express.Router({mergeParams: true});
const Assignments = require('./Assignment.Controller');

router.use('/child',Assignments);

module.exports = router;