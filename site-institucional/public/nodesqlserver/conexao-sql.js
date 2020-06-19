const connStr = "Server=svreasyoffice.database.windows.net;Database=bdEasyOffice;User Id=EasyAdm;Password=#Gfgrupo2;encrypt=true;";
const sql = require("mssql");

sql.connect(connStr)
    .then(conn => console.log("sucesso! "))
    .catch(err => console.log("fracasso! " + err));
