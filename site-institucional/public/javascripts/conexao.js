var Connection = require('tedious').Connection;  
    var config = {  
        server: 'svreasyoffice.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'EasyAdm', //update me
                password: '#Gfgrupo2'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'bdEasyOffice'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });