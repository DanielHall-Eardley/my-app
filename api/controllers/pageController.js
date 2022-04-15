const catchAsyncError = require("../../util/catchAsyncError");
const {
  updateMultipleDates,
  updateProjectObject,
  updateBlogDate,
} = require("../../util/updateDates");
const { generatePageObject } = require("../../util/generatePageObject");
const db = require("../db/db");

/* 
  Create an object with the following structure
  {
    [tableName]: [array of rows]
  }
*/
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
  content.main_project = updateMultipleDates(
    content.main_project,
    updateProjectObject
  );
  content.blog = updateMultipleDates(content.blog, updateBlogDate);
  const data = generatePageObject("home", "Home", content);
  console.log(data);
  res.render("home/home.eta", data);
});

exports.getAddContentPage = catchAsyncError(async (req, res, next) => {
  const data = generatePageObject("addContent", "Add Content");
  res.render("addContent/addContent.eta", data);
});

exports.getSigninPage = catchAsyncError(async (req, res, next) => {
  const data = generatePageObject("signIn", "Sign In");
  res.render("signIn/signIn.eta", data);
});
