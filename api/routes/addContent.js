const router = require("express").Router();
const {
  postBlog,
  postAhaMoment,
  postDadHack,
  postMainProject,
  postEmployer,
  postSideProject,
} = require("../controllers/addContentController");

router.post("/create/blog", postBlog);
router.post("/create/ahamoment", postAhaMoment);
router.post("/create/dadhack", postDadHack);
router.post("/create/mainproject", postEmployer, postMainProject);
router.post("/create/sideproject", postSideProject);

module.exports = router;
