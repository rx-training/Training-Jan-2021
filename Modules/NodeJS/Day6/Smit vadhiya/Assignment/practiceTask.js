const express = require('express');
const fs = require('fs');
const app = express();
var customer =  require('./customer.json')

app.use(express.json());


app.listen(3000, () => {
    console.log('3000 port is listening');
})

// 1) Create a Restful API, which will return Customer list in JSON format.
//    http://localhost:3000/customers


app.get('/customers',(req,res) => {
    res.send(customer)
})


// 2) Create a Restful API which will search a particular record from the customer list.
//    http://localhost:3000/customers/1

app.get('/customers/:id',(req,res) => {
    const reqData =  customer.find((c) => c.id == req.params.id);
    res.send(reqData)
})

// 3) Create a Restful API which will insert a new customer object in the customer list.
//    http://localhost:3000/customer

app.post('/customer', (req, res) => {
    var newData = req.body;
    customer.push(newData)
    fs.writeFile('customer.json',JSON.stringify(customer),(err) => {})
})

// 4) Create a Restful API which will delete a record from the customer list.
//    http://localhost:3000/customer/1


app.delete('/customer/:id', (req, res) => {
    const reqData =  customer.find((c) => c.id == req.params.id);
    customer.splice(customer.indexOf(reqData),1); 
    res.send(`${JSON.stringify(reqData)} is deleted`)
    fs.writeFile('customer.json',JSON.stringify(customer),(err) => {})
})