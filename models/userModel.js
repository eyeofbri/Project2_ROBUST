module.exports = function(sequelize, DataTypes){
	var user = sequelize.define("User", {
		userName:{
			type:Sequelize.STRING,
			validate:{
				notNull:true
			}
		},
		userEmail:{
			type:Sequelize.STRING,
			validate:{
				notNull:true,
				isEmail:true
			}

		},
		userPassword:{
			type:Sequelize.STRING,
			validate:{
				len:[2,10]
			}
		}
	});
	return user;
};
