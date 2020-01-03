// dependencies 
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

var app = express();

// set express to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set handlebars as default templating engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");