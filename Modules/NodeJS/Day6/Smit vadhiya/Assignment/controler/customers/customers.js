const express = require('express');
const fs = require('fs');
const router = express.Router()

// 1) Create a Restful API, which will return Customer list in JSON format.
//    http://localhost:3000/customers


router.get('/',(req,res) => {
    res.send(customer)
})


// 2) Create a Restful API which will search a particular record from the customer list.
//    http://localhost:3000/customers/1

router.get('/:id',(req,res) => {
    const reqData =  customer.find((c) => c.id == req.params.id);
    res.send(reqData)
})

// 3) Create a Restful API which will insert a new customer object in the customer list.
//    http://localhost:3000/customer

router.post('/', (req, res) => {
    var newData = req.body;
    customer.push(newData)
    fs.writeFile('customer.json',JSON.stringify(customer),(err) => {})
})

// 4) Create a Restful API which will delete a record from the customer list.
//    http://localhost:3000/customer/1


router.delete('/:id', (req, res) => {
    const reqData =  customer.find((c) => c.id == req.params.id);
    customer.splice(customer.indexOf(reqData),1); 
    res.send(`${JSON.stringify(reqData)} is deleted`)
    fs.writeFile('customer.json',JSON.stringify(customer),(err) => {})
})

module.exports = router