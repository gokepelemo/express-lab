const studentsDb = require("./data/students");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

let students = studentsDb.getAll();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/css", express.static("css"));

app.get("/", function (req, res) {
  res.send(`
  <h1>Hello there!</h1>
  <p>We're serving fictional student information from this application. Start <a href="/students">here</a>.
  `);
});

app.get("/students", function (req, res, next) {
  res.render("index", { students });
});

app.get("/students/:id", function (req, res) {
  res.render("students/index", { student: students[req.params.id] });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
