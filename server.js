//server file for Tic-It App

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require("./routes/allRoutes.js")(app);

db.sequelize.sync().then(function(){
	app.listen(port, function(){
		console.log("App listening on PORT" + port);
	});
});
