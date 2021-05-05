const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const config = require("../config");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      throw Error("Unauthorized");
    }
    const [type, token] = authHeader.split(" ");
    if (type !== "Bearer" && !token) {
      throw Error("Unauthorized");
    }

    const decodedJwt = jwt.verify(token, config.secret);
    if (!decodedJwt) {
      throw Error("Unauthorized");
    }

    // find user in db
    const { _id } = decodedJwt;
    const user = await User.findById(_id);
    if (!user) {
      throw Error("Unauthorized");
    }

    req.user = user;
    next();
    return;
  } catch (error) {
    next(error);
    return;
  }
};
