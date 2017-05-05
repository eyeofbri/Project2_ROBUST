module.exports = function(sequelize, DataTypes){
	var user = sequelize.define("User", {
		userName:{
			type:DataTypes.STRING,
			validate:{
				notNull:true
			}
		},
		userEmail:{
			type:DataTypes.STRING,
			validate:{
				notNull:true,
				isEmail:true
			}

		},
		userPassword:{
			type:DataTypes.STRING,
			validate:{
				len:[2,10]
			}
		}
	});
	return user;
};
