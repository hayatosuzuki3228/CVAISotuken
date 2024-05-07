import React, { useState } from "react";
import "normalize.css";

export function Toppage() {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        
        <div className="parent">

            <div className="header">
                <h1>名産会企業マッチングシステム</h1>
                <button onClick={toggleModal}>{isModalOpen ? "閉じる" : "メニュー" }</button>
            </div>

            <div className="content">

                <div className="noticebox">
                    <h4>お知らせ</h4>
                    <p>ここにお知らせ内容が入る</p>
                    <p>おしらせ！</p>
                </div>

            </div>

            <div className="sub">
                
                <div className="list">
                    
                    <ul>
                        <li>ログイン</li>
                        <a href="https://www.meisankai.net/student/company/"><li>企業検索</li></a>
                        <a href="https://www.meisankai.net/student/job_offer/"><li>求人表</li></a>
                        <li>マッチング</li>
                    </ul>
                </div>

            </div>

            <div className="footer">
                <p>フッター</p>
            </div>
            

            {isModalOpen && (
            <div className="menuopen">

                    <div className="modal" onClick={toggleModal}>
                    <ul>
                        <a href="https://www.denpa.ac.jp/"><li><h3>プロフィール変更</h3></li></a>
                        <li><h3>パスワード変更</h3></li>
                        <li><h3>&emsp;</h3></li>
                        <li><h3>アカウント削除</h3></li>
                        <li><h3>ログアウト</h3></li>
                    </ul>
                    
                    </div>
                
            </div>
            )}

        </div>

        <style jsx>{`

            .header {
                background-color: #66aacc;
                width: 100%;
                height: 70px;          
                position: fixed;
                top:  0;
                z-index: 999;
            }

            .header h1{
                color: #ffffff;
                font-weight: 200;
                font-size: 30px;
                padding-left: 15px;
            }

            .header button{
                position: absolute;
                top: 0;
                right: 0;
                width: 200px;
                height: 70px;
                border: 5px solid #66aacc;
                border-radius: 25px;
                background-color: #ffffff;
                color: #66aacc;
                transition: .5s;
                cursor: pointer;   
            }      
              
            .header button:hover {  
                
            }

            .parent {
                display: flex;
                height: 100vh;
                position: absolite;
                margin-top: 70px;
                background-color: #ffffff;
            }

            .content {
                float: left;
                width: 100%;
            }

            .sub {
                float: right;
                width: 200px;
                border-left: solid 3px #66aacc;
            }
            
            .noticebox {
                margin: 0 auto;
                margin-top: 45px;
                border: solid 5px #66aacc;
                border-radius: 30px;
                width: 80%;
                height: 70%;   
                padding: 30px;     
            }

            .noticebox h4 {
                position: absolute;
                display: inline-block;
                padding: 0 9px;
                top: 80px;
                left: 13%;
                font-size: 20px;
                color: #66aacc;
                font-weight: bold;
                background-color: #ffffff;
            }

            .noticebox p {
                color: #66aacc;
            }

            .list ul {
                padding: 0;
                position: relative;
            }

            .list a {
                text-decoration: none;
            }

            .list li {
                color: #ffffff;
                background: #66aacc;
                margin-bottom: 20px;
                line-height: 2;
                padding: 1em;
                border-top: solid 3px #66aacc;
                border-bottom: solid 3px #66aacc;
                list-style-type: none!important;
                cursor: pointer;
                transition: .5s;
            }

            .list li:hover {
                background-color: #ffffff;
                color: #66aacc;
            }
            
            .footer {
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 20px;
                font-size: 7px;
                text-align: center;
                z-index: 999;
            }

            .modal {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 70px;
                left: 0;
                background-color: #66aacc;
            }

            .modal a {
                text-decoration: none;
            }

            .modal li {
                color:#ffffff;
                width: 70%;
                text-align: center;
                margin: 0 auto;
                border-bottom: solid 3px #ffffff;
                margin-bottom: 10px;
                line-height: 1.5;
                padding: 0.5em;
                list-style-type: none!important;
                cursor: pointer;
            }

        `}</style>
      </>
    );
  }
  