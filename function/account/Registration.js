function registration(username, password) {
    const crypto = require("crypto");

    const connect = require("../database/Connection.js");
    const encryption = require("../database/Encryption.js");

    // saltを生成し暗号化
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = encryption(password, salt)

    // データベースに送信
    const connection = connect.connect();
    const sql = "INSERT INTO user(username, password, salt) VALUES(?, ?, ?)";

    connection.query(
        sql,
        [username, hashedPassword, salt],
        (error, results) => {
            console.log(results);
        }
    );
}

exports.registration = registration;