// もろもろインポート
const crypto = require("crypto");

const connect = require("../database/Connection.js");
const encryption = require("../database/Encryption.js");

async function registration(args) {
    // 必要な値が与えられなければエラーを返す
    const requiredArgs = [
        args.password,
        args.name,
        args.email,
        args.furigana,
        args.sex,
        args.birthday,
        args.residence,
        args.qualification
    ];

    // 全ての項目が入力されているかの判定
    for (const arg of requiredArgs) {
        if (arg === undefined || arg === "") {
            throw new Error("Invalid arguments");
        }
    }

    // パスワードが8~14文字かつ不正な文字が使われていないかの判定
    if (!((/^[A-Za-z\d]{8,14}$/).test(args.password))) {
        console.log("Please enter between 8 and 14 characters.");
        return {"status:":false, "message": "Please enter the password between 8 and 14 characters."};
    }

    // saltを生成し暗号化
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = encryption.encryption(args.password, salt)

    // 計算が成功しているのであればデータベースに送信
    if(hashedPassword !== false) {
        // sqlと接続
        const connection = connect.connect();


        // SQLを記述
        const authSql = "INSERT INTO authentication(email, password, salt, active) VALUES(?, ?, ?, true)";
        const profileSql = "INSERT INTO user_profile(name, furigana, sex, birthday, residence, qualification) VALUES(?, ?, ?, ?, ?, ?)";
        const checkEmailSql = "SELECT COUNT(*) AS count FROM authentication WHERE email = ?";

        const sql_array = [checkEmailSql, authSql, profileSql]
        const args_array = [[args.email], [args.email, hashedPassword, salt], [args.name, args.furigana, args.sex, args.birthday, args.residence, args.qualification]]

        return new Promise(async(resolve, reject) => {

            for(let i = 0;i<sql_array.length;i++){
                connection.execute(
                    sql_array[i],
                    args_array[i],
                    (error, result) => {
                        if(result === undefined){
                            reject({"status":false, "message":"Failed to send information"});;
                        }
                        if ((result[0].count > 0) && i == 0) {
                            console.log("The email address has already been used");
                            resolve({"status":false, "message":"The email address has already been used."});
                        }
                    }
                );
            }

            // メールアドレスの判別
            /*
            connection.query (
                checkEmailSql,
                [args.email],
                (error, result) => {
                    if(result === undefined){
                        reject(error);
                    }
                // すでにメールアドレスが存在する場合
                if (result[0].count > 0) {
                    console.log("The email address has already been used");
                    resolve({"status":false, "message":"The email address has already been used."});
                }
            }
        );


            // 送信(authServer)
            connection.query (
                authSql,
                [args.email, hashedPassword, salt],
                (error, results) => {
                    // 送信失敗時にエラーを送信
                    if (results === undefined) {
                        // 送信失敗時のエラー表示
                        reject({"status":false, "message":"Failed to send information"});
                    }
                }
            );
    
        
            // 送信(infoSever)
            connection.query (
                profileSql,
                [args.name, args.furigana, args.sex, args.birthday, args.residence, args.qualification],
                (error, results) => {
                    // 送信失敗時にエラーを送信
                    if (results === undefined) {
                        // 送信失敗時のエラー表示
                        reject({"status":false, "message":"Failed to send information"});
                    }
                }
            );
            */

            // コミット
            connection.commit((error) => {
                if(error) {
                    connection.rollback(() => {
                        reject(error);
                    });
                    resolve({"status":false, "message":"The process ended unsually"});
                } else {
                    resolve({"status":true, "message":"The process successfully completed"});
                }
            });

            
        });
    }
}

exports.registration =  registration;