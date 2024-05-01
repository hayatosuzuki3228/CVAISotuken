import React, { useState } from "react";

export function Toppage() {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };



    return (
      <>
        
        <div className="parent">

            <div className="content">
                <div className="header">
                    <h1>名産会企業マッチングシステム</h1>

                <div className="notice">
                    <h4>お知らせ</h4>
                </div>

                <div className="noticebox">
                    <p>ここにお知らせ内容が入る</p>
                </div>

                </div>
            </div>

            <div className="sub">

                <div className="list">
                    <button onClick={toggleModal}>メニュー</button>
                    <ul>
                        <li>ログイン</li>
                        <a href="https://www.meisankai.net/student/company/"><li>企業検索</li></a>
                        <a href="https://www.meisankai.net/student/job_offer/"><li>求人表</li></a>
                        <li>マッチング</li>
                    </ul>
                </div>

            </div>
            

            {isModalOpen && (
            <div className="modal">
                    
                    <div className="opacity" onClick={toggleModal}>
                    <button>close</button>
                    <ul>
                        <li><h3>プロフィール変更</h3></li>
                        <li><h3>aaa</h3></li>
                    </ul>
                    
                    </div>
                
            </div>
            )}

        </div>

        <style jsx>{`

            .parent {
                display: flex;
                height: 100vh;
            }

            .content {
                flex: 1;
                background-color: #ffffff;
            }

            .sub {
                width: 200px;
                background-color: #ffffff;
                border-left: solid 3px #2d8fdd;
            }

            .header h1{
                padding: 0.5em;
                color: #ffffff;
                background: #99ccff; 
                border-bottom: solid 3px #3399ff;
            }
            
            .notice{
                padding: 0.5em 1em;
                margin: 3em 6em;
                color: #000000;
                background: #ffffff;
                border-left: double 7px #99ccff;
                border-right: double 7px #99ccff;
            }

            .notice h4 {
                margin: 0;
                padding: 0;
                color: #0066cc;
            }

            .noticebox {
                width 70%;
                height 70%;
                padding: 0.5em 1em;
                margin: 3em 3em;
                border: double 5px #99ccff;         
            }
            .box p {
                margin: 0; 
                padding: 0;
            }

            .list ul {
                padding: 0;
                position: relative;
            }

            .list button {
                
                    display: inline-block;
                    padding: 1em 5em;
                    text-decoration: none;
                    color: #67c5ff;
                    border: solid 2px #67c5ff;
                    border-radius: 3px;
                    transition: .4s;
            }      
                  
            .list button:hover {    
                    background: #67c5ff;
                    color: white;
            }

            .list ul li {
                color:#2d8fdd;
                background: #f1f8ff;
                margin-bottom: 10px;
                line-height: 1.5;
                padding: 0.5em;
                list-style-type: none!important;
            }  

            .opacity {
                position: fixed;
                top: 0;
                left:0;
                width: 100%;
                height 100%;
                background: rgba(0,0,0,0.5);
            }

            .opacity ul li {
                color:#2d8fdd;
                background: #f1f8ff;
                margin-bottom: 10px;
                line-height: 1.5;
                padding: 0.5em;
                list-style-type: none!important;
            }

        `}</style>
      </>
    );
  }
  