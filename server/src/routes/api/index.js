"use strict";
const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies.route");
 // mount auth paths
router.use("/movies", moviesRouter); // mount movies paths

module.exports = router;
