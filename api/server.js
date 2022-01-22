const express = require('express');
const app = express()
const path = require('path')
const eta = require('eta')
const pageRoutes = require('./routes/page');

eta.configure({
  tags: ["{{", "}}"]
})

app.engine("eta", eta.renderFile)
app.set("view engine", "eta")
app.set('views', '../pages');

app.use(pageRoutes);

const buildFiles = '../build'
app.use(express.static(buildFiles));

app.use((error, req, res, next) => {
  console.log(error);
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT);
