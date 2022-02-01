const { initDB } = require('../db/db');
const db = initDB();
const catchAsyncError = require('../../util/catchAsyncError');

exports.postBlog = catchAsyncError(async (req, res, next) => {
  console.log(req.body)
  console.log(req.file)
  const query = `
    INSERT INTO blog (
      title,
      date,
      readtime,
      url
    ) VALUES (
      $title,
      $date,
      $readtime,
      $url
    );
  `

  const {
    title,
    readtime,
    date
  } = req.body;

  const params = {
    $title: title,
    $readtime: readtime,
    $date: date,
    $url: req.file.path,
  }

  const result = db.run(query, params);
  console.log(result)
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