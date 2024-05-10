import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box } from "@mui/material";
import "normalize.css";

export function Addstudent() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    <TextComparison text1={email} text2={remail} />;
  };

  const [text, setText] = useState("");

  let email;
  let remail;
  let pass;
  let rpass;

  return (
    <>
      <Box bgcolor="#66aacc" p={2}>
        <Stack justifyContent="center" alignItems="center">
          <h1>新規登録</h1>
        </Stack>
      </Box>
      <Stack
        direction="row"
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        <Box bgcolor="#e0ffff" p={2}>
          <strong>ID・PS </strong>
        </Box>
        <Box>利用者情報</Box>
        <Box>学科情報</Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <div>
          <p></p>
          <label>メールアドレス</label>
          <td>
            <input
              value={email}
              onChange={(event) => setText(event.target.value)}
              placeholder="Email"
              required
              minlength="4"
              maxlength="50"
              size="30"
            />
          </td>
          <p></p>
          <label>メールアドレス(確認用)</label>
          <td>
            <input
              value={remail}
              onChange={(event) => setText(event.target.value)}
              placeholder="Email"
              required
              minlength="4"
              maxlength="50"
              size="30"
            />
          </td>
          <p></p>
          <label>パスワード</label>
          <td>
            <input
              value={pass}
              onChange={(event) => setText(event.target.value)}
              placeholder="Password"
              required
              minlength="8"
              maxlength="20"
              size="30"
            />
          </td>
          <p></p>
          <label>パスワード(確認用)</label>
          <td>
            <input
              value={rpass}
              onChange={(event) => setText(event.target.value)}
              placeholder="Password"
              required
              minlength="8"
              maxlength="20"
              size="30"
            />
          </td>
          <p></p>
        </div>
      </Stack>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "#bbdefb", color: "#000000" }}
            onClick={onClick}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}

function TextComparison({ text1, text2 }) {
  return (
    <div>
      {text1 === text2 ? (
        navigate("/adduser")
      ) : (
        <p>テキストが一致していません。</p>
      )}
    </div>
  );
}

//  <TextComparison text1= "em" text2="reem" />
