import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

export function SCompany() {
  useEffect(() => {
    document.title = "企業向けプロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st-com-edit");
  };

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <h1>企業向けプロフィール</h1>
      </header>
      <div className="main">
        <div className="left-border">
          <p>
            <br />
            ・すんばらしぃ
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
