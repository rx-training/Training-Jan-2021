const jwt = require("jsonwebtoken");
const config = require("./config");

const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];
        var decoded = jwt.verify(token, config.secretKey, {
            algorithms: config.algorithm,
        });
        //console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({
            erorr: "invalid token",
        });
    }
};

module.exports = authenticateToken;
