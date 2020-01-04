// dependencies 
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// set express to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars as default templating engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes 
const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server is listening...");
})