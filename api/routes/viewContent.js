const router = require("express").Router();
const {
  getBlog,
  getAhaMoments,
  getDadHacks,
  getMainProject,
  getSideProjects,
  getResume,
} = require("../controllers/viewContentController");

router.get("/blog/:id", getBlog);
router.get("/ahamoments", getAhaMoments);
router.get("/dadhacks", getDadHacks);
router.get("/project/:id", getMainProject);
router.get("/sideprojects", getSideProjects);
router.get("/resume", getResume);
module.exports = router;
