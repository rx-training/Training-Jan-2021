const express = require('express');
const fs = require('fs');

var customers = require('./customers.json');

const app = express();
const port = 3000;

app.use(express.json());

// GET ALL CUSTOMERS (Url: http://localhost:3000/customers)
app.get('/customers',(req, res) => {
    res.json(customers);
});


// GET CUSTOMER DETAILS USING ID (Url: http://localhost:3000/customers/1)
app.get('/customers/:customerId', (req, res) => {
    const customerId = req.params.customerId;

    var found = false;

    customers.forEach((customer) => {
        if(customer.customerId == customerId){
            //console.log(customer.name);
            found = true;
            res.send(customer);
            return;
        }
    });

    if(!found){
        res.status(404).send('Customer not found.');
    }
    
});


// ADD NEW CUSTOMER (Url: http://localhost:3000/customers), (body: { "name": 'Nihar, "email": "nihar@gmail.com"})
app.post('/customers', (req, res) => {
    const customer = req.body;
    
    var newCustomer = {
                        "customerId": customers.length +1,
                        "name": customer.name,
                        "email": customer.email
                      }

    customers.push(newCustomer);

    fs.writeFile('./customers.json', JSON.stringify(customers), (err) => {
        if(err){
            console.error(err);
            return;
        }
    })

    res.json(customers);
});


// UPDATE CUSTOMER NAME USING ID (Url: http://locahost:3000/customers/1), (body: { "name": "Nihar"})
app.put('/customers/:customerId', (req, res) => {
    const customerId = req.params.customerId;
    const updatedCustomer = req.body;

    customers.forEach((customer) => {
        if(customer.customerId == customerId){
            customer.name = updatedCustomer.name;
            
            fs.writeFile('./customers.json', JSON.stringify(customers), (err) => {
                if(err){
                    console.error(err);
                    return;
                }
            })

            res.json(customer);
            return;
        }
    });

});


// DELETE CUSTOMER USING ID (Url: http://localhost:3000/customers/3)
app.delete('/customers/:customerId', (req, res) => {
    const customerId = req.params.customerId;

    customers.splice(customerId-1, 1);

    fs.writeFile('./customers.json', JSON.stringify(customers), (err) => {
        if(err){
            console.error(err);
            return;
        }
    })

    res.json(customers);
});

app.listen(port, () => {
    console.log(`Application started on port ${port}...`);
})