require("dotenv").config();

module.exports = function () {
  if (!process.env.MYNTRA_JWT_PRIVATE_KEY) {
    throw new Error("FATAL ERROR: jwtPrivatKey is not defined.");
  }
};
