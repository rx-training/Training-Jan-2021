const jwt = require("jsonwebtoken");
require("dotenv").config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const adminAuthenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];
        var decoded = jwt.verify(token, "private");
        
        if(decoded.email == EMAIL && decoded.password == PASSWORD)
        {
            next();
        }
        else{
            res.status(401).json({
                erorr: "Unauthorized Access",
            });
        }
        
    } catch (error) {
        res.status(401).json({
            erorr: "Unauthorized Access",
        });
    }
};

module.exports = adminAuthenticateToken;
