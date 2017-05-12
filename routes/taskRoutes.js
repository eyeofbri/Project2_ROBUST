var path = require("path");
var db = require("../models");

module.exports = function(app){

  app.get("/dashboard", function(req, res){
    res.render("dashboard");
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
        task:req.body.taskName,
        description:req.body.taskDescription,
        complete:false,
        created_by:req.body.assigned_to,
        assigned_to:req.body.assigned_to,
        category:req.body.taskCategory,
        date_created:new Date(),
        date_due:req.body.dueDate,
        drawing_URLurl:req.body.imageURL
      }).then(function(dbTask){
	      // console.log(dbTask);
        console.log("Going back to index page...");
        db.Task.findAll({

        }).then(function(dbTasks){
          res.render("index", { userName: req.body.assigned_to,
                                dbTask:dbTasks});
        });
	    });
  });

  app.get("/getTask", function(req, res){
    db.Task.find({

    }).then(function(dbTask){
      console.log(dbTask);
      // res.render("index", {dbTask});
    });
  });



};
