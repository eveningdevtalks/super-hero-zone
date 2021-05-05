const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next) => {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = await bcrypt.hash(this.password);

    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", userSchema);
