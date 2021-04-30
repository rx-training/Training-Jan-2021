const express = require('express');
const router = express.Router({mergeParams: true});
const Child = require('./Child.Controller');

router.use('/:id',Child);

module.exports = router;