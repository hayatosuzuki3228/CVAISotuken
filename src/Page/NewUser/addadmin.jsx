import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box, TextField, Typography } from "@mui/material";
import { primarycolor } from "../../const/color";
import { postData } from "../../sever/api";
import "normalize.css";

export function Addadmin() {
  useEffect(() => {
    document.title = "管理者アカウント新規登録";
  }, []);

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [remail, setremail] = useState("");
  const [pass, setpass] = useState("");
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
    const passRegex = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9.?/-]{8,24}$/;
    if (emailRegex.test(email) && passRegex.test(pass)) {
      //管理者アカウント作成
      console.log([email, pass]);
      postData("registration/admin", { email: email, password: pass });
      navigate("/Admin");
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
  const onClick1 = () => {
    navigate("/admin");
  };
  const enabledButtonStyle = { color: primarycolor };
  const disabledButtonStyle = { color: "#b0b0b0" };

  const isDifferent = email !== remail;
  const isDifferent1 = pass !== rpass;

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z0-9]*$/.test(newValue)) {
      setpass(newValue);

      if (newValue.length >= 8 && newValue.length <= 24) {
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

      if (newValue.length >= 8 && newValue.length <= 24) {
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
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={35}
          style={{
            color: primarycolor,
          }}
        >
          管理者アカウント登録
        </Typography>
        <p></p>
        <Stack justifyContent="center" alignItems="center" padding={1}>
          <Box width={350}>
            <div>
              <p></p>
              <TextField
                fullWidth
                required
                autoFocus
                label="メールアドレス"
                variant="outlined"
                value={email}
                onChange={handleChange2}
                error={error2 || isDifferent}
                helperText={
                  error2 ? "4文字以上50文字以下で入力してください" : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
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
              <TextField
                fullWidth
                required
                label="メールアドレス(確認)"
                variant="outlined"
                value={remail}
                onChange={handleChange3}
                error={error3 || isDifferent}
                helperText={
                  error3 ? "4文字以上50文字以下で入力してください" : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
              {isDifferent && (
                <Typography color="red" variant="body2">
                  メールアドレスが一致していません
                </Typography>
              )}
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
                helperText={
                  error ? "半角英数字8文字以上24文字以内で入力してください" : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
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
              <TextField
                fullWidth
                required
                type="password"
                label="パスワード(確認)"
                variant="outlined"
                value={rpass}
                onChange={handleChange1}
                error={error1 || isDifferent1}
                helperText={
                  error1
                    ? "半角英数字8文字以上24文字以内で入力してください"
                    : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
              {isDifferent1 && (
                <Typography color="red" variant="body2">
                  パスワードが一致していません
                </Typography>
              )}
              <p></p>
            </div>
          </Box>
        </Stack>
      </Box>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button
            style={{
              color: primarycolor,
            }}
            onClick={onClick1}
          >
            管理者画面へ
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
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
            登録
          </Button>
        </Box>
      </Stack>
    </>
  );
}
