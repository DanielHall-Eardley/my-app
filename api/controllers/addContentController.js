const db = require("../db/db");
const catchAsyncError = require("../../util/catchAsyncError");
const { v4: uuid } = require("uuid");
const { uploadBlog } = require("../../util/supabaseDB");

/* Create param object from the request body, 
plus any custom fields */
function createDataObject(formData = {}, customFields = {}, id = uuid()) {
  /* formdata needs to always match the db model */
  const data = { id, ...formData, ...customFields };
  return data;
}

/* Create the sql query dynamically based on an object.
Use the object keys for column names. 
Convert the data from the object into an array 
using the same object keys array so that the params are 
ordered to match the correct column names*/
async function insertOneRow(dataObj, tableName, database = db) {
  const columnNames = Object.keys(dataObj);
  const paramNumbers = columnNames.map((name, index) => `$${index + 1}`);
  const params = [];

  for (let column of columnNames) {
    const field = dataObj[column];
    params.push(field);
  }

  const query = `
  INSERT INTO ${tableName} (
    ${columnNames.toString()}
  ) VALUES (
    ${paramNumbers.toString()}
  );
  `;

  const result = await database.insert(query, params);
  return result;
}

function redirectOnSuccess(queryResult, redirectPath, response) {
  if (queryResult?.changes > 0) {
    return response.redirect(redirectPath);
  }
}

async function findOneRow(id, table, database = db) {
  const query = `
    SELECT * FROM ${table} AS t
    WHERE t.id = $1
  `;

  const result = await database.query(query, id);
  return result;
}

exports.postBlog = catchAsyncError(async (req, res, next) => {
  const blogUrl = await uploadBlog(req.files.blog);
  if (!blogUrl) {
    throwError(`Upload ${req.files.blog.name} failed.`);
  }

  const customParams = { url: blogUrl };
  const blogId = uuid();
  const data = createDataObject(req.body, customParams, blogId);
  const result = await insertOneRow(data, "blog");
  console.log(result);
  const redirectPath = `/view/blog/${blogId}`;
  redirectOnSuccess(result, redirectPath, res);
});

exports.postAhaMoment = catchAsyncError(async (req, res, next) => {
  const data = createDataObject(req.body);
  const result = await insertOneRow(data, "breakthru");
  console.log(result);
  redirectOnSuccess(result, "/", res);
});

exports.postDadHack = catchAsyncError(async (req, res, next) => {
  const data = createDataObject(req.body);
  const result = await insertOneRow(data, "dadhack");
  console.log(result);
  redirectOnSuccess(result, "/", res);
});

function removeEmployerFields(formBody) {
  const fieldNames = Object.keys(formBody);
  const mainProjectParams = {};

  for (let name of fieldNames) {
    if (!name.match("employer")) {
      mainProjectParams[name] = formBody[name];
    }
  }

  return mainProjectParams;
}

function convertParagraphsToArray(accomplishments) {
  /* Split paragraphs based on a special character */
  const arrayOfParagraphs = accomplishments.split("<!>");
  return arrayOfParagraphs;
}

exports.postEmployer = catchAsyncError(async (req, res, next) => {
  const employerId = uuid();
  const customEmployerParams = {
    name: req.body.employerName,
    address: req.body.employerAddress,
    phone_number: req.body.employerPhoneNo || 0,
  };

  const employerData = createDataObject(null, customEmployerParams, employerId);
  await insertOneRow(employerData, "employer");
  req.employerId = employerId;
  next();
});

exports.postMainProject = catchAsyncError(async (req, res, next) => {
  const mainProjectParams = removeEmployerFields(req.body);
  mainProjectParams.accomplishments = convertParagraphsToArray(
    mainProjectParams.accomplishments
  );
  const customMainProjectParams = {
    employer_id: req.employerId,
  };

  const projectId = uuid();
  const projectData = createDataObject(
    mainProjectParams,
    customMainProjectParams,
    projectId
  );

  const result = await insertOneRow(projectData, "main_project");
  const redirectPath = `/view/project/${projectId}`;
  redirectOnSuccess(result, redirectPath, res);
});

exports.postSideProject = catchAsyncError(async (req, res, next) => {
  const techArray = req.body.tech_stack.split(",");
  const customData = {
    tech_stack: techArray,
  };
  const data = createDataObject(req.body, customData);
  const result = await insertOneRow(data, "side_project");
  redirectOnSuccess(result, "/", res);
});
