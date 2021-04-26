const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
    console.log("this is employee router....");
    next();
})

router.get('/data',(req,res) => {
    res.send("hello /employee/data");
})


router.post('/new',(req,res) => {
    res.send("hello /employee/new");
})


module.exports = router