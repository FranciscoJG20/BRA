const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application");

router.get("/", applicationController.index);
router.get("/faq", applicationController.faq);

module.exports = router;
