// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var serveStatic = require('serve-static')

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tobringlist", function(req, res) {
  res.sendFile(path.join(__dirname, "public/tobringlist.html"));
});

app.get("/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "public/dashboard.html"));
});

app.get("/calendar", function(req, res) {
  res.sendFile(path.join(__dirname, "public/list-views.html"));
});

app.get("/messaging", function(req, res) {
  res.sendFile(path.join(__dirname, "public/messaging.html"));
});

app.get("/wallet", function(req, res) {
  res.sendFile(path.join(__dirname, "public/wallet.html"));
});

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./config/connection.js"); 

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
