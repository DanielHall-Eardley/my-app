const { initDB } = require('../db/db');
const db = initDB();
const catchAsyncError = require('../../util/catchAsyncError');
const { uuid: v4 } = require('uuid');

/* Create param object from the request body, 
plus any custom fields */
function createParams (formBody, customFields={}) {
  const fieldNames = Object.keys(formBody)

  /* formdata needs to always match the db model */
  const formData = {}
  for(let name of fieldNames) {
    const paramName = `$${name}`;
    formData[paramName] = formBody[name];
  }
 
  const paramObj = { ...formData, ...customFields };
  return paramObj;
}

/* Create the sql query dynamically */
function createInsertQuery (paramObj, tableName) {
  const paramNames = Object.keys(paramObj);
  const columnNames = paramNames.map(name => name.slice(1));
  const query = `
  INSERT INTO ${tableName} (
    ${columnNames.toString()}
  ) VALUES (
    ${paramNames.toString()}
  );
` 

  return query;
}

exports.postBlog = catchAsyncError(async (req, res, next) => {
  const customParams = {
    $url: req.file.path,
  }

  const params = createParams(req.body, customParams);
  const query = createInsertQuery(params, 'blog');
  db.run(query, params);
  // redirect to blog page
})

exports.postAhaMoment = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, 'breakthru');
  db.run(query, params);
})

exports.postDadHack = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, 'dadhack');
  db.run(query, params);
})

exports.postMainProject = catchAsyncError(async (req, res, next) => {
  const customEmployerParams = {
    employer_id: uuid(),
    name: req.body.employerName,
    addres
  }

  const employerParams = createParams(req.body);
  const employerQuery = createInsertQuery(employerParams, 'employer');
  db.run(employerQuery, params);

  const params = createParams(req.body);
  const query = createInsertQuery(params, 'main_project');
  db.run(query, params);
  
})

exports.postSideProject = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, 'side_project');
  db.run(query, params);
})