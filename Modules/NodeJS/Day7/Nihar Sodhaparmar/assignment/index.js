const express = require('express');
const employeeRouter = require('./routes/employee');
const assignmentRouter = require('./routes/assignment');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/employees', employeeRouter);
app.use('/assignments', assignmentRouter);

app.listen(port, () => {
    console.log(`App started on port ${port}...`);
});