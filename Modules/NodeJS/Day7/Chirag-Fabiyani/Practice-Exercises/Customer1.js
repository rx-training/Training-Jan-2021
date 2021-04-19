const express = require('express');
const router = express.Router();

class Customers{
    static customerlist1(err,req,res,next){
        if(err){
            console.error(err.stack)
            res.status(500).send('Something broke!')
        }
        console.log('1')
        res.send('1')
        next();
    }
    static customerlist2(err,req,res,next){
        if(err){
            console.error(err.stack)
            res.status(500).send('Something broke!')
        }
        console.log('2')
        res.send('2')
        next();
    }
}

router.get('/:id',Customers.customerlist1,Customers.customerlist2);

module.exports = router;