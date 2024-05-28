const connect = require("../database/Connection.js");

async function search(args) {
    // 必要な値が与えられなければエラーを返す
    const requiredArgs = [
        args.subject,
        args.keyword,
    ]

    for (const arg of requiredArgs) {
        if (arg === undefined || arg === "") {
            throw new Error("Invalid arguments.");
        }
    }

    // 渡された検索対象を許可されたもの以外はじく
    const allowedSubject = ["name", "code", "category", "office", "qualification"]
    if(!(allowedSubject.includes(args.subject))) {
        throw new Error("Invalid subject.");
    }

    // 得られた検索キーワードを整形
    const splitedKeywords = args.keyword.split(/\s+/);
    const keywords = [];

    for(let i = 0; i < splitedKeywords.length; i ++) {
        keywords.push(`%${splitedKeywords[i]}%`);
    }

    // sql文の作成
    let sql = "SELECT id, name, "
    if(args.subject != "name") {
        sql += args.subject;
    }
    sql += " FROM companies WHERE " + args.subject + " LIKE ?";

    for(let i = 0; i < Object.keys(keywords).length -1; i ++) {
        sql += " AND "+ args.subject + " LIKE ?";
    }
    sql += ";";
    
    return new Promise((resolve, reject) => {
        // sqlと接続
        const connection = connect.connect("user");
        
        // 送信
        connection.execute(
            sql,
            keywords,
            (error, results) => {
                // 送信失敗時にエラーを送信
                if (error) {
                    reject(error); // エラーがあればrejectする
                    return;
                }

                // データの取得が終了したらresolveする
                resolve(results);
            }
        );
    });
}

exports.search = search;