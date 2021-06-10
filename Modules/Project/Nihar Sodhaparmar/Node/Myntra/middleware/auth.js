const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-access-token");

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    jwt.verify(token, config.get("jwtPrivatKey"), function (err, decoded) {
      if (err) {
        // let errordata = {
        //     message: err.message,
        //     expiredAt: err.expiredAt,
        // };
        //console.log(errordata);
        return res.status(401).json({
          message: "Unauthorized Access1",
        });
      }

      req.user = decoded;
      //console.log(decoded);
      next();
    });
  } catch (e) {
    console.log(e);
    res.status(401).send("Unauthorized Access2");
  }
};
