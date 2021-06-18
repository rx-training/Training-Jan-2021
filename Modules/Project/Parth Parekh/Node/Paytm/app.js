const express = require("express");
const createError = require("http-errors");
const cors = require("cors");

const loggerMiddleware = require("./middleware/loggermiddleware");
const product = require("./controllers/product");
const user = require("./controllers/user");
const login = require("./controllers/login/login");

const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/paytmdb";

mongoose
    .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("MongoDB Conntected");
    });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
//const port = 9000;

app.use(cors());
app.use(loggerMiddleware);
app.use(express.json());
app.use("/product", product);
app.use("/user", user);
app.use("/otp", login);

app.use("/uploads", express.static("uploads"));

app.listen(process.env.port, () => {
    console.log(`app listening at http://localhost:${process.env.port}`);
});

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//     console.log(err);
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.send("Something Wrong");
// });
