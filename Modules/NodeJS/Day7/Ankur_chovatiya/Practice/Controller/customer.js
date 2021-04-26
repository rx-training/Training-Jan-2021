const express = require('express');
let app = express();

const router = express.Router();

router.get('/' ,(req , res , next)=>{
    console.log(req.url);
    res.send('In router Home url')
    next();
})

router.get('/user' ,(req , res , next)=>{
    console.log(req.url);
    res.send('Router is working fine!')
    next();
});

router.get('/admin' , (req , res ,next)=>{
    console.log(req.url);
    res.send('customer router admin is working fine!');
    next();
})

module.exports = router;
