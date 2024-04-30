function connection(Database) {
    const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: Database,
    });

    return connection
}


