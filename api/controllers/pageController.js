const catchAsyncError = require('../../util/catchAsyncError');

exports.getHomePage = catchAsyncError(async (req, res, next) => {
  const data = {
    pageInfo: {
      title: 'Home',
      pageName: 'home'
    }
  }

  res.render('home/home.eta', data);
})

exports.getAddContentPage = catchAsyncError(async (req, res, next) => {
  res.render('addContent/addContent.eta');
})