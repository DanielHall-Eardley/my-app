const { initDB } = require("../db/db");
const db = initDB();
const catchAsyncError = require("../../util/catchAsyncError");
const throwError = require("../../util/throwError");
const { v4: uuid } = require("uuid");

/* Create param object from the request body, 
plus any custom fields */
function createParams(formData = {}, customFields = {}, id = uuid()) {
  /* formdata needs to always match the db model */
  const paramObj = { id, ...formData, ...customFields };
  return paramObj;
}

/* Create the sql query dynamically */
function createInsertQuery(paramObj, tableName, database = db) {
  const columnNames = Object.keys(paramObj);
  const paramNames = columnNames.map((name) => `@${name}`);
  const query = `
  INSERT INTO ${tableName} (
    ${columnNames.toString()}
  ) VALUES (
    ${paramNames.toString()}
  );
`;

  return database.prepare(query);
}

function redirectOnSuccess(queryResult, redirectPath, response) {
  if (queryResult?.changes > 0) {
    return response.redirect(redirectPath);
  }
}

function findOneRow(employerId, table, database = db) {
  const query = `
    SELECT * FROM ${table} AS e
    WHERE e.id = ?
  `;

  const sqlStatement = database.prepare(query);
  const employer = sqlStatement.get(employerId);
  return employer;
}

exports.postBlog = catchAsyncError(async (req, res, next) => {
  const customParams = {
    url: req.file.path,
  };

  const blogId = uuid();
  const params = createParams(req.body, customParams, blogId);
  const query = createInsertQuery(params, "blog");
  const result = query.run(params);
  const redirectPath = `/view/blog/${blogId}`;
  redirectOnSuccess(result, redirectPath, res);
});

exports.postAhaMoment = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, "breakthru");
  const result = query.run(params);
  redirectOnSuccess(result, "/", res);
});

exports.postDadHack = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, "dadhack");
  const result = query.run(params);
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
  const arrayOfParagraphs = split("<!>");
  return arrayOfParagraphs;
}

exports.postMainProject = catchAsyncError(async (req, res, next) => {
  const employerId = uuid();
  const customEmployerParams = {
    name: req.body.employerName,
    address: req.body.employerAddress,
    phone_number: req.body.employerPhoneNo,
  };

  const employerParams = createParams(null, customEmployerParams, employerId);
  const employerQuery = createInsertQuery(employerParams, "employer");
  employerQuery.run(employerParams);
  const employer = findOneRow(employerId, "main_project");

  const mainProjectParams = removeEmployerFields(req.body);
  mainProjectParams.accomplishments = convertParagraphsToArray(
    mainProjectParams.accomplishments
  );
  const customMainProjectParams = {
    employer_id: employer.id,
  };

  const projectId = uuid();
  const params = createParams(
    mainProjectParams,
    customMainProjectParams,
    projectId
  );
  const query = createInsertQuery(params, "main_project");
  const result = query.run(params);
  const redirectPath = `/view/project/${projectId}`;
  redirectOnSuccess(result, redirectPath, res);
});

exports.postSideProject = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, "side_project");
  const result = query.run(params);
  redirectOnSuccess(result, "/", res);
});
