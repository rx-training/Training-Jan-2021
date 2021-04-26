const express = require('express');

const router = express.Router();
const security = require('../Authentication/jwt');
const assiRouter = require('./Assignment/assignment');

router.get('/',[security], (req , res , next)=>{
    res.send('Employee router is working fine!');
    next();
});

router.use('/:id/assignment', assiRouter);


module.exports = router;