const express = require('express')
const router = express.Router()


router.use((req,res,next) => {
    console.log("this is customer router....");
    next()
})


router.get('/data',(req,res) => {
    res.send("hello /customer/data");
})


router.post('/new',(req,res) => {
    res.send("hello /customer/new");
})

module.exports = router