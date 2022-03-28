const catchAsyncError = require("../../util/catchAsyncError");
const { updateMultipleProjectDates } = require("../../util/updateProjectDates");
const { generatePageObject } = require("../../util/generatePageObject");
const db = require("../db/db");

function createDataObject(rawDbResult, tables) {
  const data = {};

  for (let i = 0; i < tables.length; i += 1) {
    const tableName = tables[i];
    const dbRows = rawDbResult[i];
    data[tableName] = dbRows;
  }

  return data;
}

async function getAllData(tables, database = db) {
  const promises = tables.map((table) => {
    const query = `
      SELECT * from ${table}
    `;

    return database.query(query);
  });

  const result = await Promise.all(promises);
  const data = createDataObject(result, tables);
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

  const content = await getAllData(tables);
  content.main_project = updateMultipleProjectDates(content.main_project);
  const data = generatePageObject("home", "Home", content);
  res.render("home/home.eta", data);
});

exports.getAddContentPage = catchAsyncError(async (req, res, next) => {
  const data = generatePageObject("addContent", "Add Content");
  res.render("addContent/addContent.eta", data);
});
