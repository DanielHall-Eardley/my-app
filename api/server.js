const express = require("express");
const app = express();
const path = require("path");
const eta = require("eta");
const dotenv = require("dotenv");
dotenv.config();

const pageRoutes = require("./routes/page");
const addContentRoutes = require("./routes/addContent");
const viewContentRoutes = require("./routes/viewContent");
const downloadRoutes = require("./routes/download");

const blogModel = require("./models/blog");
const breakthruModel = require("./models/breakthru");
const dadHackModel = require("./models/dadHack");
const employerModel = require("./models/employer");
const mainProjectModel = require("./models/mainProject");
const sideProjectModel = require("./models/sideProject");

const db = require("./db/db");
const tableArray = [
  blogModel,
  breakthruModel,
  dadHackModel,
  employerModel,
  mainProjectModel,
  sideProjectModel,
];

// db.initTables(tableArray);

const { createDBUser, signInDBUser } = require("../util/supabaseDB");
// createDBUser();

eta.configure({
  tags: ["{{", "}}"],
});

app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set("views", "../pages");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(pageRoutes);
app.use("/content", addContentRoutes);
app.use("/view", viewContentRoutes);
app.use("/download", downloadRoutes);
const buildFiles = "../build";
app.use(express.static(buildFiles));

app.use((error, req, res, next) => {
  console.log(error);
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT);
