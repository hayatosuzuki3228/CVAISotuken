import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primarycolor, gray } from "../const/color";

export function Lostpass() {
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const login = () => {
    navigate("/LoginPage");
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Address:", address);
    // ここにログイン処理を実装する
  };

  const theme = createTheme({
    typography: {
      h5: {
        fontSize: "2rem",
      },
      button: {
        fontSize: "1rem",
        padding: "0.75rem 1.5rem",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: primarycolor }}>
            パスワード変更
          </Typography>
          <Typography variant="h6" sx={{ color: gray, marginTop: 3 }}>
            下記に登録したメールアドレスを入力してください。
            <br />
            登録されたメールアドレス宛にパスワード設定のためのメールが送信されます。
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="登録メールアドレス"
              name="address"
              autoComplete="username"
              autoFocus
              value={address}
              onChange={handleAddressChange}
              InputLabelProps={{
                sx: {
                  color: gray,
                  "&.Mui-focused": { color: primarycolor },
                },
              }}
              InputProps={{
                sx: {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: gray,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: primarycolor,
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="登録メールアドレス（確認）"
              name="address"
              autoComplete="username"
              autoFocus
              value={address}
              onChange={handleAddressChange}
              InputLabelProps={{
                sx: {
                  color: gray,
                  "&.Mui-focused": { color: primarycolor },
                },
              }}
              InputProps={{
                sx: {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: gray,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: primarycolor,
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 0,
                backgroundColor: primarycolor,
                "&:hover": {
                  backgroundColor: primarycolor,
                },
              }}
            >
              パスワード再設定メールの送信
            </Button>
          </Box>
          <Box>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 0, color: primarycolor }}
              onClick={login}
            >
              ログインはこちら
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
