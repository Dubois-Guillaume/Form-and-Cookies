import express from "express";
import nunjucks from "nunjucks";

const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/games", (request, response) => {
  response.render("games");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
