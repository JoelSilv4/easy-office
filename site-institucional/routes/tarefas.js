var express = require('express');
var router = express.Router();
var banco = require('../app-banco');

router.get('/teste', function (req, res, next) {

	banco.conectar().then(() => {
  	console.log("consultando")
	return banco.sql.query(`select * from CONTRATANTE where email = 'lucasteste@email.com' `);
	}).then((consulta) => {
	  console.log(consulta.recordset)
	  res.send(consulta.recordset);  
	}).catch(err => {
	  console.log(err);
	}).finally(() => {
	  banco.sql.close();
	});   
    });
    
module.exports = router;