const express = require("express");
const router = express.Router();
const formController = require("../controllers/form");

router.get("/", formController.form);
router.post("/submit", formController.createForm);

module.exports = router;
