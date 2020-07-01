var express = require('express');
var router = express.Router();
var banco = require('../app-banco');

router.get('/teste', function (req, res, next) {

    banco.conectar().then(() => {
        // let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select * from CONTRATANTE where email = 'lucasteste@email.com'`);
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
        return banco.sql.query(`select top (20) * from CPU_COMPUTADOR, COMPUTADOR where fkComputador = idMaquina`);
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

router.get('/disco', function (req, res, next) {

    banco.conectar().then(() => {
        // let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select top (20) * from DISCO_MEMORIA, COMPUTADOR where fkComputador = idMaquina`);
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

router.get('/ram', function (req, res, next) {

    banco.conectar().then(() => {
        // let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select top (20) * from RAM, COMPUTADOR where fkComputador = idMaquina`);
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

router.get('/funcionario', function (req, res, next) {

    banco.conectar().then(() => {
        let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select * from FUNCIONARIO where emailFuncionario = 'joaopedro@gmail.com'`);
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

router.get('/so', function (req, res, next) {

    banco.conectar().then(() => {
        let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select * from SO, COMPUTADOR where fkComputador = idMaquina`);
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

router.get('/trello', function (req, res, next) {

    banco.conectar().then(() => {
        let login = req.params.email;
        console.log("consultando")
        return banco.sql.query(`select * from STATUS_ATIVIDADE, CONTRATANTE where fkEmpresa = cnpj`);
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