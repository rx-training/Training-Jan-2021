const httperros = require("http-errors");
const express = require("express");
const doctor = require('./controllers/doctor');
const patient = require('./controllers/patient');
const loggerMiddleware = require("./middleware/loggerMiddleware");
const PatientsmentModel = require("./Models/patients");
const drugModel = require('./Models/drugs');
const app = express();

const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/hospital";
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
app.use('/doctor', doctor);
app.use('/patient', patient);

app.listen(3000, () => {
    console.log("server running in 3000");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send("Something Wrong");
});
