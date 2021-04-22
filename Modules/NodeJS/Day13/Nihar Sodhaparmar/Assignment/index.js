const express = require('express');
const mongoose = require('mongoose');

const controllersRouter = require('./controllers/index');

const database = 'mongodb://localhost/HospitalDB';
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected...');
}).catch((err) => {
    console.error('Could not connect to MongoDB...', err)
});

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', controllersRouter);

app.listen(port, () => {
    console.log(`App started on port ${port}...`);
});