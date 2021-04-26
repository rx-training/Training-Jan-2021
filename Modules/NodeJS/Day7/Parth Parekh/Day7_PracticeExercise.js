const express = require("express");
const morgan = require("morgan");
const birds = require("./birds");
const app = express();
const LoggerMiddleware = require("./loggerMiddleware");

app.use(morgan("tiny"));
app.use(express.json()); //use with req.body for json data
app.use(express.static("public")); //It Serve Static Files

app.use("/birds", birds);

app.use(LoggerMiddleware);
app.get("/users", (req, res) => {
    res.json({
        status: true,
    });
    // Cookies that have not been signed
    console.log("Cookies: ", req.cookies);

    // Cookies that have been signed
    console.log("Signed Cookies: ", req.signedCookies);
});
//save route
app.post("/save", (req, res) => {
    res.json({
        status: true,
    });
});
app.listen(3000, (req, res) => {
    console.log("server running");
});
