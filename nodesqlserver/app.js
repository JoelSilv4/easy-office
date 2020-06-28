const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const sql = require('mssql');
const connStr = "Server=svreasyoffice.database.windows.net;Database=bdEasyOffice;User Id=EasyAdm;Password=#Gfgrupo2;encrypt=true;";
var andamento = [];

sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'FUNCIONOU!' }));
app.use('/', router);

app.listen(port);
console.log('API FUNCIONANDO!');

function execSQLQuery(sqlQry, res){
    GLOBAL.conn.request()
                .query(sqlQry)
                .then(result => res.json(result.recordset))
                .catch(err => res.json(err));
}

router.get('/clientes', (req, res) => {
    execSQLQuery('SELECT * FROM CONTRATANTE', res);
})

router.get('/tarefas',(req,res) => {
    execSQLQuery('SELECT emAndamento FROM STATUS_ATIVIDADE',res);
    
    sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true
	})
		.then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
})