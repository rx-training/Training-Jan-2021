const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/", (req, res) => {
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
          message: "Unauthorized Access",
        });
      }

      req.user = decoded;
      res.send("Valid Token");
      //console.log(decoded);
      // next();
    });
  } catch (e) {
    console.log(e);
    res.status(401).send("Unauthorized Access");
  }
});

module.exports = router;
