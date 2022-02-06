const { initDB } = require('../db/db');
const db = initDB();
const catchAsyncError = require('../../util/catchAsyncError');
const { v4: uuid } = require('uuid');
const employer = require('../models/employer');
const { find } = require('../../pages/addContent/components/addContentHeader/mainProjectStructure');

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

function removeEmployerFields (formBody) {
  const fieldNames = Object.keys(formBody);
  const mainProjectParams = {};
  for (let name of fieldNames) {
    if (!name.match('employer')) {
      mainProjectParams[name] = formBody[name];
    }
  }

  return mainProjectParams;
}

function findEmployer (db) {
  const query = `
    SELECT * FROM employer AS e
    WHERE e.employer_id = $employer_id
  `
  const param = { $employer_id: employerId };
  const employer = db.get(query, param)
  return employer
}

exports.postMainProject = catchAsyncError(async (req, res, next) => {
  const employerId = uuid()
  const customEmployerParams = {
    $employer_id: employerId,
    $name: req.body.employerName,
    $address: req.body.employerAddress,
    $phone_number: req.body.employerPhoneNo
  }

  const employerParams = createParams({}, customEmployerParams);
  const employerQuery = createInsertQuery(employerParams, 'employer');
  const result = db.run(employerQuery, employerParams);
  const employer = findEmployer(result);
  
  const mainProjectParams = removeEmployerFields(req.body);
  console.log(mainProjectParams)
  const customMainProjectParams = {
    $employer_id: employer.employer_id
  }
  const params = createParams(mainProjectParams, customMainProjectParams);
  const query = createInsertQuery(params, 'main_project');
  db.run(query, params);
  
})

exports.postSideProject = catchAsyncError(async (req, res, next) => {
  const params = createParams(req.body);
  const query = createInsertQuery(params, 'side_project');
  db.run(query, params);
})