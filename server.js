console.log("working");

var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

//Middleware------------------------------------------------------------------------------

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + '/public'));

//----------------------------------------------------------------------------------------

require("./app/routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT);
})