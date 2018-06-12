// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var serveStatic = require('serve-static');
var session = require('express-session');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

var loginController = require('./controllers/loginUser_controller.js');
var registerController = require('./controllers/registerUser_controller.js');

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('*/css',express.static('assets/css'));
app.use('*/js',express.static('assets/js'));
app.use('*/images',express.static('assets/images'));

app.use(session({
  secret: 'asdfghjkl',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 80000}
}));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/tobringlist", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/tobringlist.html"));
});

app.get("/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/dashboard.html"));
});

app.get("/calendar", function(req, res) {
  res.sendFile(path.join(__dirname, "calendar/list-views.html"));
});

app.get("/index.html", function(req, res) {
  res.sendFile(_dirname + "/" + "index.html");
});

app.post('/api/register', registerController.register);
app.post('/api/login', loginController.login);

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
