var express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');
const path = require('path');
app.use(express.json());
// get 

app.get('/' , (req , res)=>{

    res.send('Hello Students');

});




// using get all students data

app.get('/students' , (req , res)=>{
    
    fs.readFile('./students.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        // console.log(data);
        res.send(JSON.stringify(dat));
    });
})

// 

app.get('/student/:id' , (req , res)=>{
    fs.readFile('./students.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        console.log(req.params.id);
        console.log(dat);
        var stu = dat.find(s => s.ID == req.params.id )
        console.log(stu);
        res.send(stu);
    });
});

app.get('/student/:id/:key' , (req , res)=>{
    fs.readFile('./students.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        let student = dat.find(s => s.ID == req.params.id );
        let catagry = req.params.key;
        console.log(catagry);
        
        if(catagry == 'fees'){
            res.send(student.Fees)
        }
        else if(catagry == 'result'){
            res.send(student.Result);
        }
       
    })
})

//

app.put('/student/:id/update' , (req , res)=>{
    var id = req.params.id;

    fs.readFile('./students.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        let student = dat.find(s => s.ID == req.params.id );
        console.log(student);
       console.log(req.body);
       student.Result.Eng = req.body.Eng;


        fs.writeFile('./students.json' ,JSON.stringify(dat) , (err)=>{
            if(err) throw err;
        })
        res.send('Recored sucessfully Updated!')
    });
})

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});