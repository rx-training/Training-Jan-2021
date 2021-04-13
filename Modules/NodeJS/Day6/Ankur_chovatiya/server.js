const express = require('express');
const path = require('path');
var app = express();
const fs = require('fs');
const url = require('url');
app.use(express.json());
const router = express.Router();


router.use((req , res , next)=>{
    console.log('router is working');
    next();
})
router.get('/yes' , (req , res , next)=>{
    console.log('router is working fine');
    res.send('Route is working')
    next();
})
app.use('/customer/super' , router);
// home page 

app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// show customer all data

app.get('/customer' , (req  ,res)=>{

    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        // console.log(data);
        let dat = JSON.parse(data);
        res.send(JSON.stringify(dat) + '<br/><br/><a href="/">Back</a>');
         
    });   
});

   
// get customer's data from server side


app.post('/submit-student-data' , (req , res) =>{

   const QueryObject = url.parse(req.url , true).query;
   var customerId = QueryObject.firstName;
   var customerName = QueryObject.lastName;
   var age = QueryObject.age;

    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
            
         dat.push({"customerId":dat.length + 1 , "customerName":customerName ,"customerAge":age });
        
         fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
             if(err) throw err;
         })
    });
   
    res.send( '<p> Submitted Successfully</p> <a href="/">Back</a>');
})

// find the particular customer

app.get('/submit-student-data/find' , (req , res)=>{
    const queryObj = url.parse(req.url , true).query;
    var id = queryObj.id;
    
    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
        res.send(dt);
    }); 
})

// update customer's details

app.get('/submit-student-data/update' , (req , res)=>{
    const querobj = url.parse(req.url , true).query;
    var id = querobj.id;
    var name = querobj.name;
    var age = querobj.age;
    fs.readFile('./customer.json' ,'utf8', (err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
        dt.customerName = name;
        dt.customerAge = age;
       

        fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
            if(err) throw err;
        })
        res.send('<p> Data updated Successfully</p> <a href="/">Back</a>')
    });

});

// delete particular customer

app.get('/submit-student-data/delete' , (req , res)=>{
    const queryObj = url.parse(req.url , true).query;
    var id = queryObj.id;
    
    fs.readFile('./customer.json' ,'utf8',(err , data)=>{
        let dat = JSON.parse(data);
        let dt = dat.find(c => c.customerId == id);
    //    console.log(dat[id-1]);
       const index = dat.indexOf(dt); 
        dat.splice(index , 1);
      
        fs.writeFile('./customer.json', JSON.stringify(dat) ,(err)=>{
            if(err) throw err;
        })


        res.send('<p> Data delated Successfully</p> <a href="/">Back</a>');
    })
})

// listion on which port

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});