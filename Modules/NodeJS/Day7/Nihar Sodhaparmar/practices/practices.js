const logger = require('./logger');
var authenticate = require('./authenticate');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());

if(app.get('env') === "development"){
    app.use(morgan('tiny'));
    console.log('Morgan Enabled');
}

app.use(logger);

app.use(authenticate);


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})