const catchAsyncError = require("../../util/catchAsyncError");
const { updateMultipleProjectDates } = require("../../util/updateProjectDates");
const { generatePageObject } = require("../../util/generatePageObject");
const { initDB } = require("../db/db");
const db = initDB();

function getLatestQuery(tables, database = db) {
  const data = {};

  tables.forEach((table) => {
    const query = `
      SELECT * from ${table}
    `;
    const preparedQuery = database.prepare(query);
    const content = preparedQuery.all();

    if (content) {
      data[table] = content;
    }
  });

  return data;
}

exports.getHomePage = catchAsyncError(async (req, res, next) => {
  const tables = [
    "blog",
    "breakthru",
    "dadhack",
    "main_project",
    "side_project",
  ];

  const content = getLatestQuery(tables);
  content.main_project = updateMultipleProjectDates(content.main_project);
  const data = generatePageObject("home", "Home", content);

  console.log(data);
  res.render("home/home.eta", data);
});

exports.getAddContentPage = catchAsyncError(async (req, res, next) => {
  const data = generatePageObject("addContent", "Add Content");
  res.render("addContent/addContent.eta", data);
});
