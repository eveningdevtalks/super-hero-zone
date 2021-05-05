"use strict";
const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies.route");

router.use("/movies", moviesRouter); // mount auth paths

module.exports = router;
