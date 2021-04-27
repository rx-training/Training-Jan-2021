const jwt = require("jsonwebtoken");

const AuthenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];
        var decoded = jwt.verify(token, "private");

        
        //console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({
            erorr: "Unauthorized Access",
        });
    }
};

module.exports = AuthenticateToken;
