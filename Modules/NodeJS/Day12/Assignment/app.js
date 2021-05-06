const httperros = require('http-errors');
const  express = require("express");
const app = express();

const employee = require("./controllers/employee/employee");
const student = require('./controllers/student/student');
const login = require('./controllers/login/login');
const verifytoken = require("./Authentication/verifytoken");
const loggerMiddleware = require('./middleware/loggerMiddleware');


const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/Employee";
mongoose
    .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Conntected");
    });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(loggerMiddleware);
app.use(express.json());
app.use('/login',login);

//app.use(verifytoken);
app.use("/emps",employee);
app.use("/students",student);


app.listen(3000,()=>{
    console.log('server running in 3000');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Something Wrong');
});