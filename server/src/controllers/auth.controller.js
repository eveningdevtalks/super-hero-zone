const httpStatus = require("http-status");
const bcrypt = require("bcrypt");

const config = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: `Welcome to Super Hero Zone "${username}" 🤖` });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      throw Error("User not found");
    }

    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
      throw Error("Unauthorized!!! Avengers Assemble 👽");
    }

    const jwtPayload = { _id: user._id.toString() };

    const token = jwt.sign(jwtPayload, config.secret, {
      expiresIn: config.tokenExpiresIn,
    });

    return res.status(httpStatus.OK).json({ token });
  } catch (error) {
    next(error);
  }
};
