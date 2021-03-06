require("dotenv").config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  secret: process.env.SECRET,
  port: process.env.PORT || 4041,
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || "15s",
};
