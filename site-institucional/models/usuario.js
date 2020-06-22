'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define('Users',{
		cnpj: {
			type: DataTypes.STRING,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		nomeEmpresa: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'CONTRATANTE', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Users;
};
