function connect(database) {
    const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: database,
    });

    return connection;
}

exports.connect = connect;