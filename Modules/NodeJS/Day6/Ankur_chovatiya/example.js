const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
 
const books = [
{title: "Node.JS", id: 1},
{title: "MVC", id: 2},
{title: ".NET Core", id: 3}
]
 
//READ Request Handlers
app.get('/', (req, res) => {
res.send('Welcome to Radix REST API with Node.js Tutorial!!');
});
 
// app.get('/api/books', (req,res)=> {
// res.send(books);
// });
 
app.get('/api/books/:id', (req, res) => {
const book = books.find(c => c.id === parseInt(req.params.id));
 console.log(req.params);
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(book);

});


// post

app.post('/api/books', (req, res)=> {
    console.log(req.body.title);
   
    const book = {
    id: books.length + 1,
    title: req.body.title
    };
    books.push(book);
    res.send(book );
    });
    

app.listen(3000 , ()=>{
    console.log('on the port 3000 server is running');
})