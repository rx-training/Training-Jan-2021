const express = require('express');
const router = express.Router({mergeParams: true});
const Data = require('./Data.Controller')

router.use('/assignments',Data);

module.exports = router;