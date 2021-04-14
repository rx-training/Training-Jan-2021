const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));


const books = '[{title: "Node.JS", id: 1},{title: "MVC", id: 2},{title: ".NET Core", id: 3}]'


//READ Request Handlers
app.get('/', (req, res) => {
    res.send('Welcome to Radix REST API with Node.js Tutorial!!');
    });
     
    app.get('/api/books', (req,res)=> {
    res.send(books);
    });
     
    app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
     
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(book);
    });

    //CREATE Request Handler
app.post('/api/books', (req, res)=> {
    console.log(req.body.title);
    const { error } = validateBook(req.body);
    if (error){
    res.status(400).send(error.details[0].message)
    return;
    }
    const book = {
    id: books.length + 1,
    title: req.body.title
    };
    books.push(book);
    res.send(book);
    });
     
//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
    const book = books.find(c=> c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
     
    const { error } = validateBook(req.body);
    if (error){
    res.status(400).send(error.details[0].message);
    return;
    }
     
    book.title = req.body.title;
    res.send(book);
    });

    //DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {
 
    const book = books.find( c=> c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
     
    const index = books.indexOf(book);
    books.splice(index,1);
     
    res.send(book);
});
    
    