const httpStatus = require("http-status");
const bcrypt = require("bcrypt");

const config = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.register = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ login, password: hashedPassword });
    await user.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: `Welcome to Super Hero Zone "${login}"` });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      throw Error("User not found");
    }

    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
      throw Error("Unauthorized!!! Avengers Assemble");
    }

    const jwtPayload = { _id: user._id.toString() };

    const token = jwt.sign(jwtPayload, config.secret, {
      expiresIn: "15s",
    });

    return res.status(httpStatus.OK).json({ token });
  } catch (error) {
    next(error);
  }
};
