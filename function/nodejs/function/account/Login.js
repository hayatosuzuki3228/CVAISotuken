const connect = require("../database/Connection.js");
const encryption = require("../database/Encryption.js");

async function login (args) {
    // sqlと接続
    const connection = connect.connect("user");

    const sql = "SELECT * FROM authentication";
    
    const data = []

    // 送信
    connection.execute (
        sql,
        (error, results) => {
            // 送信失敗時にエラーを送信
            if (results === undefined) {
                // 送信失敗時のエラー表示
                throw new Error("SQL could not be executed successfully");
            }
            
            results.forEach(result => {
                data.push(
                    [
                        result.id,
                        result.mailaddress,
                        result.password,
                        result.salt,
                    ]
                )
            });

            return true;
        }
    );
}

exports.login = login;