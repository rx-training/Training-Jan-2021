var express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');
const path = require('path');
app.use(express.json());
// get 

app.get('/' , (req , res)=>{

    res.sendFile(path.join(__dirname , '/index.html'));

});




// using get all customer data

app.get('/customers' , (req , res)=>{
    fs.readFile('./customer.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        res.send(JSON.stringify(dat));
    })
})

//  

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/submit-data' , (req , res)=>{

    var customerName = req.body.lastName;
   var age = req.body.age;
   


    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
            
         dat.push({"customerId":dat.length + 1 , "customerName":customerName ,"customerAge":age });
        
         fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
             if(err) throw err;
         })
    });

    res.send('data sucessfully submitted');
})


// 

app.put('/customer/update/:id' , (req , res)=>{
    console.log(req.params.id);
    var id = req.params.id;

    // console.log(req.body.cName);
    // console.log(req.body.cAge);



    fs.readFile('./customer.json' ,'utf8', (err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
        dt.customerName = req.body.cName;
        dt.customerAge = req.body.cAge;
       

        fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
            if(err) throw err;
        })
       res.send('put is working');
        });
    });

    
 // find data
 
 
app.get('/customer/:id' , (req , res)=>{
    
    var id =req.params.id;
    
    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
        res.send(dt);
    }); 
})

// delete partocular data  


app.delete('/customer/delete/:id' , (req , res)=>{
    var id = req.params.id;
    console.log(req.params.id);


    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
         console.log(dt);

         const index = dat.indexOf(dt); 
          dat.splice(index , 1);

          fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
                        if(err) throw err;
                    })
         res.send('delete work sucessfully')
        });

    });


    
  

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});