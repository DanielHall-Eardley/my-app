const router = require("express").Router();
const {
  getHomePage,
  getAddContentPage,
  getSigninPage,
} = require("../controllers/pageController");
const { authorize } = require("../controllers/authController");

router.get("/", getHomePage);
router.get("/auth/signin", getSigninPage);
router.get("/content/create", authorize, getAddContentPage);

module.exports = router;
