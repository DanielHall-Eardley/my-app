const catchAsyncError = require("../../util/catchAsyncError");
const { signinDBUser, checkSession } = require("../../util/supabaseDB");
const { generatePageObject } = require("../../util/generatePageObject");

exports.signIn = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await signinDBUser(email, password);
  if (!result.error) {
    return res.redirect("/content/create");
  }

  const error = result.error;
  const data = generatePageObject("error", "Error", error);
  res.render("error/error.eta", data);
});

exports.authorize = catchAsyncError(async (req, res, next) => {
  const session = checkSession();
  if (!session) {
    return res.redirect("/auth/signin");
  }

  next();
});
