var path = require("path");
var db = require("../models");

module.exports = function(app){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/login.html"));
	});

	app.get("/addTask", function(req,res){
		res.sendFile(path.join(__dirname + "/../public/main.html"));
	});

	app.post("/login", function(req, res){
	    console.log(req.body);
	    db.User.findOne({where:{userEmail:req.body.email}}).then(function(dbUser){
	      console.log(dbUser);
				if (dbUser === null) {
					res.sendFile(path.join(__dirname + "/../public/login.html"));
				}
				else {
					if(dbUser.userPassword === req.body.psw) {
						res.sendFile(path.join(__dirname + "/../public/main.html"));
					} else {
						res.sendFile(path.join(__dirname + "/../public/login.html"));
					}
				}
	    });
  	});

  app.post("/addTask", function(req, res){
    console.log(req.body);
  });

};
