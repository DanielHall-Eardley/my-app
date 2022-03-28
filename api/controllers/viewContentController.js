const db = require("../db/db");
const catchAsyncError = require("../../util/catchAsyncError");
const throwError = require("../../util/throwError");
const {
  updateProjectObject,
  updateMultipleProjectDates,
} = require("../../util/updateProjectDates");
const { generatePageObject } = require("../../util/generatePageObject");

exports.getMainProject = catchAsyncError(async (req, res, next) => {
  const projectId = req.params.id;
  const query = `
    SELECT * FROM main_project AS mp
    INNER JOIN employer AS em
    ON mp.employer_id = em.id
    WHERE mp.id = $1
  `;

  const project = await db.queryOne(query, [projectId]);
  const updatedProject = updateProjectObject(project);
  const data = generatePageObject("project", "Project", updatedProject);
  res.render("project/project.eta", data);
});

exports.getBlog = catchAsyncError((req, res, next) => {});

exports.getAhaMoments = catchAsyncError((req, res, next) => {});

exports.getDadHacks = catchAsyncError((req, res, next) => {});

exports.getSideProjects = catchAsyncError((req, res, next) => {});

exports.getResume = catchAsyncError(async (req, res, next) => {
  const query = `
    SELECT * FROM main_project AS mp
    INNER JOIN employer AS em
    ON mp.employer_id = em.id
  `;

  const projects = await db.query(query);
  const updatedProjects = updateMultipleProjectDates(projects);
  const content = { projects: updatedProjects };
  const data = generatePageObject("resume", "Daniel's Resume", content);
  res.render("resume/resume.eta", data);
});
