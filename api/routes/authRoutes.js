const router = require("express").Router();
const { signIn } = require("../controllers/authController");

router.post("/signin", signIn);

module.exports = router;
