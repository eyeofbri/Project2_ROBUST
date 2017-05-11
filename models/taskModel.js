module.exports = function(sequelize, DataTypes){
	var Task = sequelize.define("Task", {
		taskName:{
			type:DataTypes.STRING
		},
		taskDescription:{
			type:DataTypes.TEXT

		},
		taskLink:{
			type:DataTypes.STRING
	
		},
		taskDrawing:{
			type:DataTypes.BLOB

		},
		taskCategory:{
			type:DataTypes.STRING

		},
		complete:{
			type:DataTypes.BOOLEAN

		},
		dateCreated:{
			type:DataTypes.DATE

		},
		dateDue:{
			type:DataTypes.DATE

		},
		createdBy:{
			type:DataTypes.STRING
		},
		assignedTo:{
			type:DataTypes.STRING
		}
	}
	);
	return Task;
};

