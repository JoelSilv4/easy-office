'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		id: {
			type: DataTypes.INTEGER,
			primaryKey: false,
			autoIncrement: false
		},	
		emAndamento: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		concluida: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		atrasada: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkEmpresa: {
			type: DataTypes.STRING, 
		}
	}, 
	{
		tableName: 'STATUS_ATIVIDADE', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
