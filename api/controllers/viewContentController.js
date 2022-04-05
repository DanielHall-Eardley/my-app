const db = require("../db/db");
const mdOptions = {
  linkify: true,
};
const md = require("markdown-it")(mdOptions);
const catchAsyncError = require("../../util/catchAsyncError");
const throwError = require("../../util/throwError");
const {
  updateProjectObject,
  updateMultipleDates,
  updateBlogDate,
} = require("../../util/updateDates");
const { generatePageObject } = require("../../util/generatePageObject");
const { downloadBlog } = require("../../util/supabaseDB");

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

async function generateBlog(url, mdParser = md) {
  const blogFileMD = await downloadBlog(url);
  if (!blogFileMD) {
    throwError("Unable to download blog", 400);
  }

  const renderedBlog = mdParser.render(blogFileMD);
  return renderedBlog;
}

exports.getBlog = catchAsyncError(async (req, res, next) => {
  const blogId = req.params.id;
  const query = `
    SELECT * FROM blog AS b
    WHERE b.id = $1
  `;

  const blogData = await db.queryOne(query, [blogId]);
  const blog = await generateBlog(blogData.url);
  const updatedBlog = updateBlogDate(blogData);
  const blogObject = {
    ...updatedBlog,
    blog,
  };
  const data = generatePageObject("blog", "Daniel's Blog", blogObject);
  res.render("blog/blog.eta", data);
});

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
  const updatedProjects = updateMultipleDates(projects, updateProjectObject);
  const content = { projects: updatedProjects };
  const data = generatePageObject("resume", "Daniel's Resume", content);
  res.render("resume/resume.eta", data);
});
