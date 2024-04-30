export function Toppage() {

    return (
      <>
        
        <div className="parent">
            <div className="content">
                <div className="header">
                <h1>名産会企業マッチングシステム</h1>
                <style jsx>{`
                    h1{
                        padding: 0.5em;
                        color: #ffffff;
                        background: #99ccff; 
                        border-bottom: solid 3px #3399ff;
                    }   
                `}</style> 
                <div className="notice">
                    <h4>お知らせ</h4>
                <style jsx>{`
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
                `}</style>
                </div>
                <div className="box">
                    <p>ここにお知らせ内容が入る</p>
                <style jsx>{`
                    .box {
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
                `}</style>

                </div>

                </div>
            </div>
            <div className="sub">
                <div className="list">
                    <ul>
                        <li>メニュー</li>
                        <li>ログイン</li>
                        <a href="https://www.meisankai.net/student/company/"><li>企業検索</li></a>
                        <a href="https://www.meisankai.net/student/job_offer/"><li>求人表</li></a>
                        <li>マッチング</li>
                    </ul>
                <style jsx>{`
                    ul {
                        padding: 0;
                        position: relative;
                    }

                    ul li {
                        color:#2d8fdd;
                        background: #f1f8ff;
                        margin-bottom: 10px;
                        line-height: 1.5;
                        padding: 0.5em;
                        list-style-type: none!important;
                    }  

                `}</style>
                </div>

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
            `}</style>
        </div>
      </>
    );
  }
  