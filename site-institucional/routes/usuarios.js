var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
// var Usuario = require('../models').Usuario;
var banco = require('../app-banco');

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
  });

// let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/usuarios/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from CONTRATANTE where email='${login}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


router.post('/cadastrar', (req, res, next) => {

    banco.conectar().then(() => {
        console.log(`Chegou para registro: ${JSON.stringify(req.body)}`);

		var nome;
		var nomeEmpresa;
        var cnpj;
        var email;
        var senha;

        nome = req.body.nome; // depois de .body, use o nome (name) do campo em seu formulário de login
    	nomeEmpresa = req.body.nomeEmpresa;
        cnpj = req.body.cnpj; // depois de .body, use o nome (name) do campo em seu formulário de login
        email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
        senha = req.body.senha;


        return banco.sql.query(`insert into CONTRATANTE (cnpj, nome, nomeEmpresa, email, senha) values ('${cnpj}','${nome}','${nomeEmpresa}','${email}','${senha}')`);
    }).then(() => {
        res.send(200);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        banco.sql.close();
    })
});


/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;
