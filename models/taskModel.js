module.exports = function(sequelize, DataTypes){
	var task = sequelize.define("User", {
		taskName:{
			type:Sequelize.STRING,
			validate:{
				notNull:true
			}
		},
		taskDescription:{
			type:Sequelize.TEXT

		},
		taskLink:{
			type:Sequelize.STRING
	
		},
		taskDrawing:{
			type:Sequelize.LONGBLOB

		},
		taskCategory:{
			type:Sequelize.STRING

		},
		taskComments:{
			type:Sequelize.TEXT

		},
		complete:{
			type:Sequelize.BOOLEAN

		},
		dateCreated:{
			type:Sequelize.DATE

		},
		dateDue:{
			type:Sequelize.DATE

		},
		{
			classMethods:{
				associate:function(models){
					task.belongsTo(models.user, {
						foreignKey:{
							allowNull: false;
						}
					});
				}
			}
		}
	});
	return task;
};