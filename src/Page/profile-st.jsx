import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "normalize.css";
import "./styles.css";

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st-edit");
  };
  /*const PageClick = () => {
    navigate("/profile-company");
  };*/

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <h1>プロフィール</h1>
      </header>
      <div className="main">
        <div className="left-border">
          <p>
            <br />
            ・世界遺産検定1級!!!!!!!!!!!!!!!
          </p>
          <p>
            ・
            <font size="3.5">
              <Link to="/profile-st-com">企業向けプロフィール</Link>
            </font>
          </p>
        </div>
        <div className="down-border">
          <p>できてほしい</p>
          <p>
            <Link to="/profile-com">テストページ遷移</Link>
          </p>
        </div>
      </div>

      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>
              氏名
              <br />
              カタカナ
            </p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              工学院太郎
              <br />
              コウガクインタロウ
            </p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>性別</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>男性 or 女性</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>年齢</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>○○歳</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>学科名</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>○○○○学科</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>生年月日</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>YYYY/MM/DD</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>メールアドレス</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>メールアドレス</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>居住地域</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>愛知県・・・</p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>保有資格</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>
              ・世界遺産検定1級
              <br />
              ・漢検準2級
            </p>
          </font>
        </div>
      </div>
      <div className="info" style={{ textAlign: "center" }}>
        <div className="half-box black">
          <font size="3.5">
            <p>卒業予定年度</p>
          </font>
        </div>
        <div className="half-box black">
          <font size="3.5">
            <p>2025年卒</p>
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
