const express = require("express");
const app = express();
const path = require("path");
const { generatePageObject } = require("./util/generatePageObject");
const eta = require("eta");
const dotenv = require("dotenv");
dotenv.config();

const pageRoutes = require("./api/routes/page");
const addContentRoutes = require("./api/routes/addContent");
const viewContentRoutes = require("./api/routes/viewContent");
const downloadRoutes = require("./api/routes/download");
const authRoutes = require("./api/routes/authRoutes");

const blogModel = require("./api/models/blog");
const breakthruModel = require("./api/models/breakthru");
const dadHackModel = require("./api/models/dadHack");
const employerModel = require("./api/models/employer");
const mainProjectModel = require("./api/models/mainProject");
const sideProjectModel = require("./api/models/sideProject");

const db = require("./api/db/db");
const tableArray = [
  blogModel,
  breakthruModel,
  dadHackModel,
  employerModel,
  mainProjectModel,
  sideProjectModel,
];

// db.initTables(tableArray);

// const { createDBUser } = require("../util/supabaseDB");
// createDBUser().then((res) => {
//   console.log(res);
// });

eta.configure({
  tags: ["{{", "}}"],
});

app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
const pagesPath = path.resolve(__dirname, "pages");
app.set("views", pagesPath);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.set({
    "Cache-Control": "max-age=3600",
  });

  next();
});
app.use(pageRoutes);
app.use("/content", addContentRoutes);
app.use("/view", viewContentRoutes);
app.use("/download", downloadRoutes);
app.use("/auth", authRoutes);
const buildFilesPath = path.resolve(__dirname, "build");
app.use(express.static(buildFilesPath));

app.use((error, req, res, next) => {
  console.log(error);
  const errorObject = {
    message: error.message,
    status: error.status,
  };
  const data = generatePageObject("error", "Error", errorObject);
  res.render("error/error.eta", data);
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT);
