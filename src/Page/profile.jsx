import React, { useEffect } from 'react';

export function Profile() {
    useEffect(() => {
        document.title = 'プロフィール';
    }, []);
    return (
        <>
        <center>
        <header style={{backgroundColor: 'lightblue'}}>
            <h1><font size="7">タイトル</font></h1>
        </header>
        </center>
        <main>
            <div style={{backgroundColor: `lightblue`}}>
            <h1>プロフィール</h1>
            <font size="6">
            <p>Hello</p>
            </font>
            <button>編集を行う</button>
            </div>
        </main>
        </>    
    );
}