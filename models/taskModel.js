module.exports = function(sequelize, DataTypes){
	var task = sequelize.define("Task", {
		taskName:{
			type:DataTypes.STRING,
			validate:{
				notNull:true
			}
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
		taskComments:{
			type:DataTypes.TEXT

		},
		complete:{
			type:DataTypes.BOOLEAN

		},
		dateCreated:{
			type:DataTypes.DATE

		},
		dateDue:{
			type:DataTypes.DATE

		}
	}
		// {
		// 	classMethods:{
		// 		associate:function(models){
		// 			task.belongsTo(models.user, {
		// 				foreignKey:{
		// 					allowNull: false
		// 				}
		// 			});
		// 		}
		// 	}
		// }
	
	);
	return task;
};

