import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, TextField, Typography } from "@mui/material";
import "normalize.css";

export function Addstudent() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const initialRemail = location.state?.remail || "";
  const initialPass = location.state?.pass || "";
  const {
    namae,
    kanamae,
    birthday,
    area,
    selectedOptions,
    myVariable,
    myVariable1,
  } = location.state || {};
  const onClick = () => {
    return navigate("/adduser", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        birthday,
        area,
        selectedOptions,
        myVariable,
        myVariable1,
      },
    });
  };
  const [email, setemail] = useState(initialEmail);
  const [remail, setremail] = useState(initialRemail);
  const [pass, setpass] = useState(initialPass);
  const [rpass, setrpass] = useState("");
  const enabledButtonStyle = { backgroundColor: "#bbdefb", color: "#000000" };
  const disabledButtonStyle = { backgroundColor: "#d3d3d3", color: "#808080" };

  // 入力値が異なるかどうかを判定
  const isDifferent = email !== remail;
  const isDifferent1 = pass !== rpass;

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
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          利用者情報
        </Box>
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          学科情報
        </Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <div>
          <p></p>
          <label>メールアドレス</label>
          <p></p>
          <TextField
            required
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            error={isDifferent} // 入力が異なればエラースタイルを適用
            helperText={isDifferent ? "入力が違います" : ""}
          />
          <p></p>
          <label>メールアドレス(確認用)</label>
          <p></p>
          <TextField
            required
            label="メールアドレス(確認用)"
            variant="outlined"
            value={remail}
            onChange={(e) => setremail(e.target.value)}
            error={isDifferent} // 入力が異なればエラースタイルを適用
            helperText={isDifferent ? "入力が違います" : ""}
          />
          {isDifferent && (
            <Typography color="red" variant="body2">
              メールアドレスが違います
            </Typography>
          )}
          <p></p>

          <label>パスワード</label>
          <p></p>
          <TextField
            required
            label="パスワード"
            variant="outlined"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            error={isDifferent1} // 入力が異なればエラースタイルを適用
            helperText={isDifferent1 ? "入力が違います" : ""}
          />
          <p></p>
          <label>パスワード(確認用)</label>
          <p></p>
          <TextField
            required
            label="パスワード(確認用)"
            variant="outlined"
            value={rpass}
            onChange={(e) => setrpass(e.target.value)}
            error={isDifferent1} // 入力が異なればエラースタイルを適用
            helperText={isDifferent1 ? "入力が違います" : ""}
          />
          {isDifferent1 && (
            <Typography color="red" variant="body2">
              パスワードが違います
            </Typography>
          )}
          <p></p>
        </div>
      </Stack>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box>
          <Button
            variant="contained"
            style={
              isDifferent || isDifferent1 || email === "" || pass === ""
                ? disabledButtonStyle
                : enabledButtonStyle
            }
            disabled={
              isDifferent || isDifferent1 || email === "" || pass === ""
            }
            onClick={onClick}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
