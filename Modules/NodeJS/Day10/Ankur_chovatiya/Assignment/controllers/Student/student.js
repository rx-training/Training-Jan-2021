const express = require('express');
const router = express.Router();
const feesRouter = require('./Fees/fees');
const resultrouter = require('./Result/result');
const model = require('../../mongoDB/Model');


router.get('/', (req , res , next)=>{
    res.send('Student router is working fine!');
    next();
});

router.post('/addStudent' , [express.json()],(req , res , next)=>{
    console.log(req.body);
    let data = req.body;
    let mydata = new model.Student(data);
    mydata.save().then(item =>{
        console.log(item);
        res.send('your data successfully save!');
        next();
    })
    
})

router.use('/:id/fees' , feesRouter);
router.use('/:id/result', resultrouter);



module.exports = router;