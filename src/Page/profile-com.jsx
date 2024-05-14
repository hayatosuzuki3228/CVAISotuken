import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

export function CProfile() {
  useEffect(() => {
    document.title = "企業プロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-com-edit");
  };

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <h1>企業プロフィール</h1>
      </header>
      <div className="main">
        <div className="left-border">
          <p>
            <br />
            ・タブ欄①
          </p>
          <p>
            ・
            <font size="3.5">
              <Link to="/profile-st">個人情報</Link>
            </font>
          </p>
        </div>
        <div className="down-border">
          <p>できてほしい</p>
          <Link to="/profile-com-edit">プロフィール編集</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>
              企業名
              <br />
              カタカナ
            </p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              任天堂株式会社
              <br />
              ニンテンドーカブシキガイシャ
            </p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>企業所在地</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>京都府京都市南区上鳥羽鉾立町１１－１</p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>
              電話番号
              <br />
              FAX番号
            </p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              (TEL)075-0000-0000
              <br />
              (FAX)075-1111-1111
            </p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>事業内容</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>家庭用レジャー機器の製造・販売</p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>創業年日</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>明治22年9月</p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>資本金</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>100億円</p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>代表者名</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              (代表取締役会長)
              <br />
              古川 俊太郎
            </p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>企業が求める人材像</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>全員笑顔にしてくれる人</p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>ホームページ</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              <Link to="https://www.nintendo.com/jp/index.html">
                https://www.nintendo.com/jp
              </Link>
            </p>
          </font>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>支店</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>名古屋東京</p>
          </font>
        </div>
      </div>

      <div className="div-padding">
        <button className="button" onClick={OnClick}>
          情報を編集する
        </button>
        <button className="button">戻る</button>
      </div>
    </>
  );
}
