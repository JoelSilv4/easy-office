var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "svreasyoffice.database.windows.net",
        user: "EasyAdm",
        password: "#Gfgrupo2",
        database: "bdEasyOffice",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "svreasyoffice.database.windows.net",
        user: "EasyAdm",
        password: "#Gfgrupo2",
        database: "bdEasyOffice",
        options: {
            encrypt: false
        }
    }
}

var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
    return sql.connect(configuracoes[perfil])
    //return new sql.ConnectionPool();  
}

module.exports = {
    conectar: conectar,
    sql: sql
}
