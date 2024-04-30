function encryption(username, password, salt) {

    const crypto = require("crypto");

    // サンプルパスワード
    const password = password + salt;

    const streching = 2;

    let hash = [];

    for(let i = 0; i < streching; i ++) {
        hash.push(crypto.createHash('sha256').update(password).digest('hex'));
    }

    return hash.pop();
}

exports.encryption = encryption;