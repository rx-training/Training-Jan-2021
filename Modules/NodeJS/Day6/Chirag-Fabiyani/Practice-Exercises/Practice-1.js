const express = require('express');
const app = express();
app.use(express.json());


const Customers = [
    {Name:'Chirag',id:1},
    {Name:'Shekhar',id:2},
    {Name:'Ankur',id:3},
]

app.get('/',(req,res)=>{
    res.send('Welcome')
});

app.get('/customers',(req,res)=>{
    res.send(Customers);
});

app.get('/customers/:id',(req,res)=>{
    const Customer= Customers.find(c=>c.id===parseInt(req.params.id));
    if(!Customer){
        res.send('Oops cannot find what you looking for!!');
    }
    res.send(Customer);
});

app.post('/customers',(req,res)=>{
    if(req.body.title){
    const Customer = {
        title: req.body.title,
        id: Customers.length + 1
    }
    Customers.push(Customer);
    res.send(Customers);
}});

app.put('/customers/:id',(req,res)=>{
    if(req.body.title){
    const Customer= Customers.find(c=>c.id===parseInt(req.params.id));
    Customer.title=req.body.title;
    res.send(Customers);
    }
});

app.delete('/customers/:id',(req,res)=>{
    const Customer= Customers.find(c=>c.id===parseInt(req.params.id));
    const index = Customers.indexOf(Customer);
    Customers.splice(index,1);
    res.send(Customers);
})

app.listen(3000);