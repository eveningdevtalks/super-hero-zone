const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth.controller");
const { validate } = require("express-validation");
const validation = require("../../validation/auth.validation");
const auth = require("../../middlewares/auth");

router.post("/login", validate(validation.login), controller.login);

router.post("/register", validate(validation.register), controller.register);

router.get("/secret", auth, (req, res, next) => {
  res.json({
    message: `Hello ${req.user.username}, you are now in Wakanda`,
  });
});

module.exports = router;
