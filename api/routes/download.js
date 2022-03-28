const router = require("express").Router();
const { downloadResume } = require("../controllers/downloadController.js");

router.get("/resume", downloadResume);

module.exports = router;
