var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/sobre', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'sobre.html'));
});

router.get('/calcule', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'calcule.html'));
});

router.get('/cadastro', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'cadastro.html'));
});

router.get('/login', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.get('/perfil', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'perfil.html'));
});

router.get('/funcionarios', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'funcionarios.html'));
});

router.get('/dashboard', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
});

router.get('/historico', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'historico.html'));
});

module.exports = router;
