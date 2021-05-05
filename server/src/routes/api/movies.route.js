const express = require("express");
const router = express.Router();
const controller = require("../../controllers/movies.controller");
const { validate } = require("express-validation");
const validation = require("../../validation/movie.validation");
// const auth = require("../middlewares/authorization");

router.post("/", validate(validation.create), controller.create);

router.delete("/:id", controller.delete);

router.patch("/:id", validate(validation.update), controller.update);

router.get("/list", controller.list);

router.get("/:id", controller.view);

module.exports = router;
