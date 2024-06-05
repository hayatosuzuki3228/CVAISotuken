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
  const initialPass = location.state?.pass || "";

  const { namae, kanamae, gender, birthday, area, sikaku, gakka, sotu } =
    location.state || {};
  const [email, setemail] = useState(initialEmail);
  const [remail, setremail] = useState("");
  const [pass, setpass] = useState(initialPass);
  const [rpass, setrpass] = useState("");

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");

  const onClick = () => {
    const emailRegex =
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9.?/-]{4,10}$/;
    if (emailRegex.test(email) && passRegex.test(pass)) {
      return navigate("/adduser", {
        state: {
          email,
          pass,
          namae,
          kanamae,
          gender,
          birthday,
          area,
          sikaku,
          gakka,
          sotu,
        },
      });
    } else {
      {
        !emailRegex.test(email) && !passRegex.test(pass)
          ? setMessage1("文字数字を含めてください") ||
            setMessage("無効なメールアドレスです")
          : "";
      }
      {
        emailRegex.test(email) ? setMessage1("文字数字を含めてください") : "";
      }
      {
        passRegex.test(pass) ? setMessage("無効なメールアドレスです") : "";
      }
    }
  };

  const enabledButtonStyle = { backgroundColor: "#bbdefb", color: "#000000" };
  const disabledButtonStyle = { backgroundColor: "#d3d3d3", color: "#808080" };

  const isDifferent = email !== remail;
  const isDifferent1 = pass !== rpass;

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z0-9]*$/.test(newValue)) {
      setpass(newValue);

      if (newValue.length >= 4 && newValue.length <= 10) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const handleChange1 = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z0-9]*$/.test(newValue)) {
      setrpass(newValue);

      if (newValue.length >= 4 && newValue.length <= 10) {
        setError1(false);
      } else {
        setError1(true);
      }
    }
  };

  const handleChange2 = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z0-9@.!?]*$/.test(newValue)) {
      setemail(newValue);

      if (newValue.length >= 4 && newValue.length <= 50) {
        setError2(false);
      } else {
        setError2(true);
      }
    }
  };

  const handleChange3 = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z0-9@.!?]*$/.test(newValue)) {
      setremail(newValue);

      if (newValue.length >= 4 && newValue.length <= 50) {
        setError3(false);
      } else {
        setError3(true);
      }
    }
  };

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
        <Box width={300}>
          <div>
            <p></p>
            <label>メールアドレス</label>
            <p></p>
            <TextField
              fullWidth
              required
              label="メールアドレス"
              variant="outlined"
              value={email}
              onChange={handleChange2}
              error={error2 || isDifferent}
              helperText={error2 ? "4文字以上50文字以下で入力してください" : ""}
            />
            <p></p>
            {message && (
              <Typography
                variant="h6"
                color="red"
                style={{ marginTop: "20px" }}
              >
                {message}
              </Typography>
            )}
            <p></p>
            <label>メールアドレス(確認用)</label>
            <p></p>
            <TextField
              fullWidth
              required
              label="メールアドレス(確認用)"
              variant="outlined"
              value={remail}
              onChange={handleChange3}
              error={error3 || isDifferent}
              helperText={error3 ? "4文字以上50文字以下で入力してください" : ""}
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
              fullWidth
              required
              type="password"
              label="パスワード"
              variant="outlined"
              value={pass}
              onChange={handleChange}
              error={error || isDifferent1}
              helperText={error ? "4文字以上10文字以下で入力してください" : ""}
            />
            <p></p>
            {pass}
            <p></p>
            {message1 && (
              <Typography
                variant="h6"
                color="red"
                style={{ marginTop: "20px" }}
              >
                {message1}
              </Typography>
            )}
            <p></p>
            <label>パスワード(確認用)</label>
            <p></p>
            <TextField
              fullWidth
              required
              type="password"
              label="パスワード(確認用)"
              variant="outlined"
              value={rpass}
              onChange={handleChange1}
              error={error1 || isDifferent1}
              helperText={error1 ? "4文字以上10文字以下で入力してください" : ""}
            />
            {isDifferent1 && (
              <Typography color="red" variant="body2">
                パスワードが違います
              </Typography>
            )}
            <p></p>
          </div>
        </Box>
      </Stack>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box>
          <Button
            variant="contained"
            style={
              isDifferent ||
              isDifferent1 ||
              email === "" ||
              pass === "" ||
              error ||
              error1 ||
              error2 ||
              error3
                ? disabledButtonStyle
                : enabledButtonStyle
            }
            disabled={
              isDifferent ||
              isDifferent1 ||
              email === "" ||
              pass === "" ||
              error ||
              error1 ||
              error2 ||
              error3
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
