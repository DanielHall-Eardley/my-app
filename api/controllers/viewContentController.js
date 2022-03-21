const { initDB } = require("../db/db");
const db = initDB();
const catchAsyncError = require("../../util/catchAsyncError");
const throwError = require("../../util/throwError");
const {
  updateProjectObject,
  updateMultipleProjectDates,
} = require("../../util/updateProjectDates");
const { generatePageObject } = require("../../util/generatePageObject");

exports.getMainProject = catchAsyncError((req, res, next) => {
  const projectId = req.params.id;
  const query = `
    SELECT * FROM main_project AS mp
    INNER JOIN employer AS em
    ON mp.employer_id = em.id
    WHERE mp.id = ?
  `;

  const projectQuery = db.prepare(query);
  const project = projectQuery.get(projectId);
  const updatedProject = updateProjectObject(project);
  console.log(project);
  const data = generatePageObject("project", "Project", updatedProject);
  res.render("project/project.eta", data);
});

exports.getBlog = catchAsyncError((req, res, next) => {});

exports.getAhaMoments = catchAsyncError((req, res, next) => {});

exports.getDadHacks = catchAsyncError((req, res, next) => {});

exports.getSideProjects = catchAsyncError((req, res, next) => {});

exports.getResume = catchAsyncError((req, res, next) => {
  const query = `
    SELECT * FROM main_project AS mp
    INNER JOIN employer AS em
    ON mp.employer_id = em.id
  `;

  const projectQuery = db.prepare(query);
  const projects = projectQuery.all();
  const updatedProjects = updateMultipleProjectDates(projects);
  const content = { projects: updatedProjects };
  const data = generatePageObject("resume", "Daniel's Resume", content);
  res.render("resume/resume.eta", data);
});
