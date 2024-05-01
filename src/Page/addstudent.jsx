import React from "react";
import { Stack, Button, Box } from '@mui/material';
export function Addstudent() {
  
    return (
      <>
      <head>
      <title>新規登録</title>
      </head>
      <Box bgcolor="#bbdefb" p={2}>
      <Stack justifyContent="center" alignItems="center">
      <h1>
        新規登録
      </h1>
      </Stack>
      </Box>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <Box>メール・パスワード</Box>
      <Box>利用者情報</Box>
      <Box>学科情報</Box>
    </Stack>
    <Stack justifyContent="center" alignItems="center">
    <div>
        <label>メールアドレス</label>
        <td><input type="email" id="name" name="name" required minlength="4" maxlength="50" size="30" /></td><p></p>
        <label>メールアドレス(確認用)</label>
        <td><input type="email" id="name" name="name" required minlength="4" maxlength="50" size="30" /></td><p></p>
        <label>パスワード</label>
        <td><input type="text" id="name" name="name" required minlength="8" maxlength="20" size="30" /></td><p></p>
        <label>パスワード(確認用)</label>
        <td><input type="text" id="name" name="name" required minlength="8" maxlength="20" size="30" /></td><p></p>
        <button>次へ</button>
        </div>
        </Stack>


        
      </>
    );
  }