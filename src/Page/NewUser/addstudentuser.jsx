import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box } from '@mui/material';


export function Addstudentuser() {
  useEffect(() => {
    document.title = '新規登録'
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const onClick1 = () => {
    navigate("/addgakka");
  };
  
    return (
      <>
      <head>
      <title>新規登録</title>
      </head>
      <Box bgcolor="#66aacc" p={2}>
      <Stack justifyContent="center" alignItems="center">
      <h1>
        新規登録
      </h1>
      </Stack>
      </Box>
      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
      <Box>メール・パスワード</Box>
      <Box bgcolor="#e0ffff" p={2}>利用者情報</Box>
      <Box>学科情報</Box>
    </Stack>
    <Stack justifyContent="center" alignItems="center">
    <div>
        <label>氏名</label>
        <td><input type="email" id="name" name="name" required minlength="4" maxlength="50" size="30" /></td><p></p>
        <label>カタカナ</label>
        <td><input type="email" id="name" name="name" required minlength="4" maxlength="50" size="30" /></td><p></p>
        <Stack direction="row" spacing={8} justifyContent="center">
        <Box>
        性別
        </Box>
        <input type="radio" name="num_of_inq" value="男"></input>男
        <input type="radio" name="num_of_inq" value="女"></input>女<p></p>
        </Stack>
        <p></p><label>生年月日</label>
        <td><input type="text" id="name" name="name" required minlength="8" maxlength="20" size="30" /></td><p></p>
        <label>居住地域</label>
        <td><input type="text" id="name" name="name" required minlength="8" maxlength="20" size="30" /></td><p></p>
        <label>保有資格</label>
        <td><input type="text" id="name" name="name" required minlength="8" maxlength="20" size="30" /></td><p></p>
    </div>
    </Stack>
    <Stack direction="row" spacing={20} justifyContent="center">
    <Box textAlign="left">
      <Button variant="contained"  style={{ backgroundColor: "#bbdefb", color: '#000000' }} onClick={onClick} >戻る</Button>
    </Box>
    <Box textAlign="right">
      <Button variant="contained"  style={{ backgroundColor: "#bbdefb", color: '#000000' }} onClick={onClick1} >次へ</Button>
    </Box>
    </Stack>
      </>
    );
  }
  