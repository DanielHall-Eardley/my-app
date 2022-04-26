const catchAsyncError = require("../../util/catchAsyncError");
const {
  updateMultipleDates,
  updateBlogDate,
  updateProjectObject,
  updateDate,
} = require("../../util/updateDates");
const { generatePageObject } = require("../../util/generatePageObject");
const db = require("../db/db");

exports.getHomePage = catchAsyncError(async (req, res, next) => {
  const tables = [
    "blog",
    "breakthru",
    "dadhack",
    "main_project",
    "side_project",
  ];

  const content = await db.getAllData(tables);
  content.main_project = updateMultipleDates(
    content.main_project,
    updateProjectObject
  );
  content.blog = updateMultipleDates(content.blog, updateBlogDate);
  content.breakthru = updateMultipleDates(content.breakthru, updateDate);
  const data = generatePageObject("home", "Home", content);
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
