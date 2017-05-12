var path = require("path");
var db = require("../models");

module.exports = function(app){

  app.get("/settings", function(req, res){
    res.render("settings");
  });
  app.get("/search", function(req, res){
    res.render("search");
  });
  app.get("/addTask", function(req, res){
    res.render("task");
  });

	app.post("/addTask", function(req, res){
	    console.log(req.body);
	    db.Task.create({
        //Send all the details to DB
      }).then(function(dbUser){
	      console.log(dbUser);
	    });
  });


};
