const express = require("express");
const router = express.Router();
const formController = require("../controllers/form");
const { isAuth } = require("../utils");

router.get("/", isAuth, formController.form);
router.post("/submit", formController.createForm);

module.exports = router;
