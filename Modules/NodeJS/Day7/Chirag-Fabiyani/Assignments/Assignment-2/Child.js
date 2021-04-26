const express = require('express');
const router = express.Router({mergeParams: true});
const Assignments = require('./Assignments');

router.use('/child',Assignments);

module.exports = router;