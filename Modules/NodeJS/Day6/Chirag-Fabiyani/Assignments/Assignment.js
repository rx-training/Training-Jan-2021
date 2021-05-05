const fs=require('fs');
const express = require('express');
const app = express();
app.use(express.json());


fs.readFile('Data.json','utf8',(err,data)=>{
    if(err){console.log(err)}
    data=JSON.parse(data);

    app.get('/students',(req,res)=>{
        res.json(data);
    }); 

    app.get('/students/:id',(req,res)=>{
        const Student = data.find(d=>d.ID===parseInt(req.params.id));
        res.json(Student);
    });

    app.get('/students/:id/:category',(req,res)=>{
        const Student = data.find(d=>d.ID===parseInt(req.params.id));
        const category=req.params.category;
        if(category=='fees'){
            res.send(Student.Fees);
        }
        else if(category=='result'){
            res.send(Student.Result);
        }
    });

    app.put('/students/:id/',(req,res)=>{
        if(req.body.Result){
        const Student= data.find(d=>d.ID===parseInt(req.params.id));
        if(req.body.Result.Eng){
            Student.Result.Eng=req.body.Result.Eng;
            res.send(data);
            fs.writeFile('Data.json',JSON.stringify(data),(err)=>{
                if(err){
                    console.log(err)
                }
            })
        }
        }
    });
});
app.listen(3000);