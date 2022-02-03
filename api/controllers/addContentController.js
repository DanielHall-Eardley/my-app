const { initDB } = require('../db/db');
const db = initDB();
const catchAsyncError = require('../../util/catchAsyncError');

function createParams (formBody, customFields) {
  const fieldNames = Object.keys(formBody)
  console.log(fieldNames)
  /* formdata needs to always match the db model */
  const formData = fieldNames.reduce((name, obj) => {
    const paramName = `$${name}`;
    obj[paramName] = formBody[name];
    return obj;
  }, {});

  const paramObj = { ...formData, ...customFields };
  return paramObj;
}

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
  console.log(req.body)
  
})

exports.postDadHack = catchAsyncError(async (req, res, next) => {
  console.log(req.body)
  
})

exports.postMainProject = catchAsyncError(async (req, res, next) => {
  console.log(req.body)
  
})

exports.postSideProject = catchAsyncError(async (req, res, next) => {
  console.log(req.body)
  
})