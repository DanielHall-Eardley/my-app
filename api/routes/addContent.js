const router = require("express").Router();
const {
  postBlog,
  postAhaMoment,
  postDadHack,
  postMainProject,
  postEmployer,
  postSideProject,
} = require("../controllers/addContentController");
const { authorize } = require("../controllers/authController");

// router.use(authorize);
router.post("/create/blog", postBlog);
router.post("/create/ahamoment", postAhaMoment);
router.post("/create/dadhack", postDadHack);
router.post("/create/mainproject", postEmployer, postMainProject);
router.post("/create/sideproject", postSideProject);

module.exports = router;
