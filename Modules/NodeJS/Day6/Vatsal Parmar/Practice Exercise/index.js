const express = require("express");
const fs = require("fs");
var customers = require("./customers.json");
const app = express();
const port = 3000;
app.use(express.json());
var data = customers;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*1.Create a Restful API, which will return Customer list in JSON format.
http://localhost:3000/customers*/

app.get("/customers", (req, res) => {
  res.json(data);
});

/* 2. Create a Restful API which will search a particular record from the customer list.
http://localhost:3000/customers/1 */

app.get("/customers/:custId", (req, res) => {
  let id = req.params.custId;
  let isAvail = false;
  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      isAvail = true;
      break;
    }
  }
  if (isAvail) {
    data.forEach((value) => {
      if (id == value.id) {
        res.json(value);
      }
    });
  } else {
    res.send("Record Not Available");
  }
});

/* 3. Create a Restful API which will insert a new customer object in the customer list.
http://localhost:3000/customer */

app.post("/customer", (req, res) => {
  data.push(req.body);
  fs.writeFile("customers.json", JSON.stringify(data), { flag: "w" }, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log(data);
      res.send("New Record Added");
    }
  });
});

/* 4. Create a Restful API which update a name of existing customer whose customer ID is 1 
http://locahost:3000/customer*/

app.put("/customer", (req, res) => {
  let custData = req.body;
  let isAvail = false;
  for (let i = 0; i < data.length; i++) {
    if (custData.id == data[i].id) {
      isAvail = true;
      break;
    }
  }
  if (isAvail) {
    for (let i = 0; i < data.length; i++) {
      if (custData.id == data[i].id) {
        data[i].name = custData.name;
        fs.writeFile(
          "customers.json",
          JSON.stringify(data),
          { flag: "w" },
          (err) => {
            if (err) {
              console.log(err);
              res.end();
            } else {
              res.send("Record Updated");
            }
          }
        );
        break;
      }
    }
  } else {
    res.send("Record Not Available");
  }
});

/* 5. Create a Restful API which will delete a record from the customer list.
http://localhost:3000/customer */
app.delete("/customer", (req, res) => {
  let custData = req.body;
  let isAvail = false;
  for (let i = 0; i < data.length; i++) {
    if (custData.id == data[i].id) {
      isAvail = true;
      break;
    }
  }
  if (isAvail) {
    for (let i = 0; i < data.length; i++) {
      if (custData.id == data[i].id) {
        data.splice(i, 1);
        fs.writeFile(
          "customers.json",
          JSON.stringify(data),
          { flag: "w" },
          (err) => {
            if (err) {
              console.log(err);
              res.end();
            } else {
              res.send("Record Deleted");
            }
          }
        );
        break;
      }
    }
  } else {
    res.send("Record Not Available");
  }
});

//listening requests
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
