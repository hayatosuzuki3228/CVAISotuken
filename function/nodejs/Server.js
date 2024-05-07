// ライブラリ等読み込み
const express = require("express");
const cors = require("cors");
const server = express();
 
// CORSを全てのリクエストで許可する
server.use(cors());
 
// フォームデータの解析(POST受け取りに必須)
server.use(express.urlencoded({ extended: false }));
server.use(express.json()); // JSONデータのパースも許可
 
const port = 3000;
 
// リクエストに対して応答する関数を指定
const requests = {
  registration: require("./function/account/Registration").registration,
  login: require("./function/account/Login").login,
};
 
// /apiに対するpostリクエストに応答
server.post("/api", async (req, res) => {
    console.log("リクエストだよ♡");
  try {
    // postされたうち、requestに設定された値の関数を実行
    const result = await requests[req.body.request]({ ...req.body });
 
    // 結果を返す
    console.log("API Request successful: ", result);
    res.send(result);
  } catch (e) {
    // エラー発生時にログに表示しエラーを返す
    console.log("API Request failed: ", e);
    res.status(500).send(e.message); // HTTPステータスコードを500に設定
  }
});
 
// リクエストの受付を開始
server.listen(port, () => {
  console.log("Server is now waiting connection on port " + port);
});