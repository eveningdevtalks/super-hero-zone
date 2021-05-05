const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth.controller");
const { validate } = require("express-validation");
const validation = require("../../validation/auth.validation");

router.post("/login", validate(validation.login), controller.login);

router.post("/register", validate(validation.register), controller.register);

module.exports = router;
