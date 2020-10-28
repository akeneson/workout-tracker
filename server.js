// DEPENDENCIES
// nosql module 06
const express = require("express");
const mongojs = require("mongojs");

// SETS UP THE EXPRESS APP
const app = express();
const PORT = process.env.PORT || 8080;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// STATIC DIRECTORY TO BE SERVED
app.use(express.static("app/public"));

// ROUTES
require('./routes/apiRoutes');

// STARTS THE SERVER TO BEGIN LISTENING
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:8080");
})


