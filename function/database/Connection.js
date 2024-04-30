function connect(database) {
    const mysql = require("mysql");

    // データベースサーバーと接続
    const connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: database,
    });

    return connection;
}

exports.connect = connect;