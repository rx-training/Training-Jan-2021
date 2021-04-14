const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());


// router.use((req , res , next)=>{
//     console.log('router is working fine');
//     res.send('router is working fine!');
//     next();
// });

router.get('/all',(req , res , next)=>{
    // res.send('all employee details');
    fs.readFile('./employee.json' , 'utf8' , (err , data)=>{
        // console.log(data);
        let dat = JSON.parse(data);
        res.send(dat);
        next();
    })
   
});

router.get('/:id' , (req , res , next)=>{
    const id = req.params.id;
    fs.readFile('./employee.json' , 'utf8' , (err , data)=>{
        console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp =>emp.Id == id);
        res.send(emp);
        next();
    });
    
});
// update 
router.put('/:id/update' ,[express.json()], (req , res , next)=>{
    const id = req.params.id;
    let empId = req.body.Id;
    let FirstName = req.body.FirstName;

    console.log(assign);
    // console.log(JSON.stringify(assign.name));
    fs.readFile('./employee.json' , 'utf8' , (err , data)=>{
        // console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        // console.log(emp.Id);
        emp.Id = empId;
        emp.FirstName = FirstName;
        
        fs.writeFile('./employee.json' , JSON.stringify(dat) , (err)=>{
            if(err) throw err;
        });
        res.send('data updated successfully');
        next();

    });
})



module.exports = router;


