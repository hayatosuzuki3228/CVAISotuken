function connect() {
    const mysql = require("mysql2");

    // データベースサーバーと接続
    const connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: "sotsuken",
    });

    return connection;
}

exports.connect = connect;