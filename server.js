// DEPENDENCIES
// nosql module 06
const express = require("express");
const mongo = require("mongojs");
const mongoose= require("mongoose");


// SETS UP THE EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// STATIC DIRECTORY TO BE SERVED
app.use(express.static("public"));

// MONGOOSE [nosql module 26]
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
    useNewurlParser: true,
    useFindAndModify: false
});

// ROUTES
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

// STARTS THE SERVER TO BEGIN LISTENING
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:3000");
})


