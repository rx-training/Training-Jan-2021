const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const customer = require("./Customer.json");
app.use(express.json());

//1.Create a Restful API, which will return Customer list in JSON format.
app.get("/customers", (req, res) => {
    res.json(customer);
});

//2. Create a Restful API which will search a particular record from the customer list.
app.get("/customers/:id", (req, res) => {
    var customerID = req.params.id;

    for (let i = 0; i < customer.length; i++) {
        if (customer[i].ID == customerID) {
            res.send(customer[i]);
        }
    }
});

//3. Create a Restful API which will insert a new customer object in the customer list.
app.post("/customers", (req, res) => {
    let object = req.body;
    customer.push(object);
    fs.writeFile("Customer.json", JSON.stringify(customer), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Data Added Successfully");
        }
    });
});

//3. Create a Restful API which update a name of existing customer whose customer ID is 1
app.put("/customers", (req, res) => {
    let object = req.body;
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].ID == 1) {
            customer[i].name = object.name;
            break;
        }
    }
    fs.writeFile("Customer.json", JSON.stringify(customer), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Data Updated Successfully");
        }
    });
});

//4. Create a Restful API which will delete a record from the customer list.
app.delete('/customers' ,(req,res) =>{
    let object = req.body;
    
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].ID == 6) {
            customer.splice(i,1);
        }
    }
    fs.writeFile("Customer.json", JSON.stringify(customer), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Record Deleted Successfully");
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
