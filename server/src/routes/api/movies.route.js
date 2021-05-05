const express = require("express");
const router = express.Router();
const controller = require("../../controllers/movies.controller");
// const validator = require("express-validation");
// const { create } = require("../validations/user.validation");
// const auth = require("../middlewares/authorization");

router.post("/", controller.create);

router.delete("/:id", controller.delete);

router.patch("/:id", controller.update);

router.get("/list", controller.list);

router.get("/:id", controller.view);

module.exports = router;
