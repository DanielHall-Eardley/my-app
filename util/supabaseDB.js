const { createClient } = require("@supabase/supabase-js");
const { v4: uuid } = require("uuid");
const supabase = createClient(
  "https://dihrbzcrqzorpnqtimae.supabase.co",
  process.env.DB_API_KEY
);

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

const me = {
  email: myEmail,
  password: myPassword,
  data: { name: "Daniel" },
  email_confirm: true,
};

exports.createDBUser = async function (userObject = me, database = supabase) {
  const result = await database.auth.api.createUser(userObject);
  return result;
};

exports.signinDBUser = async function (email, password, database = supabase) {
  const result = await database.auth.signIn({
    password,
    email,
  });

  return result;
};

exports.checkSession = function (database = supabase) {
  const session = database.auth.session();
  return session;
};

exports.uploadBlog = async function (file, database = supabase) {
  const blogFile = file.data;
  const blogName = `${uuid()}_${file.name}`;
  const { error, data } = await database.storage
    .from("blogs")
    .upload(`/${blogName}`, blogFile);
  if (error) return null;
  const blogUrl = data.Key.split("/")[1];
  return blogUrl;
};

exports.downloadBlog = async function (url, database = supabase) {
  const { error, data } = await database.storage.from("blogs").download(url);
  if (error) return null;
  return data.text();
};
