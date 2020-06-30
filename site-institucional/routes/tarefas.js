var express = require('express');
var router = express.Router();
var banco = require('../app-banco');

router.get('/teste', function (req, res, next) {

	banco.conectar().then(() => {
    // let login = req.params.email;
    console.log("consultando")
	return banco.sql.query(`select nome from CONTRATANTE where email = 'lucasteste@email.com'`);
	}).then((consulta) => {
        console.log('>>>>>', consulta)
	  console.log(consulta.recordset)
	  res.send(consulta.recordset);  
	}).catch(err => {
	  console.log(err);
	}).finally(() => {
	  banco.sql.close();
	});   
    });

    router.get('/cpu', function (req, res, next) {

        banco.conectar().then(() => {
        // let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select usoCpu from CPU_COMPUTADOR, COMPUTADOR where fkComputador = idMaquina`);
        }).then((consulta) => {
            console.log('>>>>>', consulta)
          console.log(consulta.recordset)
          res.send(consulta.recordset);  
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          banco.sql.close();
        });   
        });
    
module.exports = router;