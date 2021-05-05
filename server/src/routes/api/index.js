"use strict";
const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const moviesRouter = require("./movies.route");

router.use("/auth", authRouter); // mount auth paths
router.use("/movies", moviesRouter); // mount movies paths

module.exports = router;
